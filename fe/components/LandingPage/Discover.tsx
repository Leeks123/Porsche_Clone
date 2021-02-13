import { useSelector } from 'react-redux';
import styled from '@emotion/styled';
import { RightOutlined, ExportOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Headline from './Headline';
import Button from '../common/Button';

const Wrapper = styled.div`
    width: 86vw;
    margin: 30px auto;
    margin-bottom: 100px;

    .react-multi-carousel-track {
      margin-bottom: 30px;
    }
`;
const StyledCol = styled(Col)`
    .container {
        @media (min-width: 992px) {
            height: 19.2vw;
        }
        img { 
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`;
const responsive = {
  sm: {
    breakpoint: { max: 992, min: 480 },
    items: 2,
  },
  md: {
    breakpoint: { max: 480, min: 0 },
    items: 1,
  },
};

const Discover = () => {
  const windowWidth = useSelector((state) => state.layout?.windowWidth);

  return (
    <Wrapper>
      <Headline text="Discover" />
      {windowWidth > 992
        ? (
          <Row gutter={[0, 0]}>
            <StyledCol lg={6}>
              <div className="container">
                <img src="https://files.porsche.com/filestore/image/multimedia/none/rd-2017-homepage-teaser-porscheexclusivemanufaktur-kw24/normal/3cbd9b47-4c59-11e7-bfe2-0019999cd470;sM;twebp/porsche-normal.webp" alt="" />
                <Button
                  src="/"
                  text="Porsche Exclusive Manufaktur."
                  color={{
                    fontColor: 'black', backColor: 'transparent', hoverFontColor: '#d5001c', hoverBackColor: 'transparent',
                  }}
                  style={{ padding: 10 }}
                >
                  <RightOutlined style={{ color: '#d5001c' }} />
                </Button>
              </div>
            </StyledCol>
            <StyledCol lg={6}>
              <div className="container">
                <img src="https://files.porsche.com/filestore/image/multimedia/none/rd-2017-homepage-teaser-ww-tequipmentsound-design-kw27/normal/e19a7537-5cd4-11e7-9717-0019999cd470;sM;twebp/porsche-normal.webp" alt="" />
                <Button
                  src="/"
                  text="Tequipment Sound & Design."
                  color={{
                    fontColor: 'black', backColor: 'transparent', hoverFontColor: '#d5001c', hoverBackColor: 'transparent',
                  }}
                  style={{ padding: 10 }}
                >
                  <ExportOutlined style={{ color: '#d5001c' }} />
                </Button>
              </div>
            </StyledCol>
            <StyledCol lg={6}>
              <div className="container">
                <img src="https://files.porsche.com/filestore/image/multimedia/none/rd-2019-homepage-teaser-pof-porschefinder-kw45/normal/f26ec9e6-fb09-11e9-80c6-005056bbdc38;sM;twebp/porsche-normal.webp" alt="" />
                <Button
                  src="/"
                  text="Porsche Finder"
                  color={{
                    fontColor: 'black', backColor: 'transparent', hoverFontColor: '#d5001c', hoverBackColor: 'transparent',
                  }}
                  style={{ padding: 10 }}
                >
                  <ExportOutlined style={{ color: '#d5001c' }} />
                </Button>
              </div>
            </StyledCol>
            <StyledCol lg={6}>
              <div className="container">
                <img src="https://files.porsche.com/filestore/image/multimedia/none/rd-2018-homepage-teaser-ww-e-performance-kw12/normal/f7cc8e7c-6599-11e9-80c4-005056bbdc38;sM;twebp/porsche-normal.webp" alt="" />
                <Button
                  src="/"
                  text="Porsche E-Performance"
                  color={{
                    fontColor: 'black', backColor: 'transparent', hoverFontColor: '#d5001c', hoverBackColor: 'transparent',
                  }}
                  style={{ padding: 10 }}
                >
                  <RightOutlined style={{ color: '#d5001c' }} />
                </Button>
              </div>
            </StyledCol>
          </Row>
        ) : (
          <Carousel
            swipeable
            draggable
            showDots
            removeArrowOnDeviceType={['sm', 'md']}
            responsive={responsive}
            infinite
            autoPlay
          >
            <StyledCol>
              <div className="container">
                <img src="https://files.porsche.com/filestore/image/multimedia/none/rd-2017-homepage-teaser-porscheexclusivemanufaktur-kw24/normal/3cbd9b47-4c59-11e7-bfe2-0019999cd470;sM;twebp/porsche-normal.webp" alt="" />
                <Button
                  src="/"
                  text="Porsche Exclusive Manufaktur."
                  color={{
                    fontColor: 'black', backColor: 'transparent', hoverFontColor: '#d5001c', hoverBackColor: 'transparent',
                  }}
                  style={{ padding: 10 }}
                >
                  <RightOutlined style={{ color: '#d5001c' }} />
                </Button>
              </div>
            </StyledCol>
            <StyledCol>
              <div className="container">
                <img src="https://files.porsche.com/filestore/image/multimedia/none/rd-2017-homepage-teaser-ww-tequipmentsound-design-kw27/normal/e19a7537-5cd4-11e7-9717-0019999cd470;sM;twebp/porsche-normal.webp" alt="" />
                <Button
                  src="/"
                  text="Tequipment Sound & Design."
                  color={{
                    fontColor: 'black', backColor: 'transparent', hoverFontColor: '#d5001c', hoverBackColor: 'transparent',
                  }}
                  style={{ padding: 10 }}
                >
                  <ExportOutlined style={{ color: '#d5001c' }} />
                </Button>
              </div>
            </StyledCol>
            <StyledCol>
              <div className="container">
                <img src="https://files.porsche.com/filestore/image/multimedia/none/rd-2019-homepage-teaser-pof-porschefinder-kw45/normal/f26ec9e6-fb09-11e9-80c6-005056bbdc38;sM;twebp/porsche-normal.webp" alt="" />
                <Button
                  src="/"
                  text="Porsche Finder"
                  color={{
                    fontColor: 'black', backColor: 'transparent', hoverFontColor: '#d5001c', hoverBackColor: 'transparent',
                  }}
                  style={{ padding: 10 }}
                >
                  <ExportOutlined style={{ color: '#d5001c' }} />
                </Button>
              </div>
            </StyledCol>
            <StyledCol>
              <div className="container">
                <img src="https://files.porsche.com/filestore/image/multimedia/none/rd-2018-homepage-teaser-ww-e-performance-kw12/normal/f7cc8e7c-6599-11e9-80c4-005056bbdc38;sM;twebp/porsche-normal.webp" alt="" />
                <Button
                  src="/"
                  text="Porsche E-Performance"
                  color={{
                    fontColor: 'black', backColor: 'transparent', hoverFontColor: '#d5001c', hoverBackColor: 'transparent',
                  }}
                  style={{ padding: 10 }}
                >
                  <RightOutlined style={{ color: '#d5001c' }} />
                </Button>
              </div>
            </StyledCol>
          </Carousel>
        )}
    </Wrapper>
  );
};

export default Discover;
