import { BookOpen, Heart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  isbn: string;
  copies: number;
  available: number;
  description: string;
  rating?: number;
  price?: string;
  image?: string;
}

interface BookCardProps {
  book: Book;
  onBorrow: (id: number) => void;
  onAddToWishlist?: (id: number) => void;
}

export const BookCard = ({ book, onBorrow, onAddToWishlist }: BookCardProps) => {
  return (
    <Card className="card-modern group hover:scale-[1.02] transition-all duration-300 overflow-hidden">
      <div className="aspect-[3/4] bg-gradient-primary relative overflow-hidden">
        {book.image ? (
          <img 
            src={book.image} 
            alt={book.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <BookOpen className="h-16 w-16 text-primary-foreground opacity-80" />
          </div>
        )}
        
        {/* Availability Badge */}
        <div className="absolute top-3 left-3">
          <Badge variant={book.available > 0 ? "default" : "secondary"}>
            {book.available > 0 ? `${book.available} available` : 'Unavailable'}
          </Badge>
        </div>

        {/* Wishlist Button */}
        {onAddToWishlist && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-3 right-3 bg-background/20 hover:bg-background/40 backdrop-blur-sm"
            onClick={() => onAddToWishlist(book.id)}
          >
            <Heart className="h-4 w-4 text-primary-foreground" />
          </Button>
        )}

        {/* Rating */}
        {book.rating && (
          <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-background/20 backdrop-blur-sm rounded-full px-2 py-1">
            <Star className="h-3 w-3 text-warning fill-warning" />
            <span className="text-xs text-primary-foreground font-medium">{book.rating}</span>
          </div>
        )}
      </div>

      <CardContent className="p-4">
        <div className="space-y-2">
          <Link to={`/books/${book.id}`}>
            <h3 className="font-semibold text-card-foreground line-clamp-2 group-hover:text-primary transition-colors cursor-pointer">
              {book.title}
            </h3>
          </Link>
          <p className="text-sm text-muted-foreground">{book.author}</p>
          <Badge variant="outline" className="text-xs">
            {book.genre}
          </Badge>
          
          {book.price && (
            <p className="text-lg font-bold text-primary">{book.price}</p>
          )}
          
          <p className="text-xs text-muted-foreground line-clamp-2">
            {book.description}
          </p>
        </div>

        <div className="mt-4 space-y-2">
          <Button 
            className="w-full"
            asChild
            disabled={book.available === 0}
          >
            <Link to={book.available > 0 ? `/borrow/${book.id}` : '#'}>
              <BookOpen className="h-4 w-4 mr-2" />
              {book.available > 0 ? 'Borrow Now' : 'Unavailable'}
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};