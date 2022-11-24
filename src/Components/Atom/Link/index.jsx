import React from 'react';
import {Container, Link as StyledLink} from './style';

const Link = ({children, href = '', color, fontSize, onClick}) => {
	return (
		<Container>
			<StyledLink
				href={href ? href : null}
				onClick={onClick}
				color={color}
				fontSize={fontSize}
			>
				{children}
			</StyledLink>
		</Container>
	);
};

export default Link;
