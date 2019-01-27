import styled from 'styled-components';

export default styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: -1rem;
  margin-bottom: 1.5rem;
  & > * {
    margin: 1rem;
  }
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
