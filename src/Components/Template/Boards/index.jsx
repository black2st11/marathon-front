import React from 'react';
import * as S from './style';
import {Text} from '../../Atom';

const Borads = ({titles = [], contents = [], count = 0, page = 0}) => {
	return (
		<S.Container>
			<S.TitleWrapper>
				{titles.map((title) => (
					<S.Title {...title}>
						<Text {...title.text} />
					</S.Title>
				))}
			</S.TitleWrapper>
			{contents.map((content, index, array) => (
				<S.ContentWrapper key={index}>
					<React.Fragment>
						<S.Content>
							<Text children={count - (page - 1) * 10 - index} />
						</S.Content>
						<S.Content flex={5}>
							<Text children={content.title} />
						</S.Content>
						<S.Content>
							<Text children={content.date} />
						</S.Content>
						<S.Content>
							<Text children={content.hit} />
						</S.Content>
					</React.Fragment>
				</S.ContentWrapper>
			))}
		</S.Container>
	);
};

export default Borads;
