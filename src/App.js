import React, { useState } from 'react'
import './App.css';
import { Input, Text, Link, CheckBox, Radio, Select, Button, Ul } from './Components/Atom'
import { InputForm, SelectForm } from './Components/Organism'
import { ContactValidator, EmailValidator } from './util/validator'
import logo from './static/image/logo.png'
import { Nav } from './Components/Template';
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

  const navProps = {
    logo: logo,
    links: [{ name: '대회안내' }, { name: '대회코스' }, { name: '참가신청' }, { name: '대회기록' }, { name: "참여마당" }],
    button: {
      content: '참가신청하기',
      onClick: () => console.log('snfma'),
      isRounded: true
    },
    menus: [
      {
        title: '대회안내',
        menu: [
          { name: '대회 안내' },
          { name: '시상 안내' },
          { name: '유의 사항' },
          { name: '참가 기념품' },
          { name: '오시는 길' }
        ]
      },
      {
        title: '대회 코스',
        menu: [
          { name: '대회 코스' },
        ]
      },
      {
        title: '참가신청',
        menu: [
          { name: '개인 참가신청' },
          { name: '단체 참가신청' },
          { name: '개인 참가신청 조회/수정' },
          { name: '단체 참가신청 조회/수정' },
        ]
      },
      {
        title: '대회기록',
        menu: [
          { name: '기록 조회' },
          { name: '기록 업로드' },
        ]
      },
      {
        title: '참여마당',
        menu: [
          { name: '자원봉사 신청' },
          { name: '자원봉사 신청 조회/수정' },
          { name: '홍보 게시판' },
          { name: '환불 게시판' },
          { name: '자유 게시판' },
          { name: '대회 사진' },
          { name: '공지 사항' },
        ]
      },
    ]
  }

  console.log(selection)
  return (
    <div style={{ height: '200vh' }}>
      <Nav {...navProps} />
    </div>
  );
}

export default App;
