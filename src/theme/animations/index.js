import { keyframes } from 'styled-components';

export const customKickAnimation = keyframes`
	from {
		opacity: 1;
    transform: translateY(10px);
	}
	to {
		opacity: .3;
    transform: translateY(-10px)
	}
`;
