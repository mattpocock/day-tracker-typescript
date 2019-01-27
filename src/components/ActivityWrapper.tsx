import styled from 'styled-components';
import { Col } from 'react-bootstrap';

export default styled(Col)`
  display: flex;
  align-items: center;
  margin: -1rem;
  margin-bottom: 2.5rem;
  & > * {
    margin: 1rem;
  }
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
