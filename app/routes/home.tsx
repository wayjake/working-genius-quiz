import { useState, useEffect } from 'react';

const GENIUS_TYPES = ['Wonder', 'Discernment', 'Galvanizing', 'Enablement', 'Tenacity', 'Invention'] as const;
type GeniusType = typeof GENIUS_TYPES[number];

const GENIUS_DESCRIPTIONS: Record<GeniusType, string> = {
  Wonder: 'The genius of pondering possibilities. You ask the big questions and identify gaps, needs, or opportunities.',
  Discernment: 'The genius of intuition and gut checks. You evaluate ideas instinctively and sense what will work.',
  Galvanizing: 'The genius of rallying others to act. You bring energy and lead people toward a cause.',
  Enablement: 'The genius of responding to the needs of others. You\'re ready to help and move things forward.',
  Tenacity: 'The genius of pushing tasks to completion. You thrive on follow-through and execution.',
  Invention: 'The genius of creativity and problem solving. You generate new ideas and solutions.',
};

interface Question {
  question: string;
  type: GeniusType;
}

const initialQuestions: Question[] = [
  // Wonder
  { question: 'Do you often find yourself asking "why" about how things are done?', type: 'Wonder' },
  { question: 'Do you enjoy exploring big, open-ended questions with no immediate answers?', type: 'Wonder' },
  { question: 'Do you frequently notice what\'s missing in a system, project, or idea?', type: 'Wonder' },

  // Discernment
  { question: 'Are you good at spotting problems in plans or ideas?', type: 'Discernment' },
  { question: 'Do people trust your instincts when evaluating ideas?', type: 'Discernment' },
  { question: 'Do you often sense when something isn\'t quite right, even if you can\'t explain why?', type: 'Discernment' },

  // Galvanizing
  { question: 'Do you enjoy rallying people toward a cause or goal?', type: 'Galvanizing' },
  { question: 'Do you naturally motivate others to take action?', type: 'Galvanizing' },
  { question: 'Are you energized by initiating new efforts or inspiring momentum?', type: 'Galvanizing' },

  // Enablement
  { question: 'Do you love to help others and support their work?', type: 'Enablement' },
  { question: 'Do you prefer to jump in and assist rather than lead?', type: 'Enablement' },
  { question: 'Are you fulfilled when you know your support made someone else successful?', type: 'Enablement' },

  // Tenacity
  { question: 'Do you take satisfaction in completing tasks and checking boxes?', type: 'Tenacity' },
  { question: 'Are you uncomfortable leaving something half-finished?', type: 'Tenacity' },
  { question: 'Do you feel accomplished when a project is finished and fully delivered?', type: 'Tenacity' },

  // Invention
  { question: 'Do you enjoy creating new solutions or coming up with ideas?', type: 'Invention' },
  { question: 'Are you often the one who builds the first draft or prototype?', type: 'Invention' },
  { question: 'Do you thrive when you get to design or improve something from scratch?', type: 'Invention' },
];

function shuffle<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function meta() {
  return [
    { title: "Working Genius Quiz" },
    { name: "description", content: "Discover your working genius types with this interactive quiz!" },
  ];
}

export default function Home() {
  const [questions, setQuestions] = useState<Question[]>(initialQuestions);
  const [responses, setResponses] = useState<Record<string, number>>({});
  const [result, setResult] = useState<string>('');

  useEffect(() => {
    setQuestions(shuffle(initialQuestions));
  }, []);

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'd') {
        e.preventDefault();
        const randomResponses: Record<string, number> = {};
        questions.forEach((_: Question, i: number) => {
          randomResponses[`q${i}`] = Math.floor(Math.random() * 101);
        });
        setResponses(randomResponses);
      }
    };

    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  }, [questions]);

  const handleResponseChange = (questionIndex: number, value: number) => {
    setResponses((prev: Record<string, number>) => ({
      ...prev,
      [`q${questionIndex}`]: value
    }));
  };

  const submitQuiz = () => {
    const responseSquares: Record<GeniusType, number> = {} as Record<GeniusType, number>;
    const counts: Record<GeniusType, number> = {} as Record<GeniusType, number>;

    GENIUS_TYPES.forEach(type => {
      responseSquares[type] = 0;
      counts[type] = 0;
    });

    questions.forEach((q: Question, i: number) => {
      const val = responses[`q${i}`] || 0;
      const num = parseInt(val.toString());
      responseSquares[q.type] += num * num;
      counts[q.type]++;
    });

    const rmsScores = GENIUS_TYPES.map(type => {
      const rms = Math.sqrt(responseSquares[type] / counts[type]);
      return [type, rms] as [GeniusType, number];
    });
    const sorted = rmsScores.sort(([, a], [, b]) => b - a);

    const formattedScores = sorted.map(([type, val], idx) => {
      const scaled = val / 10;
      if (idx < 2) return [type, (Math.ceil(scaled * 10) / 10).toFixed(1)];
      if (idx < 4) return [type, scaled.toFixed(1)];
      return [type, (Math.floor(scaled * 10) / 10).toFixed(1)];
    });

    const [genius1, genius2] = formattedScores.slice(0, 2);
    const [middle1, middle2] = formattedScores.slice(2, 4);
    const [weak1, weak2] = formattedScores.slice(4);

    const resultHTML = `
      <h2 class="text-xl font-bold mt-6">Your Working Geniuses</h2>
      <p class="text-sm text-green-700 mb-2">These are the types of work that come naturally to you. They are energizing, joyful, and tend to come with ease.</p>
      <ul class="mt-2 list-disc pl-6">
        <li><strong>${genius1[0]}</strong> (${genius1[1]} pts): ${GENIUS_DESCRIPTIONS[genius1[0] as GeniusType]}</li>
        <li><strong>${genius2[0]}</strong> (${genius2[1]} pts): ${GENIUS_DESCRIPTIONS[genius2[0] as GeniusType]}</li>
      </ul>

      <h2 class="text-xl font-bold mt-6">Your Working Competencies</h2>
      <p class="text-sm text-yellow-700 mb-2">You are capable in these areas and may perform them fairly well. However, they do not energize you or bring joy.</p>
      <ul class="mt-2 list-disc pl-6 text-gray-700">
        <li><strong>${middle1[0]}</strong> (${middle1[1]} pts): ${GENIUS_DESCRIPTIONS[middle1[0] as GeniusType]}</li>
        <li><strong>${middle2[0]}</strong> (${middle2[1]} pts): ${GENIUS_DESCRIPTIONS[middle2[0] as GeniusType]}</li>
      </ul>

      <h2 class="text-xl font-bold mt-6">Your Working Frustrations</h2>
      <p class="text-sm text-red-700 mb-2">These are the most draining and aggravating activities for you. They may be particularly difficult or uninspiring.</p>
      <ul class="mt-2 list-disc pl-6 text-gray-700">
        <li><strong>${weak1[0]}</strong> (${weak1[1]} pts): ${GENIUS_DESCRIPTIONS[weak1[0] as GeniusType]}</li>
        <li><strong>${weak2[0]}</strong> (${weak2[1]} pts): ${GENIUS_DESCRIPTIONS[weak2[0] as GeniusType]}</li>
      </ul>
    `;

    setResult(resultHTML);
  };

  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen p-6">
      <main className="max-w-xl mx-auto bg-white p-6 rounded shadow">
        <div className="mb-6 p-4 bg-yellow-300 text-yellow-900 text-lg font-semibold rounded shadow-md">
          ⚠️ This is a beta application. Use <kbd className="bg-white text-black px-1 py-0.5 rounded border">CMD</kbd> (or <kbd className="bg-white text-black px-1 py-0.5 rounded border">CTRL</kbd>) + <kbd className="bg-white text-black px-1 py-0.5 rounded border">D</kbd> to enable developer mode (where applicable).
        </div>

        <h1 className="text-2xl font-bold mb-4">6 Types of Working Genius Quiz</h1>
        <p className="mb-6 text-sm text-gray-700">
          This quiz helps you discover your top 2 "working geniuses" — the activities that give you energy and fulfillment in your work.
          It also reveals your working competencies (skills you can do well but don't energize you), and working frustrations (types that drain or challenge you).
          Rate how much each statement resonates with you on a scale from 1 (not at all) to 5 (very much).
        </p>

        <form onSubmit={(e) => { e.preventDefault(); submitQuiz(); }}>
          {questions.map((q, i) => (
            <div key={i} className="mb-6">
              <label className="block font-medium mb-2">
                <span className="inline-flex items-start gap-1">
                  <span>{q.question}</span>
                  <span className="relative group cursor-pointer inline-block align-top">
                    <span className="text-blue-600 font-bold">?</span>
                    <span className="absolute top-5 left-2 hidden group-hover:block bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
                      Genius Type: {q.type}
                    </span>
                  </span>
                </span>
                <input
                  type="range"
                  name={`q${i}`}
                  min="0"
                  max="100"
                  value={responses[`q${i}`] || 0}
                  onChange={(e) => handleResponseChange(i, parseInt(e.target.value))}
                  className="w-full mt-2"
                />
              </label>
            </div>
          ))}

          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>

        {result && (
          <div
            className="mt-6"
            dangerouslySetInnerHTML={{ __html: result }}
          />
        )}
      </main>
    </div>
  );
}
