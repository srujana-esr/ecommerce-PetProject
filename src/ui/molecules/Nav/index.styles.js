import styled from 'styled-components';
import { FlexColumn, FlexRow } from '../../../theme/defaultStyles';

const StyledNav = styled.nav`
	width: 100%;
	height: 70px;

	.nav-container {
		position: relative;
		width: 100%;
		max-width: 1920px;
		height: 100%;
		margin: auto;

		${FlexRow}
		justify-content: space-between;

		.nav-search-bar {
			position: absolute;
			margin-left: calc(50% - 300px);
		}

		.nav-content {
			${FlexRow}
			justify-content: flex-end;

			ion-icon {
				color: #000;
				font-size: 1.5rem;
				vertical-align: middle;
				margin-right: 10px;
			}

			/* .nav-user-avatar , */
			.nav-option {
				height: 100%;
				${FlexColumn}
				margin-right: 20px;
			}

			.nav-option {
				position: relative;
				&:hover {
					cursor: pointer;
				}
			}

			.nav-user-avatar {
				ion-icon {
					font-size: 1.8rem;
				}

				&:hover {
					cursor: pointer;
				}
			}
		}
	}
`;

export default StyledNav;


