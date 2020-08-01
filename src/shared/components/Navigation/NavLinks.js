import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../context/auth-context';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import './NavLinks.css';

const NavLinks = (props) => {
	const auth = useContext(AuthContext);
	const [openModal, setOpenModal] = useState(false);

	const handleOpen = () => {
		setOpenModal(true);
	};

	const handleClose = () => {
		setOpenModal(false);
	};

	const body = (
		<div className='modal'>
			<header className='modal__header'>
				<h2>Are you sure you want to Logout?</h2>
			</header>
			<div className='modal__content'>
				<Button
					variant='contained'
					color='secondary'
					href='/'
					onClick={auth.logout}>
					LOG OUT
				</Button>
				<Button variant='contained' onClick={handleClose}>
					CANCEL
				</Button>
			</div>
		</div>
	);

	return (
		<ul className='nav-links'>
			<li>
				<NavLink to='/users' exact>
					ALL USERS
				</NavLink>
			</li>
			{auth.isLoggedIn && (
				<li>
					<NavLink to={`/${auth.userId}/places`}>MY PLACES</NavLink>
				</li>
			)}
			{auth.isLoggedIn && (
				<li>
					<NavLink to='/places/new'>ADD PLACE</NavLink>
				</li>
			)}
			{!auth.isLoggedIn && (
				<li>
					<NavLink to='/'>LOG IN</NavLink>
				</li>
			)}
			{auth.isLoggedIn && (
				<li>
					<button type='button' onClick={handleOpen}>
						LOG OUT
					</button>
					<Modal
						open={openModal}
						onClose={handleClose}
						aria-labelledby='simple-modal-title'
						aria-describedby='simple-modal-description'>
						{body}
					</Modal>
				</li>
			)}
		</ul>
	);
};

export default NavLinks;
