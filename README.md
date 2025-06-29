# ISHIMWE Sangwa Peace Portfolio Blog

This is a modern portfolio and blog website built for ISHIMWE Sangwa Peace using Next.js, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Portfolio Showcase**: Highlights projects with detailed descriptions and links
- **Blog System**: Markdown-based blog with categorization and filtering
- **Contact Form**: Interactive form for visitors to get in touch
- **Modern UI**: Clean and professional design using Tailwind CSS
- **SEO Optimized**: Meta tags and structured data for better search engine visibility

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation
- **TypeScript**: For type-safe code
- **Tailwind CSS**: Utility-first CSS framework for styling
- **React Markdown**: For rendering blog content from markdown
- **Tailwind Components**: Custom components built with Tailwind CSS

## Project Structure

```
├── public/               # Static assets
│   └── images/           # Images for the website
├── src/                  # Source code
│   ├── app/              # Next.js app directory with routes
│   │   ├── about/        # About page
│   │   ├── blog/         # Blog pages
│   │   ├── projects/     # Projects page
│   │   ├── contact/      # Contact page
│   │   └── ...           # Other pages
│   ├── components/       # React components
│   │   ├── layout/       # Layout components (header, footer)
│   │   └── ui/           # UI components
│   ├── content/          # Content files
│   │   └── blog/         # Blog post markdown files
│   ├── lib/              # Utility functions
│   ├── styles/           # Global styles
│   └── types/            # TypeScript type definitions
├── tailwind.config.js    # Tailwind CSS configuration
└── next.config.js        # Next.js configuration
```

## Getting Started

### Prerequisites

- Node.js (version 18.x or later recommended)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/peace-ishimwe/portfolio-blog.git
cd portfolio-blog
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Customization

- **Colors**: Edit the color scheme in `tailwind.config.ts`
- **Content**: Update personal information and projects in their respective files
- **Blog Posts**: Add or edit blog posts in the `src/content/blog` directory
- **Images**: Add images to the `public/images` directory

## Deployment

This project can be easily deployed to Vercel, Netlify, or any other platform that supports Next.js:

```bash
npm run build
# or
yarn build
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

ISHIMWE Sangwa Peace

---

This project was built with ❤️ using Next.js and Tailwind CSS. 