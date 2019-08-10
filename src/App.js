import React, { PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state={

    }
  }
  render() { //Declaring  Array Elements
    const elements = [
      {name:'Mari',
        age:29
      },
      {name:'Anne',
        age:25
      },
      {name:'Kati',
        age:45
      },
    ];

    const items = [] //Rerndering html

    for (const [index, value] of elements.entries()) {
      items.push( <div class="flex" key={index}>
          <p class="name">{value.name}</p>
          <p class="details">Age:{value.age}</p>
          </div>)
    }
    return (
        <div id="flex">
        {items}
        </div>
  )
  }
}
