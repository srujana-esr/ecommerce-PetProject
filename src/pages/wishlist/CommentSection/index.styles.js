import styled from "styled-components";
import { BACKGROUND_COLORS, BORDER_COLORS, FONT_COLOR } from "../../../theme/defaultConstants";
import { FlexColumn, FlexRow } from "../../../theme/defaultStyles";
import { commonBoxStyles } from "../index.styles";

export const Container = styled.div`
	${commonBoxStyles};
`;

export const NewCommentInput = styled.div`
	${FlexColumn}

	label {
		font-size: 0.875rem;
		font-weight: 500;
		margin-bottom: 5px;
	}

	textarea {
		border: 1px solid ${BORDER_COLORS.formElement.primary};
		padding: 10px 10px;
		resize: vertical;
	}
`;

export const CommentActions = styled.div`
	margin-top: 10px;
	${FlexRow}
	justify-content: flex-end;

	button {
		height: 35px;
		border-radius: 3px;
		font-size: 0.938rem;
		padding: 0 16px;
		
		background-color: ${BACKGROUND_COLORS.button.primary};
		border: 1px solid ${BORDER_COLORS.button.primary};
		color: ${FONT_COLOR.button.primary};

		cursor: pointer;

		:disabled {
			background-color: ${BACKGROUND_COLORS.button.disabled};
			border-color: ${BORDER_COLORS.button.disabled};
			color: ${FONT_COLOR.button.disabled};
			cursor: not-allowed;
		}
	}
`;

export const CommentList = styled.div`
	margin-top: 20px;
	${FlexColumn}

	.commentListItem {
		${commonBoxStyles};
		width: calc( 100% - 36px);
		margin-top: 5px;

		.footer {
			margin-top: 10px;
			${FlexRow}
			justify-content: flex-start;
			align-items: center;

			color: ${FONT_COLOR.secondary};

			small {
				margin-left: 20px;

				:first-of-type {
					margin-left: 0px;
				}
			}

		}
	}
`;

export const LikesContainer = styled.div`
	margin-left: 20px;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	color: ${props => props.isLiked ? FONT_COLOR.base : 'inherit'};

	:hover {
	color: ${FONT_COLOR.base};
	}

	ion-icon {
		font-size: 0.875rem;
		margin-left: 5px;
	}
`;

export const DeleteContainer = styled.div`
	margin-left: 20px;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	color: ${props => props.isLiked ? FONT_COLOR.base : 'inherit'};

	:hover {
	color: ${FONT_COLOR.base};
	}

	ion-icon {
		margin-left: 5px;
	}
`;