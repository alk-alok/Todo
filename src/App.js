import { Route, Switch } from "react-router-dom";

import FavoritesPage from "./pages/Favorites";
import AllMeetupspage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import Layout from "./component/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetupspage />
        </Route>
        <Route path="/new--meetup">
          <NewMeetupPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
