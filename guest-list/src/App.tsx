import React, { useState } from 'react';
import './App.css';
import AddToList from './componentss/AddToList';
import List from './componentss/list';

export interface IState {
  people: {
    name: string;
    url: string;
    age: number;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState['people']>([{
    name: 'Luis Rodrigues',
    url: 'https://holdreact.netlify.app/static/media/logo.98549ed8f71b5466d861.png',
    age: 32,
    note: 'Likes wine',
  }]);

  return (
    <div className="App">
      <h1>Guest List</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
