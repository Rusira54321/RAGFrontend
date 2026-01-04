# Universal RAG Assistant - Frontend

A modern React frontend for the Universal RAG Assistant FastAPI backend.

## Features

- 🎨 Modern, beautiful UI with glassmorphism effects
- ✨ Smooth animations using Framer Motion
- 📁 Drag-and-drop file upload
- 💬 Real-time chat interface
- 📱 Responsive design

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:3000`

**Note:** During development, the Vite proxy is configured to forward API requests to `http://localhost:8000`. Make sure your FastAPI backend is running on port 8000.

### Configuration

By default, the frontend expects the backend API to be running at `http://localhost:8000`.

To change this, create a `.env` file in the frontend directory:
```
VITE_API_URL=http://localhost:8000
```

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Axios** - HTTP client
- **Lucide React** - Icons

