import { TracksState } from '../reducers/tracks';
import { MarksState } from '../reducers/marks';

export default interface GlobalState {
  trackState: TracksState;
  markState: MarksState;
}
