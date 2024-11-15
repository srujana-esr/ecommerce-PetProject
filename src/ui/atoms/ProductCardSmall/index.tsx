import { FC } from "react";
import { Container } from "./index.styles";

type Props = {
	children: React.ReactNode
}

const ProductCardSmall: FC<Props> = ({ children, ...rest }) => {
	return (
		<Container {...rest}>
			{children}
		</Container>
	);
}

export default ProductCardSmall;
export * from './index.styles';