import React from "react";
import PropTypes from "prop-types";
import ListItem from "./ListItem/ListItem";
import s from "./List.module.css";

const List = ({ listOfFilms }) => {
  const markUp = listOfFilms.map(({ id, title }) => (
    <ListItem key={id} title={title} id={id} className={s.item} s={s} />
  ));
  return <ul className={s.list}>{markUp}</ul>;
};

List.propTypes = {
  listOfFilms: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default List;
