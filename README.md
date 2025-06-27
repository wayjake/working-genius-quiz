# 🧠 Working Genius Quiz

[![React](https://img.shields.io/badge/React-18.0.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-blue.svg)](https://tailwindcss.com/)

An interactive web application that helps you discover your **Working Genius** types using Patrick Lencioni's WIDGET framework. This quiz identifies your natural talents and working preferences to improve team collaboration and personal effectiveness.

![Working Genius Quiz Preview](https://via.placeholder.com/800x400/4F46E5/FFFFFF?text=Working+Genius+Quiz)

## 🌟 What is Working Genius?

The **6 Types of Working Genius** is a framework developed by Patrick Lencioni that identifies six natural gifts people bring to the workplace. Understanding your working geniuses can transform how you work, lead teams, and collaborate with others.

### The Six Types (WIDGET):

- **🔍 Wonder (W)** - The natural gift of pondering possibilities and asking "what if" questions
- **💡 Invention (I)** - The natural gift of creating original ideas and solutions from scratch  
- **🎯 Discernment (D)** - The natural gift of intuitively evaluating ideas and situations
- **🚀 Galvanizing (G)** - The natural gift of rallying and inspiring others to take action
- **🤝 Enablement (E)** - The natural gift of providing encouragement and assistance
- **🏁 Tenacity (T)** - The natural gift of pushing projects to completion and achieving results

## ✨ Features

- **Interactive Quiz**: 18 carefully crafted questions to assess your working preferences
- **Real-time Scoring**: Advanced algorithm using Root Mean Square (RMS) calculations
- **Detailed Results**: Discover your top 2 Working Geniuses, competencies, and frustrations
- **Beautiful UI**: Modern, responsive design with Tailwind CSS
- **Developer Mode**: Quick testing with keyboard shortcuts
- **TypeScript**: Fully typed for better development experience

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/working-genius-quiz.git
   cd working-genius-quiz
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to start the quiz!

### Building for Production

```bash
# Create a production build
npm run build

# Preview the production build locally
npm run preview
```

## 🎯 How to Use

1. **Take the Quiz**: Answer 18 questions about your work preferences using the slider scale (0-100)
2. **Get Your Results**: Discover your:
   - **Working Geniuses** (top 2) - Energizing activities that come naturally
   - **Working Competencies** (middle 2) - Skills you can do well but don't energize you
   - **Working Frustrations** (bottom 2) - Activities that drain or challenge you
3. **Apply the Insights**: Use your results to:
   - Choose projects that align with your geniuses
   - Build teams with complementary working types
   - Delegate tasks that fall into your frustrations
   - Communicate your needs to colleagues

## 🛠️ Development

### Project Structure

```
working-genius-quiz/
├── app/
│   ├── routes/
│   │   └── home.tsx          # Main quiz component
│   ├── app.css              # Global styles
│   ├── root.tsx             # Root component
│   └── routes.ts            # Route definitions
├── public/                  # Static assets
├── package.json             # Dependencies and scripts
└── README.md               # This file
```

### Key Technologies

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server

### Developer Features

- **Hot Module Replacement (HMR)** - Instant updates during development
- **TypeScript Support** - Full type checking and IntelliSense
- **Developer Mode** - Press `CMD/CTRL + D` to enable quick testing features

## 📊 Understanding Your Results

### Working Geniuses (Top 2)
These are activities that energize you and come naturally. You should seek out opportunities to use these gifts in your work.

### Working Competencies (Middle 2)  
You can perform these activities well, but they don't energize you. These are good for delegation or collaboration.

### Working Frustrations (Bottom 2)
These activities drain your energy and may be challenging. Consider delegating these tasks or partnering with someone whose geniuses align with these areas.

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Development Guidelines

- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Write clear, descriptive commit messages
- Test your changes thoroughly

## 📚 Learn More

- [The 6 Types of Working Genius](https://www.tablegroup.com/working-genius/) - Official website
- [Patrick Lencioni's Books](https://www.tablegroup.com/books/) - Deep dive into the framework
- [Team Assessment Tools](https://www.tablegroup.com/assessments/) - Additional resources

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Patrick Lencioni** for developing the Working Genius framework
- **The Table Group** for their research and resources
- **Font Awesome** for the inspiring blog post that helped inform this project

---

**Ready to discover your Working Genius?** 🚀

Start the quiz and unlock insights that can transform your work and team collaboration!
