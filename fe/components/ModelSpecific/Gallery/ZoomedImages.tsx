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
}
const ZoomedImages = ({ setZoomed }:Props) => {
  const onClose = useCallback(() => {
    setZoomed(false);
  }, []);
  return (
    <Wrapper>
      <Top>
        <div className="zoomedImages-title">dfkjdksf</div>
        <div className="zoomedImages-close" onClick={onClose}><CloseOutlined /></div>
      </Top>
      <Container>
        <Carousel responsive={responsive}>
          <ImageWrapper>
            <img src="https://files.porsche.com/filestore/galleryimagerwd/multimedia/none/jdp-2016-982-718-bo-gallery-exterior-28/zoom2/3deeeb7a-96d0-11e6-9f1b-0019999cd470;sK;twebp/porsche-zoom2.webp" alt="" />
          </ImageWrapper>
          <ImageWrapper>
            <img src="https://files.porsche.com/filestore/galleryimagerwd/multimedia/none/jdp-2016-982-718-bo-gallery-exterior-28/zoom2/3deeeb7a-96d0-11e6-9f1b-0019999cd470;sK;twebp/porsche-zoom2.webp" alt="" />
          </ImageWrapper>
          <ImageWrapper>
            <img src="https://files.porsche.com/filestore/galleryimagerwd/multimedia/none/jdp-2016-982-718-bo-gallery-exterior-28/zoom2/3deeeb7a-96d0-11e6-9f1b-0019999cd470;sK;twebp/porsche-zoom2.webp" alt="" />
          </ImageWrapper>
        </Carousel>
      </Container>
    </Wrapper>
  );
};

export default ZoomedImages;
