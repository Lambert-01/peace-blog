import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container-custom">
        {/* Hero section */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Me</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Hi, I'm ISHIMWE SANGWA PEACE, a Data Scientist & Mathematical Specialist with a passion for transforming complex data into actionable insights.
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              "Transforming data into meaningful insights for impactful decision making"
            </p>
            
            <div className="mt-10">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">Professional Profile</h2>
              <p className="mt-4 text-base leading-7 text-gray-600">
                A forward-thinking mathematician and emerging data scientist with a passion for transforming complex data
                into actionable insights. I combine analytical expertise with strong leadership abilities and an unwavering
                commitment to community impact. Adept at applying mathematical principles to real-world challenges, with
                skills in data collection, statistical modeling, data analysis, and project management. I'm seeking opportunities
                to leverage analytical capabilities to drive innovation and create positive societal change.
              </p>
            </div>
            
            <div className="mt-6">
              <a 
                href="https://www.linkedin.com/in/peacesangwa/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-dark font-medium flex items-center"
              >
                <span>Connect on LinkedIn</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="lg:pl-8">
            <div className="aspect-w-4 aspect-h-5 relative h-full w-full rounded-2xl bg-gray-200 shadow-lg overflow-hidden">
              <Image 
                src="/images/peace.jpg"
                alt="ISHIMWE SANGWA PEACE"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
        
        {/* Education section */}
        <div className="mt-16 sm:mt-24">
          <div className="mx-auto max-w-3xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Education</h2>
          </div>
          
          <div className="mt-10 space-y-10">
            <div className="relative">
              <div className="mt-4 flex flex-col sm:flex-row">
                <div className="sm:w-1/4">
                  <h3 className="text-lg font-medium text-gray-900">2022 – 2025</h3>
                  <p className="text-base text-gray-600">University of Rwanda</p>
                </div>
                <div className="mt-2 sm:mt-0 sm:w-3/4">
                  <p className="text-lg font-semibold text-gray-900">Bachelor of Applied Sciences in Applied Mathematics</p>
                  <p className="text-base text-gray-600 mt-2">
                    Relevant coursework: Statistical Analysis, Calculus, Linear Algebra, Differential Equations, Numerical
                    Methods, Mathematical Modeling, Probability Theory
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="mt-4 flex flex-col sm:flex-row">
                <div className="sm:w-1/4">
                  <h3 className="text-lg font-medium text-gray-900">2024 – 2025</h3>
                  <p className="text-base text-gray-600">ALX Africa</p>
                </div>
                <div className="mt-2 sm:mt-0 sm:w-3/4">
                  <p className="text-lg font-semibold text-gray-900">Certificate in Data Science</p>
                  <p className="text-base text-gray-600 mt-2">
                    Focus areas: Python for Data Analysis, Machine Learning Fundamentals, Data Visualization, Statistical Computing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Skills section */}
        <div className="mt-16 sm:mt-24">
          <div className="mx-auto max-w-3xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Skills & Expertise</h2>
          </div>
          
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Technical Skills */}
            <div className="border border-gray-200 rounded-lg p-6 shadow-sm transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900">Technical Skills</h3>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-x-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span className="text-base text-gray-600">Data Collection: Kobo Toolbox, Google Forms</span>
                </li>
                <li className="flex items-center gap-x-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span className="text-base text-gray-600">Data Analysis: Python, Excel</span>
                </li>
                <li className="flex items-center gap-x-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span className="text-base text-gray-600">Visualization: Power BI, Matplotlib</span>
                </li>
                <li className="flex items-center gap-x-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span className="text-base text-gray-600">Statistics: Hypothesis Testing, Regression</span>
                </li>
                <li className="flex items-center gap-x-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span className="text-base text-gray-600">Machine Learning: Classification, Clustering</span>
                </li>
              </ul>
            </div>
            
            {/* Leadership & Soft Skills */}
            <div className="border border-gray-200 rounded-lg p-6 shadow-sm transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900">Leadership & Soft Skills</h3>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-x-2">
                  <div className="h-2 w-2 rounded-full bg-secondary"></div>
                  <span className="text-base text-gray-600">Leadership: Strategic Planning, Team Management</span>
                </li>
                <li className="flex items-center gap-x-2">
                  <div className="h-2 w-2 rounded-full bg-secondary"></div>
                  <span className="text-base text-gray-600">Communication: Public Speaking, Technical Writing</span>
                </li>
                <li className="flex items-center gap-x-2">
                  <div className="h-2 w-2 rounded-full bg-secondary"></div>
                  <span className="text-base text-gray-600">Project Management: Agile Methodologies, Risk Assessment</span>
                </li>
                <li className="flex items-center gap-x-2">
                  <div className="h-2 w-2 rounded-full bg-secondary"></div>
                  <span className="text-base text-gray-600">Interpersonal: Collaboration, Mentoring, Negotiation</span>
                </li>
                <li className="flex items-center gap-x-2">
                  <div className="h-2 w-2 rounded-full bg-secondary"></div>
                  <span className="text-base text-gray-600">Problem Solving: Critical Thinking, Decision Making</span>
                </li>
              </ul>
            </div>
            
            {/* Languages & Interests */}
            <div className="border border-gray-200 rounded-lg p-6 shadow-sm transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900">Languages & Interests</h3>
              <div className="mt-6 space-y-6">
                <div>
                  <h4 className="font-medium text-gray-900">Languages</h4>
                  <ul className="mt-2 space-y-1">
                    <li className="text-base text-gray-600">Kinyarwanda: Native</li>
                    <li className="text-base text-gray-600">English: Professional Proficiency</li>
                    <li className="text-base text-gray-600">French: Intermediate</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Interests</h4>
                  <ul className="mt-2 space-y-1">
                    <li className="text-base text-gray-600">Professional: Data Visualization, AI Ethics, Data Science, Mathematics Education</li>
                    <li className="text-base text-gray-600">Personal: Sports, Community Service, Personal Growth, Language Learning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Experience section */}
        <div className="mt-16 sm:mt-24">
          <div className="mx-auto max-w-3xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Professional Experience</h2>
          </div>
          
          <div className="mt-10 space-y-10 sm:space-y-16">
            {/* Experience 1 */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex items-center justify-between">
                <span className="bg-white pr-3 text-base font-semibold leading-6 text-gray-900">July 2024 - August 2024</span>
                <span className="bg-white pl-3 text-sm text-gray-500">Data Scientist Intern</span>
              </div>
              <div className="mt-4 flex flex-col sm:flex-row">
                <div className="sm:w-1/4">
                  <h3 className="text-lg font-medium text-gray-900">Rwanda Revenue Authority</h3>
                  <p className="text-sm text-gray-600">Kigali, Rwanda</p>
                </div>
                <div className="mt-2 sm:mt-0 sm:w-3/4">
                  <ul className="list-disc pl-5 text-base text-gray-600 space-y-2">
                    <li>Cleaned and preprocessed large datasets to improve data quality, resulting in 30% reduction in processing time</li>
                    <li>Conducted exploratory data analysis to identify patterns and trends in tax compliance data</li>
                    <li>Applied statistical models to predict revenue outcomes based on historical data</li>
                    <li>Collaborated with cross-functional teams to develop data-driven solutions for tax administration</li>
                    <li>Presented analytical findings to management team, informing policy decisions</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Experience 2 */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex items-center justify-between">
                <span className="bg-white pr-3 text-base font-semibold leading-6 text-gray-900">2023 - 2025</span>
                <span className="bg-white pl-3 text-sm text-gray-500">President</span>
              </div>
              <div className="mt-4 flex flex-col sm:flex-row">
                <div className="sm:w-1/4">
                  <h3 className="text-lg font-medium text-gray-900">Mathematics and Statistics Students' Association of Rwanda (MSAR)</h3>
                  <p className="text-sm text-gray-600">University of Rwanda</p>
                </div>
                <div className="mt-2 sm:mt-0 sm:w-3/4">
                  <ul className="list-disc pl-5 text-base text-gray-600 space-y-2">
                    <li>Lead a team of 10 executive members in planning and executing academic and professional development events</li>
                    <li>Established a peer tutoring program benefiting over 200 mathematics students annually</li>
                    <li>Organized the first-ever MSAR Data Science Competition with participation from 15 universities</li>
                    <li>Secured partnerships with 5 industry organizations for student internships and mentorship programs</li>
                    <li>Implemented strategic initiatives resulting in 40% membership growth within one year</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Experience 3 */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex items-center justify-between">
                <span className="bg-white pr-3 text-base font-semibold leading-6 text-gray-900">May 2025</span>
                <span className="bg-white pl-3 text-sm text-gray-500">Data Collector</span>
              </div>
              <div className="mt-4 flex flex-col sm:flex-row">
                <div className="sm:w-1/4">
                  <h3 className="text-lg font-medium text-gray-900">Data + Rwanda in collaboration with WaterAid</h3>
                  <p className="text-sm text-gray-600">Bugesera District</p>
                </div>
                <div className="mt-2 sm:mt-0 sm:w-3/4">
                  <ul className="list-disc pl-5 text-base text-gray-600 space-y-2">
                    <li>Collected field data on water access and usage in schools and nearby households across Bugesera District</li>
                    <li>Conducted interviews and surveys to assess water sources, treatment methods, and accessibility challenges</li>
                    <li>Ensured data quality by verifying responses and accurately entering findings into Kobo Toolbox</li>
                    <li>Contributed to a comprehensive report supporting WaterAid's interventions for improved water and sanitation infrastructure</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Certifications section */}
        <div className="mt-16 sm:mt-24">
          <div className="mx-auto max-w-3xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Certifications & Achievements</h2>
          </div>
          
          <div className="mt-10 space-y-4">
            <div className="flex items-center gap-x-3">
              <div className="h-2 w-2 rounded-full bg-accent"></div>
              <span className="text-base text-gray-900 font-medium">2025: Advanced Excel & Power BI Training Certificate, Data + Rwanda</span>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="h-2 w-2 rounded-full bg-accent"></div>
              <span className="text-base text-gray-900 font-medium">2024: Fundamentals of Data Analysis with Excel Certificate, Global Nexus Institute</span>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="h-2 w-2 rounded-full bg-accent"></div>
              <span className="text-base text-gray-900 font-medium">2023: National Bank of Rwanda Monetary Policy Challenge Participant</span>
            </div>
          </div>
        </div>
        
        {/* Contact section */}
        <div className="mt-16 sm:mt-24">
          <div className="mx-auto max-w-3xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Contact Information</h2>
          </div>
          
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-center gap-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <span className="text-base text-gray-900">+250 790 852 455</span>
            </div>
            <div className="flex items-center gap-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <span className="text-base text-gray-900">sangwapeace@gmail.com</span>
            </div>
            <div className="flex items-center gap-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
              <a href="https://www.linkedin.com/in/peacesangwa/" target="_blank" rel="noopener noreferrer" className="text-base text-gray-900 hover:text-primary">
                linkedin.com/in/peacesangwa
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}