import { FC } from "react";
import Icon from "../Icon";
import { Container } from "./index.styles";

const ICON_CONFIG = {
	success: {
		name: 'checkmark-circle',
		class: 'icon-success'
	},
	error: {
		name: 'close-circle',
		class: 'icon-error'
	}
}

export enum ICON_TYPES {
	SUCCESS = 'success',
	ERROR = 'error'
}


export type Props = {
	name?: string;
	iconType?: ICON_TYPES;
	iconClass?: string;
	onClick?: () => void;
	isAbsolute?: boolean;
}

const IconContainer: FC<Props> = ({ name, iconClass, onClick, iconType, ...rest }) => {
	return (
		<Container
			onClick={onClick}
			{...rest}>
			<Icon
				name={name ?? (iconType && ICON_CONFIG[ iconType ]?.name)}
				iconClass={iconClass ?? (iconType && ICON_CONFIG[ iconType ]?.class)}
			/>
		</Container>
	);
}

export default IconContainer;