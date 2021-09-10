import axios from 'axios';
import React, { useEffect, useState} from 'react';
import './App.css';
import Character from './components/Character';
import styled from 'styled-components';


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characterData, setCharacterData] = useState([])

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people`)
    .then(res => {
      setCharacterData(res.data)
    })
    .catch(err => {
      console.error(err)
    })
  }, [])
  
  const StyledTitle = styled.div`
  font-size: 2rem;
  `
  
  return (
    <div className="App">
      <StyledTitle><h1 className="Header">Characters</h1></StyledTitle>
      {characterData.map(character => 
        <Character character={character}/>
      )}
    </div>
  );
}

export default App;
