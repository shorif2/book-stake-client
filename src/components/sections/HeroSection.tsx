import { Book, Plus, BarChart3, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-primary text-primary-foreground py-24 overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0' y='0' width='40' height='40' fill='white' fill-opacity='0'/%3E%3Cpath d='M40 0H0V40' stroke='%23ffffff' stroke-opacity='0.12' stroke-width='1'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center shadow-elegant">
              <Book className="h-10 w-10 text-primary-foreground" />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Discover Your Next
            <span className="block text-accent">Great Read</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Explore thousands of books, manage your reading journey, and connect
            with a community of book lovers in our modern digital library.
          </p>

          {/* Search Bar */}
          <div className="max-w-lg mx-auto mb-8">
            <div className="relative">
              <Search className="absolute z-10 left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search for books, authors, or genres..."
                className="pl-10 pr-4 py-3 bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="flex items-center gap-2"
              asChild
            >
              <Link to="/books">
                <Book className="h-5 w-5" />
                Browse Collection
              </Link>
            </Button>
            <Button
              size="lg"
              className="flex items-center gap-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 backdrop-blur-sm border border-primary-foreground/20"
              asChild
            >
              <Link to="/create-book">
                <Plus className="h-5 w-5" />
                Add New Book
              </Link>
            </Button>
            {/* View Analytics button */}
            <Button
              size="lg"
              variant="secondary"
              className="flex items-center gap-2"
              asChild
            >
              <Link to="/books">
                <BarChart3 className="h-5 w-5" />
                View Analytics
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
