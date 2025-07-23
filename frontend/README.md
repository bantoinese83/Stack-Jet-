# NexusForge Frontend

A modern React application built with TypeScript, Vite, and Tailwind CSS.

## 🚀 Features

- **React 19** with TypeScript for type safety
- **Vite** for lightning-fast development and builds
- **Tailwind CSS** for utility-first styling
- **React Router** for client-side routing
- **Axios** for HTTP requests with interceptors
- **Custom Hooks** for authentication and state management
- **Reusable Components** with consistent design system
- **Form Validation** with custom validation utilities
- **Protected Routes** with authentication guards

## 📦 Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Code Quality**: ESLint + Prettier
- **Icons**: Heroicons
- **UI Components**: Headless UI

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.tsx
│   ├── Card.tsx
│   └── Input.tsx
├── hooks/              # Custom React hooks
│   └── useAuth.ts
├── pages/              # Page components
│   ├── Home.tsx
│   └── Login.tsx
├── services/           # API services
├── types/              # TypeScript type definitions
│   └── index.ts
├── utils/              # Utility functions
│   ├── api.ts
│   └── validation.ts
├── App.tsx             # Main app component
├── main.tsx            # App entry point
└── index.css           # Global styles
```

## 🎨 Design System

### Colors

- **Primary**: Blue (`primary-600`, `primary-700`)
- **Secondary**: Gray (`gray-200`, `gray-300`)
- **Danger**: Red (`red-600`, `red-700`)
- **Success**: Green (`green-600`, `green-700`)

### Components

- **Button**: Multiple variants (primary, secondary, danger, ghost)
- **Input**: Form inputs with validation states
- **Card**: Content containers with configurable padding and shadows

### Typography

- **Headings**: Font weights 600-700
- **Body**: Font weight 400
- **Font Family**: System UI stack

## 🔐 Authentication

The app includes a complete authentication system with:

- Login/Register forms with validation
- Protected routes
- JWT token management
- Automatic token refresh
- Logout functionality

### Auth Hook Usage

```typescript
import useAuth from './hooks/useAuth';

const { user, isAuthenticated, login, logout } = useAuth();
```

## 🌐 API Integration

### API Client

The app uses a configured Axios instance with:

- Base URL configuration
- Request/response interceptors
- Automatic token injection
- Error handling
- 401 unauthorized handling

### Environment Variables

Create a `.env.local` file in the frontend directory:

```env
VITE_API_URL=http://localhost:3000/api
VITE_APP_NAME=NexusForge
VITE_APP_VERSION=1.0.0
```

## 🧪 Testing

To add testing to the project:

```bash
# Install testing dependencies
npm install -D vitest @testing-library/react @testing-library/jest-dom

# Add test script to package.json
"test": "vitest"
```

## 📦 Building for Production

```bash
# Build the application
npm run build

# Preview the build
npm run preview
```

The build output will be in the `dist/` directory.

## 🚀 Deployment

The frontend can be deployed to any static hosting service:

- **Vercel**: Connect your repository for automatic deployments
- **Netlify**: Drag and drop the `dist/` folder
- **AWS S3**: Upload the `dist/` folder to an S3 bucket
- **Docker**: Use the provided Dockerfile

### Docker Deployment

```bash
# Build Docker image
docker build -t nexusforge-frontend .

# Run container
docker run -p 3000:3000 nexusforge-frontend
```

## 🤝 Contributing

1. Follow the existing code style (ESLint + Prettier)
2. Write meaningful commit messages
3. Add TypeScript types for new features
4. Test your changes thoroughly
5. Update documentation as needed

## 📄 License

This project is part of the NexusForge monorepo.
