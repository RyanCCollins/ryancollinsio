import * as types from './constants';
import update from 'react-addons-update';

export const initialState = {
  selectedTag: null,
};

const archiveReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case types.ARCHIVE_SET_SELECTED_TAG:
        return update(state, {
          selectedTag: {
            $set: action.tag,
          },
        });
      default:
        return state;
    }
  };

export default archiveReducer;
