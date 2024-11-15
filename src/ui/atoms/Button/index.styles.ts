import styled from "styled-components";

interface StyleProps {
	width?: string;
	height?: string;
	bgColor?: string;
	border?: string;
	borderRadius?: string;
	color?: string;
	padding?: string;
	disabled: boolean;
}

const StyledButton = styled.button<StyleProps>`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	padding: ${(props) => props.padding};
	background-color: ${(props) =>
		props.disabled ? "#c4c4c4" : props.bgColor};
	border: ${(props) => props.border};
	border-radius: ${(props) => props.borderRadius};
	color: ${(props) => props.color};

	:hover {
		color: ${(props) => props.disabled ? `${props.color || '#969696'}` : '#000'};
		cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
	}
`;

export default StyledButton;