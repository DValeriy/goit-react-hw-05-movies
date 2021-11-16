import { NavLink } from "react-router-dom";
import s from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={s.navList}>
      <NavLink className={s.nav} activeClassName={s.active} to="/" exact>
        Home
      </NavLink>
      <NavLink className={s.nav} activeClassName={s.active} to="/movies">
        Movies
      </NavLink>
    </nav>
  );
};

export default NavBar;
