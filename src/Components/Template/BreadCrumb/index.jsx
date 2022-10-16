import React from 'react'
import { Text } from '../../Atom'
import { Container, TitleWrapper, Depth, DepthWrapper } from './style'
import { menuList } from '../../../config'

const FindPath = (menus, path) => {
    let res = { name: '', isEnded: true, menu: [] }
    menus.map((menu, index, array) => {
        if (menu.href === path) {
            res = { name: menu.name, isEnded: menu.menu ? false : true, menu: menu.menu }
        }
    })
    return res

}

const BreadCrumb = () => {
    let depths = ['HOME']
    let paths = window.location.pathname.split('/').splice(1).reverse()
    let menu = menuList
    while (paths) {
        let path = paths.pop()
        let res = FindPath(menu, path)
        depths.push(res.name)

        if (res.isEnded) {
            break
        }
        menu = res.menu
    }

    return (
        <Container>
            <DepthWrapper>
                {depths.map((depth, index, array) => (
                    <React.Fragment key={index}>
                        <Depth key={index}>
                            <Text>
                                {depth}
                            </Text>
                        </Depth>
                        {index + 1 !== array.length && (<Text>{` > `}</Text>)}
                    </React.Fragment>
                ))}
            </DepthWrapper>
            <TitleWrapper>
                <Text>{depths[depths.length - 1]}</Text>
            </TitleWrapper>
        </Container>
    )
}

export default BreadCrumb