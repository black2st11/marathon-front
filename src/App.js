import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import { Input, Text, Link, CheckBox, Radio, Select, Button, Ul } from './Components/Atom'
import { InputForm, SelectForm } from './Components/Organism'
import { ContactValidator, EmailValidator } from './util/validator'
function App() {
  const [selection, setSelection] = useState(undefined)
  const [year, setYear] = useState(undefined)
  const [month, setMonth] = useState(undefined)
  const [day, setDay] = useState(undefined)
  const setValue = (e) => {
    console.log(e)
  }

  const selectProps = {
    value: selection,
    onChange: ((e) => (setSelection(e))),
    options: [{ value: 1, name: '사이즈 95' }, { value: 2, name: '사이즈 100' }, { value: 3, name: '사이즈 105' }, { value: 4, name: '사이즈 110' }, { value: 5, name: '사이즈 115' }]
  }

  const selectsProps = [{
    postFix: '년',
    value: year,
    onChange: ((e) => (setYear(e))),
    options: [{ value: 1, name: '사이즈 95' }, { value: 2, name: '사이즈 100' }, { value: 3, name: '사이즈 105' }, { value: 4, name: '사이즈 110' }, { value: 5, name: '사이즈 115' }]
  },
  {
    postFix: '월',
    value: month,
    onChange: ((e) => (setMonth(e))),
    options: [{ value: 1, name: '사이즈 95' }, { value: 2, name: '사이즈 100' }, { value: 3, name: '사이즈 105' }, { value: 4, name: '사이즈 110' }, { value: 5, name: '사이즈 115' }]
  },
  {
    postFix: '일',
    value: day,
    onChange: ((e) => (setDay(e))),
    options: [{ value: 1, name: '사이즈 95' }, { value: 2, name: '사이즈 100' }, { value: 3, name: '사이즈 105' }, { value: 4, name: '사이즈 110' }, { value: 5, name: '사이즈 115' }]
  },

  ]

  console.log(selection)
  return (
    <div className="App" >
      <header className="App-header">
        <SelectForm text={{ name: '옵션' }} englishText={{ name: 'Options' }} selects={selectsProps} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
