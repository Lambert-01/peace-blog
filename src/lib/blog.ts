import { BlogPost, BlogPostPreview } from '@/types/blog';

// Sample blog posts data (in a real app, this would come from a database or API)
const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with Next.js',
    description: 'Learn the basics of Next.js and how to create your first application.',
    date: '2023-06-15',
    slug: 'getting-started-with-nextjs',
    content: `
# Getting Started with Next.js

Next.js is a React framework that gives you building blocks to create web applications. By framework, we mean Next.js handles the tooling and configuration needed for React, and provides additional structure, features, and optimizations for your application.

## Setting Up Your First Next.js Project

To create a Next.js app, run the following command:

\`\`\`bash
npx create-next-app@latest my-next-app
\`\`\`

This will set up everything automatically for you. If you want to start with TypeScript:

\`\`\`bash
npx create-next-app@latest --typescript
\`\`\`

## Key Features of Next.js

1. **Server-Side Rendering (SSR)**: Next.js allows for pages to be rendered on the server side, which can improve performance and SEO.

2. **Static Site Generation (SSG)**: Generate static HTML pages at build time for better performance.

3. **API Routes**: Create API endpoints easily within your Next.js application.

4. **File-based Routing**: Create routes based on the file structure in your pages directory.

5. **Built-in CSS and Sass Support**: Import CSS or Sass files directly in your components.

Next.js is a powerful framework that can help you build modern web applications with React. It's perfect for both beginners and experienced developers looking to create performant and SEO-friendly websites.
    `,
    author: {
      name: 'Peace Ishimwe',
      image: '/images/peace.jpg',
      bio: 'Full-Stack Developer passionate about modern web technologies',
    },
    tags: ['Next.js', 'React', 'Web Development'],
    coverImage: '/images/blog/nextjs.jpg',
  },
  {
    id: '2',
    title: 'Mastering TypeScript in React Applications',
    description: 'A comprehensive guide to using TypeScript effectively in React projects.',
    date: '2023-07-22',
    slug: 'mastering-typescript-in-react',
    content: `
# Mastering TypeScript in React Applications

TypeScript adds static type checking to JavaScript, helping you catch errors early and making your code more robust. When combined with React, TypeScript can significantly improve the development experience.

## Why Use TypeScript with React?

TypeScript provides several advantages when used with React:

1. **Type Safety**: Catch type-related errors at compile time rather than at runtime.
2. **Better IDE Support**: Enjoy improved autocompletion, navigation, and refactoring tools.
3. **Enhanced Documentation**: Types serve as documentation, making your code easier to understand.
4. **Safe Refactoring**: Make changes with confidence, knowing the compiler will catch type errors.

## Getting Started

To create a new React project with TypeScript:

\`\`\`bash
npx create-react-app my-app --template typescript
\`\`\`

Or for Next.js:

\`\`\`bash
npx create-next-app@latest --typescript
\`\`\`

## Typing Components

Here's a basic example of a typed React component:

\`\`\`tsx
interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, disabled = false }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};
\`\`\`

## Typing Hooks

TypeScript works seamlessly with React hooks:

\`\`\`tsx
const [count, setCount] = useState<number>(0);
\`\`\`

By mastering TypeScript in your React applications, you'll write more robust code and catch errors before they reach production.
    `,
    author: {
      name: 'Peace Ishimwe',
      image: '/images/peace.jpg',
      bio: 'Full-Stack Developer passionate about modern web technologies',
    },
    tags: ['TypeScript', 'React', 'Web Development'],
    coverImage: '/images/blog/typescript.jpg',
  },
  {
    id: '3',
    title: 'Building Responsive UIs with Tailwind CSS',
    description: 'How to create beautiful, responsive user interfaces using Tailwind CSS.',
    date: '2023-08-10',
    slug: 'building-responsive-uis-with-tailwind-css',
    content: `
# Building Responsive UIs with Tailwind CSS

Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without leaving your HTML. It provides low-level utility classes that let you build completely custom designs.

## Why Choose Tailwind CSS?

1. **No Pre-designed Components**: Unlike Bootstrap or Material UI, Tailwind doesn't provide pre-designed components, giving you more flexibility.

2. **Highly Customizable**: Tailor the framework to your design system through a configuration file.

3. **Responsive Design Made Easy**: Built-in responsive modifiers make it simple to build responsive layouts.

4. **Optimized for Production**: Unused styles are purged in production builds, resulting in minimal CSS.

## Getting Started with Tailwind

Install Tailwind CSS:

\`\`\`bash
npm install tailwindcss postcss autoprefixer
npx tailwindcss init -p
\`\`\`

Configure your tailwind.config.js file:

\`\`\`js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
\`\`\`

## Building a Responsive Navigation

Here's an example of a responsive navigation bar using Tailwind CSS:

\`\`\`jsx
<nav className="bg-white shadow">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-16">
      <div className="flex">
        <div className="flex-shrink-0 flex items-center">
          <img className="h-8 w-auto" src="/logo.svg" alt="Logo" />
        </div>
      </div>
      <div className="hidden md:ml-6 md:flex md:space-x-8">
        <a href="#" className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
          Home
        </a>
        <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
          About
        </a>
        <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
          Services
        </a>
        <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
          Contact
        </a>
      </div>
      <div className="md:hidden flex items-center">
        <button className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100">
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</nav>
\`\`\`

Tailwind CSS makes it easy to build responsive, custom designs without writing custom CSS. Start using it today to streamline your development workflow.
    `,
    author: {
      name: 'Peace Ishimwe',
      image: '/images/peace.jpg',
      bio: 'Full-Stack Developer passionate about modern web technologies',
    },
    tags: ['CSS', 'Tailwind CSS', 'Responsive Design', 'UI/UX'],
    coverImage: '/images/blog/tailwind.jpg',
  },
];

export function getAllPostPreviews(): BlogPostPreview[] {
  return blogPosts.map(({ content, ...post }) => post);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getLatestPosts(count: number = 3): BlogPostPreview[] {
  // Sort posts by date (newest first) and return the specified count
  return getAllPostPreviews()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

export function getPostsByTag(tag: string): BlogPostPreview[] {
  return getAllPostPreviews().filter(post => post.tags.includes(tag));
}