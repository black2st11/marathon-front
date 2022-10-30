import styled from 'styled-components'
import { colorPalette, defaultSize, viewSize } from '../../config'
import { mainDesktopImg } from '../../config/images'
import { secondSectionImg } from '../../config/images'

export const Container = styled.div`
    width : 100%;
    display : flex;
    flex-direction : column;
`

export const FirstSection = styled.div`
    display : flex;
    flex-direction : column;
    background-image : url(${props => props.bgImg ? props.bgImg.desktop : mainDesktopImg});
    width : 100%;
    background-repeat : no-repeat;
    background-size : cover;
    height: ${props => props.height ? props.height.desktop : '100vh'};
`

export const FirstTextWrapper = styled.div`
    text-align :right;
    width : 100%;
    max-width : ${defaultSize.desktopContainer};
    margin : 7rem auto;

    > button {
        width :  9rem;
    }
`

export const DateWrapper = styled.div`
    display : flex;
    flex-direction : column;
    width : 100%;
    max-width : ${defaultSize.desktopContainer};
    margin : auto auto 10rem auto;
`

export const DateTextWrapper = styled.div`

`

export const DateItemWrapper = styled.div`
    display : flex;
    flex-wrap: wrap;
    justify-content : space-around;
`

export const DateItem = styled.div`
    display : flex;
    align-items : center;
    justify-content : space-between;
    flex-direction : column;
    height : 6rem;
`

export const SecondSection = styled.div`
    width : 100%;
    display : flex;
    flex-direction : column;
    align-items : center;
    margin : 5.5rem auto 7rem auto;
`

export const InfoWrapper = styled.div`
    display : flex;
    width : 100%;
    max-width : ${defaultSize.desktopContainer};
    margin-bottom : 4rem;
`

export const InfoTextWrapper = styled.div`
    display : flex;
    flex-direction : column;
    width : 20%;

    > span {
        margin-bottom : 1rem;
    }
`

export const ImgTextWrapper = styled.div`
    display : flex;
    width : 80%;
    flex-wrap : wrap;
    justify-content : space-between;
`

export const SupportWrapper = styled.div`
    display : flex;
    flex-wrap : wrap;
    justify-content : space-between;
    width : 100%;
    align-items : center;
    max-width : ${defaultSize.desktopContainer};
    background-color : ${colorPalette.card};
    border-radius : 1rem;
    padding : 2rem 0;
    min-height : 7rem;
`

export const Support = styled.div`
    display : flex;
    align-items : center;
    justify-content : space-evenly;
    width : 50%;
`

export const SupportImg = styled.img``

export const ThirdSection = styled.div`
    display : flex;
    justify-content : center;
    flex-direction : column;
    background-image : url(${props => props.bgImg ? props.bgImg.desktop : secondSectionImg});
    width : 100%;
    background-repeat : no-repeat;
    background-size : cover;
    height: ${props => props.height ? props.height.desktop : '80vh'};
`

export const ThirdTextWrapper = styled.div`
    width : 100%;
    max-width : ${defaultSize.desktopContainer};
    margin : 1rem auto;
`

export const ThirdCardWrapper = styled.div`
    width : 100%;
    max-width : ${defaultSize.desktopContainer};
    display : flex;
    margin : 1rem auto;
    justify-content : space-between;
`

export const FourthSection = styled.div`
    padding : 80px 0 133px 0;
`
