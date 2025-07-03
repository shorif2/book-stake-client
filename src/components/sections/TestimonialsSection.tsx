import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'English Literature Student',
    content: 'This library system has transformed how I discover and borrow books. The interface is intuitive and the collection is incredible.',
    rating: 5,
    avatar: '👩‍🎓'
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    role: 'Research Professor',
    content: 'As a researcher, I appreciate the detailed cataloging and easy access to academic resources. The search functionality is outstanding.',
    rating: 5,
    avatar: '👨‍🏫'
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'Community Member',
    content: 'I love how I can browse categories and discover new books. The recommendation system has introduced me to amazing authors.',
    rating: 5,
    avatar: '👩‍💼'
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">What Our Readers Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied readers who love our library system
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="card-modern">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-warning fill-warning" />
                    ))}
                  </div>
                  
                  <div className="relative">
                    <Quote className="h-8 w-8 text-muted-foreground/20 absolute -top-2 -left-2" />
                    <blockquote className="text-muted-foreground italic relative z-10">
                      "{testimonial.content}"
                    </blockquote>
                  </div>
                  
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="text-2xl">{testimonial.avatar}</div>
                    <div>
                      <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};