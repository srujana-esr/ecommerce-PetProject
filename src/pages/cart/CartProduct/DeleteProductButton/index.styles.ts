import styled from 'styled-components';
import { FlexRow } from '../../../../theme/defaultStyles';

export const Container = styled.div<{ disabled: boolean }>`
	${FlexRow}
	align-items: center;

	.delete-button {
		${FlexRow}
		align-items: center;
		background: none;
		font-size: 1rem;
		background: none;
	}

	.delete-icon {
		font-size: 1.3rem;
		vertical-align: middle;
		margin-right: 8px;

		:hover {
			color: ${(props) => props.disabled ? '#969696' : '#000'};
			cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
		}
	}
`;
