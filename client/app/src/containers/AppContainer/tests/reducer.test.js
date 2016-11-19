import expect from 'expect';
import appContainerReducer, { initialState } from '../reducer';

describe('appContainerReducer', () => {
  it('returns the initial state', () => {
    expect(
      appContainerReducer(undefined, {})
    ).toEqual(initialState);
  });
  it.skip('should have a type of AUTHENTICATE_USER', () => {});
  it.skip('should have a type of INVALIDATE_USER', () => {});
  it.skip('should have a type of APP_SET_MOBILE', () => {});
  it.skip('should have a type of APP_ON_TOGGLE_NAV', () => {});
  it.skip('should have a type of SET_SEARCH_TERM', () => {});
  it.skip('should have a type of CLEAR_SEARCH_TERM', () => {});
});
