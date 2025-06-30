import Image from 'next/image';
import Link from 'next/link';

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
  category: 'data-science' | 'mathematics' | 'visualization' | 'research';
}

// Sample projects data
const projects: Project[] = [
  {
    id: 1,
    title: 'Tax Compliance Prediction Model',
    description: 'Developed a machine learning model to predict tax compliance patterns based on historical data from Rwanda Revenue Authority.',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
    imageUrl: '/images/projects/tax-model.jpg',
    githubUrl: 'https://github.com/peacesangwa/tax-compliance-prediction',
    featured: true,
    category: 'data-science',
  },
  {
    id: 2,
    title: 'Water Access Data Visualization',
    description: 'Interactive dashboard visualizing water access data collected in Bugesera District, Rwanda in collaboration with WaterAid.',
    technologies: ['Power BI', 'Excel', 'Kobo Toolbox', 'Data Cleaning'],
    imageUrl: '/images/projects/water-viz.jpg',
    projectUrl: 'https://wateraid-dashboard.example.com',
    githubUrl: 'https://github.com/peacesangwa/water-access-visualization',
    featured: true,
    category: 'visualization',
  },
  {
    id: 3,
    title: 'Mathematics Education Platform',
    description: 'Online platform for mathematics students featuring interactive tutorials, problem sets, and peer tutoring coordination for the Mathematics and Statistics Students\' Association.',
    technologies: ['Python', 'Django', 'JavaScript', 'LaTeX', 'PostgreSQL'],
    imageUrl: '/images/projects/math-platform.jpg',
    projectUrl: 'https://msar-learning.example.com',
    githubUrl: 'https://github.com/peacesangwa/msar-education-platform',
    featured: true,
    category: 'mathematics',
  },
  {
    id: 4,
    title: 'Statistical Analysis of Student Performance',
    description: 'Research project analyzing factors affecting mathematics performance among university students in Rwanda.',
    technologies: ['R', 'Statistical Analysis', 'Hypothesis Testing', 'Data Visualization'],
    imageUrl: '/images/projects/stats-analysis.jpg',
    githubUrl: 'https://github.com/peacesangwa/student-performance-analysis',
    featured: false,
    category: 'research',
  },
  {
    id: 5,
    title: 'Numerical Methods Implementation',
    description: 'Collection of implementations of various numerical methods for solving mathematical problems, with interactive demonstrations.',
    technologies: ['Python', 'NumPy', 'Matplotlib', 'Jupyter Notebooks'],
    imageUrl: '/images/projects/numerical-methods.jpg',
    githubUrl: 'https://github.com/peacesangwa/numerical-methods',
    featured: false,
    category: 'mathematics',
  },
  {
    id: 6,
    title: 'MSAR Data Science Competition Platform',
    description: 'Web application for managing the Mathematics and Statistics Students\' Association Data Science Competition, including team registration, submission handling, and leaderboard.',
    technologies: ['Python', 'Flask', 'SQLite', 'Bootstrap', 'JavaScript'],
    imageUrl: '/images/projects/competition-platform.jpg',
    projectUrl: 'https://msar-competition.example.com',
    githubUrl: 'https://github.com/peacesangwa/msar-competition',
    featured: false,
    category: 'data-science',
  },
];

export default function ProjectsPage() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Projects</h1>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            A showcase of my data science, mathematical modeling, and research projects.
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
            {/* Data Science */}
            <div>
              <h3 className="text-lg font-semibold leading-8 text-primary">Data Science</h3>
              <div className="mt-6 space-y-10">
                {projects
                  .filter((project) => project.category === 'data-science')
                  .map((project) => (
                    <ProjectListItem key={project.id} project={project} />
                  ))}
              </div>
            </div>
            
            {/* Mathematics */}
            <div>
              <h3 className="text-lg font-semibold leading-8 text-primary">Mathematics</h3>
              <div className="mt-6 space-y-10">
                {projects
                  .filter((project) => project.category === 'mathematics')
                  .map((project) => (
                    <ProjectListItem key={project.id} project={project} />
                  ))}
              </div>
            </div>
            
            {/* Other Projects */}
            <div>
              <h3 className="text-lg font-semibold leading-8 text-primary">Visualization & Research</h3>
              <div className="mt-6 space-y-10">
                {projects
                  .filter((project) => project.category === 'visualization' || project.category === 'research')
                  .map((project) => (
                    <ProjectListItem key={project.id} project={project} />
                  ))}
                {/* Placeholder if no projects */}
                {!projects.some(p => p.category === 'visualization' || p.category === 'research') && (
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
            className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 4 && (
          <span className="inline-flex items-center text-xs font-medium text-gray-500">
            +{project.technologies.length - 4} more
          </span>
        )}
      </div>
      <div className="mt-3 flex space-x-3 text-sm">
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
            className="font-medium text-gray-700 hover:text-gray-900"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
} 