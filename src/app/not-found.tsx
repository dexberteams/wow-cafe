import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h1 className="text-6xl font-bold text-amber-700 mb-4 font-dm-serif">404</h1>
      <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
      <p className="text-gray-600 mb-8 max-w-md">
        Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link 
        href="/"
        className="px-6 py-3 bg-amber-700 text-white rounded-full hover:bg-amber-800 transition-colors duration-300 font-medium shadow-md"
      >
        Return to Home
      </Link>
    </div>
  );
}
