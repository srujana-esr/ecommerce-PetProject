import styled, { keyframes } from 'styled-components';

const kick = keyframes`
	from {
		opacity: 1;
    transform: translateY(0);
	}
	to {
		opacity: .3;
    transform: translateY(-0.75rem)
	}
`;

const StyledLoaderContainer = styled.div`
	color: #fff;
	position: absolute;
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	overflow: hidden;
	background-color: ${(props) =>
		props.parentBgColor ? props.parentBgColor : 'rgba(0, 0, 0, .85)'};

	&:after,
	&:before {
		margin: auto;
		box-sizing: border-box;
		display: block;
		content: '';
		width: ${(props) =>
		props.beforeAfterWidth ? props.beforeAfterWidth : '15px'};
		height: ${(props) =>
		props.beforeAfterHeight ? props.beforeAfterHeight : '15px'};
		position: absolute;
		top: calc(50% - 5px);
		left: 55%;
		border-radius: 50%;
		background-color: ${(props) =>
		props.beforeAfterColor ? props.beforeAfterColor : '#fff'};
		animation: ${kick} 0.6s infinite alternate;
	}

	&:after {
		margin-left: ${(props) =>
		props.afterMarginLeft ? props.afterMarginLeft : '-30px'};
		animation: ${kick} 0.6s infinite alternate;
	}

	&:before {
		animation-delay: 0.2s;
	}
`;

export default StyledLoaderContainer;
