// import IconContainer, { ICON_TYPES } from "./IconContainer";
import { FC, ReactNode, useEffect } from "react";
import { Container } from "./index.styles";
import Loader from "../../atoms/Loader";
import IconContainer, { ICON_TYPES } from "../../atoms/IconContainer";

const DEFAULT_ERROR_ICON = 'close-circle';
const DEFAULT_SUCCESS_ICON = 'checkmark-circle';

type Props = {
	isError: boolean;
	isLoading: boolean;
	isSuccess: boolean;
	wrapperClass?: string;
	errorIconName?: string;
	errorIconClass?: string;
	containerMargin?: string;
	successIconName?: string;
	successIconClass?: string;
	onResetFeedback: () => void;
	children: ReactNode | string;
}

const ButtonContainer: FC<Props> = ({
	children,
	isLoading,
	isError,
	errorIconName,
	isSuccess,
	successIconName,
	wrapperClass,
	successIconClass,
	errorIconClass,
	onResetFeedback,
	containerMargin
}) => {

	useEffect(() => {
		if (isSuccess && onResetFeedback) {
			setTimeout(() => {
				onResetFeedback();
			}, 1000);
		}
	}, [ isSuccess ])

	return (
		<Container className={wrapperClass} containerMargin={containerMargin}>
			{isLoading && (
				<Loader style={{ borderRadius: '3px' }} />
			)}

			{isSuccess && (
				<IconContainer
					iconType={ICON_TYPES.SUCCESS}
					name={successIconName ?? DEFAULT_SUCCESS_ICON}
					iconClass={successIconClass}
					isAbsolute
				/>
			)}

			{isError && (
				<IconContainer
					iconType={ICON_TYPES.ERROR}
					name={errorIconName ?? DEFAULT_ERROR_ICON}
					iconClass={errorIconClass}
					isAbsolute
				/>
			)}

			{children}
		</Container>
	);
}

export default ButtonContainer;