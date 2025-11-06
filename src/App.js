import React from 'react';
import './App.css';
import Membre from './components/Membre';
import Button from './components/Button';

const league = {
  membre1: {
    nom: 'Batman',
    age: 48
  },
  membre2: {
    nom: 'Superman',
    age: 46
  },
  membre3: {
    nom: 'Wonder Woman',
    age: 79
  },
  membre4: {
    nom: 'Catwoman',
    age: 35
  }
}

class App extends React.Component
{
  state = {
    league : league,
    plus: 2
  }

  handleClick = (nb) => {
    // pour modif un state type objet
    // copie du state
    const league = {...this.state.league}
    league.membre1.age += nb
    this.setState({league: league})
    
  }

  render() {
    return(
      <>
        <h1>test</h1>
        <Button 
          plus={this.state.plus}
          vieillir={()=> {this.handleClick(this.state.plus)}}
        />
        <Membre 
          nom={this.state.league.membre1.nom}
          age={this.state.league.membre1.age}
        />
        <Membre
           nom={this.state.league.membre2.nom}
          age={this.state.league.membre2.age}
        />
        <Membre
           nom={this.state.league.membre3.nom}
          age={this.state.league.membre3.age}
        />
        <Membre
           nom={this.state.league.membre4.nom}
          age={this.state.league.membre4.age}
        />
        <Membre 
          nom="Kobe"
          age="45"
        >
          LAKERS
        </Membre>
      </>
    )
  }


}

export default App;
