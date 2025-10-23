// Switch to the correct database
use("plp_bookstore");

// Insert 10 sample books
db.books.insertMany([
  {
    title: "The Silent Patient",
    author: "Alex Michaelides",
    genre: "Thriller",
    published_year: 2019,
    price: 1300,
    in_stock: true,
    pages: 336,
    publisher: "Celadon Books"
  },
  {
    title: "Educated",
    author: "Tara Westover",
    genre: "Memoir",
    published_year: 2018,
    price: 1500,
    in_stock: true,
    pages: 352,
    publisher: "Random House"
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-help",
    published_year: 2018,
    price: 2000,
    in_stock: true,
    pages: 320,
    publisher: "Avery"
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    published_year: 1988,
    price: 900,
    in_stock: false,
    pages: 208,
    publisher: "HarperCollins"
  },
  {
    title: "Becoming",
    author: "Michelle Obama",
    genre: "Biography",
    published_year: 2018,
    price: 1800,
    in_stock: true,
    pages: 448,
    publisher: "Crown"
  },
  {
    title: "The Midnight Library",
    author: "Matt Haig",
    genre: "Fantasy",
    published_year: 2020,
    price: 1200,
    in_stock: true,
    pages: 304,
    publisher: "Canongate Books"
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    genre: "History",
    published_year: 2014,
    price: 2200,
    in_stock: true,
    pages: 498,
    publisher: "Harvill Secker"
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    published_year: 1949,
    price: 850,
    in_stock: false,
    pages: 328,
    publisher: "Secker & Warburg"
  },
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    genre: "Finance",
    published_year: 2020,
    price: 1600,
    in_stock: true,
    pages: 256,
    publisher: "Harriman House"
  },
  {
    title: "The Power of Now",
    author: "Eckhart Tolle",
    genre: "Spirituality",
    published_year: 1997,
    price: 1100,
    in_stock: false,
    pages: 236,
    publisher: "New World Library"
  }
]);
