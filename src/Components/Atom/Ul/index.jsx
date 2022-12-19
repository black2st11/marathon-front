import React from 'react';
import {Container, CircleLi, TitleLi, Title, NoneLi, Contents} from './style';
import {Text} from '../index';

const Ul = ({items = [], listStyle = 'circle'}) => {
	return (
		<Container>
			{items.map((item, index, array) => {
				if (listStyle === 'title')
					return (
						<TitleLi key={index}>
							<Title type={item.title.type}>
								<Text {...item.title} />
							</Title>
							{item.content && <Text {...item.content} />}
							{item.contents && (
								<Contents>
									{item.contents.map(
										(content, index, array) => (
											<Text {...content} />
										),
									)}
								</Contents>
							)}
						</TitleLi>
					);
				else if (listStyle === 'none') {
					return (
						<NoneLi key={index}>
							<Text {...item.content} />
						</NoneLi>
					);
				} else
					return (
						<CircleLi key={index}>
							<Text {...item.content} />
						</CircleLi>
					);
			})}
		</Container>
	);
};

export default Ul;
