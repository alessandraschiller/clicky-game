import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Cards from './components/Cards';
import Footer from './components/Footer';
import sponge from './sponge.json';
import './App.css';

class App extends Component {
  state = {
    sponge,
    score: 0,
    clickedSponge: []
  };

  imageClick = event => {
    const currentSponge = event.target.alt;
    const SpongeAlreadyClicked =
      this.state.clickedSponge.indexOf(currentSponge) > -1;

      if (SpongeAlreadyClicked) {
        this.setState({
        sponge: this.state.sponge.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedSponge: [],
        score: 0
      });
        alert("Sorry you lose. Looks like you're a Patrick!");
      } else {
        this.setState(
          {
            sponge: this.state.sponge.sort(function(a, b) {
              return 0.5 - Math.random();
            }),
            clickedSponge: this.state.clickedSponge.concat(
              currentSponge
            ),
            score: this.state.score + 1
          },
          () => {
            if (this.state.score === 12) {
              alert("You won! Way to go!");
              this.setState({
                sponge: this.state.sponge.sort(function(a, b) {
                  return 0.5 - Math.random();
                }),
                clickedSponge: [],
                score: 0
              });
            }
          }
        );
      }
  };


  render() {
    return (
      <div>
      <Navbar
        score={this.state.score}
        />
      <Jumbotron />
      <div className="wrapper d-flex justify-content-around flex-wrap w-100">
          {this.state.sponge.map(sponge => (
              <Cards
                imageClick={this.imageClick}
                id={sponge.id}
                key={sponge.id}
                image={sponge.image}
              />
          ))}
      </div>
       <Footer />
      </div>
    );
  }
}

export default App;
