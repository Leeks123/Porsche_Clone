import { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Drawer, Button } from 'antd';
import { MenuOutlined, EnvironmentOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';

import ModelSider from './ModelSider';
import TextSider from './TextSider';
import { modelMenu, moreMenu, shopMenu } from '../../utils/menu-data';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 1rem;
`;
const FindCenter = styled.div`
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    padding: 20px 30px 10px 30px;
    text-align: left;

    & span {
        position: relative;
        top: -5px;
        font-size: 1.125rem;

        svg {
            position: relative;
            top: 5px;
        }
    }
    &:hover {
        span {
            color: #d5001c;
        }
    }
`;

const Sider = () => {
  const windowWidth = useSelector((state) => state.menu?.windowWidth);
  const [visible, setVisible] = useState(false);
  const showDrawer = useCallback(() => {
    setVisible(true);
  }, []);
  const onClose = useCallback(() => {
    setVisible(false);
  }, []);

  return (
    <Wrapper>
      <div>
        메뉴
        {' '}
        <Button
          type="text"
          icon={
            <MenuOutlined />
          }
          onClick={showDrawer}
        />
      </div>

      <Drawer
        width={windowWidth > 1000 ? 568 : windowWidth}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ padding: `${windowWidth > 1000 ? '40px' : '12vw'}`, paddingTop: 54 }}
      >
        <ModelSider data={modelMenu} parentVisible={setVisible} />
        <TextSider title="Shop" data={shopMenu} parentVisible={setVisible} />
        <TextSider title="더 보기" data={moreMenu} parentVisible={setVisible} />
        <FindCenter>
          <span>
            <EnvironmentOutlined />
            {' '}
            포르쉐 센터 찾기
          </span>
        </FindCenter>
      </Drawer>
    </Wrapper>
  );
};

export default Sider;
