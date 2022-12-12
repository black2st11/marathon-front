import React from 'react';
import {
	colorPalette,
	fontSize as configFont,
	fontWeight as configWeight,
} from '../../../config';
import {Link, Text} from '../../Atom';
import {
	Container,
	TitleWrapper,
	InfoWrapper,
	ContactWrapper,
	CopyWrapper,
	FooterWrapper,
	Section,
	AdminWrapper,
} from './style';

const defaultFontSize = {
	desktop: configFont.sm2,
	tablet: configFont.sm2,
	mobile: configFont.xs,
};

const Footer = ({
	name = '0000',
	tel = '000-0000-0000',
	fax = '000-0000-0000',
	color = colorPalette.white,
	fontSize = defaultFontSize,
	fontWeight = configWeight.medium,
}) => {
	const textProps = {
		color,
		fontSize,
		fontWeight,
	};

	return (
		<Container>
			<FooterWrapper>
				<Section>
					<TitleWrapper>
						<Text {...textProps}>{name}마라톤</Text>
					</TitleWrapper>
					<ContactWrapper>
						<Text {...textProps}>
							Tel. {tel}| Fax. {fax}
						</Text>
					</ContactWrapper>
				</Section>
				<Section>
					<InfoWrapper>
						<Text {...textProps}>
							사무국운영시간/09:00~18:00(월~금), 점심시간/
							12:00~13:00
						</Text>
					</InfoWrapper>
					<CopyWrapper>
						<Text {...textProps}>
							Copyright(c) {name}마라톤 All rights reserved.
						</Text>
					</CopyWrapper>
				</Section>
				<Section>
					<AdminWrapper>
						<Link
							{...textProps}
							href={window.location.origin + '/admin/login'}
						>
							Admin Page
						</Link>
					</AdminWrapper>
				</Section>
			</FooterWrapper>
		</Container>
	);
};

export default Footer;
