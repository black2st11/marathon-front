import React from 'react';
import {Container, Thead, Tbody, Th, Td, Tr} from './style';
import {Text, Ul} from '../../Atom';

export const MultipleText = ({texts = []}) => {
	return texts.map((text, index, array) => (
		<React.Fragment key={index}>
			<Text {...text} />
			<br />
		</React.Fragment>
	));
};

const GenerateTd = ({tds = []}) => {
	return tds.map((td, index, array) => (
		<Td
			key={index}
			rowSpan={td.rowSpan ? td.rowSpan : '1'}
			colSpan={td.colSpan ? td.colSpan : '1'}
		>
			{td.childrens ? (
				<MultipleText texts={td.childrens} />
			) : (
				<Text {...td} />
			)}
		</Td>
	));
};

const GenerateTh = ({ths = []}) => {
	return ths.map((th, index, array) => (
		<Th
			key={index}
			rowSpan={th.rowSpan ? th.rowSpan : '1'}
			colSpan={th.colSpan ? th.colSpan : '1'}
		>
			<Text {...th} />
		</Th>
	));
};

const GenerateTr = ({trs = []}) => {
	return trs.map((tr, index, array) => (
		<Tr key={index}>
			<GenerateTd tds={tr} />
		</Tr>
	));
};

const Table = ({
	ths = [],
	trs = [],
	descriptions = [],
	scroll = true,
	display,
}) => {
	console.log(display);
	return (
		<React.Fragment>
			<Container scroll={scroll} display={display}>
				<Thead>
					<Tr>
						<GenerateTh ths={ths} />
					</Tr>
				</Thead>
				<Tbody>
					<GenerateTr trs={trs} />
				</Tbody>
			</Container>
		</React.Fragment>
	);
};

export default Table;
