import styled, { css } from "styled-components";
import { FlexRow } from "../../../theme/defaultStyles";
import { Props } from ".";

const AbsoluteContainer = css`
	position: absolute;
	box-sizing: border-box;
	background-color: rgba(0, 0, 0, 0.85);
	border-radius: 3px;

	.icon-error {
		color: #ff9494;
		font-size: 1.5rem;
	}

	.icon-success {
		color: #4bb543;
		font-size: 1.5rem;
	}
`

export const Container = styled.div<Props>`
	width: 100%;
	height: 100%;
	overflow: hidden;
	${FlexRow}
	align-items: center;
	justify-content: center;

	${props => props.isAbsolute && AbsoluteContainer}
	
	ion-icon {
		font-size: 1.4rem;
		font-weight: bold;
		vertical-align: middle;
		transition: all 0.2s linear;
	}

	:hover {
		cursor: pointer;
		color: #000;
	}
`