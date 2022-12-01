import React, {useEffect, useState} from 'react';
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
import {Menu as AntdMenu} from 'antd';
import {MdOutlineClose, MdOutlineMenu} from 'react-icons/md';
import {colorPalette} from '../../../config';
const Nav = ({links, logo, button, menus = []}) => {
	const [hidden, setHidden] = useState(true);
	const [mobileHidden, setMobileHidden] = useState(true);
	const [firstPath, setFirstPath] = useState('');
	const [secondPath, setSecondPath] = useState('');
	const generateMenu = (menus = []) => {
		return menus.map((menu, index, array) => {
			let paths = menu.href?.split('/');
			let lastPath;
			if (paths) {
				lastPath = paths[paths.length - 1];
			}
			return (
				<Menu key={index} isCurrent={lastPath === secondPath}>
					<Link {...menu}>{menu.name}</Link>
				</Menu>
			);
		});
	};

	useEffect(() => {
		let paths = window.location.pathname.split('/');
		console.log(paths);
		setFirstPath(paths[1]);
		setSecondPath(paths[2]);
	}, []);

	if (window.location.pathname.includes('admin')) {
		if (window.location.pathname.includes('login')) {
			return (
				<AntdMenu mode='horizontal'>
					<AntdMenu.Item>
						<a href={'/'}>홈페이지로</a>
					</AntdMenu.Item>
				</AntdMenu>
			);
		}

		return (
			<AntdMenu mode='horizontal'>
				<AntdMenu.Item>
					<a href={'/admin/participation'}>신청서</a>
				</AntdMenu.Item>
				<AntdMenu.Item>
					<a href={'/admin/group'}>그룹</a>
				</AntdMenu.Item>
				<AntdMenu.Item>
					<a href={'/admin/volunteer'}>봉사신청서</a>
				</AntdMenu.Item>
				<AntdMenu.Item>
					<a href={'/admin/user'}>유저</a>
				</AntdMenu.Item>
				<AntdMenu.Item>
					<a href={'/admin/info'}>정보</a>
				</AntdMenu.Item>
				<AntdMenu.Item
					onClick={() => {
						sessionStorage.removeItem('verification');
						window.location.href =
							window.location.origin + '/admin/login';
					}}
				>
					로그아웃
				</AntdMenu.Item>
			</AntdMenu>
		);
	}

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
								<Link
									key={index}
									{...link}
									color={
										link.key === firstPath
											? colorPalette.secondary
											: colorPalette.navColor
									}
								>
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
