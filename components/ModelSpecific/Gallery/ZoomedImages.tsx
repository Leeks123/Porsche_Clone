/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
import { CloseOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import { useCallback } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Wrapper = styled.div`
    position: fixed;
    top:0;right:0;left:0;bottom:0;
    background: black;
    z-index: 2000;
`;
const Top = styled.div`
    position: fixed;
    top: 0; right: 0;left: 0;
    display: flex;
    color: white;
    height: 50px;
    font-size: 16px;
    z-index: 10;

    .zoomedImages-title {
        background: black;
        opacity: 0.7;
        flex: 1;
        padding: 12px 20px;
    }
    .zoomedImages-close {
        background: black;
        opacity: 0.7;
        width: 50px;
        padding: 12px 13px;
        & span {
            font-size: 25px;
        }
        &:hover {
            background: #d5001c;
            opacity: 1;
        }
    }
`;
const Container = styled.div`
    width: 100%;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
`;
const ImageWrapper = styled.div`
    & img {
        width: 100%;
        height: auto;
    }
`;
const responsive = {
  all: {
    breakpoint: { max: 3000, min: 0 },
    items: 1,
  },
};

type Props = {
    setZoomed: (arg:boolean) => void,
    data: {type: string, src: string}[],
    model: string,
}
const ZoomedImages = ({ setZoomed, data, model }:Props) => {
  const onClose = useCallback(() => {
    setZoomed(false);
  }, []);
  return (
    <Wrapper>
      <Top>
        <div className="zoomedImages-title">{model}</div>
        <div className="zoomedImages-close" onClick={onClose}><CloseOutlined /></div>
      </Top>
      <Container>
        <Carousel responsive={responsive}>
          {data.map((item) => (
            <ImageWrapper>
              <img src={item.src} alt="" />
            </ImageWrapper>
          ))}
        </Carousel>
      </Container>
    </Wrapper>
  );
};

export default ZoomedImages;
