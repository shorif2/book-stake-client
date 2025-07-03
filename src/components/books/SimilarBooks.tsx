import { BookCard } from './BookCard';

// Mock similar books data - in a real app, this would come from an API based on genre/author
const similarBooksData = [
  {
    id: 4,
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    genre: 'Classic Literature',
    isbn: '978-0-316-76948-0',
    copies: 4,
    available: 2,
    description: 'A controversial novel about teenage rebellion and alienation in 1950s America.',
    rating: 4.2,
    price: 'Free'
  },
  {
    id: 5,
    title: 'Brave New World',
    author: 'Aldous Huxley',
    genre: 'Dystopian Fiction',
    isbn: '978-0-06-085052-4',
    copies: 3,
    available: 1,
    description: 'A dystopian social science fiction novel exploring a technologically advanced future society.',
    rating: 4.5,
    price: 'Free'
  },
  {
    id: 6,
    title: 'Of Mice and Men',
    author: 'John Steinbeck',
    genre: 'Classic Literature',
    isbn: '978-0-14-017739-8',
    copies: 5,
    available: 3,
    description: 'A novella about the friendship between two displaced migrant ranch workers during the Great Depression.',
    rating: 4.3,
    price: 'Free'
  }
];

interface SimilarBooksProps {
  currentBookGenre: string;
  currentBookId: number;
}

export const SimilarBooks = ({ currentBookGenre, currentBookId }: SimilarBooksProps) => {
  // Filter books by similar genre and exclude current book
  const similarBooks = similarBooksData
    .filter(book => book.genre === currentBookGenre && book.id !== currentBookId)
    .slice(0, 3);

  if (similarBooks.length === 0) {
    return null;
  }

  const handleBorrow = (id: number) => {
    // This would be handled by parent component or context
    console.log('Borrow book:', id);
  };

  const handleAddToWishlist = (id: number) => {
    // This would be handled by parent component or context
    console.log('Add to wishlist:', id);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Similar Books</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {similarBooks.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            onBorrow={handleBorrow}
            onAddToWishlist={handleAddToWishlist}
          />
        ))}
      </div>
    </div>
  );
};