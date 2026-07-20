// Library Management System

const books = [
  {
    title: "JavaScript Basics",
    author: "John Smith",
    available: true,
    pages: 250
  },
  {
    title: "Python Programming",
    author: "David Lee",
    available: false,
    pages: 400
  },
  {
    title: "HTML & CSS",
    author: "Sarah Khan",
    available: true,
    pages: 300
  },
  {
    title: "React Guide",
    author: "Ahmed Ali",
    available: true,
    pages: 350
  }
];

// Display all books
console.log("===== Library Books =====");

books.forEach(book => {
  console.log(
    `Title: ${book.title}
Author: ${book.author}
Available: ${book.available}
Pages: ${book.pages}
----------------------`
  );
});

// Filter available books
const availableBooks = books.filter(book => book.available);

console.log("\n===== Available Books =====");

availableBooks.forEach(book => {
  console.log(book.title);
});

// Map book titles
const bookTitles = books.map(book => book.title);

console.log("\n===== Book Titles =====");
console.log(bookTitles);

// Total number of pages
const totalPages = books.reduce((total, book) => {
  return total + book.pages;
}, 0);

console.log("\nTotal Pages in Library:", totalPages);

// Total number of books
const totalBooks = books.reduce((count) => {
  return count + 1;
}, 0);

console.log("Total Books:", totalBooks);