// Import libraries
import React from "react";
import { Route, Switch } from "react-router-dom";
// Import the mock API
import moviesAPI from "./moviesAPI";
// Import React Components
import MovieC from "./MovieC";
import MovieListC from "./MovieListC";

class Pets extends React.Component {
  renderPet = props => {
    const { id } = props.match.params;
    // const id = props.match.params.id
    console.log("id: ", id);
    const movie = moviesAPI.getOne(id);
    if (!movie) {
      return <div> could not find movie </div>;
    } else {
      return <MovieC name={movie.name} genre={movie.genre} opinion={movie.opinion} />;
    }
  };

  renderPetList = () => {
    const pets = moviesAPI.getAll();
    return <MovieListC pets={pets} />;
  };

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/movies" render={this.renderPetList} />
          <Route path="/movies/:id" render={this.renderPet} />
        </Switch>
      </div>
    );
  }
}
export default Pets;
