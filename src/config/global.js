import {createGlobalStyle} from 'styled-components';
import EsaManruBold from '../static/fonts/EsaManruBold.woff2';
import EsaManruLight from '../static/fonts/EsaManruLight.woff2';
import EsaManruMedium from '../static/fonts/EsaManruMedium.woff2';
import GmarketSansBold from '../static/fonts/GmarketSansBold.woff2';
import GmarketSansLight from '../static/fonts/GmarketSansLight.woff2';
import GmarketSansMedium from '../static/fonts/GmarketSansMedium.woff2';
import PretendardBlack from '../static/fonts/Pretendard-Black.woff2';
import PretendardExtraBold from '../static/fonts/Pretendard-ExtraBold.woff2';
import PretendardBold from '../static/fonts/Pretendard-Bold.woff2';
import PretendardExtraLight from '../static/fonts/Pretendard-ExtraLight.woff2';
import PretendardLight from '../static/fonts/Pretendard-Light.woff2';
import PretendardMedium from '../static/fonts/Pretendard-Medium.woff2';
import PretendardRegular from '../static/fonts/Pretendard-Regular.woff2';
import PretendardSemiBold from '../static/fonts/Pretendard-SemiBold.woff2';
import PretendardThin from '../static/fonts/Pretendard-Thin.woff2';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'EsaManru';
    font-weight : 700;
    src: url(${EsaManruBold}) format("woff2");
  }

  @font-face {
    font-family: 'EsaManru';
    font-weight : 300;
    src: url(${EsaManruLight}) format("woff2");
  }

  @font-face {
    font-family: 'EsaManru';
    font-weight : 500;
    src: url(${EsaManruMedium}) format("woff2");
  }

  @font-face {
    font-family: 'Gmarket';
    font-weight : 700;
    src: url(${GmarketSansBold}) format("woff2");
  }

  @font-face {
    font-family: 'Gmarket';
    font-weight : 300;
    src: url(${GmarketSansLight}) format("woff2");
  }

  @font-face {
    font-family: 'Gmarket';
    font-weight : 500;
    src: url(${GmarketSansMedium}) format("woff2");
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight : 900;
    src: url(${PretendardBlack}) format("woff2");
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight : 800;
    src: url(${PretendardExtraBold}) format("woff2");
  }
  
  @font-face {
    font-family: 'Pretendard';
    font-weight : 700;
    src: url(${PretendardBold}) format("woff2");
  }
  
  @font-face {
    font-family: 'Pretendard';
    font-weight : 200;
    src: url(${PretendardExtraLight}) format("woff2");
  }
  
  @font-face {
    font-family: 'Pretendard';
    font-weight : 300;
    src: url(${PretendardLight}) format("woff2");
  }
  
  @font-face {
    font-family: 'Pretendard';
    font-weight : 500;
    src: url(${PretendardMedium}) format("woff2");
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight : 400;
    src: url(${PretendardRegular}) format("woff2");
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight : 600;
    src: url(${PretendardSemiBold}) format("woff2");
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight : 100;
    src: url(${PretendardThin}) format("woff2");
  }
  
  * {
    font-family: 'Pretendard';
  }
`;

export default GlobalStyle;
