# AI Terminal Chatbot

A simple command-line chatbot powered by Google's Gemini AI. This is a learning project to explore AI integration and API usage.

## What It Does

This chatbot runs in your terminal and lets you have conversations with Google's Gemini AI model. It remembers the conversation context, so you can have natural back-and-forth discussions.

## Features

- 💬 Interactive terminal chat interface
- 🧠 Powered by Google Gemini 2.5 Flash
- 🎨 Colorful terminal output
- 🔄 Maintains conversation history

## Prerequisites

- Node.js installed on your system
- A Google AI API key ([Get one here](https://ai.google.dev/))

## Installation

1. Clone this repository
2. Install dependencies:
```bash
npm install @google/genai readline-sync colors dotenv
```

3. Create a `.env` file in the root directory:
```
API_KEY=your_google_ai_api_key_here
```

## Usage

Run the chatbot:
```bash
node index.js
```

Start typing to chat with the AI! Press `Ctrl+C` to exit.

## Technologies Used

- **Google Gemini API** - AI model
- **Node.js** - Runtime environment
- **readline-sync** - Terminal input handling
- **colors** - Terminal text styling
- **dotenv** - Environment variable management

## Learning Goals

This project helped me understand:
- How to integrate AI APIs into applications
- Working with async/await in JavaScript
- Managing conversation state
- Environment variable security

## What's Next

Some ideas for future improvements:
- Add conversation saving/loading
- Implement different AI personalities
- Add command shortcuts
- Build a web interface

---

**Note:** This is a learning project built while exploring AI development. Feel free to use it as a starting point for your own experiments!
