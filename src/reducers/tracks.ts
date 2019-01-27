import Action from '../types/Action';
import { v4 as uuid } from 'uuid';
import Track from '../types/Track';

export const ADD_TRACK = 'ADD_TRACK';
export const REMOVE_TRACK_BY_ID = 'REMOVE_TRACK_BY_ID';
export const UPDATE_TRACK_BY_ID = 'UPDATE_TRACK_BY_ID';

export interface TracksState {
  tracks: [Track?];
}

const initialState: TracksState = {
  tracks: [],
};

export default (state = initialState, { type, payload }: Action) => {
  switch (type) {
    case ADD_TRACK:
      return {
        ...state,
        tracks: [...state.tracks, { ...payload, id: uuid() }],
      };
    case REMOVE_TRACK_BY_ID:
      return {
        ...state,
        tracks: state.tracks.filter(({ id }) => id !== payload.id),
      };
    case UPDATE_TRACK_BY_ID:
      return {
        ...state,
        tracks: state.tracks.map((track) => {
          if (track.id !== payload.id) {
            return track;
          }
          return { ...track, ...payload };
        }),
      };
    default:
      return state;
  }
};
