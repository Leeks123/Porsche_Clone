import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from '@emotion/styled';
import { Button, Drawer } from 'antd';
import { LeftOutlined } from '@ant-design/icons';

import { textMenuProp } from '../../utils/menu-data';

const StyledButton = styled(Button)`
    border-top: 1px solid lightgray;
    padding: 20px 30px;
    text-align: left;

    & span {
        position: relative;
        top: -10px;
        font-size: 1.125rem;
    }
    &:hover {
      span {
          color: #d5001c;
      }
  }
`;
const StyledText = styled.div`
    border-top: 1px solid lightgray;
    padding: 20px 30px;
    text-align: left;

    & span {
        position: relative;
        font-size: 1.125rem;
    }
    &:hover {
        span {
            color: #d5001c;
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
            margin-top: 70px;
            margin-bottom: 0;
            border-bottom: 1px solid black;
        }
    }
`;

type Props = {
    title: string, data:textMenuProp[] | string[], parentVisible: (arg:boolean) => void,
}

const TextSider = ({ title, data, parentVisible }:Props) => {
  const windowWidth = useSelector((state) => state.layout?.windowWidth);
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
    <>
      <StyledButton type="text" block onClick={showDrawer}>{title}</StyledButton>
      <StyledDrawer
        width={windowWidth > 1000 ? 568 : windowWidth}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ padding: 40, paddingTop: 54 }}
        closeIcon={<LeftOutlined />}
      >
        <div className="container">
          <h1>{title}</h1>
          {data?.map((v:any) => {
            if (typeof v === 'object') {
              return (
                <TextSider title={v.title} data={v.data} parentVisible={setVisible} />
              );
            }
            return <StyledText><span>{v}</span></StyledText>;
          })}
        </div>
      </StyledDrawer>
    </>
  );
};

export default TextSider;
