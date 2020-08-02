import { useState, useEffect } from 'react';
import Unsplash, { toJson } from 'unsplash-js';

const unsplash = new Unsplash({
	accessKey: process.env.REACT_APP_ACCESS_KEY,
	secret: process.env.REACT_APP_SECRET_KEY,
});

export const useImg = () => {
	const [showImage, setShowImage] = useState(null);
	const [showLink, setShowLink] = useState(null);
	const [pgFirstName, setPgFirstName] = useState(null);
	const [pgLastName, setPgLastName] = useState(null);

	useEffect(() => {
		const getImg = () => {
			try {
				unsplash.photos
					.getRandomPhoto({ query: 'travel' })
					.then(toJson)
					.then((json) => {
						const data = json;
						const photo = data.links.download;
						const imgCreditFirstName = data.user.first_name;
						const imgCreditLastName = data.user.last_name;
						const unsplashLink = data.links.html;

						setShowImage(photo);
						setShowLink(unsplashLink);
						setPgFirstName(imgCreditFirstName);
						setPgLastName(imgCreditLastName);
					});
			} catch (err) {
				console.log(err);
			}
		};
		return getImg();
	}, []);

	return { showImage, showLink, pgFirstName, pgLastName };
};
