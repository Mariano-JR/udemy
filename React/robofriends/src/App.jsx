import React, { Component } from "react";
import './App.css'
import CardList from './CardList';
import SearchBox from './SearchBox';

class App extends Component { //Conversão da function App em class App para a utilização de constructor
    constructor() {
        super()
        this.state = { //com o constructor pode ser criado "this" para acessar as states e distribuir ou comparar informações com os childs
            robots: [], //Matriz de dados onde estão localizados os Robots
            searchfield: '' //Campo de pesquisa de Robots
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }))
    }

    onSearchChange = (event) => { // Função criada para alteração do state searchfield
        this.setState({ searchfield: event.target.value })
    }

    render(){
        const filterRobots = this.state.robots.filter(robots => {// Filter criado para a comparação entre o searchfield com a matriz de robots
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if(this.state.robots.length === 0) {
            return (
                <div className="tc">
                    <h1 className="f1">Robofriends</h1>
                    <SearchBox searchChange={ this.onSearchChange } />
                    <h2>Loading...</h2>

                </div>
            )
        } else {
            return (// O component SearchBox ativa a function onSeachChange para a alteração do searchfield
                    // Enquanto o CardList utiliza o filter filterRobots para fazer a comparação entre o searchfield e a matriz robots
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={ this.onSearchChange }/>
                    <CardList robots={ filterRobots }/>
                </div>
            );
        }
    }
}

export default App;