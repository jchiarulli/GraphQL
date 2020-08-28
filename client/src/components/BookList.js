import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { getBooksQuery } from "../queries/queries";
import BookDetails from "./BookDetails";

function BookList() {
  const { loading, error, data } = useQuery(getBooksQuery);
  const [selected, setSelected] = useState(null);

  if (loading) {
    return (
      <div>
        <ul id="book-list">
          <div>Loading books...</div>
        </ul>
      </div>
    );
  } else if (error) {
    return (
      <div>
        <ul id="book-list">
          <div>Error</div>
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <ul id="book-list">
          {data.books.map((book) => {
            return (
              <li
                key={book.id}
                onClick={(e) => {
                  setSelected(book.id);
                }}
              >
                {book.name}
              </li>
            );
          })}
        </ul>
        <BookDetails bookId={selected} />
      </div>
    );
  }
}

export default BookList;
