import React, { useState } from 'react';
import { IState as Props } from '../App';

interface IProps {
  people: Props['people'];
  setPeople: React.Dispatch<React.SetStateAction<Props['people']>>;
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: '',
    age: '',
    image: '',
    note: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (): void => {
    if (!input.name || !input.age || !input.image) return;
    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.image,
        note: input.note,
      },
    ]);
    setInput({ name: '', age: '', image: '', note: '' });
  };

  return (
    <div className="AddToList">
      <input
        type="text"
        value={input.name}
        placeholder="Name"
        className="AddToList-input"
        onChange={handleChange}
        name="name"
      />
      <input
        type="text"
        value={input.age}
        placeholder="Age"
        className="AddToList-input"
        onChange={handleChange}
        name="age"
      />
      <input
        type="text"
        value={input.image}
        placeholder="Image Url"
        className="AddToList-input"
        onChange={handleChange}
        name="image"
      />
      <textarea
        value={input.note}
        placeholder="Notes"
        className="AddToList-input"
        onChange={handleChange}
        name="note"
      />
      <button className="AddToList-btn" onClick={handleClick}>
        Add to List
      </button>
    </div>
  );
};

export default AddToList;
