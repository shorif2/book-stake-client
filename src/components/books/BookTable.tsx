import { useState } from 'react';
import { Edit, Trash2, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Link, useNavigate } from 'react-router-dom';

interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  isbn: string;
  copies: number;
  available: number;
  description: string;
}

interface BookTableProps {
  showHeader?: boolean;
  maxRows?: number;
}

export const BookTable = ({ showHeader = true, maxRows }: BookTableProps) => {
  const navigate = useNavigate();
  // Mock data - TODO: Replace with actual API call
  const [books] = useState<Book[]>([
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      genre: 'Classic Literature',
      isbn: '978-0-7432-7356-5',
      copies: 5,
      available: 3,
      description: 'A classic American novel set in the Jazz Age'
    },
    {
      id: 2,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      genre: 'Fiction',
      isbn: '978-0-06-112008-4',
      copies: 3,
      available: 1,
      description: 'A gripping tale of racial injustice and childhood innocence'
    },
    {
      id: 3,
      title: '1984',
      author: 'George Orwell',
      genre: 'Dystopian Fiction',
      isbn: '978-0-452-28423-4',
      copies: 4,
      available: 0,
      description: 'A dystopian social science fiction novel'
    },
    {
      id: 4,
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      genre: 'Romance',
      isbn: '978-0-14-143951-8',
      copies: 2,
      available: 2,
      description: 'A romantic novel of manners'
    },
    {
      id: 5,
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      genre: 'Coming-of-age',
      isbn: '978-0-316-76948-0',
      copies: 3,
      available: 1,
      description: 'A controversial coming-of-age story'
    }
  ]);

  const handleDelete = (id: number) => {
    // TODO: Implement delete functionality
    console.log('Delete book:', id);
  };

  const handleBorrow = (id: number) => {
    navigate(`/borrow/${id}`);
  };

  const handleEdit = (id: number) => {
    navigate(`/edit-book/${id}`);
  };

  const displayBooks = maxRows ? books.slice(0, maxRows) : books;

  return (
    <Table>
      {showHeader && (
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Genre</TableHead>
            <TableHead className="hidden md:table-cell">ISBN</TableHead>
            <TableHead className="hidden sm:table-cell">Copies</TableHead>
            <TableHead>Availability</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
      )}
      <TableBody>
        {displayBooks.map((book) => (
          <TableRow key={book.id}>
              <TableCell className="font-medium">
                <Link 
                  to={`/books/${book.id}`}
                  className="hover:text-primary hover:underline transition-colors"
                >
                  {book.title}
                </Link>
              </TableCell>
            <TableCell>{book.author}</TableCell>
            <TableCell className="hidden lg:table-cell">{book.genre}</TableCell>
            <TableCell className="hidden md:table-cell text-muted-foreground">{book.isbn}</TableCell>
            <TableCell className="hidden sm:table-cell">{book.copies}</TableCell>
            <TableCell>
              <Badge variant={book.available > 0 ? "default" : "secondary"}>
                {book.available > 0 ? `${book.available} available` : 'Unavailable'}
              </Badge>
            </TableCell>
            <TableCell className="text-right">
              <div className="flex justify-end gap-1">
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => handleEdit(book.id)}
                  className="h-8 w-8"
                >
                  <Edit className="h-3 w-3" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => handleBorrow(book.id)}
                  disabled={book.available === 0}
                  className="h-8 w-8"
                >
                  <BookOpen className="h-3 w-3" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => handleDelete(book.id)}
                  className="h-8 w-8"
                >
                  <Trash2 className="h-3 w-3" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};