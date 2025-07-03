import { Link } from 'react-router-dom';
import { Book, Heart, Zap, Award, Compass, Palette } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const categories = [
  {
    id: 1,
    name: 'Classic Literature',
    count: 85,
    icon: Book,
    color: 'bg-primary/10 text-primary',
    description: 'Timeless masterpieces'
  },
  {
    id: 2,
    name: 'Romance',
    count: 67,
    icon: Heart,
    color: 'bg-destructive/10 text-destructive',
    description: 'Love stories & relationships'
  },
  {
    id: 3,
    name: 'Science Fiction',
    count: 92,
    icon: Zap,
    color: 'bg-accent/10 text-accent',
    description: 'Future worlds & technology'
  },
  {
    id: 4,
    name: 'Mystery & Thriller',
    count: 74,
    icon: Award,
    color: 'bg-warning/10 text-warning',
    description: 'Suspense & crime stories'
  },
  {
    id: 5,
    name: 'Adventure',
    count: 56,
    icon: Compass,
    color: 'bg-success/10 text-success',
    description: 'Epic journeys & quests'
  },
  {
    id: 6,
    name: 'Arts & Culture',
    count: 43,
    icon: Palette,
    color: 'bg-muted-foreground/10 text-muted-foreground',
    description: 'Creative expression & history'
  }
];

export const BookCategories = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Browse by Category</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse collection organized by genres and topics
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link key={category.id} to="/books" className="group">
                <Card className="card-modern group-hover:scale-[1.02] transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${category.color}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-card-foreground group-hover:text-primary transition-colors">
                          {category.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {category.description}
                        </p>
                        <div className="mt-3">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                            {category.count} books
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};