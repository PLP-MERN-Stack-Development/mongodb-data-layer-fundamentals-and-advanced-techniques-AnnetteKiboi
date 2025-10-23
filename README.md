📚 PLP Bookstore – MongoDB Assignment
🧩 Overview

This project demonstrates the use of MongoDB for creating and managing a simple bookstore database.
The work involves database creation, data insertion, CRUD operations, advanced queries, aggregation, and indexing to optimize performance.

⚙️ What Was Done

Database Setup

--Installed and configured MongoDB on the local machine.

--Verified successful installation and connection using the Mongo shell.

--Created a new database named plp_bookstore and a collection called books.

Data Insertion

--Inserted multiple book records with fields such as title, author, genre, published year, price, availability, pages, and publisher.

--Ensured data consistency and variety across book entries.

CRUD Operations

--Retrieved books based on specific conditions such as genre, author, and publication year.

--Updated book details, including prices and availability.

--Deleted selected records based on title or other identifiers.

Advanced Queries

--Implemented filtering to display books matching multiple conditions.

--Used projection to limit returned fields for cleaner output.

--Applied sorting in ascending and descending order by price.

--Implemented pagination to display results in pages of five books each.

Aggregation Pipelines

--Created pipelines to calculate the average price of books by genre.

--Identified the author with the most published books.

--Grouped books by decade of publication for trend analysis.

Indexing

--Created indexes on fields like title, and compound indexes on author and published_year.

--Used the explain() method to observe performance improvements.

🧾 Outcome

A working MongoDB database named plp_bookstore containing well-structured data.

Demonstrated understanding of CRUD operations and query optimization.

Successfully implemented aggregation and indexing for data analysis.

Completed all tasks outlined in the assignment requirements.

📁 Files Included

insert_books.js – Script used to insert all book data.

queries.js – Contains all MongoDB queries and operations performed.

README.md – Summary of work completed.