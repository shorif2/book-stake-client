import { BookTable } from "@/components/books/BookTable";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const LatestBooks = () => {
  return (
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
  );
};

export default LatestBooks;
