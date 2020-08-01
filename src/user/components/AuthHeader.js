import React from 'react';

import './AuthHeader.css';

const AuthHeader = () => {
	return (
		<React.Fragment>
			<div className='text-wrapper'>
				<h1 className='auth-heading'>
					CREATE AND LOOKBACK ON THE MOST MEMORABLE PLACES.
				</h1>
				<p className='auth-content'>
					We know that you love to travel and <b>Travelog</b> is here to remind
					you to revisit on those moments. Add the places you would like to go
					to and log the things you would like to do once you get there. <br />
					<br />
					At <b>Travelog</b>, memorable places and experiences is something
					worth talking about.
				</p>
			</div>
		</React.Fragment>
	);
};

export default AuthHeader;
