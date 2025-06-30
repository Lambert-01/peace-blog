'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white">
      {/* Hero section with Peace's image as background */}
      <div className="relative isolate overflow-hidden min-h-screen">
        {/* Background image with overlay */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/peace.jpg"
            alt="Peace Ishimwe"
            fill
            priority
            className="object-cover object-center"
            style={{ objectPosition: '50% 30%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-primary/40 mix-blend-multiply" />
        </div>

        {/* Hero content */}
        <div className="container-custom flex flex-col h-screen pt-32 lg:pt-52">
          <div className="relative z-10 max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6 animate-fade-in">
              <span className="text-5xl sm:text-7xl block mb-4">Hi, I'm</span>
              <span className="text-primary bg-white/10 backdrop-blur-sm px-4 py-2 rounded-md inline-block">
                PEACE ISHIMWE
              </span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-200 bg-black/30 backdrop-blur-sm p-4 rounded-lg">
              A forward-thinking Data Scientist & Mathematical Specialist passionate about transforming complex data into actionable insights.
              Combining analytical expertise with strong leadership abilities to drive innovation and create positive societal change.
            </p>
            <div className="mt-10 flex flex-wrap gap-y-4 gap-x-6">
              <Link href="/projects" 
                className="btn btn-primary bg-primary text-white px-8 py-3 rounded-md text-lg font-semibold transition-all hover:bg-primary/80 hover:scale-105">
                View My Work
              </Link>
              <Link href="/contact" 
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-md text-lg font-semibold transition-all hover:bg-white/30">
                Get In Touch <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* Social links */}
          <div className="mt-auto mb-12 relative z-10">
            <div className="flex space-x-6 items-center">
              <a href="https://github.com/peacesangwa" target="_blank" rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://linkedin.com/in/peacesangwa" target="_blank" rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className={`absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 transition-opacity duration-500 ${scrolled ? 'opacity-0' : 'opacity-100'}`}>
          <div className="flex flex-col items-center">
            <span className="text-white text-sm mb-2">Scroll Down</span>
            <svg className="w-6 h-6 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Featured Projects section with new styling */}
      <div className="bg-white py-24 sm:py-32">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Featured Projects</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Check out some of my recent work
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {/* Project 1 */}
            <article className="flex flex-col items-start justify-between rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="w-full">
                <div className="h-48 w-full bg-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/60 to-secondary/40 flex items-center justify-center text-white font-bold text-xl">
                    Tax Compliance Prediction Model
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-x-4 text-xs">
                    <span className="text-gray-500">2024</span>
                    <span className="relative z-10 rounded-full bg-secondary/10 px-3 py-1.5 font-medium text-secondary">Data Science</span>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                      <span className="absolute inset-0"></span>
                      Tax Compliance Prediction Model
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      Developed a machine learning model to predict tax compliance patterns based on historical data from Rwanda Revenue Authority.
                    </p>
                  </div>
                  <div className="mt-5">
                    <Link href="/projects" className="text-sm font-semibold leading-6 text-primary hover:text-primary/80 transition-colors">
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </article>

            {/* Project 2 */}
            <article className="flex flex-col items-start justify-between rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="w-full">
                <div className="h-48 w-full bg-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/60 to-accent/40 flex items-center justify-center text-white font-bold text-xl">
                    Water Access Data Visualization
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-x-4 text-xs">
                    <span className="text-gray-500">2025</span>
                    <span className="relative z-10 rounded-full bg-primary/10 px-3 py-1.5 font-medium text-primary">Data Visualization</span>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                      <span className="absolute inset-0"></span>
                      Water Access Data Visualization
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      Interactive dashboard visualizing water access data collected in Bugesera District, Rwanda in collaboration with WaterAid.
                    </p>
                  </div>
                  <div className="mt-5">
                    <Link href="/projects" className="text-sm font-semibold leading-6 text-primary hover:text-primary/80 transition-colors">
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </article>

            {/* Project 3 */}
            <article className="flex flex-col items-start justify-between rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="w-full">
                <div className="h-48 w-full bg-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent/60 to-secondary/40 flex items-center justify-center text-white font-bold text-xl">
                    Mathematics Education Platform
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-x-4 text-xs">
                    <span className="text-gray-500">2024</span>
                    <span className="relative z-10 rounded-full bg-accent/10 px-3 py-1.5 font-medium text-accent">Education</span>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                      <span className="absolute inset-0"></span>
                      Mathematics Education Platform
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      Online platform for mathematics students featuring interactive tutorials, problem sets, and peer tutoring coordination.
                    </p>
                  </div>
                  <div className="mt-5">
                    <Link href="/projects" className="text-sm font-semibold leading-6 text-primary hover:text-primary/80 transition-colors">
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>

      {/* About section with Peace's profile */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-2">
            <div className="relative">
              <div className="aspect-w-4 aspect-h-5 overflow-hidden rounded-2xl">
                <Image
                  src="/images/peace1.png"
                  alt="Peace Ishimwe"
                  width={500}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary/90 text-white p-6 rounded-lg shadow-xl max-w-xs">
                <h3 className="text-lg font-semibold">ISHIMWE SANGWA PEACE</h3>
                <p className="mt-2">Data Scientist & Mathematical Specialist transforming data into meaningful insights.</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Me</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                I'm a forward-thinking mathematician and emerging data scientist with a passion for transforming complex data into actionable insights.
                I combine analytical expertise with strong leadership abilities and an unwavering commitment to community impact.
              </p>
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900">My Expertise</h3>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex items-center gap-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                      </svg>
                    </div>
                    <span className="text-base font-medium text-gray-900">Data Analysis & Visualization</span>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-secondary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.745 3A23.933 23.933 0 003 12c0 3.183.62 6.22 1.745 9M19.5 3c.967 2.78 1.5 5.817 1.5 9s-.533 6.22-1.5 9M8.25 8.885l1.444-.89a.75.75 0 011.105.402l2.402 7.206a.75.75 0 001.104.401l1.445-.889m-8.25.75l.213.09a1.687 1.687 0 002.062-.617l4.45-6.676a1.688 1.688 0 012.062-.618l.213.09" />
                      </svg>
                    </div>
                    <span className="text-base font-medium text-gray-900">Mathematical Modeling</span>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-accent">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                      </svg>
                    </div>
                    <span className="text-base font-medium text-gray-900">Statistical Analysis</span>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                      </svg>
                    </div>
                    <span className="text-base font-medium text-gray-900">Leadership & Project Management</span>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <Link href="/about" className="btn btn-primary inline-block">
                  Learn More About Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary">
        <div className="container-custom py-16 sm:py-24">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-12 shadow-2xl rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Let's collaborate on data-driven solutions!
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-center text-lg leading-8 text-gray-300">
              I'm always open to discussing research opportunities, data science projects, or collaborating on mathematical challenges.
            </p>
            <div className="mt-10 flex justify-center">
              <Link
                href="/contact"
                className="rounded-md bg-white px-8 py-3 text-lg font-semibold text-primary shadow-sm hover:bg-white/90 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}