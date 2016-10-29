import * as types from './constants';

// setSelectedTag :: None -> {Action}
export const setSelectedTag = (tag) => ({
  type: types.ARCHIVE_SET_SELECTED_TAG,
  tag,
});
