import Link from 'next/link';
import styled from '@emotion/styled';
import { EnvironmentOutlined } from '@ant-design/icons';
import { modelMenu, moreMenu, shopMenu } from '../../utils/menu-data';

import ModelMenuList from './ModelMenuList';
import TextMenu from './TextMenu';

const StyledMenu = styled.div`
  display: flex;
  flex: 1;
`;

const FindCenter = styled.div`
    font-size: 16px;
    
    display: flex;
    flex: 1;
    justify-content: center;
    flex-direction: column;

    margin-left: 30px;
    a {
      border-left: 1px solid lightgray; 
      padding: 20px 0 20px 40px;
      color: #000;
      text-align: right;
    }
    a:hover {
      color : #d5001c;
    }

`;

const Menu = () => (
  <StyledMenu>
    <ModelMenuList data={modelMenu} />
    <TextMenu title="shop" data={shopMenu} />
    <TextMenu title="더 보기" data={moreMenu} />
    <FindCenter>
      <Link href="/">
        <a>
          <EnvironmentOutlined />
          <span> 포르쉐 센터 찾기</span>
        </a>
      </Link>
    </FindCenter>
  </StyledMenu>
);

export default Menu;
