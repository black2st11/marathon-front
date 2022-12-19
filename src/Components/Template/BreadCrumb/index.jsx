import React from 'react';
import {Text} from '../../Atom';
import {Container, TitleWrapper, Depth, DepthWrapper} from './style';
import {colorPalette, fontSize, fontWeight} from '../../../config';

const BreadCrumb = ({depths = []}) => {
	const depthProps = {
		fontSize: {
			desktop: fontSize.sm2,
		},
		color: colorPalette.secondary,
	};

	const TitleProps = {
		fontSize: {
			desktop: '44px',
			tablet: '38px',
			mobile: '30px',
		},
		color: colorPalette.secondary,
		fontWeight: fontWeight.medium,
		fontFamily: 'Gmarket',
	};
	return (
		<Container>
			<DepthWrapper>
				{depths.map((depth, index, array) => (
					<React.Fragment key={index}>
						<Depth key={index}>
							<Text {...depthProps}>{depth}</Text>
						</Depth>
						{index + 1 !== array.length && (
							<Text {...depthProps}>{`>`}</Text>
						)}
					</React.Fragment>
				))}
			</DepthWrapper>
			<TitleWrapper>
				<Text {...TitleProps}>{depths[depths.length - 1]}</Text>
			</TitleWrapper>
		</Container>
	);
};

export default BreadCrumb;
