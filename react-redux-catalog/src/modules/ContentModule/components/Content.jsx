import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Content.module.css';
import { BeerList } from './BeerList';
import { selectBeerList } from '../selectors';
import { getBeer } from '../thunk';
import noResults from '../../../images/noResults.png';

export const Content = () => {
	const [searchValue, setSearchValue] = useState('');
	//const [isLoading, setLoading] = useState(true);

	const dispatch = useDispatch();

	const beerList = useSelector(selectBeerList);

	useEffect(() => {
		dispatch(getBeer(searchValue));
	}, [searchValue, dispatch]);

	const createCross = () => {
		return (
			<div className={styles.cross} onClick={() => setSearchValue('')}>
				х
			</div>
		);
	};

	return (
		<div className={styles.content}>
			<div className={styles.serchBar}>
				<input
					placeholder='Enter here...'
					type='text'
					className={styles.input}
					value={searchValue}
					onInput={(text) => setSearchValue(text.target.value)}
				/>
				{searchValue && createCross()}
			</div>
			{beerList.length ? (
				<BeerList data={beerList} />
			) : (
				<img src={noResults} className={styles.noResults} alt='no results' />
			)}
		</div>
	);
};
