import styled from '@emotion/styled';

import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { menuDataProp } from '../../utils/menu-data';
import layoutSlice from '../../redux/reducers/layout';
import ModelSubMenu from './ModelSubMenu';

const StyledModelMenu = styled.div`
    position: relative;
    height: 100%;
    padding: 40px 5px 20px 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 16px;
    font-weight: 400;

    img { 
      width: 89px;
      height: 55px;
    }
    span {
      text-align: center;
      margin-top: -5px;
    }
    &:hover {
      top: 3px;
      border-bottom: 5px solid #d5001c;
      
      span {
        color: #d5001c;
      }
    }
`;
type Props = {
    title: string,
    img: string,
    submenu: menuDataProp[] | undefined
}
const ModelMenu = ({ title, img, submenu }:Props) => {
  const dispatch = useDispatch();
  const [hovered, setHovered] = useState(false);
  const onMouseAction = useCallback(() => {
    setHovered((prev) => !prev);
    dispatch(layoutSlice.actions.toggle());
  }, [hovered]);
  return (
    <div onMouseEnter={onMouseAction} onMouseLeave={onMouseAction}>
      <StyledModelMenu>
        <img src={img} alt={title} />
        <span>{title}</span>
      </StyledModelMenu>
      {hovered && submenu && <ModelSubMenu title={title} data={submenu} />}
    </div>
  );
};

export default ModelMenu;
