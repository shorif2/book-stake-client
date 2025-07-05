import { BarChart3, Book, LoaderCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useBorrowSummaryQuery } from "@/redux/features/borrowApi";

const BorrowSummary = () => {
  const { data, isLoading, isError, error } = useBorrowSummaryQuery(undefined);

  const totalBorrowedBooks = data?.data?.reduce(
    (sum, book) => sum + book.totalQuantity,
    0
  );

  if (isError)
    return (
      <div className="flex flex-col justify-center items-center gap-2 text-center">
        Something went wrong. please try again... Error: {error?.message}
      </div>
    );

  if (isLoading)
    return (
      <div className="flex flex-col justify-center items-center gap-2 text-center">
        <LoaderCircle className="animate-spin text-accent text-3xl" />
        Borrow Summary Loading...
      </div>
    );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-8">
        <BarChart3 className="h-6 w-6 text-primary" />
        <h1 className="text-3xl font-bold">Borrow Summary</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Books Borrowed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">
              {totalBorrowedBooks}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Unique Titles
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent">
              {data?.data?.length}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Average per Book
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">
              {data?.data?.length > 0
                ? (totalBorrowedBooks / data?.data?.length).toFixed(1)
                : "0"}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Book className="h-5 w-5" />
            Borrowed Books Summary
          </CardTitle>
          <CardDescription>
            Overview of all books that have been borrowed from the library
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Book Title</TableHead>
                <TableHead>ISBN</TableHead>
                <TableHead className="text-right">
                  Total Quantity Borrowed
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data?.data.length > 0 ? (
                data?.data?.map((book) => (
                  <TableRow key={book?.book?.isbn}>
                    <TableCell className="font-medium">
                      {book?.book?.title}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {book?.book?.isbn}
                    </TableCell>
                    <TableCell className="text-right font-semibold">
                      {book?.totalQuantity}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={3}
                    className="text-center py-8 text-muted-foreground"
                  >
                    No books have been borrowed yet
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default BorrowSummary;
