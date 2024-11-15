import { MainHeading } from '../../../theme/defaultStyles';
import LoadingCard from '../LoadingCard';

const QueryResult = ({
	loading,
	error,
	data,
	children,
	emptyDataMessage,
	loadingParentComponent: LoadingContainer,
}) => {
	if (error) {
		return (
			<MainHeading
				style={{
					textAlign: 'center',
					marginTop: '50px',
					color: 'red',
				}}>
				Unable to fetch products. Please try again later.
			</MainHeading>
		);
	}

	if (loading) {
		return (
			<>
				{[ ...Array(6).keys() ].map((index) => (
					<LoadingCard key={index} />
				))}
			</>
		);
	}

	if (!data) {
		return <p>{emptyDataMessage}</p>;
	}

	if (data) {
		return children;
	}
};

export default QueryResult;
