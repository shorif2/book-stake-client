import { useGetBooksQuery } from "@/redux/features/bookApi";
import { BookCard } from "./BookCard";
import { LoaderCircle } from "lucide-react";
export const FeaturedBooks = () => {
  const { data, isLoading, isError } = useGetBooksQuery(undefined);
  const books = data?.data || [];

  // console.log(data.data);
  const handleBorrow = (id: number) => {
    console.log("Borrow book:", id);
  };

  const handleAddToWishlist = (id: number) => {
    console.log("Add to wishlist:", id);
  };

  if (isLoading)
    return (
      <div className="flex flex-col justify-center items-center gap-2 text-center pt-10">
        <LoaderCircle className="animate-spin text-primary text-3xl" />
        Featured Books Loading...
      </div>
    );

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
          {books.length == 0 ? <p>No featuredBooks found!</p> : ""}
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
