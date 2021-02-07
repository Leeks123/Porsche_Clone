/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Drawer } from 'antd';
import {
  LeftOutlined, RightOutlined, SwapOutlined, SearchOutlined, SettingOutlined,
} from '@ant-design/icons';
import styled from '@emotion/styled';
import { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { menuDataProp } from '../../utils/menu-data';

const Wrapper = styled.div`
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        &:hover {
            cursor: pointer;
            span {
                color: #d5001c
            }
        }
        img {
            @media (max-width:760px) {
                width: 18.4vw;
                margin: 0 auto;
                margin-bottom: 10px;
            }
        }
        span {
            margin: 0 auto;
            position: relative;
            top: -20px;
            font-weight: 500;
        }
    }
`;
const StyledDrawer = styled(Drawer)`
    .ant-drawer-close {
        left: 0;
    }
    .container {
        h1 {
            font-size: 48px;
            font-weight: 300;
            margin-top: 50px;
            margin-bottom: 0;
            border-bottom: 1px solid black;
        }
        ul {
            padding: 0;
            margin: 0;
            li {
                padding: 15px;
                padding-left: 0;
                margin: 0;
                border-bottom: 1px solid lightgray;
                list-style: none;
                font-size: 1rem;
                img {
                    width: 40%;
                }
                .imgTitle {
                    margin-left: 30px;
                    font-size: 1.25rem;
                }
                svg {
                    margin-right: 10px;
                }
                &:hover {
                    color: #d5001c;
                }
            }
        }
    }
`;

type Props = {
    key: string,
    title: string,
    img: string,
    submenu?: menuDataProp[],
    parentVisible: (arg:boolean) => void
}

const ModelSiderItem = ({
  title, img, submenu, parentVisible,
}:Props) => {
  const windowWidth = useSelector((state) => state.menu?.windowWidth);
  const [visible, setVisible] = useState(false);

  const showDrawer = useCallback(() => {
    setVisible(true);
    parentVisible(false);
  }, []);

  const onClose = useCallback(() => {
    setVisible(false);
    parentVisible(true);
  }, []);

  return (
    <Wrapper>
      <div className="container" onClick={showDrawer}>
        <img src={img} alt={title} />
        <span>{title}</span>
      </div>
      <StyledDrawer
        width={windowWidth > 1000 ? 568 : windowWidth}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ padding: 40, paddingTop: 54 }}
        closeIcon={<LeftOutlined />}
      >
        <div className="container">
          <h1>{title}</h1>
          <ul>
            <li>
              <SettingOutlined />
              나만의 포르쉐 만들기
            </li>
            <li>
              <SwapOutlined />
              비교하기
            </li>
            <li>
              <SearchOutlined />
              포르쉐 신차 또는 중고차 인증하기
            </li>
            {submenu && submenu.map((item) => (
              <li>
                <img src={item.imgSrc} alt={item.title} />
                <span className="imgTitle">{item.title}</span>
              </li>
            ))}
            <li>
              <RightOutlined />
              {title}
              {'  '}
              모델 개요
            </li>
            <li>
              <RightOutlined />
              전체 모델 개요
            </li>
          </ul>
        </div>
      </StyledDrawer>
    </Wrapper>
  );
};

export default ModelSiderItem;
