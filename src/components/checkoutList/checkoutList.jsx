import React, { useState }  from 'react';
import CookieUtils from '../../utilities/cookies.utility';

const CheckoutList = () => {
	const cookieUtils = new CookieUtils();
	const [checkoutList, setCheckoutList] = useState([]);
	const [showCheckoutList, setShowCheckoutList] = useState(false);

	const showMovieCheckoutList = () => {
		let currentMovieList = cookieUtils.getCookie('movieList');

		setShowCheckoutList(!showCheckoutList);
		setCheckoutList(currentMovieList.split(', '));
	}

	return (
		<div className='checkout'>
			<div className='checkout__open'>
				<button
					onClick={showMovieCheckoutList}>
					Start Check Out
				</button>
			</div>
			<div className='checkout__list-wrapper'>

				{!!showCheckoutList && !!checkoutList ?
					<ul className='checkout__list'>
						{checkoutList.map((item, index) => {
							return <>
								<li key={index}>{item}</li>
							</>
						})}
					</ul>
				: null}

				{!!showCheckoutList ?
					<button>Complete Check Out</button>
				: null}
			</div>
		</div>
	);
};

export default CheckoutList;
