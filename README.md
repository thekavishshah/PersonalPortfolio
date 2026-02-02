<div align="center">

# Kavish Shah — Personal Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)

**A modern, AI-powered portfolio showcasing my journey as a Software Engineer and AI/ML enthusiast**

[🌐 Live Demo](https://thekavishshah.vercel.app) • [📧 Contact](mailto:kshah77@asu.edu) • [💼 LinkedIn](https://www.linkedin.com/in/shah-kavish/)

</div>

---

## ✨ Features

### 🤖 AI-Powered Chatbot
- **Interactive Assistant** — Ask questions about my experience, projects, and skills
- **Google Gemini 2.5 Flash** — Powered by the latest AI technology
- **Preset Responses** — Optimized responses to save API quota
- **Tool Integration** — Dynamic data retrieval for projects, skills, resume, and contact info

### 🎨 Modern Design
- **Responsive Layout** — Seamless experience across all devices
- **Smooth Animations** — Powered by Framer Motion
- **Dark Mode Ready** — Built with next-themes
- **Radix UI Components** — Accessible, customizable UI primitives

### 📊 Portfolio Sections
- **About Me** — Professional summary and personality traits
- **Projects** — Showcase of featured work with live demos and GitHub links
- **Skills** — Comprehensive technical skillset visualization
- **Experience** — Professional work history and internships
- **Education** — Academic background and achievements
- **Contact** — Multiple ways to connect

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 16.1.6](https://nextjs.org/) with App Router
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Animations**: [Framer Motion 12](https://www.framer.com/motion/)
- **State Management**: React 19 Hooks

### Backend & AI
- **API Routes**: Next.js API Routes
- **AI SDK**: [@ai-sdk/google](https://sdk.vercel.ai/docs)
- **AI Model**: Google Gemini 2.5 Flash
- **Streaming**: Vercel AI SDK with streaming support

### Developer Tools
- **Package Manager**: pnpm
- **Linting**: ESLint with Next.js config
- **Formatting**: Prettier with Tailwind plugin
- **Deployment**: Vercel with CI/CD

---

## 📁 Project Structure

```
thekavishshah.github.io/
├── public/                      # Static assets
│   ├── avatar.png              # Profile picture
│   └── ...
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/
│   │   │   └── chat/           # AI chatbot API endpoint
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Home page
│   ├── components/             # React components
│   │   ├── chat/               # Chatbot UI components
│   │   ├── ui/                 # Reusable UI components
│   │   ├── projects/           # Project showcase
│   │   ├── skills/             # Skills section
│   │   └── ...
│   ├── lib/                    # Utilities and configs
│   │   ├── config-loader.ts   # Portfolio data loader
│   │   └── config-parser.ts   # Data parser
│   └── types/                  # TypeScript definitions
├── portfolio-config.json       # Portfolio data (single source of truth)
├── next.config.mjs             # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
└── package.json                # Dependencies
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 20+
- **pnpm** (recommended) or npm/yarn
- **Google Gemini API Key** ([Get one here](https://aistudio.google.com/app/apikey))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/thekavishshah/thekavishshah.github.io.git
   cd thekavishshah.github.io
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

   Then edit `.env.local` and add your API key:
   ```env
   GOOGLE_GENERATIVE_AI_API_KEY=your_api_key_here
   ```

4. **Run development server**
   ```bash
   pnpm dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)** in your browser

### Build for Production

```bash
pnpm build
pnpm start
```

---

## 🎨 Customization

All portfolio data is centralized in `portfolio-config.json`. Update this file to customize:

- Personal information
- Projects and experiences
- Skills and technologies
- Social links
- Chatbot personality and preset responses
- Resume details

The config is automatically parsed and used throughout the application.

---

## 🌐 Deployment

This project is deployed on [Vercel](https://vercel.com) with automatic CI/CD.

### Deploy Your Own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/thekavishshah/thekavishshah.github.io)

**Remember to add your environment variable:**
- `GOOGLE_GENERATIVE_AI_API_KEY` in Vercel project settings

---

## 📊 API Usage

The chatbot uses Google Gemini API with the following limits (free tier):
- **15 requests per minute**
- **1,000 requests per day**
- **250,000 tokens per minute**

Preset responses are used for common questions to optimize API usage.

---

## 🤝 Contributing

Found a bug or want to suggest an improvement? Feel free to open an issue or submit a pull request!

---

## 📬 Contact

**Kavish Shah**

- 📧 Email: [kshah77@asu.edu](mailto:kshah77@asu.edu)
- 💼 LinkedIn: [shah-kavish](https://www.linkedin.com/in/shah-kavish/)
- 💻 GitHub: [thekavishshah](https://github.com/thekavishshah)
- 🔗 LeetCode: [thekavishshah](https://leetcode.com/u/thekavishshah)

---

## ⭐ Show Your Support

If you found this project helpful or interesting, please consider giving it a ⭐ on GitHub!

---

## 📄 License

This project is open source and available under the MIT License.

---

<div align="center">

**Built with ❤️ using Next.js, TypeScript, and Google Gemini AI**

</div>


