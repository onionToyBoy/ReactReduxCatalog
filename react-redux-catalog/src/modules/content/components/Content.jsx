import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Content.module.css';
import { BeerList } from './BeerList';
import { selectBeerList } from '../selectors';
import { getBeer } from '../thunk';
import noResults from '../../../images/noResults.png';
import { RadioButton } from '../../../componenets/RadioButton';

export const Content = () => {
	const [searchValue, setSearchValue] = useState('');
	//const [isLoading, setLoading] = useState(true);
	const [filter, setFilter] = useState('');

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

	const changeRadioStatus = (id) => {
		filter === id ? setFilter('') : setFilter(id);
	};

	const sortBeer = (beer) => {
		return filter === ''
			? beer
			: beer.sort((a, b) => (a[filter] > b[filter] ? -1 : 1));
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
			<div className={styles.filters}>
				<RadioButton
					label='sort by abv'
					id='abv'
					fn={changeRadioStatus}
					isSelected={filter === 'abv' && true}
				/>
				<RadioButton
					label='sort by ibu'
					id='ibu'
					fn={changeRadioStatus}
					isSelected={filter === 'ibu' && true}
				/>
				<RadioButton
					label='sort by srm'
					id='srm'
					fn={changeRadioStatus}
					isSelected={filter === 'srm' && true}
				/>
			</div>
			{beerList.length ? (
				<BeerList data={sortBeer(beerList)} />
			) : (
				<img src={noResults} className={styles.noResults} alt='no results' />
			)}
		</div>
	);
};
