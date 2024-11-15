import { Avatar } from '@comp-lib';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
	selectLoggedInUsersToken,
	selectLoggedInUserName,
} from '../../../../redux/selectors/auth';
import { getUsersFirstName } from '../../../../utils/modifyData';
import { StyledNavUserOptions } from './index.styles';

const NavUserOptions = () => {
	const userToken = useSelector(selectLoggedInUsersToken);
	const userName = useSelector(selectLoggedInUserName);

	return (
		<StyledNavUserOptions>
			{userToken ? (
				<Link to={`/user/${getUsersFirstName(userName)}`}>
					<Avatar
						width='40px'
						height='40px'
						className='avatar'
					/>
				</Link>
			) : (
				<Link to='/login'>
					<ion-icon name='person-circle-outline'></ion-icon>
				</Link>
			)}
		</StyledNavUserOptions>
	);
};

export default NavUserOptions;
