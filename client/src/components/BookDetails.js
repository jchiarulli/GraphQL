import React from "react";
import { useQuery } from "@apollo/client";
import { getBookQuery } from "../queries/queries";

function BookDetails(props) {
  const { loading, data } = useQuery(getBookQuery, {
    variables: { id: props.bookId },
  });

  const displayBookDetails = () => {
    console.log("data", data);
    console.log("loading", loading);
    if (!loading && data.book) {
      const { book } = data;
      return (
        <div>
          <h2>{book.name}</h2>
          <p>{book.genre}</p>
          <p>{book.author.name}</p>
          <p>All books by this author:</p>
          <ul className="other-books">
            {book.author.books.map((item) => {
              return <li key={item.id}>{item.name}</li>;
            })}
          </ul>
        </div>
      );
    } else if (loading) {
      return <div></div>;
    } else {
      return <div>No book selected...</div>;
    }
  };

  return <div id="book-details">{displayBookDetails()}</div>;
}

export default BookDetails;
