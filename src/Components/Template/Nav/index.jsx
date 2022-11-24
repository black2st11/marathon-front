import React, {useState} from 'react';
import {Link, Button, Text} from '../../Atom';
import {
	ButtonWrapper,
	Container,
	LogoWrapper,
	MenuWrapper,
	NavWrapper,
	SubMenu,
	SubMenuContainer,
	SubMenuWrapper,
	Menu,
	TitleWrapper,
	IconWrapper,
	MobileContainer,
	MobileNavWrapper,
	MobileMenu,
	Fake,
} from './style';
import {MdOutlineClose, MdOutlineMenu} from 'react-icons/md';

const Nav = ({links, logo, button, menus = []}) => {
	const [hidden, setHidden] = useState(true);
	const [mobileHidden, setMobileHidden] = useState(true);
	const generateMenu = (menus = []) => {
		return menus.map((menu, index, array) => {
			return (
				<Menu key={index}>
					<Link {...menu}>{menu.name}</Link>
				</Menu>
			);
		});
	};

	console.log(button);
	return (
		<React.Fragment>
			<Container onMouseLeave={() => setHidden(true)}>
				<NavWrapper onMouseEnter={() => setHidden(false)}>
					<LogoWrapper
						src={logo}
						alt='로고 이미지'
						onClick={() =>
							(window.location.href = window.location.origin)
						}
					/>
					<MenuWrapper>
						{links.map((link, index, array) => {
							return (
								<Link key={index} {...links}>
									{link.name}
								</Link>
							);
						})}
					</MenuWrapper>
					<ButtonWrapper>
						<Button {...button} />
					</ButtonWrapper>
					<IconWrapper>
						{mobileHidden ? (
							<MdOutlineMenu
								size={30}
								onClick={() => setMobileHidden(false)}
							/>
						) : (
							<MdOutlineClose
								size={30}
								onClick={() => setMobileHidden(true)}
							/>
						)}
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
							);
						})}
					</SubMenuWrapper>
				</SubMenuContainer>
				<MobileContainer isHidden={mobileHidden}>
					<MobileNavWrapper>
						{menus.map((menu, index, array) => {
							return (
								<MobileMenu key={index}>
									<TitleWrapper>
										<Text>{menu.title}</Text>
									</TitleWrapper>
									{generateMenu(menu.menu)}
								</MobileMenu>
							);
						})}
					</MobileNavWrapper>
				</MobileContainer>
			</Container>
			<Fake />
		</React.Fragment>
	);
};

export default Nav;
