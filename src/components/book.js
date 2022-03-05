import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import '../style/book.css';

const Book = (props) => {
  const dispatch = useDispatch();
  const {
    id,
    title,
    // author,
    category,
  } = props;
  return (

    <li className="BookClass">
      <div className="book">
        <h5>{category}</h5>
        <h3>{title}</h3>
        <h6>Fake author name</h6>
        <button className="remove" id={id} onClick={() => dispatch(removeBook(id))} type="button">
          Remove
        </button>
      </div>
      <div className="graph">
        <div className="pie" />
        <div className="stat">
          <p className="percent">64%</p>
          <p className="completed">completed</p>
        </div>
      </div>
      <div className="progress">
        <p className="ChapterLbl">Current Chapter</p>
        <p className="chapter">Chapter 15</p>
        <button type="button" className="progBtn">Update Progress</button>
      </div>
    </li>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  // author: PropTypes.string.isRequired,
};

export default Book;
