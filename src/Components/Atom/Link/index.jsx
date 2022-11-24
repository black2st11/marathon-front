import React from 'react';
import {Container, Link as StyledLink} from './style';

const Link = ({children, href = '', color, fontFamily, fontSize, onClick}) => {
	return (
		<Container>
			<StyledLink
				href={href ? href : null}
				onClick={onClick}
				color={color}
				fontSize={fontSize}
				fontFamily={fontFamily}
			>
				{children}
			</StyledLink>
		</Container>
	);
};

export default Link;
