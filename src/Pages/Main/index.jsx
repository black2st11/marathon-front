import React from 'react'
import * as S from './style'
import { Text, Button, Image } from '../../Components/Atom'
import { ContentTitle, ImgText, WhiteCard } from '../../Components/Organism'
import { firstProps, fourthProps, secondProps, thirdProps } from './data'
const Main = () => {
    return (
        <S.Container>
            <S.FirstSection>
                <S.FirstTextWrapper>
                    <Text {...firstProps.title} />
                    <Text {...firstProps.content} />
                    <Button {...firstProps.button} />
                </S.FirstTextWrapper>
                <S.DateWrapper>
                    <S.DateTextWrapper>
                        <Text {...firstProps.date.title} />
                    </S.DateTextWrapper>
                    <S.DateItemWrapper>
                        <S.DateItem>
                            <Text {...firstProps.date.dayValue} />
                            <Text {...firstProps.date.day} />
                        </S.DateItem>
                        <S.DateItem>
                            <Text {...firstProps.date.hourValue} />
                            <Text {...firstProps.date.hour} />
                        </S.DateItem>
                        <S.DateItem>
                            <Text {...firstProps.date.minuteValue} />
                            <Text {...firstProps.date.minute} />
                        </S.DateItem>
                        <S.DateItem>
                            <Text {...firstProps.date.secondValue} />
                            <Text {...firstProps.date.second} />
                        </S.DateItem>
                    </S.DateItemWrapper>
                </S.DateWrapper>
            </S.FirstSection>
            <S.SecondSection>
                <S.InfoWrapper>
                    <S.InfoTextWrapper>
                        <Text {...secondProps.info.title} />
                        <Text {...secondProps.info.content} />
                    </S.InfoTextWrapper>
                    <S.ImgTextWrapper>
                        {secondProps.info.links.map(link => (
                            <ImgText {...link} />
                        ))}
                    </S.ImgTextWrapper>
                </S.InfoWrapper>
                <S.SupportWrapper>
                    {secondProps.supports.map(support => (
                        <S.Support>
                            <Text {...support.title} />
                            {support.imgs.map(img => (
                                <S.SupportImg  {...img} />
                            ))}
                        </S.Support>
                    ))}
                </S.SupportWrapper>
            </S.SecondSection>
            <S.ThirdSection>
                <S.ThirdTextWrapper>
                    <ContentTitle {...thirdProps.title} />
                </S.ThirdTextWrapper>
                <S.ThirdCardWrapper>
                    <WhiteCard items={thirdProps.first} />
                    <WhiteCard items={thirdProps.second} />
                </S.ThirdCardWrapper>
            </S.ThirdSection>
            <S.FourthSection>
                <S.ThirdTextWrapper>
                    <ContentTitle {...fourthProps.title} />
                    <Image {...fourthProps.course} />
                </S.ThirdTextWrapper>
            </S.FourthSection>
        </S.Container>
    )
}

export default Main