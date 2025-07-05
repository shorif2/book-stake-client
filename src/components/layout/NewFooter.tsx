import { Book, Users, Star, Mail, Award } from "lucide-react";
import { Link } from "react-router-dom";

export const NewFooter = () => {
  return (
    <footer className=" bg-muted/30 text-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          {/* Site Identity & Quote */}
          <div className="flex-1 flex flex-col gap-4 items-center md:items-start">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-primary">
                <Book className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold tracking-wide">LibraryMS</span>
            </div>
            <blockquote className="italic text-muted-foreground max-w-xs">
              "A room without books is like a body without a soul."
              <br />
              <span className="text-xs">— Cicero</span>
            </blockquote>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Star className="h-4 w-4 text-warning" />
              500+ Books • 25 Categories • 98% Availability
            </div>
          </div>

          {/* Quick Links & Community */}
          <div className="flex-1 flex flex-col gap-4 items-center">
            <div className="flex gap-4 mb-2">
              <Link
                to="/books"
                className="hover:underline flex items-center gap-1"
              >
                <Book className="h-4 w-4" /> Browse Books
              </Link>
              <Link
                to="/books"
                className="hover:underline flex items-center gap-1"
              >
                <Award className="h-4 w-4" /> Featured Authors
              </Link>
              <Link
                to="/books"
                className="hover:underline flex items-center gap-1"
              >
                <Users className="h-4 w-4" /> Community
              </Link>
            </div>
            <div className="text-xs text-muted-foreground text-center max-w-xs">
              Join thousands of readers discovering new favorites and sharing
              reviews every day.
            </div>
            <div className="flex gap-2 mt-2">
              <Link
                to="/newsletter"
                className="inline-flex items-center px-3 py-1.5 rounded bg-accent text-accent-foreground text-xs font-medium hover:bg-accent/80 transition"
              >
                <Mail className="h-4 w-4 mr-1" /> Subscribe to Newsletter
              </Link>
            </div>
          </div>

          {/* Testimonials & Copyright */}
          <div className="flex-1 flex flex-col gap-4 items-center md:items-end">
            <div className="text-sm text-muted-foreground max-w-xs text-center md:text-right">
              <span className="font-semibold">What our readers say:</span>
              <br />
              <span className="italic">
                “This library system has transformed how I discover and borrow
                books.”
              </span>
              <br />
              <span className="text-xs">— Sarah J., Literature Student</span>
            </div>
            <div className="text-xs text-muted-foreground mt-4">
              &copy; {new Date().getFullYear()} Book Stack. Built with React,
              RTK Query, and Tailwind CSS.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
