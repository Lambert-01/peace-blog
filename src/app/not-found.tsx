import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="bg-white min-h-full py-16 sm:py-24">
      <div className="container-custom flex flex-col items-center">
        <div className="text-center">
          <p className="text-base font-semibold text-primary">404</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
          <p className="mt-4 text-base leading-7 text-gray-600">
            Sorry, we couldn't find the page you're looking for.
          </p>
          <div className="mt-10">
            <Link href="/" className="btn btn-primary">
              Back to Home
            </Link>
          </div>
        </div>
        
        <div className="mt-16">
          <div className="relative">
            <div className="h-40 w-40 text-9xl flex items-center justify-center text-primary font-bold opacity-10">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="h-24 w-24 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <h2 className="text-lg font-medium text-gray-900">Popular pages</h2>
          <ul className="mt-4 flex flex-wrap justify-center gap-4">
            <li>
              <Link href="/about" className="text-primary hover:text-primary/80">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="text-primary hover:text-primary/80">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-primary hover:text-primary/80">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-primary hover:text-primary/80">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
} 