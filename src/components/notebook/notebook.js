import React from 'react';
import './notebook.scss';

export default class Notebook extends React.PureComponent {
  render() {
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
          />
        </label>
      </section>
    );
  }
}
