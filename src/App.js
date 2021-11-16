import { Route, Switch, Redirect } from "react-router-dom";
import React, { lazy, Suspense } from "react";
const HomePage = lazy(() =>
  import("./pages/HomePage" /* webpackChunkName: "home-page" */)
);
const NavBar = lazy(() =>
  import("./components/NavBar" /* webpackChunkName: "NavBar" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    "./pages/MovieDetailsPage"
    /* webpackChunkName: "MovieDetailsPage" */
  )
);
const MoviesPage = lazy(() =>
  import("./pages/MoviesPage" /* webpackChunkName: "MoviesPage" */)
);
const Container = lazy(() =>
  import("./components/Container" /* webpackChunkName: "Container" */)
);

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Container>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
          <Route path="/movies">
            <MoviesPage />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Container>
    </Suspense>
  );
}

export default App;
