import React from 'react';

import './Card.css';

const Card = (props) => {
	return (
		<React.Fragment>
			<div className={`card ${props.className}`} style={props.style}>
				{props.children}
			</div>
		</React.Fragment>
	);
};

export default Card;
