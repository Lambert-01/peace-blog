import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Projects | ISHIMWE Sangwa Peace',
  description: 'Portfolio of projects by ISHIMWE Sangwa Peace, showcasing web development work and applications',
};

// Project type definition
interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  projectUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: 'web' | 'mobile' | 'ui' | 'other';
}

// Sample projects data
const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce website with product catalog, shopping cart, user authentication, and payment integration.',
    technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    imageUrl: '/images/projects/ecommerce.jpg',
    projectUrl: 'https://ecommerce-project.example.com',
    githubUrl: 'https://github.com/peace-ishimwe/ecommerce-project',
    featured: true,
    category: 'web',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A productivity application that helps users manage their tasks, set deadlines, and track progress with a clean, intuitive interface.',
    technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
    imageUrl: '/images/projects/taskapp.jpg',
    projectUrl: 'https://taskapp-project.example.com',
    githubUrl: 'https://github.com/peace-ishimwe/taskapp-project',
    featured: true,
    category: 'mobile',
  },
  {
    id: 3,
    title: 'Analytics Dashboard',
    description: 'Interactive dashboard for visualizing business data with customizable widgets, filtering options, and export capabilities.',
    technologies: ['React', 'D3.js', 'Node.js', 'Express', 'PostgreSQL'],
    imageUrl: '/images/projects/dashboard.jpg',
    projectUrl: 'https://analytics-dashboard.example.com',
    githubUrl: 'https://github.com/peace-ishimwe/analytics-dashboard',
    featured: true,
    category: 'web',
  },
  {
    id: 4,
    title: 'Portfolio Website Template',
    description: 'A customizable template for professional portfolios with smooth animations and responsive design.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
    imageUrl: '/images/projects/portfolio.jpg',
    projectUrl: 'https://portfolio-template.example.com',
    githubUrl: 'https://github.com/peace-ishimwe/portfolio-template',
    featured: false,
    category: 'web',
  },
  {
    id: 5,
    title: 'Weather Forecast App',
    description: 'Mobile application that provides real-time weather forecasts, alerts, and historical weather data for locations worldwide.',
    technologies: ['Flutter', 'Dart', 'Weather API', 'Firebase'],
    imageUrl: '/images/projects/weather.jpg',
    projectUrl: 'https://weather-app.example.com',
    githubUrl: 'https://github.com/peace-ishimwe/weather-app',
    featured: false,
    category: 'mobile',
  },
  {
    id: 6,
    title: 'Restaurant Booking System',
    description: 'Web application for restaurant table reservations, with admin dashboard for staff to manage bookings and customer information.',
    technologies: ['Next.js', 'MongoDB', 'Tailwind CSS', 'JWT'],
    imageUrl: '/images/projects/restaurant.jpg',
    projectUrl: 'https://restaurant-booking.example.com',
    githubUrl: 'https://github.com/peace-ishimwe/restaurant-booking',
    featured: false,
    category: 'web',
  },
];

export default function ProjectsPage() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Projects</h1>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            A showcase of my work, personal projects, and contributions.
          </p>
        </div>
        
        {/* Featured Projects */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900">Featured Projects</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects
              .filter((project) => project.featured)
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </div>
        </div>
        
        {/* All Projects */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-gray-900">All Projects</h2>
          
          {/* Categories */}
          <div className="mt-8 grid grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:grid-cols-3">
            {/* Web Development */}
            <div>
              <h3 className="text-lg font-semibold leading-8 text-primary">Web Development</h3>
              <div className="mt-6 space-y-10">
                {projects
                  .filter((project) => project.category === 'web')
                  .map((project) => (
                    <ProjectListItem key={project.id} project={project} />
                  ))}
              </div>
            </div>
            
            {/* Mobile Development */}
            <div>
              <h3 className="text-lg font-semibold leading-8 text-primary">Mobile Development</h3>
              <div className="mt-6 space-y-10">
                {projects
                  .filter((project) => project.category === 'mobile')
                  .map((project) => (
                    <ProjectListItem key={project.id} project={project} />
                  ))}
              </div>
            </div>
            
            {/* Other Projects */}
            <div>
              <h3 className="text-lg font-semibold leading-8 text-primary">UI/UX & Others</h3>
              <div className="mt-6 space-y-10">
                {projects
                  .filter((project) => project.category === 'ui' || project.category === 'other')
                  .map((project) => (
                    <ProjectListItem key={project.id} project={project} />
                  ))}
                {/* Placeholder if no UI/UX projects */}
                {!projects.some(p => p.category === 'ui' || p.category === 'other') && (
                  <div className="text-gray-500">No projects in this category yet.</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Project card component (used for featured projects)
function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md">
      <div className="h-48 overflow-hidden bg-gray-200">
        {project.imageUrl ? (
          <div className="relative h-full w-full">
            <div className="h-full w-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Project image</span>
            </div>
            {/* In a real project, you'd use Image component here */}
            {/* <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            /> */}
          </div>
        ) : (
          <div className="flex h-full items-center justify-center bg-gray-100 text-gray-400">
            No image available
          </div>
        )}
      </div>
      
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <h3 className="font-semibold text-xl text-gray-900">{project.title}</h3>
          <p className="mt-3 text-sm text-gray-600 line-clamp-3">{project.description}</p>
        </div>
        
        <div className="mt-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600">
                +{project.technologies.length - 3} more
              </span>
            )}
          </div>
        </div>
        
        <div className="mt-6 flex gap-3">
          {project.projectUrl && (
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/80 focus:outline-none"
            >
              View Project
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-gray-800 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus:outline-none"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// Project list item component (used for categorized projects)
function ProjectListItem({ project }: { project: Project }) {
  return (
    <div className="relative">
      <h4 className="text-base font-semibold leading-7 text-gray-900">
        <a href={project.projectUrl || project.githubUrl || '#'} className="hover:text-primary">
          {project.title}
        </a>
      </h4>
      <p className="mt-2 text-sm leading-6 text-gray-600">{project.description}</p>
      <div className="mt-3 flex flex-wrap gap-1">
        {project.technologies.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center rounded-md bg-gray-50 px-1.5 py-0.5 text-xs font-medium text-gray-600"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-3 flex gap-3 text-sm">
        {project.projectUrl && (
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary hover:text-primary/80"
          >
            View Project
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-gray-600 hover:text-gray-900"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
} 