import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import MoviesPage from "./pages/MoviesPage";
import NavBar from "./components/NavBar";
import Container from "./components/Container";

function App() {
  return (
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
  );
}

export default App;
