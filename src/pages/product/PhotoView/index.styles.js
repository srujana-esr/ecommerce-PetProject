import styled from 'styled-components';
import { FlexRow } from '../../../theme/defaultStyles';

export const ProductPhotoView = styled.div`
	flex: 0 1 50%;

	${FlexRow}
	justify-content: space-evenly;
	align-content: flex-start;
	flex-wrap: wrap;

	img {
		width: 47%;
		aspect-ratio: 1/1;
		max-width: 400px;
		margin-top: 10px;

		:last-of-type,
		:first-of-type {
			transform: scaleX(-1);
		}
	}
`;
