import React, { useState, useEffect } from 'react';
import getQod from '../../logic/quotes-api/quotes-api';
import './quotes.scss';

export default function Quotes() {
  const [qod, setQod] = useState(
    'Make everything as simple as possible, but not simpler - Albert Einstein',
  );
  useEffect(async () => {
    const data = await getQod();
    const qod = await `${data.contents.quotes[0].quote} - ${data.contents.quotes[0].author}`;
    setQod(qod);
  }, []);
  return (
    <main>
      <h2 className="quote">{qod}</h2>
    </main>
  );
}
