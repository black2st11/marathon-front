import React from 'react';
import * as S from './style';
import {Text} from '../../Atom';

const Borads = ({
	titles = [],
	contents = [],
	count = 0,
	page = 0,
	onClick,
	category = '자유',
}) => {
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
				<S.ContentWrapper
					key={index}
					onClick={() =>
						onClick({
							id: content.id,
							isPassword: content.is_password,
						})
					}
				>
					<React.Fragment>
						<S.Content>
							<Text children={count - (page - 1) * 10 - index} />
						</S.Content>
						<S.Content flex={5}>
							<Text children={content.title} />
						</S.Content>
						<S.Content
							display={{
								desktop: 'flex',
								tablet: 'flex',
								mobile: 'none',
							}}
						>
							<Text children={content.created} />
						</S.Content>
						<S.Content
							display={{
								desktop: 'flex',
								tablet: 'flex',
								mobile: 'none',
							}}
						>
							{category === '환불' ? (
								<Text
									children={
										content.comments?.length ? 'O' : 'X'
									}
								/>
							) : (
								<Text children={content.hit} />
							)}
						</S.Content>
					</React.Fragment>
				</S.ContentWrapper>
			))}
		</S.Container>
	);
};

export default Borads;
