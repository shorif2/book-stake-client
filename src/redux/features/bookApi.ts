import { apiSlice } from "../api/apiSlice";

const booksApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getBooks: build.query({
      query: () => "/books",
      providesTags: ["books"],
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
      invalidatesTags: ["books"],
    }),

    //update book
    updateBook: build.mutation({
      query: ({ bookId, bookDetails }) => ({
        url: `/books/update/${bookId}`,
        method: "PATCH",
        body: bookDetails,
      }),
      invalidatesTags: ["books"],
    }),

    // delete single book
    deleteBook: build.mutation({
      query: (bookId) => ({
        url: `/books/${bookId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["books"],
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
