import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Content.module.css';
import { BeerList } from './BeerList';
import { selectBeerList, selectCurrentPage } from '../selectors';
import { getBeer } from '../thunk';
import noResults from '../../../images/noResults.png';
import { RadioButton } from '../../../componenets/RadioButton';
import { changeCurrentPage } from '../actions';

export const Content = () => {
	const [searchValue, setSearchValue] = useState('');
	const [filter, setFilter] = useState('');

	const dispatch = useDispatch();

	const beerList = useSelector(selectBeerList);
	const currentPage = useSelector(selectCurrentPage);

	useEffect(() => {
		dispatch(getBeer(searchValue, currentPage));
		
	}, [searchValue, currentPage, dispatch]);

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

	const next = (e) => {
		dispatch(changeCurrentPage(e.target.innerHTML));
		dispatch(getBeer('',currentPage));
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
			<div className={styles.pagination}>
				<div
					onClick={next}
					className={
						currentPage === '1'
							? `${styles.pageNumber} ${styles.active}`
							: styles.pageNumber
					}
				>
					1
				</div>
				<div
					onClick={next}
					className={
						currentPage === '2'
							? `${styles.pageNumber} ${styles.active}`
							: styles.pageNumber
					}
				>
					2
				</div>
				<div
					onClick={next}
					className={
						currentPage === '3'
							? `${styles.pageNumber} ${styles.active}`
							: styles.pageNumber
					}
				>
					3
				</div>
				<div
					onClick={next}
					className={
						currentPage === '4'
							? `${styles.pageNumber} ${styles.active}`
							: styles.pageNumber
					}
				>
					4
				</div>
				<div
					onClick={next}
					className={
						currentPage === '5'
							? `${styles.pageNumber} ${styles.active}`
							: styles.pageNumber
					}
				>
					5
				</div>
				<div
					onClick={next}
					className={
						currentPage === '6'
							? `${styles.pageNumber} ${styles.active}`
							: styles.pageNumber
					}
				>
					6
				</div>
				<div
					onClick={next}
					className={
						currentPage === '7'
							? `${styles.pageNumber} ${styles.active}`
							: styles.pageNumber
					}
				>
					7
				</div>
				<div
					onClick={next}
					className={
						currentPage === '8'
							? `${styles.pageNumber} ${styles.active}`
							: styles.pageNumber
					}
				>
					8
				</div>
				<div
					onClick={next}
					className={
						currentPage === '9'
							? `${styles.pageNumber} ${styles.active}`
							: styles.pageNumber
					}
				>
					9
				</div>
				<div
					onClick={next}
					className={
						currentPage === '10'
							? `${styles.pageNumber} ${styles.active}`
							: styles.pageNumber
					}
				>
					10
				</div>
				<div
					onClick={next}
					className={
						currentPage === '11'
							? `${styles.pageNumber} ${styles.active}`
							: styles.pageNumber
					}
				>
					11
				</div>
				<div
					onClick={next}
					className={
						currentPage === '12'
							? `${styles.pageNumber} ${styles.active}`
							: styles.pageNumber
					}
				>
					12
				</div>
				<div
					onClick={next}
					className={
						currentPage === '13'
							? `${styles.pageNumber} ${styles.active}`
							: styles.pageNumber
					}
				>
					13
				</div>
			</div>
		</div>
	);
};
