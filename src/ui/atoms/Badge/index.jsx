import React from 'react';
import StyledBadge from './index.styles';

const Badge = ({ count }) => {
	return (
		<StyledBadge>
			<p>{count ?? 0}</p>
		</StyledBadge>
	);
};

export default Badge;
