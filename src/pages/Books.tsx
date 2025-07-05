import { Link } from "react-router-dom";
import { Book, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookTable } from "@/components/books/BookTable";

const Books = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <Book className="h-6 w-6 text-primary" />
          <h1 className="text-3xl font-bold">All Books</h1>
        </div>
        <Button asChild>
          <Link to="/create-book" className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Add New Book
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Library Collection</CardTitle>
          <CardDescription>
            Manage your library's book collection
          </CardDescription>
        </CardHeader>
        <CardContent>
          <BookTable />
        </CardContent>
      </Card>
    </div>
  );
};

export default Books;
