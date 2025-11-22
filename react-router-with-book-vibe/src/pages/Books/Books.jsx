// import React, { Suspense, useEffect } from 'react';
// import { useState } from 'react';
// import Book from '../Book/Book';

// const Books = () => {
//   // const [allBooks, setAllBooks] = useState([]);
//   // useEffect(() => {
//   //   fetch("booksData.json")
//   //     .then(res => res.json())
//   //     .then(data => {
//   //       // console.log(data);
//   //       setAllBooks(data);
//   //     })
//   // }, [])

//   // const bookPromise = fetch('./booksData.json')
//   //   .then(res => res.json())
//   return (
//     <div>
//       <h1 className='text-3xl text-center p-6'>Hello Books</h1>
//       {/* <Suspense fallback={<span>Loading......</span>}>
//         <Book bookPromise={bookPromise}></Book>
//       </Suspense> */}
//       <Suspense fallback={<span>Loading......</span>}>
//         <Book></Book>
//       </Suspense>
//     </div>
//   );
// };

// export default Books;



import React, { Suspense } from 'react';
import Book from '../Book/Book';

const Books = ({ data }) => {

  return (
    <div>
      <h1 className='text-3xl text-center p-6'>Hello Books</h1>
      <Suspense fallback={<span>Loading......</span>}>
        {/* <Book data={data}></Book> */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {
            data.map((singleBook) => <Book key={singleBook.bookId} singleBook={singleBook}></Book>)
          }
        </div>
      </Suspense>
    </div>
  );
};

export default Books;