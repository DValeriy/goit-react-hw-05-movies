import React from "react";
import { Link, useLocation } from "react-router-dom";
// import PropTypes from "prop-types";
// import s from "../List.module.css";

const ListItem = ({ title, id, s }) => {
  const location = useLocation();
  // console.log(location);
  return (
    <Link
      className={s.item}
      to={{
        pathname: `/movies/${id}`,
        state: {
          from: { ...location },
        },
      }}
    >
      {title}
    </Link>
  );
};

ListItem.propTypes = {};

export default ListItem;
