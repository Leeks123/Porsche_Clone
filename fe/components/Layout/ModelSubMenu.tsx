/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { jsx } from '@emotion/react';
import {
  SettingOutlined, SwapOutlined, SearchOutlined, RightOutlined,
} from '@ant-design/icons';

import { menuDataProp } from '../../utils/menu-data';

const StyledSubMenu = styled.div`
  background-color : #fff;
  padding: 20px;
  position: fixed;
  top: 117px;left:0;right:0;

  ul { 
    li { 
      padding: 0;
      list-style: none;
      font-size: 1rem;
      font-weight: 500;
      &:hover {
        color : #d5001c;
      }
    }
  }
`;

const SubMenuItem = styled.ul`
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  width: 40vw;
  display: flex;
  justify-content: space-around;
  padding: 15px;
  margin: 10px auto;
`;
const MidMenu = styled.ul`
  display: flex;
  justify-content: center;
  padding: 15px;
  margin: 0 auto;

  & > li {
    width: 246px;
    margin-right: 20px;
    img {
      width: 100%;
      height: 139px;
    }
    p {
      text-align: center;
      margin-top: -5px;s
    }
  }
`;
type subProp = {
    title: string,
    data: menuDataProp[]
}
const ModelSubMenu = ({ title, data }:subProp) => (
  <StyledSubMenu css={{ zIndex: 100 }}>
    <SubMenuItem>
      <li>
        <SettingOutlined />
        {' '}
        나만의 포르쉐 만들기
      </li>
      <li>
        <SwapOutlined />
        {' '}
        비교하기
      </li>
      <li>
        <SearchOutlined />
        {' '}
        포르쉐 신차 또는 인증 중고차 찾기
      </li>
    </SubMenuItem>
    <MidMenu>
      {data.map((item) => (
        <li>
          <img src={item.imgSrc} alt={item.title} />
          <p>{item.title}</p>
        </li>
      ))}
    </MidMenu>
    <SubMenuItem style={{ width: '25vw' }}>
      <li>
        <RightOutlined />
        {` ${title} 개요`}
      </li>
      <li>
        <RightOutlined />
        {' 전체 개요'}
      </li>
    </SubMenuItem>
  </StyledSubMenu>
);

export default ModelSubMenu;
