import React, {useEffect, useState, useRef} from 'react';
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

const useInterval = (callback, delay) => {
	const savedCallback = useRef();

	// Remember the latest callback.
	useEffect(() => {
		savedCallback.current = callback;
	}, [callback]);

	// Set up the interval.
	useEffect(() => {
		function tick() {
			savedCallback.current();
		}
		if (delay !== null) {
			let id = setInterval(tick, delay);
			return () => clearInterval(id);
		}
	}, [delay]);
};

const Main = () => {
	const [isModalClose, setIsModalClose] = useState(checkExpireModal());
	const [isLoading, setIsLoading] = useState(true);
	const [date, setDate] = useState({
		day: '',
		hour: '',
		minute: '',
		second: '',
	});
	const refreshTime = () => {
		const masTime = new Date('2022-12-30');
		const todayTime = new Date();
		const diff = masTime - todayTime;

		const diffDay = String(Math.floor(diff / (1000 * 60 * 60 * 24)));
		const diffHour = String(
			Math.floor((diff / (1000 * 60 * 60)) % 24),
		).padStart(2, '0');
		const diffMin = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(
			2,
			'0',
		);
		const diffSec = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');

		setDate({
			day: diffDay,
			hour: diffHour,
			minute: diffMin,
			second: diffSec,
		});
	};

	useInterval(() => {
		refreshTime();
	}, 1000);

	useEffect(() => {
		(async () => {
			let res = await getModals({isAdmin: false});
			if (res.isSuccess && res.data.count > 0) {
				modalProps.img.src = res.data.results[0].image;
			} else {
				setIsModalClose(true);
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
							<Text
								{...firstProps.date.dayValue}
								children={date.day}
							/>
							<Text {...firstProps.date.day} />
						</S.DateItem>
						<S.DateItem>
							<Text
								{...firstProps.date.hourValue}
								children={date.hour}
							/>
							<Text {...firstProps.date.hour} />
						</S.DateItem>
						<S.DateItem>
							<Text
								{...firstProps.date.minuteValue}
								children={date.minute}
							/>
							<Text {...firstProps.date.minute} />
						</S.DateItem>
						<S.DateItem>
							<Text
								{...firstProps.date.secondValue}
								children={date.second}
							/>
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
							<a
								href={link.href}
								style={{
									display: 'flex',
									textDecoration: 'none',
									margin: '1rem',
								}}
							>
								<ImgText {...link} />
							</a>
						))}
					</S.ImgTextWrapper>
				</S.InfoWrapper>
				{secondProps.supports.length > 0 && (
					<S.SupportWrapper>
						{secondProps.supports.map((support) => (
							<S.Support>
								<Text {...support.title} />
								{support.imgs['desktop'].map((img) => (
									<S.SupportImg desktop={true} {...img} />
								))}
								{support.imgs['tablet'].map((img) => (
									<S.SupportImg tablet={true} {...img} />
								))}
								{support.imgs['mobile'].map((img) => (
									<S.SupportImg mobile={true} {...img} />
								))}
							</S.Support>
						))}
					</S.SupportWrapper>
				)}
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
				<div style={{marginTop: '30px'}}></div>
				<S.ThirdTextWrapper>
					<Image {...fourthProps.course} />
				</S.ThirdTextWrapper>
			</S.FourthSection>
		</S.Container>
	);
};

export default Main;
