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
              A passionate full-stack developer creating beautiful, responsive, and user-friendly web applications.
              Specializing in modern JavaScript frameworks and building interactive experiences.
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
              <a href="https://github.com/peace-ishimwe" target="_blank" rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://linkedin.com/in/peace-ishimwe" target="_blank" rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="https://twitter.com/peace_ishimwe" target="_blank" rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
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
                    E-Commerce Platform
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-x-4 text-xs">
                    <span className="text-gray-500">2023</span>
                    <span className="relative z-10 rounded-full bg-secondary/10 px-3 py-1.5 font-medium text-secondary">Web App</span>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                      <span className="absolute inset-0"></span>
                      E-Commerce Platform
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      A modern e-commerce platform with features like user authentication, product management, and payment integration.
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
                    Task Management App
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-x-4 text-xs">
                    <span className="text-gray-500">2023</span>
                    <span className="relative z-10 rounded-full bg-primary/10 px-3 py-1.5 font-medium text-primary">Mobile App</span>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                      <span className="absolute inset-0"></span>
                      Task Management App
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      A cross-platform mobile application for task management with real-time synchronization across devices.
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
                    Analytics Dashboard
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-x-4 text-xs">
                    <span className="text-gray-500">2024</span>
                    <span className="relative z-10 rounded-full bg-accent/10 px-3 py-1.5 font-medium text-accent">Dashboard</span>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                      <span className="absolute inset-0"></span>
                      Analytics Dashboard
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      A comprehensive analytics dashboard for visualizing and analyzing business data with customizable widgets.
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
                <h3 className="text-lg font-semibold">Peace Ishimwe</h3>
                <p className="mt-2">Full-Stack Developer passionate about creating amazing digital experiences.</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Me</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                I'm a passionate Full-Stack Developer with expertise in building modern web applications. 
                I focus on creating responsive, user-friendly experiences that solve real-world problems.
              </p>
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900">My Expertise</h3>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex items-center gap-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                      </svg>
                    </div>
                    <span className="text-base font-medium text-gray-900">Frontend Development</span>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-secondary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                      </svg>
                    </div>
                    <span className="text-base font-medium text-gray-900">Backend Development</span>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-accent">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                      </svg>
                    </div>
                    <span className="text-base font-medium text-gray-900">UI/UX Design</span>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6zm2.25 0h.008v.008H9.75V6z" />
                      </svg>
                    </div>
                    <span className="text-base font-medium text-gray-900">Responsive Development</span>
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
              Let's work together on your next project!
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-center text-lg leading-8 text-gray-300">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
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