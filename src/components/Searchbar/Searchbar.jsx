import s from "./Searchbar.module.css";

import { useState } from "react";
import { useHistory } from "react-router";

const Searchbar = () => {
  const [query, setQuerry] = useState("");
  const { push } = useHistory();

  const handleChange = ({ target: { value } }) => {
    setQuerry(value);
  };

  const cbOnSubmit = (e) => {
    e.preventDefault();
    const searchParams = new URLSearchParams({ query }).toString();
    push({
      pathname: `/movies`,
      search: searchParams,
    });
  };

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={cbOnSubmit}>
        <button type="submit" className={s.SearchFormButton}>
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          onChange={handleChange}
          className={s.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={query}
        />
      </form>
    </header>
  );
};

export default Searchbar;
