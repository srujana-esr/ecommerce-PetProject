import { FC, ReactNode } from "react";
import { Container } from "./index.styles";

export type Props = {
	width: string;
	height: string;
	children: ReactNode;
	showBorder?: boolean;
	isRenderedInFlex: boolean;
}

const ImageContainer: FC<Props> = ({ children, ...rest }) => {
	return (
		<Container {...rest}>
			{children}
		</Container>
	);
}

export default ImageContainer;