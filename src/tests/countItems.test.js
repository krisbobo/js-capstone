/**
 * @jest-environment jsdom
 */

import { count } from '../modules/countItems';

describe('Count the number of Movies displayed', () => {
  test('Should Count the listed items and return 6', () => {
    // Arrange
    const movies = document.createElement('div');
    movies.innerHTML = '<div></div><div></div><div></div><div></div><div></div><div></div>';
    const elCount = document.createElement('div');
    elCount.innerHTML = 0;
    // Act - by invoking the 'count' function to be tested
    const res = count(movies, elCount);
    // Assert if the expectations are met
    expect(res).toBe(6);
  });
  test('Should return zero if there is nothing displayed ', () => {
    const movies = document.createElement('div');
    const elCount = document.createElement('div');
    elCount.innerHTML = 0;

    const res = count(movies, elCount);
    expect(res).toBe(0);
  });
  test('Should return there is a missing item', () => {
    const movies = document.createElement('div');
    movies.innerHTML = '<div></div><div></div><div></div><div></div><div></div><div></div>';
    const elCount = document.createElement('div');
    elCount.innerHTML = -1;
    const res = count(movies, elCount);
    expect(res).toBe(6);
  });
});
