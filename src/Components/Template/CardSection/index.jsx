import React from 'react';
import * as S from './style';
import {CardContent, ContentTitle, Table} from '../../Organism';
import {Image, Ul} from '../../Atom';

const CardSection = ({title, subTitle, uls, table, image, display}) => {
	return (
		<S.Container display={display}>
			{title && (
				<S.TitleWrapper>
					<ContentTitle {...title} />
				</S.TitleWrapper>
			)}
			{subTitle && (
				<S.SubTitleWrapper>
					<ContentTitle {...subTitle} />
				</S.SubTitleWrapper>
			)}
			<S.CardWrapper>
				{uls && <CardContent uls={uls} />}
				{table && (
					<React.Fragment>
						<S.TableWrapper>
							<Table {...table} />
						</S.TableWrapper>
						<Ul listStyle='circle' items={table.descriptions} />
					</React.Fragment>
				)}
				{image && <Image {...image} />}
			</S.CardWrapper>
		</S.Container>
	);
};

export default CardSection;
