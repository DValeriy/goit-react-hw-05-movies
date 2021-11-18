import React from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const ListItem = ({ title, id, s }) => {
  const location = useLocation();
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

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default ListItem;
