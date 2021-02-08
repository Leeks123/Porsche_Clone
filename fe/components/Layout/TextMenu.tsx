import styled from '@emotion/styled';

import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { textMenuProp } from '../../utils/menu-data';
import layoutSlice from '../../redux/reducers/layout';
import TextSubMenu from './TextSubMenu';

const StyledTextMenu = styled.div`
    position: relative;
    height: 100%;
    padding: 20px 10px;
    margin: 0 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 16px;
    font-weight: 400;

    &:hover {
      top: 3px;
      border-bottom: 5px solid #d5001c;
      span { 
        color: #d5001c;
      }
    }
`;
type Props = {
    title: string, data:textMenuProp[]
}
const TextMenu = ({ title, data }:Props) => {
  const dispatch = useDispatch();
  const [hovered, setHovered] = useState(false);
  const onMouseAction = useCallback(() => {
    setHovered((prev) => !prev);
    dispatch(layoutSlice.actions.toggle());
  }, []);
  return (
    <div onMouseEnter={onMouseAction} onMouseLeave={onMouseAction}>
      <StyledTextMenu>
        <span>{title}</span>
      </StyledTextMenu>
      {hovered && <TextSubMenu data={data} />}
    </div>
  );
};

export default TextMenu;
