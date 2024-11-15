import styled, { keyframes } from 'styled-components';

const SkeletonLoading = keyframes`
  0% {
    background-color: #F6F6F6;
  }
  100% {
		background-color: #E6E6E6;
  }
`;

const StyledSkeleton = styled.div`
	width: 100%;
	height: 200px;
	margin-bottom: 0.5rem;
	border-radius: 0.25rem;
	animation: ${SkeletonLoading} 1s linear infinite alternate;
`;

export default StyledSkeleton;
