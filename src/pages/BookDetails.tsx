import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Book, Edit, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SimilarBooks } from '@/components/books/SimilarBooks';

// Mock data - in a real app, this would come from an API
const mockBooks = [
  {
    id: 1,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Classic Literature',
    isbn: '978-0-7432-7356-5',
    copies: 5,
    available: 3,
    description: 'A classic American novel set in the Jazz Age exploring themes of wealth, love, and the American Dream. Set in the summer of 1922, the story follows Nick Carraway as he observes the mysterious Jay Gatsby and his obsession with Daisy Buchanan.',
    rating: 4.8,
    price: 'Free',
    publishedYear: 1925,
    pages: 180,
    language: 'English'
  },
  {
    id: 2,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    isbn: '978-0-06-112008-4',
    copies: 3,
    available: 1,
    description: 'A gripping tale of racial injustice and childhood innocence in the American South.',
    rating: 4.9,
    price: 'Free',
    publishedYear: 1960,
    pages: 281,
    language: 'English'
  },
  {
    id: 3,
    title: '1984',
    author: 'George Orwell',
    genre: 'Dystopian Fiction',
    isbn: '978-0-452-28423-4',
    copies: 4,
    available: 0,
    description: 'A dystopian social science fiction novel about totalitarian control and surveillance.',
    rating: 4.7,
    price: 'Free',
    publishedYear: 1949,
    pages: 328,
    language: 'English'
  }
];

const BookDetails = () => {
  const { id } = useParams();
  const book = mockBooks.find(b => b.id === parseInt(id || '0'));

  if (!book) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardContent className="p-8 text-center">
            <Book className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Book Not Found</h2>
            <p className="text-muted-foreground mb-4">The book you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/books">Back to Books</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Button variant="ghost" asChild>
          <Link to="/books" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Books
          </Link>
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Book Cover */}
        <div className="md:col-span-1">
          <Card className="card-modern">
            <CardContent className="p-6">
              <div className="aspect-[3/4] bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-20 w-20 text-primary-foreground opacity-80" />
              </div>
              <div className="space-y-3">
                <Button className="w-full" asChild disabled={book.available === 0}>
                  <Link to={`/borrow/${book.id}`}>
                    <BookOpen className="h-4 w-4 mr-2" />
                    {book.available > 0 ? 'Borrow Now' : 'Unavailable'}
                  </Link>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link to={`/edit-book/${book.id}`}>
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Book
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Book Details */}
        <div className="md:col-span-2 space-y-6">
          <Card className="card-modern">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-3xl mb-2">{book.title}</CardTitle>
                  <CardDescription className="text-lg">by {book.author}</CardDescription>
                </div>
                <Badge variant={book.available > 0 ? "default" : "secondary"} className="ml-4">
                  {book.available > 0 ? `${book.available} available` : 'Unavailable'}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Description</h3>
                    <p className="text-muted-foreground">{book.description}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Genre</h3>
                    <Badge variant="outline">{book.genre}</Badge>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground">ISBN</h4>
                      <p className="font-mono text-sm">{book.isbn}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground">Published</h4>
                      <p>{book.publishedYear}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground">Pages</h4>
                      <p>{book.pages}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground">Language</h4>
                      <p>{book.language}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground">Total Copies</h4>
                      <p>{book.copies}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground">Rating</h4>
                      <p className="flex items-center gap-1">
                        ⭐ {book.rating}/5
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Similar Books Section */}
      <div className="mt-12">
        <SimilarBooks currentBookGenre={book.genre} currentBookId={book.id} />
      </div>
    </div>
  );
};

export default BookDetails;