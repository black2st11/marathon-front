import React, { useState } from 'react'
import './App.css';
import { CardContent, ContentTitle, GroupForm, InputForm, RadioForm, SelectForm, Table, SelectTable, BoardInput, Modal, Pagination, Comment } from './Components/Organism'
import logo from './static/image/logo.png'
import { Nav, Footer, BreadCrumb, CardSection, PersonForm, BoardForm } from './Components/Template';
import { colorPalette, fontSize, fontWeight } from './config';
import { Award, Note, Summary, Direction, Gift } from './Pages/Information'
import { Person, UpdatePerson, Group, Volunteer, UpdateVolunteer, UpdateGroup } from './Pages/Participation'
import { Course } from './Pages/Course'
import { Board, Boards, BoardWrite } from './Pages/Ground';
import Main from './Pages/Main';
import { courseImg } from './config/images';
function App() {
  const [selection, setSelection] = useState(undefined)
  const [year, setYear] = useState(undefined)
  const [month, setMonth] = useState(undefined)
  const [day, setDay] = useState(undefined)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState({ first: '', second: '', third: '' })
  const [info, setInfo] = useState({ name: '', phone1: '', phone2: '', phone3: '', year: '', month: '', day: '', gender: '', post_number: '', address: '', detail_address: '', email: '', depositor: '', course: '', gift: '' })

  const navProps = {
    logo: logo,
    links: [{ name: '대회안내' }, { name: '대회코스' }, { name: '참가신청' }, { name: '대회기록' }, { name: "참여마당" }],
    button: {
      content: '참가신청하기',
      onClick: () => console.log('snfma'),
      isRounded: true,
      color: colorPalette.white,
      fontWeight: fontWeight.medium,
      fontSize: {
        desktop: fontSize.lg,
      }
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

  const footerProps = {
    name: '화순',
    tel: '061-858-2456',
    fax: '061-858-2456'
  }

  const selectTable = [
    [
      { title: { children: '이름' }, content: { children: '홍길동' } },
      { title: { children: '생년월일' }, content: { children: '1970년 1월 1일' } }
    ],
    [{ title: { children: '주소' }, content: { children: '전라남도 여수시 덕충 3길 3 (덕충동) 2층 망고소프트' } }],
    [
      { title: { children: '참가종목' }, content: { children: '10km 여자부' } },
      { title: { children: '휴대전화' }, content: { children: '010-0000-0000' } }
    ],
    [
      { title: { children: '이메일' }, content: { children: 'mangosoftdev@naver.com' } },
      { title: { children: '입금자명' }, content: { children: '홍길동' } }
    ],
  ]

  const selectTableProps = {
    items: selectTable,
    display: {
      desktop: 'flex',
      tablet: 'none',
      mobile: 'flex'
    }
  }

  const feeTableProps = {
    display: {
      desktop: 'flex',
      tablet: 'none',
      mobile: 'flex'
    },
    items: [
      [
        { title: { children: '총참가비' }, content: { children: '30,000원' } },
        { title: { children: '입금확인' }, content: { children: '미입금' } },
        { title: { children: '실입금액' }, content: { children: '0원' } },
      ],
      [
        {
          title: { children: '입금계좌' },
          contents: [
            { children: '입금은행 : 농협 000-0000-000-0000' },
            { children: '(예금주: 주최)' },
            { children: '하프코스 부문: 30,000원 /10km 코스 부문: 30,000원/ 5km 코스 부문: 10,000원' }
          ]
        },
      ]
    ]
  }

  const tabletFeeTableProps = {
    display: {
      desktop: 'none',
      tablet: 'flex',
      mobile: 'none'
    },
    items: [
      [
        { title: { children: '총참가비' }, content: { children: '30,000원' } },
        { title: { children: '입금확인' }, content: { children: '미입금' } },
        { title: { children: '실입금액' }, content: { children: '0원' } },
      ],
    ]
  }

  const tabletDepositTableProps = {
    display: {
      desktop: 'none',
      tablet: 'flex',
      mobile: 'none'
    },
    items: [
      [
        {
          title: { children: '입금계좌' },
          contents: [
            { children: '입금은행 : 농협 000-0000-000-0000' },
            { children: '(예금주: 주최)' },
            { children: '하프코스 부문: 30,000원 /10km 코스 부문: 30,000원/ 5km 코스 부문: 10,000원' }
          ]
        },
      ],
    ]
  }

  const boardInputProps = {
    text: { children: '이름' },
    textarea: {
      placeholder: '이름을 입력해주세요.',
      borderRadius: '0.75rem'
    }
  }

  const boardFormProps = {
    inputs: [
      {
        text: { children: '이름' },
        input: {
          placeholder: '이름을 입력해주세요.',
          borderRadius: '0.75rem'
        }
      },
      {
        text: { children: '패스워드' },
        input: {
          placeholder: '게시글 수정/삭제 시 필요합니다.',
          borderRadius: '0.75rem'
        }
      },
      {
        text: { children: '제목' },
        input: {
          placeholder: '재목을 입력해주세요.',
          borderRadius: '0.75rem'
        }
      },
      {
        text: { children: '내용' },
        textarea: {
          placeholder: '내용을 입력해주세요.',
          borderRadius: '0.75rem'
        }
      },
    ],
    listBtn: {
      text: { children: '목록' },
      bgColor: colorPalette.white,
      isRounded: true,
      border: `1px solid ${colorPalette.border}`
    },
    writeBtn: {
      text: { children: '완료', color: colorPalette.white },
      bgColor: colorPalette.primary,
      isRounded: true,
    },
    fileInput: {
      text: { children: '파일' },
      file: {
        text: { children: '파일선택' },
      }
    },
    description: {
      children: '첨부파일 제한 용량은 총 2MB이하입니다. (이미지 사이즈 600*800이하) 용량 초과 파일은 DB에 저장하지 않습니다.'
    }
  }

  const boardProps = {
    title: { children: '제 16회 여수 해양마라톤 접수 시작! ' },
    date: { children: '2022 - 00 -00' },
    content: { children: 'asdhfkjlashdklfjhaskljdfklasj' },
    listBtn: {
      text: { children: '목록', color: colorPalette.white },
      bgColor: colorPalette.primary,
      isRounded: true,
    }
  }


  const boardsProps = {
    titles: [
      {
        text: { children: '번호' }
      },
      {
        text: { children: '제목' },
        flex: 5
      },
      {
        text: { children: '등록일' }
      },
      {
        text: { children: '조회' }
      }
    ],
    contents: [
      {
        no: '15',
        title: '제 16회 여수 해양마라톤 접수 시작! ',
        date: '2022-06-21',
        hit: '조회'
      },
      {
        no: '15',
        title: '제 16회 여수 해양마라톤 접수 시작! ',
        date: '2022-06-21',
        hit: '조회'
      }
    ]
  }

  const paginationProps = {
    current: 2,
    total: 20,
    textProps: {
      fontSize: {
        desktop: fontSize.xl,
      },
      fontWeight: fontWeight.medium,
      color: colorPalette.border
    },
    currentTextProps: {
      fontSize: {
        desktop: fontSize.xl,
      },
      fontWeight: fontWeight.medium,
      color: colorPalette.primary
    },
  }


  return (
    <div style={{ height: '200vh', }}>
      <Nav {...navProps} />
      <Main />
      <div style={{ maxWidth: '1040px', width: '100%', margin: 'auto', marginTop: '10rem' }}>
        <Board />
        <UpdatePerson />
      </div>
      <Footer {...footerProps} />
      <BreadCrumb />

    </div>
  );
}

export default App;
