import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import { Input, Text, Link, CheckBox, Radio, Select, Button } from './Components/Atom'
import { ContactValidator, EmailValidator } from './util/validator'
function App() {
  const setValue = (e) => {
    console.log(e)
  }
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <Input placeholder='이름을 입력해주세요.' validator={ContactValidator} />
      <Link>dlehdgkrl</Link>
      <div style={{ width: '300px' }}>
        <Button isRounded={false} color='white'>
          신청하기
        </Button>
      </div>

      <Text>안녕하세ㅛㅇ</Text>
      <Select setValue={setValue} options={[{ value: 1, name: '사이즈 95' }, { value: 2, name: '사이즈 100' }, { value: 3, name: '사이즈 105' }, { value: 4, name: '사이즈 110' }, { value: 5, name: '사이즈 115' }]} />

      <header className="App-header">
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
