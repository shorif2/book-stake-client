export type CreateBookFormData = {
  title: string;
  author: string;
  genre: string;
  isbn: string;
  description: string;
  copies: number;
};

type AddBookResponse = {
  success: boolean;
  message: string;
};

export type Book = CreateBookFormData & {
  _id?: string;
};

export interface BorrowFormData {
  borrowerName: string;
  borrowerEmail: string;
  quantity: string;
  dueDate: string;
  notes: string;
}
