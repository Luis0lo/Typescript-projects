import React from 'react';
// import { IState as IProps } from '../App';
import { IState as Props } from '../App';

interface IProps {
  people: Props['people'];
  setPeople: React.Dispatch<React.SetStateAction<Props['people']>>;
}

const List: React.FC<IProps> = ({ people, setPeople }) => {
  const deleteGuest = (guestUrl: string): void => {
    setPeople(
      people.filter((person) => {
        return person.url !== guestUrl;
      })
    );
  };

  const renderList = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <li key={person.url} className="List">
          <div className="List-header">
            <img className="List-img" src={person.url} alt="" />
            <h2>{person.name}</h2>
          </div>
          <p>{person.age} years old</p>
          <p className="List-note">Note: {person.note}</p>
          <button onClick={() => deleteGuest(person.url)}>Delete</button>
        </li>
      );
    });
  };

  return <ul>{renderList()}</ul>;
};

export default List;
