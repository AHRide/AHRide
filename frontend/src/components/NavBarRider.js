import React from 'react';
import styling from './NavBarRider.module.css';
import { Link } from 'react-router-dom';

export default function NavBarRider() {
	return (
		<>
			<div className={styling.Navbar}>
				<nav className={styling.NavContent}>
					<Link
						className={styling.NavName}
						style={{ textDecoration: 'none' }}
						to='/delivery-offers'>
						Delivery Offers
					</Link>
					<Link
						className={styling.NavName}
						style={{ textDecoration: 'none' }}
						to='/rider/status-of-delivery'>
						Updates
					</Link>
					<Link
						className={styling.NavName}
						style={{ textDecoration: 'none' }}
						to='/about'>
						About
					</Link>
					<Link
						className={styling.NavName}
						style={{ textDecoration: 'none' }}
						to='/rider/profile'>
						Profile
					</Link>
				</nav>
			</div>
			{/*Navbar */}
		</>
	);
}
