import { FC, HTMLAttributes, ReactNode } from "react";
import StyledButton from "./index.styles";

export interface Props extends HTMLAttributes<HTMLButtonElement> {
	children: ReactNode | String;
	width?: string;
	height?: string;
	color?: string;
	bgColor?: string;
	border?: string;
	borderRadius?: string;
	padding?: string;
	disabled: boolean;
	onClick: () => void;
}

const Button: FC<Props> = ({ children, ...rest }) => (
	<StyledButton {...rest}>
		{children}
	</StyledButton>
);

export default Button;