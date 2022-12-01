/**
 * @jest-environment jsdom
 */

import {count} from './countItems';

describe('Count the number of Movies displayed',() => {
    test ("Should Count the listed items and return 6", () => {
			const movies =document.createElement('div');
			movies.innerHTML=` <div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>`;
			const elCount= document.createElement('div');
			elCount.innerHTML= 0;
			const res =count(movies,elCount);
    	expect (res).toBe(6);
	});
    test ("Should return zero if there is nothing displayed ", () => {
			const movies =document.createElement('div');	
			const elCount= document.createElement('div');
			elCount.innerHTML= 0;

			const res =count(movies,elCount);
    	expect (res).toBe(0);
	});
    test ("Should return there is a missing item", () => {
			const movies =document.createElement('div');
			movies.innerHTML=` <div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>`;
			const elCount= document.createElement('div');
			elCount.innerHTML= -1;
			const res =count(movies,elCount);
    	expect (res).toBe(6);
	});
});
