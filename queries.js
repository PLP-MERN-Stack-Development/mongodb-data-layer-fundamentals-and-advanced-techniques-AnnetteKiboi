// Use the correct database
use("plp_bookstore");


// =========================
// 🧩 TASK 2 — BASIC CRUD
// =========================

// 1️⃣ Find all books in a specific genre
db.books.find({ genre: "Thriller" }).pretty();

// 2️⃣ Find books published after a certain year (example: after 2015)
db.books.find({ published_year: { $gt: 2015 } }).pretty();

// 3️⃣ Find books by a specific author
db.books.find({ author: "James Clear" }).pretty();

// 4️⃣ Update the price of a specific book
db.books.updateOne(
  { title: "Atomic Habits" },
  { $set: { price: 2200 } }
);

// 5️⃣ Delete a book by its title
db.books.deleteOne({ title: "1984" });


// =========================
// 🔍 TASK 3 — ADVANCED QUERIES
// =========================

// 1️⃣ Find books that are both in stock and published after 2010
db.books.find({ in_stock: true, published_year: { $gt: 2010 } }).pretty();

// 2️⃣ Use projection to return only title, author, and price
db.books.find(
  {},
  { _id: 0, title: 1, author: 1, price: 1 }
).pretty();

// 3️⃣ Sort books by price (ascending)
db.books.find().sort({ price: 1 }).pretty();

// 4️⃣ Sort books by price (descending)
db.books.find().sort({ price: -1 }).pretty();

// 5️⃣ Pagination — limit 5 books per page
// Page 1
db.books.find().limit(5).pretty();

// Page 2
db.books.find().skip(5).limit(5).pretty();


// =========================
// 📊 TASK 4 — AGGREGATION PIPELINE
// =========================

// 1️⃣ Average price of books by genre
db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      averagePrice: { $avg: "$price" },
      totalBooks: { $sum: 1 }
    }
  }
]);

// 2️⃣ Author with the most books
db.books.aggregate([
  {
    $group: {
      _id: "$author",
      totalBooks: { $sum: 1 }
    }
  },
  { $sort: { totalBooks: -1 } },
  { $limit: 1 }
]);

// 3️⃣ Group books by publication decade and count them
db.books.aggregate([
  {
    $group: {
      _id: {
        decade: {
          $concat: [
            { $toString: { $subtract: [{ $subtract: ["$published_year", { $mod: ["$published_year", 10] }] }, 0] } },
            "s"
          ]
        }
      },
      totalBooks: { $sum: 1 }
    }
  },
  { $sort: { "_id.decade": 1 } }
]);


// =========================
// ⚡ TASK 5 — INDEXING
// =========================

// 1️⃣ Create an index on the title field

db.books.createIndex({ title: 1 });

// 2️⃣ Create a compound index on author and published_year
db.books.createIndex({ author: 1, published_year: -1 });

// 3️⃣ Use explain() to show performance with index
db.books.find({ title: "Atomic Habits" }).explain("executionStats");
