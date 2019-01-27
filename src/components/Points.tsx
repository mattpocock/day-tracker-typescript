import styled from 'styled-components';

export const PointsWrapper = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-grow: 1;
  margin: -0.2rem;
  padding-bottom: 2rem;
`;

interface PointProps {
  color: string;
  day: string;
  selected?: Boolean;
}

export const Point = styled.button<PointProps>`
  display: inline-block;
  position: relative;
  padding: 0.8rem;
  border-radius: 0.8rem;
  border: none;
  background-color: ${({ selected, color }) => (selected ? color : '#ccc')};
  margin: 1rem;
  &:before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    border-radius: 200%;
    opacity: 0;
    background-color: ${({ selected, color }) => (selected ? color : '#ccc')};
    transition: opacity 0.2s, background-color 0.2s;
  }
  &:hover {
    &:before {
      opacity: 0.7;
    }
  }
  &:focus {
    outline: none;
    &:before {
      opacity: 0.5;
    }
  }
  &:after {
    content: '${({ day }) => day || ''}';
    position: absolute;
    top: 150%;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    font-family: 'Montserrat';
    font-weight: bold;
    font-size: 0.8rem;
    color: #777;
    width: 150%;
  }
`;

export const TrackTitle = styled.h2`
  margin: 0;
  font-size: 2rem;
  font-family: 'Montserrat';
  display: block;
  text-align: center;
`;
