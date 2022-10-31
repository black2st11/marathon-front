import React from 'react'
import * as S from './style'
import { Text } from '../../Atom'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const Pagination = ({ current = 1, total, textProps, currentTextProps, pageSize = 5 }) => {
    let pages = []
    for (let page = Math.floor(current / pageSize) + 1; pages.length < 5 && page < total; page++) {
        pages.push(page)
    }
    return (
        <S.Container>
            {current != 1 && (<S.Page><MdChevronLeft size='2rem' color='#9b9b9b' /></S.Page>)}
            {pages.map(page => (
                <S.Page>
                    {current == page ?
                        (<Text {...currentTextProps} children={page} />) :
                        (<Text {...textProps} children={page} />)}
                </S.Page>
            ))}
            {current != total && <S.Page><MdChevronRight fontSize='2rem' color='#9b9b9b' /></S.Page>}
        </S.Container>
    )
}

export default Pagination
