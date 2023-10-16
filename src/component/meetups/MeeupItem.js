import { useContext } from "react";

import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import FavoritesContext from "../../store/favorites-context";

function MeetupItem(props) {
  const favoritectx = useContext(FavoritesContext);
  const itemIsFavorite = favoritectx.itemIsFavorite(props.id);

  function favoriteButtonHandler() {
    if (itemIsFavorite) {
      favoritectx.removeFavorite(props.id);
    } else {
      favoritectx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={favoriteButtonHandler}>{itemIsFavorite ? "Remove From Favorites" : "Add To Favorites"}</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
