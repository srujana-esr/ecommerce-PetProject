import React, { Suspense } from 'react';
import { Route, Switch, useLocation } from 'react-router';
import { ApolloProvider } from '@apollo/client';
import PrivateRoute from './hoc/PrivateRoute';
import client from './Apollo.config';
import Container from './theme/container';
import { APP_ROUTES } from './config/routes';
import Nav from './ui/molecules/Nav';
import AutoLoginCheck from './hoc/autoLogin';

const routesToHideNavFor = [ '/login', '/signup' ];

const App = () => {
	const { pathname } = useLocation();

	return (
		<ApolloProvider client={client}>
			{!routesToHideNavFor.includes(pathname) && <Nav />}
			<Container>
				<Switch>
					<AutoLoginCheck>
						<Suspense fallback={<p>Loading...</p>}>
							{
								APP_ROUTES.map((ROUTE) => {
									return ROUTE.isPrivate ? (
										<PrivateRoute
											path={ROUTE.path}
											key={`${ROUTE.id}-${crypto.randomUUID()}`}>
											<ROUTE.component />
										</PrivateRoute>
									) : (
										<Route
											key={`${ROUTE.id}-${crypto.randomUUID()}`}
											component={ROUTE.component}
											path={ROUTE.path}
											exact={ROUTE.isExact}
										/>
									);
								})}
						</Suspense>
					</AutoLoginCheck>
				</Switch>
			</Container>
		</ApolloProvider>
	);
};

export default App;
