import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../component/meetups/Meetuplist";

function FavoritesPage(){
    const favoritectx = useContext(FavoritesContext);

    let content;
    if(favoritectx.totalFavorites===0){
        content=<p>You got no favorites yet. Start adding some?</p>
    }
    else{
        content=<MeetupList meetups={favoritectx.favorites}/>;
    }

    return <section>
        <h1>My Favorites</h1>
        {content}
    </section>
}

export default FavoritesPage;