import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Content.module.css';
import { BeerList } from './BeerList';
import { selectBeerList } from '../selectors';
import { getBeer } from '../thunk';
import { store } from '../../../store/store';

export const Content = () => {
	const [searchValue, setSearchValue] = useState('');
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState([]);

	const dispatch = useDispatch();

	const beerList = useSelector(selectBeerList);

	console.log(store.getState())

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
			{beerList.length &&<BeerList data={beerList} />}
		</div>
	);
};
