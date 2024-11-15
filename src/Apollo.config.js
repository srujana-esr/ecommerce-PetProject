import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const token = localStorage.getItem('userToken');

const link = new HttpLink({
	uri: import.meta.env.SERVER_URI || import.meta.env.VITE_SERVER_URI,
	headers: {
		authorization: token ? `Bearer ${token}` : '',
		'x-api-key': import.meta.env.API_KEY || import.meta.env.VITE_API_KEY,
	},
})

const client = new ApolloClient({
	link,
	cache: new InMemoryCache(),
	connectToDevTools: true,
});

export default client;
