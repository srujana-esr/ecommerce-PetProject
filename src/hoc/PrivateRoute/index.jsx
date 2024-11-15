import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { selectLoggedInUsersToken } from '../../redux/selectors/auth';
import { checkStorageForActiveUser } from '../../utils/auth.helpers';

const PrivateRoute = ({ children, ...rest }) => {
	const userToken = useSelector(selectLoggedInUsersToken);
	const jwtToken = checkStorageForActiveUser();

	return (
		<>
			<Route
				{...rest}
				render={(routeParams) => {
					return userToken || jwtToken ? (
						children
					) : (
						<Redirect
							to={{
								pathname: '/login',
								state: { from: routeParams.location.pathname },
							}}
						/>
					);
				}}
			/>
		</>
	);
};

export default PrivateRoute;
