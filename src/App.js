import React, { useState, useEffect } from 'react';
import Quote from './components/Quote';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Button = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
`;

function App() {
  const [quote, setQuote] = useState({});

  const consumeAPI = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const quoteResult = await api.json();
    setQuote(quoteResult[0]);
  };

  useEffect(() => {
    consumeAPI();
  }, []);

  return (
    <Container>
      <Quote 
        quote={quote}
      />
      <Button
        onClick={consumeAPI}
      >Obtener frase</Button>
    </Container>
  );
}

export default App;
