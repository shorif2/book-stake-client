import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Award, Users } from "lucide-react";

const featuredAuthors = [
  {
    id: 1,
    name: "Margaret Atwood",
    genre: "Dystopian Fiction",
    bio: "Award-winning Canadian author known for The Handmaid's Tale and speculative fiction.",
    booksCount: 15,
    rating: 4.8,
    followers: 2500,
    image:
      "https://images.unsplash.com/photo-1494790108755-2616c79e1c0e?w=300&h=300&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Neil Gaiman",
    genre: "Fantasy",
    bio: "British author of fantasy, horror, and graphic novels including American Gods and The Sandman.",
    booksCount: 12,
    rating: 4.7,
    followers: 3200,
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Chimamanda Ngozi Adichie",
    genre: "Contemporary Fiction",
    bio: "Nigerian author acclaimed for Americanah and Half of a Yellow Sun.",
    booksCount: 8,
    rating: 4.9,
    followers: 1800,
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
  },
];

export const AuthorsSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Featured Authors</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover works from our most celebrated authors and explore their
            literary contributions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredAuthors.map((author) => (
            <Card
              key={author.id}
              className="card-modern group hover:shadow-elegant transition-smooth"
            >
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="relative mx-auto mb-4">
                    <img
                      src={author.image}
                      alt={author.name}
                      className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-primary/10"
                    />
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2  bg-accent rounded-full p-1">
                      <Award className="h-4 w-4 text-accent-foreground" />
                    </div>
                  </div>

                  <h3 className="heading-sm mb-2">{author.name}</h3>
                  <Badge variant="secondary" className="mb-3">
                    {author.genre}
                  </Badge>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {author.bio}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1">
                      <BookOpen className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">
                        {author.booksCount} Books
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4 text-accent" />
                      <span className="text-muted-foreground">
                        {author.followers} Followers
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <span className="text-warning">★</span>
                      <span className="font-medium">{author.rating}</span>
                      <span className="text-muted-foreground text-sm">
                        rating
                      </span>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="group-hover:bg-primary group-hover:text-primary-foreground transition-smooth"
                    >
                      View Books
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            View All Authors
          </Button>
        </div>
      </div>
    </section>
  );
};
