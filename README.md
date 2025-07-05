# Book Stack Client

A modern, full-featured book library management system built with React, TypeScript, Redux Toolkit, and Tailwind CSS.

## Features

- Browse books, view detailed book information and categories
- Add, edit, and delete books
- Borrow and return books with summary analytics
- Featured authors and testimonials
- Responsive, clean UI with Tailwind CSS
- Real-time updates with RTK Query
- Error handling and loading states
- Modern, accessible design

## Technologies Used

- **React** (with TypeScript) — UI library for building interactive interfaces
- **Redux Toolkit** & **RTK Query** — State management and data fetching
- **React Router DOM** — Client-side routing
- **Tailwind CSS** — Utility-first CSS framework for styling
- **Radix UI** — Accessible UI primitives
- **Lucide React** — Icon library
- **Sonner** — Toast notifications
- **Vite** — Fast build tool and development server

### Installation

```bash
npm install
```

### Running the App

```bash
npm run dev
```

### Building for Production

```bash
npm run build
```

## Main Pages & Navigation

- `/` — Home (Hero, Featured Books, Categories, Authors, Newsletter, Testimonials, Stats)
- `/books` — All Books (table view, manage collection)
- `/books/:id` — Book Details (view, borrow, edit)
- `/create-book` — Add a new book
- `/edit-book/:id` — Edit book details
- `/borrow/:bookId` — Borrow a book
- `/borrow-summary` — Borrowed books analytics
- `*` — 404 Not Found
