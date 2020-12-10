import React, { useState }  from 'react';
import CookieUtils from '../../utilities/cookies.utility';

const CheckoutList = () => {
	const cookieUtils = new CookieUtils();
	const [checkoutList, setCheckoutList] = useState([]);
	const [showCheckoutList, setShowCheckoutList] = useState(false);
	const tileClassName = !!showCheckoutList ? 'checkout checkout--open' : 'checkout';
	const btnText = !!showCheckoutList ? 'Keep Searching' : 'Start Check Out';

	const showMovieCheckoutList = () => {
		let currentMovieList = cookieUtils.getCookie('movieList');

		setShowCheckoutList(!showCheckoutList);
		setCheckoutList(currentMovieList.split(', '));
	}

	return (
		<div className={tileClassName}>
			<div className='checkout__btn-wrapper'>
				<button
					className='checkout__btn'
					onClick={showMovieCheckoutList}>
					{btnText}
				</button>
			</div>
			<div className='checkout__list-wrapper'>
				{!!showCheckoutList ?
					<h4 className='checkout__list-text'>Your current movies:</h4>
				: null}

				{!!showCheckoutList && !!checkoutList ?
					<ul className='checkout__list'>
						{checkoutList.map((item, index) => {
							return <>
								<li className='checkout__list-item' key={index}>{item}</li>
							</>
						})}
					</ul>
				: null}

				{!!showCheckoutList ?
					<button className='btn-primary'>Complete Check Out</button>
				: null}
			</div>
		</div>
	);
};

export default CheckoutList;
