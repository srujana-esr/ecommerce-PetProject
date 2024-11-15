import styled, { css } from 'styled-components';

// Generic CSS for Flexbox
const Flex = css`
	display: flex;
	align-content: center;
	justify-content: center;
`;

// Flexbox with flexflow = ROW
export const FlexRow = css`
	${Flex}
	flex-direction: row;
`;

// Flexbox with flexflow = Column
export const FlexColumn = css`
	${Flex}
	flex-direction: column;
`;

export const DefaultIonIconStyle = css`
	vertical-align: middle;
	font-size: 1.5rem;
	pointer-events: none;
`;

export const MainHeading = styled.h1`
	color: ${(props) => (props.color ? props.color : 'inherit')};
	letter-spacing: ${(props) => (props.spacing ? props.spacing : 'auto')};
	font-size: ${(props) => (props.size ? props.size : 'auto')};
	font-weight: ${(props) => (props.weight ? props.weight : 'auto')};
`;

export const BodyText = styled.p`
	color: ${(props) => (props.color ? props.color : 'inherit')};
	letter-spacing: ${(props) => (props.spacing ? props.spacing : 'inherit')};
	font-size: ${(props) => (props.size ? props.size : 'inherit')};
	font-weight: ${(props) => (props.weight ? props.weight : 'inherit')};
`;

export const BrandText = styled.p`
	color: ${(props) => (props.color ? props.color : 'inherit')};
	letter-spacing: ${(props) => (props.spacing ? props.spacing : 'inherit')};
	font-size: ${(props) => (props.size ? props.size : '1.5rem')};
	font-weight: ${(props) => (props.weight ? props.weight : '700')};
	font-style: italic;
`;

export const SmallText = styled.small`
	color: ${(props) => (props.color ? props.color : '#bcbcbc')};
	letter-spacing: ${(props) => (props.spacing ? props.spacing : 'inherit')};
	font-size: ${(props) => (props.size ? props.size : '0.875rem')};
`;
