import IonIcon from "@reacticons/ionicons";
import { FC } from "react";

type Props = {
	name: string;
	iconClass?: string;
}

const Icon: FC<Props> = ({ name, iconClass, ...rest }) => {
	return (
		<IonIcon
			name={name}
			className={iconClass}
			{...rest}
		/>
	);
}

export default Icon;