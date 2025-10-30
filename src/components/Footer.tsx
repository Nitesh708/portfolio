import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-bg py-8 md:py-12 border-t border-primary-bg">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-text-secondary text-sm md:text-base text-center md:text-left">
            <p className="flex items-center justify-center md:justify-start gap-2">
              Made with <Heart className="w-4 h-4 text-accent-1 fill-accent-1" /> by Aditi Arya
            </p>
          </div>

          <div className="text-text-secondary/70 text-sm md:text-base">
            © {currentYear} All rights reserved.
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-primary-bg text-center">
          <p className="text-text-secondary/70 text-xs md:text-sm">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
