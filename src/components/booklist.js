import React from 'react';
import Book from './book';

const BOOKDATA = [
  {
    id: 1,
    title: 'The Hunger Game',
    author: 'Suzanne Collins',
    category: 'action',
  },
  {
    id: 2,
    title: 'Dune',
    author: 'Frank Herbert',
    category: 'science fiction',
  },
  {
    id: 3,
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    category: 'economy',
  },
];

const Booklist = () => (
  <div>
    <ul>
      {BOOKDATA.map((book) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Book {...book} />
      ))}
    </ul>
  </div>
);

export default Booklist;