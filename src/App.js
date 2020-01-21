import React from 'react';
import logo from './logo.svg';
import './App.css';

 import { Card2 } from './components/index';

function App() {
  return (
    <div className="App">
      sdfsdf
       <Card2>
        Test
      </Card2> 
    </div>
  );
}

export default App;

// "preinstall": "if exist dist rmdir /s /q dist",
    // mkdir dist set NODE_ENV=production babel src/components-d dist --copy-files --presets env,react-app