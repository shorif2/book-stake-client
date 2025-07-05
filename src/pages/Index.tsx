import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedBooks } from "@/components/books/FeaturedBooks";
import { BookCategories } from "@/components/books/BookCategories";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { AuthorsSection } from "@/components/sections/AuthorsSection";
import { BookTable } from "@/components/books/BookTable";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="heading-lg mb-4 text-center">Latest Additions</h2>
            <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
              Browse our newest books and popular titles with real-time
              availability
            </p>
          </div>
          <Card className="card-modern">
            <CardContent className="p-0">
              <BookTable maxRows={5} />
            </CardContent>
          </Card>
          <div className="text-center mt-6">
            <Button variant="outline" size="lg" asChild>
              <Link to="/books">View Complete Collection</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Authors Section */}
      <AuthorsSection />

      {/* Newsletter */}
      <NewsletterSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Stats Section */}
      <div className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="heading-lg mb-4">Library Statistics</h2>
            <p className="text-muted-foreground">
              Real-time insights into our growing library
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">500+</div>
              <div className="text-muted-foreground font-medium">
                Books Available
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent">25</div>
              <div className="text-muted-foreground font-medium">
                Categories
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-success">150</div>
              <div className="text-muted-foreground font-medium">
                Active Borrows
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-warning">98%</div>
              <div className="text-muted-foreground font-medium">
                Availability Rate
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
