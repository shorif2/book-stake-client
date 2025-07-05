import { apiSlice } from "../api/apiSlice";

const booksApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getBooks: build.query({
      query: () => "/books",
    }),

    // get single book with id
    getSingleBooks: build.query({
      query: (bookId) => `/books/${bookId}`,
    }),

    //add book to database
    addBook: build.mutation({
      query: (bookDetails) => ({
        url: `/books`,
        method: "POST",
        body: bookDetails,
      }),
    }),

    //update book
    updateBook: build.mutation({
      query: ({ bookId, bookDetails }) => ({
        url: `/books/update/${bookId}`,
        method: "PATCH",
        body: bookDetails,
      }),
    }),

    // delete single book
    deleteBook: build.mutation({
      query: (bookId) => ({
        url: `/books/${bookId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetBooksQuery,
  useAddBookMutation,
  useDeleteBookMutation,
  useGetSingleBooksQuery,
  useUpdateBookMutation,
} = booksApi;
