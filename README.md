<div align="center">

# 🚀 AI Nest

### Your All-in-One AI Workspace

Create, chat, generate, summarize, analyze, and manage AI-powered content from one modern platform.

[Live Demo](https://ai-nest-01.vercel.app/) • [Report Bug](https://github.com/om-muddapur7/AI_Nest/issues) • [Request Feature](https://github.com/om-muddapur7/AI_Nest/issues)

</div>

---

## 📖 Overview

AI Nest is a full-stack AI SaaS platform that brings multiple AI-powered tools together in one intuitive workspace. It provides secure authentication, subscription management, content generation, file analysis, and a community where users can publish and explore AI creations.

Designed with scalability and a modern developer experience in mind, AI Nest combines a React frontend with a Node.js backend and integrates state-of-the-art AI models to deliver fast, intelligent responses.

---

## ✨ Features

### 🤖 AI-Powered Tools

- 📝 **Blog Title Generator** – Generate engaging, SEO-friendly blog titles in seconds.
- 📄 **Article Generator** – Create high-quality articles from simple prompts.
- 🎨 **AI Image Generator** – Generate stunning AI images from text descriptions.
- 🪄 **Background Remover** – Instantly remove image backgrounds with AI.
- ✂️ **Object Remover** – Remove unwanted objects from images seamlessly.
- 📑 **AI Resume Reviewer** – Get AI-powered feedback and suggestions to improve your resume.

---

### 👤 User Features

- 🔐 Secure authentication with Clerk
- 📊 Personal dashboard
- 📚 Save and manage AI creations
- 🌍 Community page to explore public creations
- ❤️ Like and interact with community posts
- 📱 Fully responsive design
- 🌙 Modern and intuitive user interface

---

### 💎 Premium Features

- ⚡ Access to premium AI tools
- 📈 Higher usage limits
- 🚀 Faster AI processing
- 💳 Subscription management

---

## 🛠️ Tech Stack

### 🎨 Frontend

<p>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white" />
  <img src="https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white" />
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" />
  <img src="https://img.shields.io/badge/React_Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white" />
</p>

### ⚙️ Backend

<p>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" />
  <img src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white" />
  <img src="https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white" />
  <img src="https://img.shields.io/badge/Multer-FF6B6B?style=for-the-badge" />
</p>

### 🤖 AI

<p>
  <img src="https://img.shields.io/badge/Google_Gemini-8E75B2?style=for-the-badge&logo=google-gemini&logoColor=white" />
</p>

### ☁️ Deployment & Database

<p>
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" />
  <img src="https://img.shields.io/badge/Neon-00E699?style=for-the-badge&logo=neon&logoColor=black" />
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" />
</p>
---

## 📂 Project Structure

```
AI_Nest/
│
├── client/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── assets/
│   └── context/
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── middlewares/
│   ├── configs/
│   ├── prisma/
│   └── uploads/
│
└── README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/om-muddapur7/AI_Nest.git

cd AI_Nest
```

### Install dependencies

Frontend

```bash
cd client
npm install
```

Backend

```bash
cd ../server
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside the **server** directory.

```env
DATABASE_URL=

CLERK_SECRET_KEY=
CLERK_PUBLISHABLE_KEY=

GEMINI_API_KEY=

JWT_SECRET=

CLIENT_URL=http://localhost:5173
```

Create a `.env` inside **client**

```env
VITE_CLERK_PUBLISHABLE_KEY=
VITE_API_URL=http://localhost:3000
```

---

## ▶️ Running the Project

Backend

```bash
cd server
npm run dev
```

Frontend

```bash
cd client
npm run dev
```

---

## 📸 Screenshots

### Home Page

<img width="1707" height="822" alt="image" src="https://github.com/user-attachments/assets/d5ac7e34-7838-4760-8e3a-cce08a11521b" />


### Dashboard

<img width="1793" height="857" alt="image" src="https://github.com/user-attachments/assets/6bb7a359-c7c6-41f7-bb18-165ed378019d" />


### Community

<img width="1565" height="847" alt="image" src="https://github.com/user-attachments/assets/e1ddff95-5db6-47ef-83d6-555efd119260" />


---

## 📌 API Features

- Authentication
- AI Prompt Processing
- PDF Upload & Analysis
- Community Posts
- Like System
- User History
- Subscription Handling

---

## 🔒 Authentication

AI Nest uses **Clerk Authentication** for:

- Email & Password Login
- Google Authentication
- Protected Routes
- User Sessions
- JWT Verification

---

## 📈 Future Improvements

- Voice AI
- Image Generation
- AI Agents
- Team Workspace
- Prompt Marketplace
- AI Workflows
- Mobile Application
- Real-time Collaboration

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create your feature branch

```bash
git checkout -b feature/NewFeature
```

3. Commit your changes

```bash
git commit -m "Add New Feature"
```

4. Push

```bash
git push origin feature/NewFeature
```

5. Open a Pull Request

---

## ⭐ Support

If you found this project useful, please consider giving it a ⭐ on GitHub.

It really helps and motivates future development.

---

## 👨‍💻 Author

**Om Muddapur**

- GitHub: https://github.com/om-muddapur7
- LinkedIn: https://linkedin.com/in/om-muddapur-aa56a525b
- Portfolio: https://om-portfolio-plum.vercel.app

---

<div align="center">

Made with ❤️ using React, Node.js, PostgreSQL, Prisma & Google Gemini

</div>
