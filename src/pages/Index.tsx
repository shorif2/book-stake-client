import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedBooks } from "@/components/books/FeaturedBooks";
import { BookCategories } from "@/components/books/BookCategories";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { AuthorsSection } from "@/components/sections/AuthorsSection";
import LatestBooks from "@/components/sections/LatestBooks";
import Stats from "@/components/sections/Stats";
import { NewFooter } from "@/components/layout/NewFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Books */}
      <FeaturedBooks />

      {/* Book Categories */}
      <BookCategories />

      {/* Latest Books Table Preview */}
      <LatestBooks />

      {/* Authors Section */}
      <AuthorsSection />

      {/* Newsletter */}
      <NewsletterSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Stats Section */}
      <Stats />
    </div>
  );
};

export default Index;
