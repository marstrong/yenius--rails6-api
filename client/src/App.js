import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./assets/stylesheets/App.scss";
import "./font-faces.scss";
import "./assets/fonts/Programme-Regular/Programme-Regular.eot";
import "./assets/fonts/Programme-Regular/Programme-Regular.svg";
import "./assets/fonts/Programme-Regular/Programme-Regular.ttf";
import "./assets/fonts/Programme-Regular/Programme-Regular.woff";
import "./assets/fonts/Programme-Regular/Programme-Regular.woff2";

import "./assets/fonts/Programme-Bold/Programme-Bold.eot";
import "./assets/fonts/Programme-Bold/Programme-Bold.svg";
import "./assets/fonts/Programme-Bold/Programme-Bold.ttf";
import "./assets/fonts/Programme-Bold/Programme-Bold.woff";
import "./assets/fonts/Programme-Bold/Programme-Bold.woff2";

import "./assets/fonts/Programme-Light/Programme-Light.eot";
import "./assets/fonts/Programme-Light/Programme-Light.svg";
import "./assets/fonts/Programme-Light/Programme-Light.ttf";
import "./assets/fonts/Programme-Light/Programme-Light.woff";
import "./assets/fonts/Programme-Light/Programme-Light.woff2";

import "./assets/stylesheets/Loader.scss";

import NotFound from "./NotFound";

import AuthorizedRoute from "./app/AuthorizedRoute";
// import ProtectedRoute from "./app/ProtectedRoute";

import Navbar from "./app/Navbar";
import LandingPage from "./app/LandingPage";

import ArtistsIndexCharIndex from "./features/artists/ArtistsIndex/ArtistsIndexCharIndex";
import ArtistsIndexCharArtists from "./features/artists/ArtistsIndex/ArtistsIndexCharArtists";
import ArtistPage from "./features/artists/ArtistPage";

import AlbumsList from "./features/albums/AlbumsList";
import AlbumPage from "./features/albums/AlbumPage";

import SongsIndexCharIndex from "./features/songs/SongsIndex";
import SongsIndexCharSongs from "./features/songs/SongsList";
import SongPage from "./features/songs/SongShow";

import UsersList from "./features/users/UsersList";
import UserPage from "./features/users/UserPage";
import SignupForm from "./features/session/SignupForm";
import LoginForm from "./features/session/LoginForm";
import PageFooter from "./app/PageFooter";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />

          <Route exact path="/artists" component={ArtistsIndexCharIndex} />
          <Route
            exact
            path="/artists/index/"
            component={ArtistsIndexCharIndex}
          />
          <Route
            exact
            path="/artists/index/:char"
            component={ArtistsIndexCharArtists}
          />
          <Route exact path="/artists/:artistId" component={ArtistPage} />

          <Route exact path="/albums" component={AlbumsList} />
          <Route exact path="/albums/:albumId" component={AlbumPage} />

          <Route exact path="/songs" component={SongsIndexCharIndex} />
          <Route exact path="/songs/index" component={SongsIndexCharIndex} />
          <Route
            exact
            path="/songs/index/:char"
            component={SongsIndexCharSongs}
          />

          <Route exact path="/songs/:songId" component={SongPage} />
          <Route exact path="/songs/:songId/verses" component={SongPage} />
          <Route
            exact
            path="/songs/:songId/verses/:verseId"
            component={SongPage}
          />

          <Route exact path="/users" component={UsersList} />
          <Route exact path="/users/:userId" component={UserPage} />

          <AuthorizedRoute exact path="/signup" component={SignupForm} />
          <AuthorizedRoute exact path="/login" component={LoginForm} />

          <Route component={NotFound} />
          <Redirect to="/" />
        </Switch>
      </main>
      <PageFooter />
    </Router>
  );
}

export default App;
