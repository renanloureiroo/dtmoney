import styled from "styled-components"

export const Container = styled.header`
  background: var(--blue);
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    background: var(--blue-light);
    color: #ffffff;
    border: 0;
    border-radius: 0.25rem;
    padding: 0 1rem;
    height: 3rem;

    transform: filter 0.2;

    &:hover {
      filter: brightness(0.9);
    }
  }
`
