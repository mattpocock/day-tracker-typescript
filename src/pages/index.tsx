import * as React from 'react';
import DefaultLayout from '../layouts';
import Mark from '../types/Mark';
import { Link } from 'gatsby';
import Track from '../types/Track';
import { connect } from 'react-redux';
import GlobalState from '../types/GlobalState';
import Action from '../types/Action';
import { TrackTitle, PointsWrapper, Point } from '../components/Points';
import * as moment from 'moment';
import Frequency from '../types/Frequency';
import { ADD_MARK, REMOVE_MARK_BY_ID } from '../reducers/marks';
import ActivityWrapper from '../components/ActivityWrapper';
import { REMOVE_TRACK_BY_ID } from '../reducers/tracks';
import { Row } from 'react-bootstrap';
import styled from 'styled-components';
import { MdDelete } from 'react-icons/md';
import Button from '@material-ui/core/Button';

interface IndexPageProps {
  marks: [Mark?];
  tracks: [Track?];
  location: any;
  dispatch: (action: Action) => void;
}

class IndexPage extends React.Component<IndexPageProps, {}> {
  render() {
    const { tracks, marks, dispatch } = this.props;
    return (
      <DefaultLayout location={this.props.location}>
        <Row>
          {tracks.map(({ name, id, frequency, color }) => {
            return (
              <React.Fragment key={id}>
                <ActivityWrapper xs={12} md={6}>
                  <div style={{ minWidth: '25%' }}>
                    <TrackTitle>{name}</TrackTitle>
                  </div>
                  <EvenHeightColumn>
                    <PointsWrapper>
                      {new Array(7)
                        .fill(null)
                        .map((_, index: number) => {
                          const [start, end] = getDateRanges(frequency, index);
                          const foundMark = marks.find(
                            ({ trackId, time }) =>
                              trackId === id && time < end && time > start,
                          );
                          return (
                            <Point
                              key={index}
                              color={color}
                              day={getDay(start, frequency)}
                              selected={Boolean(foundMark)}
                              onClick={() => {
                                if (Boolean(foundMark)) {
                                  dispatch({
                                    type: REMOVE_MARK_BY_ID,
                                    payload: { id: foundMark.id },
                                  });
                                } else {
                                  dispatch({
                                    type: ADD_MARK,
                                    payload: { time: start + 10, trackId: id },
                                  });
                                }
                              }}
                            />
                          );
                        })
                        .reverse()}
                    </PointsWrapper>
                  </EvenHeightColumn>
                  <div>
                    <Button
                      onClick={() =>
                        dispatch({
                          type: REMOVE_TRACK_BY_ID,
                          payload: { id },
                        })
                      }
                    >
                      <StyledMdDelete />
                    </Button>
                  </div>
                </ActivityWrapper>
              </React.Fragment>
            );
          })}
        </Row>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Link to="/newTracker" style={{ textDecoration: 'none' }}>
            <Button size="large">
              <span style={{ fontSize: '1.4rem' }}>New Track</span>
            </Button>
          </Link>
        </div>
      </DefaultLayout>
    );
  }
}

export default connect((state: GlobalState) => ({
  tracks: state.trackState.tracks,
  marks: state.markState.marks,
}))(IndexPage);

const EvenHeightColumn = styled.div`
  flex-grow: 1;
`;

const StyledMdDelete = styled(MdDelete)`
  font-size: 2rem;
  color: #666;
`;

const getDateRanges = (
  frequency: Frequency,
  index: number,
): [number, number] => {
  if (frequency === 'DAILY') {
    return [
      moment()
        .subtract(index, 'days')
        .startOf('day')
        .unix(),
      moment()
        .subtract(index, 'days')
        .endOf('day')
        .unix(),
    ];
  }

  if (frequency === 'WEEKLY') {
    return [
      moment()
        .subtract(index, 'weeks')
        .startOf('week')
        .unix(),
      moment()
        .subtract(index, 'weeks')
        .endOf('week')
        .unix(),
    ];
  }

  if (frequency === 'MONTHLY') {
    return [
      moment()
        .subtract(index, 'months')
        .startOf('month')
        .unix(),
      moment()
        .subtract(index, 'months')
        .endOf('month')
        .unix(),
    ];
  }
};

const getDay = (time: number, frequency: Frequency): string => {
  if (frequency === 'DAILY') {
    return moment(time * 1000).format('ddd');
  }

  if (frequency === 'WEEKLY') {
    return moment(time * 1000).format('MMM Do');
  }

  if (frequency === 'MONTHLY') {
    return moment(time * 1000).format('MMM');
  }
};
