import styled from "styled-components";


export const Container = styled.div<{ containerMargin?: string }>`
	position: relative;
	width: max-content;

	${props => props.containerMargin && `margin: ${props.containerMargin}`}
`;