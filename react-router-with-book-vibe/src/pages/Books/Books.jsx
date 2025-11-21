import React, { useEffect } from 'react';
import { useState } from 'react';

const Books = () => {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    fetch("booksData.json")
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setAllBooks(data);
      })
  }, [])
  return (
    <div>
      <h1>Hello Books</h1>
    </div>
  );
};

export default Books;