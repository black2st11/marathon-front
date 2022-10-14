import React, { useState } from 'react'
import './App.css';
import { CardContent } from './Components/Organism'
import logo from './static/image/logo.png'
import { Nav } from './Components/Template';
import { colorPalette, fontSize, fontWeight } from './config';
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

  const cardProps = [{
    listStyle: 'title',
    items: [{
      title: { name: '대회명', type: 'long', fontSize: { desktop: fontSize.lg }, fontWeight: fontWeight.medium, color: colorPalette.white },
      content: { name: '2022 대한민국 마라톤 송년 남부내륙철도 조기착공 기원 전국마라톤대회', fontSize: { desktop: fontSize.lg }, fontWeight: fontWeight.bold }
    },
    {
      title: { name: '일시', fontSize: { desktop: fontSize.lg }, fontWeight: fontWeight.medium, color: colorPalette.white },
      content: { name: '2022년 12월 31일(토) 개회식 13:00/출발 13:30', fontSize: { desktop: fontSize.lg }, fontWeight: fontWeight.normal }
    },
    {
      title: { name: '접수 마감', fontSize: { desktop: fontSize.lg }, fontWeight: fontWeight.medium, color: colorPalette.white },
      content: { name: '2022년 12월 19일(월) 18:00', fontSize: { desktop: fontSize.lg }, fontWeight: fontWeight.normal }
    },
    {
      title: { name: '참가비', fontSize: { desktop: fontSize.lg }, fontWeight: fontWeight.medium, color: colorPalette.white },
      content: {
        name: `- 하프코스(30,000원)
      - 10km코스(30,000원)
      - 5km코스(10,000원)`, fontSize: { desktop: fontSize.lg }, fontWeight: fontWeight.normal
      }
    }

    ]
  },
  {
    listStyle: 'none',
    items: [
      { content: { name: '접수 마감 후에는 어떠한 경우에도 환불이 불가능하니 이점 유의하여 주시기 바랍니다.', fontSize: { desktop: fontSize.lg }, fontWeight: fontWeight.normal } },
      { content: { name: '참가 취소 시 환불받고자 하는 통장의 정보(은행, 예금주, 계좌번호) 가 필요하오니, 정확한 정보를 자유게시판에 비밀글로 입력해 주시기 바랍니다.  ', fontSize: { desktop: fontSize.lg }, fontWeight: fontWeight.normal } },
      { content: { name: '천재지변이나 국가 재난사태(질병, 국가적 재난 등 사회적 분위기로 대회 개최가 어렵다고 판단되는 경우, 구제역이나 AI 발생 등으로 가적으로 집회 등에 대한 자제 요청이 있을 경우)으로 인한 대회 취소시, 참가비는 전액 반환되지 않습니다. (단, 준비된 기념품은 택배로 발송됩니다.)', fontSize: { desktop: fontSize.lg }, fontWeight: fontWeight.normal } }

    ]
  }]

  console.log(selection)
  return (
    <div style={{ height: '200vh' }}>
      <Nav {...navProps} />
      <div style={{ width: '900px' }}>
        <CardContent uls={cardProps} />

      </div>
    </div>
  );
}

export default App;
