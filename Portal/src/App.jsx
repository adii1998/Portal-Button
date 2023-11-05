import React, { useRef, useState } from 'react';
import PortalButton from './PortalButton';
import PortalTextArea from './PortalTextArea';


function App() {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleButtonClick = () => {
   const inputText = document.getElementById('input').value;
   const textarea = document.getElementById('textarea');
   textarea.value = inputText;
   setInputText('');
  }

  return (
    <div id="main">
      <input id="input" value={inputText} onChange={handleInputChange}></input><br/>
      <button id="button" onClick={handleButtonClick}>Click</button>
      <PortalButton buttonClick={handleButtonClick} />
      <PortalTextArea value={inputText} />
    </div>
  )
}

export default App;
