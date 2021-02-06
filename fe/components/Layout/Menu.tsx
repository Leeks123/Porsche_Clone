import Link from 'next/link';
import styled from '@emotion/styled';
import { EnvironmentOutlined } from '@ant-design/icons';
import { modelMenu, moreMenu, textMenuProp } from '../../utils/menu-data';

import ModelMenuList from './ModelMenuList';
import TextMenu from './TextMenu';

const StyledMenu = styled.div`
  display: flex;
`;

const FindCenter = styled.div`
    font-size: 16px;
    
    display: flex;
    flex: 1;
    justify-content: center;
    flex-direction: column;
    
    a {
      border-left: 1px solid lightgray; 
      padding: 20px 60px; 
      color: #000;
    }
    a:hover {
      color : #d5001c;
    }

`;

const shopMenu: textMenuProp[] = [
  {
    title: '부품 및 액세서리',
    data: [
      '라이프스타일 - 패션 & 액세서리', '포르쉐 클래식 - 순정 부품',
    ],
  },
];

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
