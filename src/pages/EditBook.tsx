import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Save, Book } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useState, useEffect } from 'react';

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
    description: 'A classic American novel set in the Jazz Age exploring themes of wealth, love, and the American Dream.',
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
    publishedYear: 1949,
    pages: 328,
    language: 'English'
  }
];

const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  
  const book = mockBooks.find(b => b.id === parseInt(id || '0'));
  
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
    isbn: '',
    copies: 0,
    available: 0,
    description: '',
    publishedYear: 0,
    pages: 0,
    language: ''
  });

  useEffect(() => {
    if (book) {
      setFormData(book);
    }
  }, [book]);

  if (!book) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardContent className="p-8 text-center">
            <Book className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Book Not Found</h2>
            <p className="text-muted-foreground mb-4">The book you're trying to edit doesn't exist.</p>
            <Button asChild>
              <Link to="/books">Back to Books</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Book Updated",
        description: `"${formData.title}" has been successfully updated.`,
      });
      navigate(`/books/${id}`);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'copies' || name === 'available' || name === 'publishedYear' || name === 'pages' 
        ? parseInt(value) || 0 
        : value
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Button variant="ghost" asChild>
          <Link to={`/books/${id}`} className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Book Details
          </Link>
        </Button>
      </div>

      <Card className="card-modern">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Book className="h-6 w-6 text-primary" />
            Edit Book
          </CardTitle>
          <CardDescription>
            Update the details for "{book.title}"
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="author">Author</Label>
                <Input
                  id="author"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="genre">Genre</Label>
                <Input
                  id="genre"
                  name="genre"
                  value={formData.genre}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="isbn">ISBN</Label>
                <Input
                  id="isbn"
                  name="isbn"
                  value={formData.isbn}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label htmlFor="copies">Total Copies</Label>
                <Input
                  id="copies"
                  name="copies"
                  type="number"
                  min="0"
                  value={formData.copies}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="available">Available</Label>
                <Input
                  id="available"
                  name="available"
                  type="number"
                  min="0"
                  max={formData.copies}
                  value={formData.available}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="publishedYear">Published Year</Label>
                <Input
                  id="publishedYear"
                  name="publishedYear"
                  type="number"
                  min="1000"
                  max={new Date().getFullYear()}
                  value={formData.publishedYear}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pages">Pages</Label>
                <Input
                  id="pages"
                  name="pages"
                  type="number"
                  min="1"
                  value={formData.pages}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="language">Language</Label>
              <Input
                id="language"
                name="language"
                value={formData.language}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                required
              />
            </div>

            <div className="flex gap-4">
              <Button type="submit" disabled={isLoading}>
                <Save className="h-4 w-4 mr-2" />
                {isLoading ? 'Updating...' : 'Update Book'}
              </Button>
              <Button variant="outline" type="button" asChild>
                <Link to={`/books/${id}`}>Cancel</Link>
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default EditBook;