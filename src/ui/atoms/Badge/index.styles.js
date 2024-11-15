import styled from 'styled-components';
import { FlexRow } from '../../../theme/defaultStyles';

const StyledBadge = styled.div`
	width: 20px;
	height: 15px;
	border: 1px solid red;
	border-radius: 15px;

	background-color: red;
	color: white;

	${FlexRow}

	font-size: 0.65rem;
	text-align: center;

	position: absolute;
	top: 15px;
	left: 15px;
`;

export default StyledBadge;
