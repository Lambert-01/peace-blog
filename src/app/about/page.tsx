import Image from 'next/image';

export const metadata = {
  title: 'About | ISHIMWE Sangwa Peace',
  description: 'Learn more about ISHIMWE Sangwa Peace, a passionate Full-Stack Developer',
};

export default function AboutPage() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container-custom">
        {/* Hero section */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Me</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Hi, I'm Peace Ishimwe, a passionate Full-Stack Developer with expertise in building modern web applications. I focus on creating responsive, user-friendly experiences that solve real-world problems.
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              I believe in continuous learning and staying updated with the latest technologies and best practices in web development. My goal is to create impactful digital experiences that make a difference.
            </p>
            
            <div className="mt-10">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">Background</h2>
              <p className="mt-4 text-base leading-7 text-gray-600">
                With several years of experience in the tech industry, I've worked on projects ranging from small business websites to complex web applications. 
                I'm passionate about clean code, performance optimization, and creating seamless user experiences.
              </p>
            </div>
          </div>
          
          <div className="lg:pl-8">
            <div className="aspect-w-4 aspect-h-5 relative h-full w-full rounded-2xl bg-gray-200 shadow-lg overflow-hidden">
              <Image 
                src="/images/peace.jpg"
                alt="Peace Ishimwe"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
        
        {/* Skills section */}
        <div className="mt-16 sm:mt-24">
          <div className="mx-auto max-w-3xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Skills & Expertise</h2>
          </div>
          
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Frontend */}
            <div className="border border-gray-200 rounded-lg p-6 shadow-sm transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900">Frontend Development</h3>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-x-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span className="text-base text-gray-600">React / Next.js</span>
                </li>
                <li className="flex items-center gap-x-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span className="text-base text-gray-600">HTML5 / CSS3 / Sass</span>
                </li>
                <li className="flex items-center gap-x-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span className="text-base text-gray-600">JavaScript / TypeScript</span>
                </li>
                <li className="flex items-center gap-x-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span className="text-base text-gray-600">Tailwind CSS</span>
                </li>
                <li className="flex items-center gap-x-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span className="text-base text-gray-600">Responsive Design</span>
                </li>
              </ul>
            </div>
            
            {/* Backend */}
            <div className="border border-gray-200 rounded-lg p-6 shadow-sm transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900">Backend Development</h3>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-x-2">
                  <div className="h-2 w-2 rounded-full bg-secondary"></div>
                  <span className="text-base text-gray-600">Node.js / Express</span>
                </li>
                <li className="flex items-center gap-x-2">
                  <div className="h-2 w-2 rounded-full bg-secondary"></div>
                  <span className="text-base text-gray-600">Python / Django / Flask</span>
                </li>
                <li className="flex items-center gap-x-2">
                  <div className="h-2 w-2 rounded-full bg-secondary"></div>
                  <span className="text-base text-gray-600">RESTful APIs</span>
                </li>
                <li className="flex items-center gap-x-2">
                  <div className="h-2 w-2 rounded-full bg-secondary"></div>
                  <span className="text-base text-gray-600">GraphQL</span>
                </li>
                <li className="flex items-center gap-x-2">
                  <div className="h-2 w-2 rounded-full bg-secondary"></div>
                  <span className="text-base text-gray-600">Authentication / Security</span>
                </li>
              </ul>
            </div>
            
            {/* Database & Tools */}
            <div className="border border-gray-200 rounded-lg p-6 shadow-sm transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900">Database & Tools</h3>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-x-2">
                  <div className="h-2 w-2 rounded-full bg-accent"></div>
                  <span className="text-base text-gray-600">MongoDB / PostgreSQL</span>
                </li>
                <li className="flex items-center gap-x-2">
                  <div className="h-2 w-2 rounded-full bg-accent"></div>
                  <span className="text-base text-gray-600">Firebase / Supabase</span>
                </li>
                <li className="flex items-center gap-x-2">
                  <div className="h-2 w-2 rounded-full bg-accent"></div>
                  <span className="text-base text-gray-600">Git / GitHub</span>
                </li>
                <li className="flex items-center gap-x-2">
                  <div className="h-2 w-2 rounded-full bg-accent"></div>
                  <span className="text-base text-gray-600">Docker / CI/CD</span>
                </li>
                <li className="flex items-center gap-x-2">
                  <div className="h-2 w-2 rounded-full bg-accent"></div>
                  <span className="text-base text-gray-600">AWS / Vercel / Netlify</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Experience section with improved styling */}
        <div className="mt-16 sm:mt-24">
          <div className="mx-auto max-w-3xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Experience</h2>
          </div>
          
          <div className="mt-10 space-y-10 sm:space-y-16">
            {/* Experience 1 */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex items-center justify-between">
                <span className="bg-white pr-3 text-base font-semibold leading-6 text-gray-900">2022 - Present</span>
                <span className="bg-white pl-3 text-sm text-gray-500">Full-Stack Developer</span>
              </div>
              <div className="mt-4 flex flex-col sm:flex-row">
                <div className="sm:w-1/4">
                  <h3 className="text-lg font-medium text-gray-900">Tech Innovations Inc</h3>
                </div>
                <div className="mt-2 sm:mt-0 sm:w-3/4">
                  <p className="text-base text-gray-600">
                    Developed and maintained multiple full-stack web applications using modern technologies.
                    Collaborated with cross-functional teams to deliver high-quality software solutions.
                    Implemented responsive designs and optimized application performance.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Experience 2 */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex items-center justify-between">
                <span className="bg-white pr-3 text-base font-semibold leading-6 text-gray-900">2020 - 2022</span>
                <span className="bg-white pl-3 text-sm text-gray-500">Frontend Developer</span>
              </div>
              <div className="mt-4 flex flex-col sm:flex-row">
                <div className="sm:w-1/4">
                  <h3 className="text-lg font-medium text-gray-900">Web Solutions Ltd</h3>
                </div>
                <div className="mt-2 sm:mt-0 sm:w-3/4">
                  <p className="text-base text-gray-600">
                    Created responsive user interfaces using React and modern CSS frameworks.
                    Worked with designers to implement visually appealing and functional web applications.
                    Optimized frontend performance and improved user experience through code refactoring.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Experience 3 */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex items-center justify-between">
                <span className="bg-white pr-3 text-base font-semibold leading-6 text-gray-900">2018 - 2020</span>
                <span className="bg-white pl-3 text-sm text-gray-500">Web Developer Intern</span>
              </div>
              <div className="mt-4 flex flex-col sm:flex-row">
                <div className="sm:w-1/4">
                  <h3 className="text-lg font-medium text-gray-900">Digital Agency</h3>
                </div>
                <div className="mt-2 sm:mt-0 sm:w-3/4">
                  <p className="text-base text-gray-600">
                    Assisted in the development of websites for small and medium-sized businesses.
                    Gained hands-on experience with HTML, CSS, JavaScript, and various CMS platforms.
                    Participated in team coding sessions and learned industry best practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}