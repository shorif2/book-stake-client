import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, BookOpen, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useGetSingleBooksQuery } from "@/redux/features/bookApi";
import { useBorrowBooksMutation } from "@/redux/features/borrowApi";
import { toast } from "sonner";
import { BorrowFormData } from "@/lib/types";

const BorrowBook = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, isError } = useGetSingleBooksQuery(bookId);
  const [borrowBook, { isLoading: isBorrowing }] = useBorrowBooksMutation();
  const book = data?.data || {};

  const [formData, setFormData] = useState<BorrowFormData>({
    borrowerName: "",
    borrowerEmail: "",
    quantity: "",
    dueDate: "",
    notes: "",
  });

  // Set default return date to 2 weeks from now
  useState(() => {
    const defaultReturnDate = new Date();
    defaultReturnDate.setDate(defaultReturnDate.getDate() + 14);
    setFormData((prev) => ({
      ...prev,
      dueDate: defaultReturnDate.toISOString().split("T")[0],
    }));
  });

  if (!book) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardContent className="p-8 text-center">
            <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Book Not Found</h2>
            <p className="text-muted-foreground mb-4">
              The book you're trying to borrow doesn't exist.
            </p>
            <Button asChild>
              <Link to="/books">Back to Books</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (book.available === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardContent className="p-8 text-center">
            <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Book Unavailable</h2>
            <p className="text-muted-foreground mb-4">
              "{book.title}" is currently not available for borrowing.
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild>
                <Link to="/books">Browse Other Books</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to={`/books/${book.id}`}>View Book Details</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const borrowInfo = { ...formData, book: book._id };
      const res = await borrowBook(borrowInfo);
      if (res?.data?.success) {
        toast.success(
          `"${book.title}" has been borrowed by ${
            formData.borrowerName
          }. Return date: ${new Date(formData.dueDate).toLocaleDateString()}`
        );
        navigate("/borrow-summary");
      }
    } catch (error) {
      toast.error(`Something went wrong ${error?.message}`);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Button variant="ghost" asChild>
          <Link to={`/books/${book._id}`} className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Book Details
          </Link>
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Book Info */}
        <div className="md:col-span-1">
          <Card className="card-modern">
            <CardHeader>
              <CardTitle className="text-lg">Book Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-[3/4] bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-16 w-16 text-primary-foreground opacity-80" />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">{book.title}</h3>
                <p className="text-sm text-muted-foreground">
                  by {book.author}
                </p>
                <p className="text-sm text-muted-foreground">{book.genre}</p>
                <p className="text-sm font-medium text-success">
                  {book.copies} copies available
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Borrow Form */}
        <div className="md:col-span-2">
          <Card className="card-modern">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-primary" />
                Borrow Book
              </CardTitle>
              <CardDescription>
                Fill out the form below to borrow "{book.title}"
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="borrowerName">
                      <User className="h-4 w-4 inline mr-2" />
                      Full Name
                    </Label>
                    <Input
                      id="borrowerName"
                      name="borrowerName"
                      value={formData.borrowerName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="borrowerEmail">Email Address</Label>
                    <Input
                      id="borrowerEmail"
                      name="borrowerEmail"
                      type="email"
                      value={formData?.borrowerEmail}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="quantity">Quantity</Label>
                    <Input
                      id="quantity"
                      name="quantity"
                      type="number"
                      min={1}
                      max={book.copies}
                      value={formData.quantity}
                      onChange={handleChange}
                      placeholder="Enter your borrow quantity"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dueDate">
                      <Calendar className="h-4 w-4 inline mr-2" />
                      Expected Return Date
                    </Label>
                    <Input
                      id="dueDate"
                      name="dueDate"
                      type="date"
                      value={formData.dueDate}
                      onChange={handleChange}
                      min={new Date().toISOString().split("T")[0]}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Additional Notes (Optional)</Label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Any special instructions or notes..."
                    className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    rows={3}
                  />
                </div>

                <div className="flex gap-4">
                  <Button type="submit" disabled={isLoading} className="flex-1">
                    <BookOpen className="h-4 w-4 mr-2" />
                    {isBorrowing ? "Processing..." : "Confirm Borrow"}
                  </Button>
                  <Button variant="outline" type="button" asChild>
                    <Link to={`/books/${book._id}`}>Cancel</Link>
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BorrowBook;
