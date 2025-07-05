import { useGetBooksQuery } from "@/redux/features/bookApi";
import { BookCard } from "./BookCard";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const featuredBooks = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic Literature",
    isbn: "978-0-7432-7356-5",
    copies: 5,
    available: 3,
    description:
      "A classic American novel set in the Jazz Age exploring themes of wealth, love, and the American Dream.",
    rating: 4.8,
    price: "Free",
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    isbn: "978-0-06-112008-4",
    copies: 3,
    available: 1,
    description:
      "A gripping tale of racial injustice and childhood innocence in the American South.",
    rating: 4.9,
    price: "Free",
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian Fiction",
    isbn: "978-0-452-28423-4",
    copies: 4,
    available: 0,
    description:
      "A dystopian social science fiction novel about totalitarian control and surveillance.",
    rating: 4.7,
    price: "Free",
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    isbn: "978-0-14-143951-8",
    copies: 2,
    available: 2,
    description:
      "A romantic novel of manners exploring love, reputation, and class in Regency England.",
    rating: 4.6,
    price: "Free",
  },
];

export const FeaturedBooks = () => {
  const { data, isLoading, isError } = useGetBooksQuery();
  const books = data?.data || [];

  // console.log(data.data);
  const handleBorrow = (id: number) => {
    console.log("Borrow book:", id);
  };

  const handleAddToWishlist = (id: number) => {
    console.log("Add to wishlist:", id);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Featured Books</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular and highly-rated books, carefully selected
            for every reader
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {books?.slice(0, 4)?.map((book) => (
            <BookCard
              key={book._id}
              book={book}
              onBorrow={handleBorrow}
              onAddToWishlist={handleAddToWishlist}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
