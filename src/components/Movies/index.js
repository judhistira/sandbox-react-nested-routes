import MovieDetails from "../MovieDetails";
import { Route, Switch, useRouteMatch, Link } from "react-router-dom";

function Movies({ movies }) {
  const { url } = useRouteMatch();

  return (
    <div className="comp orange">
      <h1>Movies Component</h1>
      <nav>
        {movies.map((item) => {
          return <Link key={item.id} to={`${url}/${item.id}`}> {item.title} </Link>;
        })}
      </nav>
      <Switch>
        <Route path={`${url}/:movieId`}>
          <MovieDetails movies={movies}/>
        </Route>
      </Switch>
    </div>
  );
}

export default Movies;
