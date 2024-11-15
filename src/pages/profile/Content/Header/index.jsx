import { Container } from './index.styles';

const Header = ({ text, handleEditButtonClick, showEditIcon }) => {
	return (
		<Container>
			<h1>{text}</h1>

			{showEditIcon && (
				<ion-icon
					name='create-outline'
					onClick={handleEditButtonClick}></ion-icon>
			)}
		</Container>
	);
};

export default Header;
