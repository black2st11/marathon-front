import React from 'react';
import * as S from './style';
import {MdClear} from 'react-icons/md';
import {Text} from '../../Atom';
import {colorPalette, fontSize, fontWeight} from '../../../config';
const Modal = ({
	onClose,
	bottomClick,
	img,
	isClose = false,
	children,
	bottomText,
}) => {
	const textProps = {
		children: bottomText ? bottomText : '오늘 하루동안 보지않기',
		fontSize: {
			desktop: fontSize.lg,
			tablet: fontSize.base,
			mobile: fontSize.sm2,
		},
		color: colorPalette.black,
		fontWeight: fontWeight.medium,
	};

	if (isClose) {
		return;
	}
	return (
		<S.Container>
			<S.Modal>
				<S.TopWrapper onClick={onClose}>
					<MdClear fontSize='2rem' />
				</S.TopWrapper>
				{img ? <S.ModalImg {...img} /> : children}
				<S.BottomWrapper onClick={bottomClick}>
					<Text {...textProps} />
				</S.BottomWrapper>
			</S.Modal>
		</S.Container>
	);
};

export default Modal;
