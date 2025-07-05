import { apiSlice } from "../api/apiSlice";

const borrowApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    borrowSummary: build.query({
      query: () => "/borrow",
      providesTags: ["borrow"],
    }),

    //add book to database
    borrowBooks: build.mutation({
      query: (borrowBookDetails) => ({
        url: `/borrow`,
        method: "POST",
        body: borrowBookDetails,
      }),
      invalidatesTags: ["borrow"],
    }),
  }),
});

export const { useBorrowBooksMutation, useBorrowSummaryQuery } = borrowApi;
