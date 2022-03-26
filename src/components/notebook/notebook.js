import React from 'react';
import './notebook.scss';

const getNotesFromStorage = () => {
  const key = 'notes';
  const savedNotes = localStorage.getItem(key);
  if (savedNotes) {
    return JSON.parse(savedNotes);
  }
  localStorage.setItem(key, '');
  return '';
};

const setNotesToStorage = (newNotes) => {
  const key = 'notes';
  localStorage.setItem(key, JSON.stringify(newNotes));
};

export default class Notebook extends React.Component {
  constructor() {
    super();
    this.state = { notes: '' };
  }

  componentDidMount() {
    this.setState({ notes: getNotesFromStorage() });
  }

  handleChange = (e) => {
    const newNotes = e.target.value;
    setNotesToStorage(newNotes);
    this.setState({ notes: newNotes });
  };

  render() {
    const { notes } = this.state;
    return (
      <section
        className="notebook-container"
        data-testid="note_book"
      >
        <div className="text">Let&lsquo;s do some math</div>
        <label htmlFor="notebook">
          <textarea
            className="notebook"
            name="notebook"
            id="notebook"
            placeholder="Write your notes here"
            onChange={this.handleChange}
            onBlur={this.handleChange}
            value={notes}
          />
        </label>
      </section>
    );
  }
}
