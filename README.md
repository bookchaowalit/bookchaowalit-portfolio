# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Shadcn UI. Features a content management system (CMS) for easy blog content management.

## 🚀 Features

- **Modern Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS
- **Beautiful UI**: Uses Shadcn UI components for a consistent, professional design
- **Blog CMS**: MDX-based content management system for easy blog post creation
- **Responsive Design**: Fully responsive across all device sizes
- **SEO Optimized**: Built-in SEO optimization with Next.js
- **Performance**: Optimized for speed with static generation and image optimization
- **Type Safe**: Full TypeScript support for better development experience

## 📱 Pages

- **Home**: Hero section, skills showcase, featured projects, and latest blog posts
- **About**: Personal story, technical skills, experience, and education
- **Projects**: Portfolio of projects with detailed descriptions and tech stacks
- **Blog**: Blog listing and individual blog post pages with MDX content
- **Contact**: Contact form and social media links

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Shadcn UI
- **Content**: MDX for blog posts
- **Icons**: Lucide React (via Shadcn UI)
- **Fonts**: Geist Sans & Geist Mono

## 📦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd bookchaowalit-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Content Management

### Adding Blog Posts

1. Create a new `.mdx` file in the `content/blog/` directory
2. Add frontmatter with the following structure:

```mdx
---
title: "Your Blog Post Title"
excerpt: "A brief description of your post"
author: "Your Name"
publishedAt: "2024-12-15"
tags: ["Tag1", "Tag2", "Tag3"]
featured: true  # Set to true for featured posts
---

# Your Blog Post Content

Write your blog post content here using Markdown and MDX.
```

3. The post will automatically appear in the blog listing and be available at `/blog/your-filename`

### Customizing Content

- **Personal Information**: Update the content in page components to reflect your information
- **Skills**: Modify the skills arrays in the About and Home pages
- **Projects**: Update the projects array in the Projects page
- **Social Links**: Update social media links in the Contact page

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with default settings

### Other Deployment Options

- **Netlify**: Works out of the box
- **AWS Amplify**: Compatible with static export
- **GitHub Pages**: Use `next export` for static deployment

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── about/          # About page
│   ├── blog/           # Blog pages
│   ├── contact/        # Contact page
│   ├── projects/       # Projects page
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── ui/            # Shadcn UI components
│   └── navigation.tsx # Navigation component
└── lib/               # Utility functions
    └── blog.ts        # Blog content utilities
content/
└── blog/              # MDX blog posts
public/                # Static assets
```

## 🎨 Customization

### Colors and Theme

The project uses Tailwind CSS with Shadcn UI's default theme. You can customize colors in:
- `src/app/globals.css` - CSS variables for colors
- `tailwind.config.js` - Extend the color palette

### Components

All UI components are built with Shadcn UI and can be customized:
- Modify existing components in `src/components/ui/`
- Add new components with `npx shadcn@latest add [component-name]`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](issues).

## 📞 Support

If you have any questions or need help, feel free to [open an issue](issues) or contact me through the website's contact form.

---

Made with ❤️ and Next.js