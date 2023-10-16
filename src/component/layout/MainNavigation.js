import { useContext } from "react";
import { Link } from "react-router-dom";

import classes from "../MainNavigation.module.css";
import FavoritesContext from "../../store/favorites-context";

function MainNavigation() {
  const favoritectx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}> React Meetups </div>
      <nav>
        <ul>
          <li>
            <Link to="/">All meetups</Link>
          </li>
          <li>
            <Link to="/new--meetup">New meetup</Link>
          </li>
          <li>
            <Link to="/favorites">
              My Favorites
              <span className={classes.badge}>
                {favoritectx.totalFavorites}
              </span>
              </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
