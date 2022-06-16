import React from 'react';
import { IState as IProps } from '../App';
import DeleteGuest from './DeleteGuest';

const List: React.FC<IProps> = ({ people }) => {
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
          <DeleteGuest />
        </li>
      );
    });
  };

  return <ul>{renderList()}</ul>;
};

export default List;
