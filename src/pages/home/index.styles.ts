import styled from 'styled-components';
import { BodyText, FlexColumn } from '../../theme/defaultStyles';

export const Container = styled.div`
	display: block;
	width: 100%;
	height: auto;
	max-width: 100vw;
	margin: auto;
`;

export const HeroContent = styled.div`
	margin: 60px auto auto auto;
	width: 75%;
	max-width: 750px;
	text-align: center;

	${FlexColumn}
`

export const HeroBodyText = styled(BodyText)`
	margin: 15px auto;
`

export const StyledHomeCatalogue = styled.div`
	box-sizing: border-box;
	width: 100vw;
	max-width: 1920px;
	margin: auto;
	padding-left: 48px;
	padding-right: 48px;
`;
