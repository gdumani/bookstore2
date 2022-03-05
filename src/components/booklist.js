import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './book';
import { getBooks } from '../redux/books/books';

const Booklist = () => {
  const books = useSelector((store) => store.booksReducer);

  const dispatch = useDispatch();
  useEffect(() => { dispatch(getBooks()); }, [dispatch]);


  return (
    <div>
      <ul>
        {books.map((book) => {
          const {
            id, title, author, category,
          } = book;
          return (
            <Book
              key={id}
              {...{
                id, title, author, category,
              }}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Booklist;

