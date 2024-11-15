import styled from 'styled-components';
import { FlexColumn, FlexRow } from '../../theme/defaultStyles';

export const Container = styled.div`
	${FlexRow}
	height: calc(100vh - 70px);
`;

export const SideNav = styled.div`
	width: 100px;
	border-right: 1px solid #e9e9e9;
	border-top: 1px solid #e9e9e9;

	padding: 50px 0;

	${FlexColumn}
	align-items: center;
	justify-content: space-between;
`;

export const IconContainer = styled.div`
	border: ${(props) => (props.isActive ? '1px solid black' : 'none')};
	border-radius: ${(props) => (props.isActive ? '6px' : 'none')};
	background-color: ${(props) => (props.isActive ? '#000' : 'none')};
	color: ${(props) => (props.isActive ? '#fff' : '#000')};
	cursor: pointer;

	${FlexColumn}

	padding: 10px;
	margin-top: 20px;
	font-size: 1.5rem;

	:first-of-type {
		margin-top: 0;
	}
`;

export const LogoutIconContainer = styled.div`
	padding: 10px;
	font-size: 1.5rem;
	cursor: pointer;
	color: rgba(0, 0, 0, 0.5);
	${FlexColumn}
	border-radius: 50%;
	transition: all 0.2s ease-in-out;

	:hover {
		background-color: rgba(0, 0, 0, 0.1);
		color: #000;
	}
`;
