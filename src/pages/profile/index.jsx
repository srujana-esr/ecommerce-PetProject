import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { NAV_ICONS } from './config';
import Content from './Content';
import {
	Container,
	IconContainer,
	LogoutIconContainer,
	SideNav,
} from './index.styles';
import { resetWishlistState, userLogout } from '../../redux/actions';

const UserProfile = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const [ activeView, setActiveView ] = useState('info');

	useEffect(() => {
		if (history?.location?.state?.from === "orderDetails") {
			setActiveView('orders');
		}
	}, [ history?.location?.state ])

	const handleNavOnClick = (clickIconId) => {
		setActiveView(clickIconId);
	};

	const handleLogoutclick = () => {
		dispatch(userLogout());
		dispatch(resetWishlistState());
		history.replace('/');
	};

	return (
		<Container>
			<SideNav>
				<div>
					{NAV_ICONS.map((icon) => (
						<IconContainer
							id={icon.id}
							key={icon.id}
							isActive={activeView === icon.id}
							onClick={() => handleNavOnClick(icon.id)}>
							<ion-icon name={icon.name}></ion-icon>
						</IconContainer>
					))}
				</div>
				<LogoutIconContainer onClick={handleLogoutclick}>
					<ion-icon name='log-out-outline'></ion-icon>
				</LogoutIconContainer>
			</SideNav>
			<Content activeView={activeView} />
		</Container>
	);
};

export default UserProfile;
