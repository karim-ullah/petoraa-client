import Link from "next/link";
import { Button } from "@heroui/react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Illustration */}
        <div className="text-8xl mb-6">🐾</div>

        {/* Error Code */}
        <h1 className="text-8xl md:text-9xl font-bold text-accent">404</h1>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="text-default-500 text-lg max-w-lg mx-auto mb-8">
          Looks like this pet has wandered off. The page you're looking for
          doesn't exist or may have been moved.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button color="warning" size="sm">
            <Link href="/">Back to Home</Link>
          </Button>

          <Button variant="bordered" size="sm">
            <Link href="/all-pets">Browse Pets</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
