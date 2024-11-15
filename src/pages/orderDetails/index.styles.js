import { Button } from '@comp-lib';
import styled from 'styled-components';
import { BACKGROUND_COLORS } from '../../theme/defaultConstants';
import { FlexColumn, FlexRow } from '../../theme/defaultStyles';

export const Container = styled.div`
	padding: 50px;

	.title {
		max-width: 736px;
		margin-bottom: 20px;
		${FlexRow};
		justify-content: space-between;
		align-items: center;
	}
`;

export const ErrorMessage = styled.p`
	font-weight: 500;
	color: #cc0000;
`;

export const BackText = styled.p`
	font-size: 0.875rem;
	text-align: right;
	cursor: pointer;

	ion-icon {
		font-size: 1rem;
		vertical-align: middle;
		margin-right: 5px;
	}
`;

export const ButtonContainer = styled.div`
	position: relative;
	height: 40px;
	width: 150px;
	margin-left: 586px;

	
	.icon_container {
		color: #fff;
		position: absolute;
		box-sizing: border-box;
		width: 100%;
		height: 100%;
		overflow: hidden;
		background-color: rgba(0,0,0,0.85);
		border-radius: 3px;

		${FlexRow}
		align-items: center;

		ion-icon{
			font-size: 2rem;
		}

		.login_failed {
			color: #ff9494;
		}

		.login_success {
			color: #4bb543;
		}
	}
`

export const CancelButton = styled(Button)`
	width: 100%;
	height: 100%;
	align-self: flex-end;
	background-color: ${props => props.disabled ? BACKGROUND_COLORS.disabled : '#000'};
`;