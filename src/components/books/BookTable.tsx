import { useState } from "react";
import { Edit, Trash2, BookOpen, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Link, useNavigate } from "react-router-dom";
import {
  useDeleteBookMutation,
  useGetBooksQuery,
} from "@/redux/features/bookApi";
import { toast } from "sonner";

interface Book {
  _id: number;
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
  const { data, isLoading, isError } = useGetBooksQuery();
  const [deleteBook] = useDeleteBookMutation();
  const books = data?.data || [];

  const handleDelete = async (bookId: string) => {
    toast("Are you sure about to delete", {
      action: {
        label: "Delete",
        onClick: async () => {
          try {
            const res = await deleteBook(bookId);
            if (res?.data?.success) {
              toast.success(`${res?.data?.message}`);
            } else {
              toast.error(`${res?.error?.data?.message}`);
            }
          } catch (error) {
            toast.error(`Something went wrong. Error: ${error?.message}`);
          }
        },
      },
    });
  };

  const handleBorrow = (id: string) => {
    navigate(`/borrow/${id}`);
  };

  const handleEdit = (id: string) => {
    navigate(`/edit-book/${id}`);
  };
  const displayBooks = maxRows ? books.slice(0, maxRows) : books;

  if (isError)
    return (
      <div className="flex flex-col justify-center items-center gap-2 text-center">
        Something went wrong. please try again...
      </div>
    );
  if (isLoading)
    return (
      <div className="flex flex-col justify-center items-center gap-2 text-center">
        <LoaderCircle className="animate-spin text-primary text-3xl" />
        Books Loading...
      </div>
    );
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
        {displayBooks?.map((book) => (
          <TableRow key={book._id}>
            <TableCell className="font-medium">
              <Link
                to={`/books/${book._id}`}
                className="hover:text-primary hover:underline transition-colors"
              >
                {book.title}
              </Link>
            </TableCell>
            <TableCell>{book.author}</TableCell>
            <TableCell className="hidden lg:table-cell">{book.genre}</TableCell>
            <TableCell className="hidden md:table-cell text-muted-foreground">
              {book.isbn}
            </TableCell>
            <TableCell className="hidden sm:table-cell">
              {book.copies}
            </TableCell>
            <TableCell>
              <Badge variant={book.available > 0 ? "default" : "secondary"}>
                {book.available > 0
                  ? `${book.copies} available`
                  : "Unavailable"}
              </Badge>
            </TableCell>
            <TableCell className="text-right">
              <div className="flex justify-end gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleEdit(book._id)}
                  className="h-8 w-8"
                >
                  <Edit className="h-3 w-3" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleBorrow(book._id)}
                  disabled={book.copies === 0}
                  className="h-8 w-8"
                >
                  <BookOpen className="h-3 w-3" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleDelete(book._id)}
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
