import Action from '../types/Action';
import { v4 as uuid } from 'uuid';
import Mark from '../types/Mark';

export const ADD_MARK = 'ADD_MARK';
export const REMOVE_MARK_BY_ID = 'REMOVE_MARK_BY_ID';

export interface MarksState {
  marks: [Mark?];
}

const initialState: MarksState = {
  marks: [],
};

export default (state = initialState, { type, payload }: Action) => {
  switch (type) {
    case ADD_MARK:
      return {
        ...state,
        marks: [...state.marks, { ...payload, id: uuid() }],
      };
    case REMOVE_MARK_BY_ID:
      return {
        ...state,
        marks: state.marks.filter(({ id }) => id !== payload.id),
      };
    default:
      return state;
  }
};
