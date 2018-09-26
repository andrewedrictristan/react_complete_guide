import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
      persons: [
          {id:'1',name: "Andrew", age: "28"},
          {id:'2',name: "Steven", age: "25"},
          {id:'3',name: "Edu", age: "24"}
      ],
      otherState: 'Some other value',
      showPersons: false
  }

  tooglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
  }



  /*switchNameHandler = (newName) => {
      //console.log("click me");
      this.setState({
          persons: [
              {name: newName, age: "28"},
              {name: "Steven Danu", age: "25"},
              {name: "Eduardus", age: "24"}
          ]
      });
  }*/

  deletePersonHandler = (personIndex) => {
        //const persons = this.state.persons.slice();
        const persons= [...this.state.persons]
        persons.splice(personIndex,1);
        this.setState({persons : persons});
  }

  nameChangedHandler = ( event, id) => {

      const personIndex  = this.state.persons.findIndex(p => {
            return p.id === id;
      });

      console.log(personIndex);

      const person = {...this.state.persons[personIndex]};

      person.name = event.target.value;

      const persons = [...this.state.persons];
      persons[personIndex] = person;


      this.setState({ persons : persons });

     /* this.setState({
          persons: [
              {name: "andrew edric tristan", age: "28"},
              {name: event.target.value, age: "25"},
              {name: "Eduardus", age: "24"}
          ]
      });*/
  }

  render() {
    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons){
        persons = (
            <div>
                {this.state.persons.map((person, index) => {
                    return <Person
                        click = {() => this.deletePersonHandler(index)}
                        //click = {this.deletePersonHandler.bind(this,index)}
                        name = {person.name}
                        age = {person.age}
                        key = {person.id}
                        change =  {(event) => this.nameChangedHandler(event, person.id)}
                    />
                })}
              {/*  <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}/>
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler.bind(this,'Eric')}
                    change={this.nameChangedHandler}>My hobbies: Basketball</Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}/>*/}
            </div>
        )
    }

    return (
        <div className="App">
           <h1>Hi, I'm react app</h1>
           <p>This is really working</p>
           {/*<button
                style={style}
                onClick={() => this.switchNameHandler('ANDREW EDRIC TRISTAN ')}>Switch name</button>*/}
           <button
               style={style}
               onClick={this.tooglePersonsHandler}>Switch name</button>
            {persons}

        </div>

    );

   //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m react app'))
  }
}

export default App;
