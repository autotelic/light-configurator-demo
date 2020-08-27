import React, { useState } from 'react';
import classnames from 'classnames'
import './App.css';

function App() {
  const [text, setText] = useState('YOUR TEXT');
  const [fontSize, setFontSize] = useState('big')
  const [color, setColor] = useState('red')
  const [flicker, setFlicker] = useState('none')
  const [classes, setClasses] = useState(['text', fontSize, color, flicker])

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="main">
        <span className={classnames(classes)}>{text}</span>
      </div>
      <div className="control">
        <input type="text" value={text} onChange={e => setText(e.target.value)} />
        <select
          value={fontSize}
          onChange={e => {
            setFontSize(e.target.value)
            setClasses(['text', e.target.value, color, flicker])
          }}
        >
          {['big', 'medium', 'small'].map(size => (
            <option
              key={size}
              value={size}
            >
              {size}
            </option>
          ))}
        </select>
        <select
          value={color}
          onChange={e => {
            setColor(e.target.value)
            setClasses(['text', fontSize, e.target.value, flicker])
          }}
        >
          {['red', 'blue'].map(color => (
            <option
              key={color}
              value={color}
            >
              {color}
            </option>
          ))}
        </select>
        <select
          value={flicker}
          onChange={e => {
            setFlicker(e.target.value)
            setClasses(['text', fontSize, color, e.target.value])
          }}
        >
          {['none', 'quick', 'slow'].map(flicker => (
            <option
              key={flicker}
              value={flicker}
            >
              {flicker}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default App;
