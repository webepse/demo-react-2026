import React, {Component, Fragment} from 'react';
import './App.css'
import Membre from './components/Membre';


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
        age: 33
    },
    membre5: {
        nom: "Robin",
        age: 25
    }
}

class App extends Component {
    state = {
        league: league,
        plus: 1,
        isShow: false
    }

    componentDidMount() {
        console.log('montage')
    }

    componentDidUpdate() {
        console.log('je recharge mon composant')
    }

    componentWillUnmount()
    {
        console.log('démontage')
    }

    handleClick = (id,nb) =>{
        const league = {...this.state.league}
        league[id].age +=nb
        this.setState({league:league})
    }

    handleChange = (event, id) => {
        const league = {...this.state.league}
        const nom = event.target.value
        league[id].nom = nom
        this.setState({league:league})
    }

    hideName = (id) => {
        const league = {...this.state.league}
        // league.id.nom
        // league["id"].nom
        // league[id].nom
        // league["membre1"].nom
        // league.membre1.nom
        league[id].nom = "X"
        league[id].age = 0
        this.setState({league:league})
    }

    handleShow = () => {
        const isShow = !this.state.isShow
        this.setState({isShow})
    }

    render() {
        const list = Object.keys(this.state.league).map(iteration => {
            return (
                <Membre
                    key={iteration}
                    handleChange={(event) => this.handleChange(event, iteration)}
                    hideName={()=> this.hideName(iteration)}
                    plus={this.state.plus}
                    handleClick={() => this.handleClick(iteration, this.state.plus)}
                    age={this.state.league[iteration].age}
                    nom={this.state.league[iteration].nom}
                />
            )
        })


        return (
            <>
                <h1>Hello World!</h1>
                {list}




                {/* <Button
          plus={this.state.plus}
          veillir={() => this.handleClick(this.state.plus)}
        /> */}

            </>
        )
        // return React.createElement('div',{className: 'app'}, React.createElement('h1',null,'Hello World'))
    }
}

export default App;