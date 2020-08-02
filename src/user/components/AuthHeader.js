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
					We know that you love to travel and we created a space to remind you
					and revisit on those moments. Simply add the places you would like to
					go to and log the things you would like to do once you get there.{' '}
					<br />
					<br />
					At <b style={{ color: '#ec6b2d' }}>Travelog</b>, memorable places and
					experiences is something worth talking about.
				</p>
			</div>
		</React.Fragment>
	);
};

export default AuthHeader;
