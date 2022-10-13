import React, { useState } from 'react'
import { Link, Button, Text } from '../../Atom'
import {
    ButtonWrapper, Container, LogoWrapper, MenuWrapper,
    NavWrapper, SubMenu, SubMenuContainer, SubMenuWrapper, Menu, TitleWrapper, IconWrapper, MobileContainer, MobileNavWrapper, MobileMenu
} from './style'
import { MdOutlineClose, MdOutlineMenu } from 'react-icons/md'
const Nav = ({ links, logo, button, menus = [] }) => {
    const [hidden, setHidden] = useState(true)
    const [mobileHidden, setMobileHidden] = useState(true)
    console.log(mobileHidden)
    const generateMenu = (menus = []) => {
        return menus.map((menu, index, array) => {
            return (
                <Menu key={index}>
                    <Link {...menu}>{menu.name}</Link>
                </Menu>
            )
        })
    }
    return (
        <>
            <Container onMouseLeave={() => setHidden(true)}>
                <NavWrapper onMouseEnter={() => setHidden(false)}>
                    <LogoWrapper src={logo} alt='로고 이미지' />
                    <MenuWrapper>
                        {links.map((link, index, array) => {
                            return (<Link key={index} {...links}>{link.name}</Link>)
                        })}
                    </MenuWrapper>
                    <ButtonWrapper>
                        <Button {...button}>{button.content}</Button>
                    </ButtonWrapper>
                    <IconWrapper>
                        <MdOutlineMenu size={30} onClick={() => setMobileHidden(false)} />
                    </IconWrapper>
                </NavWrapper>
                <SubMenuContainer isHidden={hidden}>
                    <SubMenuWrapper>
                        {menus.map((menu, index, array) => {
                            return (
                                <SubMenu key={index}>
                                    <TitleWrapper>
                                        <Text>{menu.title}</Text>
                                    </TitleWrapper>
                                    {generateMenu(menu.menu)}
                                </SubMenu>
                            )
                        })}
                    </SubMenuWrapper>
                </SubMenuContainer>
            </Container>
            <MobileContainer isHidden={mobileHidden}>
                <NavWrapper>
                    <LogoWrapper src={logo} alt='로고 이미지' />
                    <ButtonWrapper>
                        <Button {...button}>{button.content}</Button>
                    </ButtonWrapper>
                    <IconWrapper>
                        <MdOutlineClose size={30} onClick={() => setMobileHidden(true)} />
                    </IconWrapper>
                </NavWrapper>
                <MobileNavWrapper>
                    {menus.map((menu, index, array) => {
                        return (
                            <MobileMenu key={index}>
                                <TitleWrapper>
                                    <Text>{menu.title}</Text>
                                </TitleWrapper>
                                {generateMenu(menu.menu)}
                            </MobileMenu>
                        )
                    })}
                </MobileNavWrapper>
            </MobileContainer>
        </>
    )
}

export default Nav