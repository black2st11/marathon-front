import React, {useEffect, useState} from 'react';
import * as S from './style';
import {Text, Button, Image} from '../../Components/Atom';
import {
	ContentTitle,
	ImgText,
	WhiteCard,
	Modal,
} from '../../Components/Organism';
import {
	firstProps,
	fourthProps,
	modalProps,
	secondProps,
	thirdProps,
} from './data';
import {getModals} from '../../api/admin';

const oneDayClose = (setFunc) => {
	setFunc(true);
	let today = new Date();
	let today_format = new Intl.DateTimeFormat('kr').format(today);
	localStorage.setItem('modal', today_format);
};

const checkExpireModal = () => {
	let modalDate = localStorage.getItem('modal');
	let today = new Date();
	let today_format = new Intl.DateTimeFormat('kr').format(today);

	return modalDate === today_format;
};

const Main = () => {
	const [isModalClose, setIsModalClose] = useState(checkExpireModal());
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		(async () => {
			let res = await getModals({is_active: true});
			if (res.isSuccess && res.data.count > 0) {
				modalProps.img.src = res.data.results[0].image;
			}
			setIsLoading(false);
		})();
	}, []);

	modalProps.isClose = isModalClose;
	modalProps.onClose = () => setIsModalClose(true);
	modalProps.bottomClick = () => oneDayClose(setIsModalClose);

	return (
		<S.Container>
			{!isLoading && <Modal {...modalProps} />}
			<S.FirstSection>
				<S.FirstTextWrapper>
					<Text {...firstProps.title} />
					<Text {...firstProps.content} />
					<Button {...firstProps.button} />
				</S.FirstTextWrapper>
				<S.DateWrapper>
					<S.DateTextWrapper>
						<Text {...firstProps.date.title} />
					</S.DateTextWrapper>
					<S.DateItemWrapper>
						<S.DateItem>
							<Text {...firstProps.date.dayValue} />
							<Text {...firstProps.date.day} />
						</S.DateItem>
						<S.DateItem>
							<Text {...firstProps.date.hourValue} />
							<Text {...firstProps.date.hour} />
						</S.DateItem>
						<S.DateItem>
							<Text {...firstProps.date.minuteValue} />
							<Text {...firstProps.date.minute} />
						</S.DateItem>
						<S.DateItem>
							<Text {...firstProps.date.secondValue} />
							<Text {...firstProps.date.second} />
						</S.DateItem>
					</S.DateItemWrapper>
				</S.DateWrapper>
			</S.FirstSection>
			<S.SecondSection>
				<S.InfoWrapper>
					<S.InfoTextWrapper>
						<Text {...secondProps.info.title} />
						<Text {...secondProps.info.content} />
					</S.InfoTextWrapper>
					<S.ImgTextWrapper>
						{secondProps.info.links.map((link) => (
							<ImgText {...link} />
						))}
					</S.ImgTextWrapper>
				</S.InfoWrapper>
				<S.SupportWrapper>
					{secondProps.supports.map((support) => (
						<S.Support>
							<Text {...support.title} />
							{support.imgs.map((img) => (
								<S.SupportImg {...img} />
							))}
						</S.Support>
					))}
				</S.SupportWrapper>
			</S.SecondSection>
			<S.ThirdSection>
				<S.ThirdTextWrapper>
					<ContentTitle {...thirdProps.title} />
				</S.ThirdTextWrapper>
				<S.ThirdCardWrapper>
					<WhiteCard items={thirdProps.first} />
					<WhiteCard items={thirdProps.second} />
				</S.ThirdCardWrapper>
			</S.ThirdSection>
			<S.FourthSection>
				<S.ThirdTextWrapper>
					<ContentTitle {...fourthProps.title} />
				</S.ThirdTextWrapper>
				<S.ThirdTextWrapper>
					<Image {...fourthProps.course} />
				</S.ThirdTextWrapper>
			</S.FourthSection>
		</S.Container>
	);
};

export default Main;
