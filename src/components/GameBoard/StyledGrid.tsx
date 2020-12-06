import styled from 'styled-components';

export interface StyledGridProps {
  spacing: number;
  rows: number;
  cols: number;
  width: number;
  height: number;
}

const StyledGrid = styled.div<StyledGridProps>`
  box-sizing: border-box;
  position: relative;
  display: grid;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  grid-template-rows: ${({ rows }) => `repeat(${rows}, 1fr)`};
  grid-template-columns: ${({ cols }) => `repeat(${cols}, 1fr)`};
  grid-gap: ${({ spacing }) => `${spacing}px ${spacing}px`};
  background-color: #bbada0;
  border-radius: 3px;
  border: ${({ spacing }) => `${spacing}px solid #bbada0`};
`;

export default StyledGrid;
