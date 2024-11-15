import styled from 'styled-components';
import {
	BACKGROUND_COLORS,
	BORDER_COLORS,
	FONT_COLOR,
} from '../../../../theme/defaultConstants';
import { FlexColumn } from '../../../../theme/defaultStyles';

export const Container = styled.div`
	padding-top: 20px;

	.switch {
		position: relative;
		display: inline-block;
		width: 300px;
		height: 50px;
		border: 2px solid ${BORDER_COLORS.primary};
		border-radius: 5px;
		overflow: hidden;

		input {
			opacity: 0;
			width: 0;
			height: 0;

			:disabled {
				cursor: not-allowed;

				+ .slider {
					cursor: not-allowed;

					::before {
						color: ${FONT_COLOR.disabledLight};
					}
				}
			}
		}

		.slider {
			position: absolute;
			cursor: pointer;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background-color: ${BACKGROUND_COLORS.default};
			transition: all 0.4s ease-in-out;

			::before {
				border-radius: 3px;
				position: absolute;
				content: 'Free';
				height: 85%;
				width: 30%;
				max-width: 200px;
				aspect-ratio: 1/1;
				left: 3px;
				top: 3px;
				background-color: white;
				-webkit-transition: all 0.4s ease-in-out;
				transition: all 0.4s ease-in-out;

				${FlexColumn}
				align-items: center;
				font-size: 1rem;
				color: ${FONT_COLOR.baseLight};
			}
		}

		input:checked + .slider {
			background-color: ${BACKGROUND_COLORS.darkLight};

			::before {
				content: 'Express';
				width: 35%;
			}
		}

		input:focus + .slider {
			box-shadow: 0 0 1px #2196f3;
		}

		input:checked + .slider:before {
			transform: translateX(calc(300px - 27% - 80%));
		}
	}
`;
