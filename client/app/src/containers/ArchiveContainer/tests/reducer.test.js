import expect from 'expect';
import * as types from '../constants';
import archiveReducer, { initialState } from '../reducer';

describe('archiveReducer', () => {
  it('returns the initial state', () => {
    expect(
      archiveReducer(undefined, {})
    ).toEqual(initialState);
  });
  it('should handle reducer for ARCHIVE_SET_SELECTED_TAG', () => {
    const tag = {};
    const stateBefore = {
      selectedTag: null,
    };
    const stateAfter = {
      selectedTag: tag,
    };
    expect(archiveReducer(stateBefore, {
     type: types.ARCHIVE_SET_SELECTED_TAG,
     tag,
    })
    ).toEqual(stateAfter);
  });
});
