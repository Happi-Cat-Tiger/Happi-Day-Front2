import Link from 'next/link';
import { AiOutlineExclamationCircle } from 'react-icons/ai';

const NotFound = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
      <AiOutlineExclamationCircle className="mx-auto h-12 w-12 text-gray-400" />
      <h1 className="mt-2 text-4xl font-extrabold">404 Not Found</h1>
      <p className="mt-2 text-base text-gray-500">
        Sorry, the page you are looking for does not exist. You might have used an outdated link or entered the URL
        incorrectly.
      </p>
      <div className="mt-6">
        <Link
          className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
          href="/">
          Go back to homepage
        </Link>
      </div>
    </main>
  );
};
export default NotFound;
