import styled from "styled-components";
import { Props } from ".";
import { BORDER_COLORS } from "../../../theme/defaultConstants";

export const Container = styled.div<Props>`
	${props => props.isRenderedInFlex ? 'flex' : 'width'} : ${props => props.isRenderedInFlex ? `0 0 ${props.width}` : `${props.width}`}; 
	height: ${props => props.height};
	${props => props.showBorder && `border: 3px solid ${BORDER_COLORS.greyBottomBorder}`};
	${props => props.showBorder && `border-radius: 6px`};
	overflow: hidden;

	img {
		width: 100%;
		height: 100%;
		aspect-ratio: 1/1;
	}
`;