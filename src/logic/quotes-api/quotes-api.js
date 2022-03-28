const ENDPOINT = 'https://quotes.rest/qod.json';

const getQod = async () => {
  const response = await fetch(ENDPOINT, {
    method: 'GET',
  });

  const data = await response.json();
  return data;
};

export default getQod;
