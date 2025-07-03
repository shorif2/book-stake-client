import { BarChart3, Book } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const BorrowSummary = () => {
  // Mock data - TODO: Replace with actual API call
  const borrowSummary = [
    { title: 'The Great Gatsby', isbn: '978-0-7432-7356-5', totalBorrowed: 5 },
    { title: 'To Kill a Mockingbird', isbn: '978-0-06-112008-4', totalBorrowed: 3 },
    { title: '1984', isbn: '978-0-452-28423-4', totalBorrowed: 7 },
    { title: 'Pride and Prejudice', isbn: '978-0-14-143951-8', totalBorrowed: 2 },
  ];

  const totalBorrowedBooks = borrowSummary.reduce((sum, book) => sum + book.totalBorrowed, 0);

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
            <div className="text-2xl font-bold text-primary">{totalBorrowedBooks}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Unique Titles
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent">{borrowSummary.length}</div>
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
              {borrowSummary.length > 0 ? (totalBorrowedBooks / borrowSummary.length).toFixed(1) : '0'}
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
                <TableHead className="text-right">Total Quantity Borrowed</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {borrowSummary.length > 0 ? (
                borrowSummary.map((book, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{book.title}</TableCell>
                    <TableCell className="text-muted-foreground">{book.isbn}</TableCell>
                    <TableCell className="text-right font-semibold">{book.totalBorrowed}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={3} className="text-center py-8 text-muted-foreground">
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