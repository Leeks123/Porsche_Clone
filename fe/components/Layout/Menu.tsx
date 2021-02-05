import Link from 'next/link';

import styled from '@emotion/styled';
import { EnvironmentOutlined } from '@ant-design/icons';

const FindCenter = styled.div`
    display: inline;
    font-size: 16px;
    padding: 20px;
    a { 
        color: #000;
    }
    a:hover {
        color : #d5001c;
    }

`;

const Menu = () => (
  <div>
    <FindCenter>
      <Link href="/">
        <a>
          <EnvironmentOutlined />
          <span> 포르쉐 센터 찾기</span>
        </a>
      </Link>

    </FindCenter>
  </div>
);

export default Menu;
