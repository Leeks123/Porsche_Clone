/* eslint-disable max-len */
import {
  Row, Col, Collapse, Empty,
} from 'antd';
import styled from '@emotion/styled';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { useSelector } from 'react-redux';
import ColorBox from './ColorBox';
import WheelBox from './WheelBox';

const { Panel } = Collapse;

const responsive = {
  all: {
    breakpoint: { max: 3000, min: 0 },
    items: 1,
  },
};
const Wrapper = styled.div`
  width: 86vw;
  margin: 50px auto;
  @media (min-width: 992px) {
      width: 100%;
  }
`;
const ImageWrapper = styled.div`
  img {
      width: 100%;
      height: 100%;
  }
`;
const Selector = styled.div`
  margin: 20px 0;
  .ant-collapse {
      .ant-collapse-item {
          border-bottom: 1px solid lightgray;
          .ant-collapse-header {
            font-size: 18px;
            font-weight: bold;
            padding-left: 5px;
          }
          .ant-collapse-content {
            .ant-collapse-content-box {
                padding: 0 0 10px 0;
                display: flex;
                flex-wrap: wrap;
            }    
          }
      }
  }

  @media (min-width: 992px) {
      margin: 0 20px;
  }
`;
type Color = {
  exterior: { [standard: string]: string[], metalic: string[], special: string[] },
  interior: string[],
}
const colors:Color = {
  exterior: {
    standard: ['#FFFFFF', '#000000', '#CC0133', '#FFCC02'],
    metalic: ['#EFF5FA', '#000001', '#333333', '#C3CDD3', '#CCCCCC', '#01194B', '#1D2738', '#3C3C32'],
    special: ['#990033', '#C7C7BF'],
  },
  interior: [
    '#2C2220', '#333333', '#CC9965', '#782E2F', '#CFD1CF',
  ],
};
const CustomCar = ({ data }:any) => {
  const exteriorColor = useSelector((state) => state.modelspec.custom.exterior);
  const interiorColor = useSelector((state) => state.modelspec.custom.interior);
  const modelType = useSelector((state) => state.modelspec.type);

  const totalImages = data[modelType].customImages;
  const exColorType:string = Object.keys(colors.exterior)
    .filter((item) => colors.exterior[item].includes(exteriorColor))[0];

  const filteredExImages = totalImages && totalImages[exColorType][colors.exterior[exColorType].indexOf(exteriorColor)];
  const filteredInImages = totalImages && totalImages.interior[colors.interior.indexOf(interiorColor)];

  return (
    <Wrapper>
      {totalImages ? (
        <Row>
          <Col xs={24} sm={24} md={24} lg={15}>
            <Carousel responsive={responsive} ssr>
              {filteredExImages?.map((item:string) => (
                <ImageWrapper>
                  <img src={item} alt="" />
                </ImageWrapper>
              ))}
              {filteredInImages?.map((item:string) => (
                <ImageWrapper>
                  <img src={item} alt="" />
                </ImageWrapper>
              ))}
            </Carousel>
          </Col>
          <Col xs={24} sm={24} md={24} lg={9}>
            <Selector>
              <Collapse accordion bordered={false} defaultActiveKey={['1']} expandIconPosition="right" ghost>
                <Panel header="Exterior Color" key="1">
                  <ColorBox text="Standard Color" colors={colors.exterior.standard} />
                  <ColorBox text="Metalic Color" colors={colors.exterior.metalic} />
                  <ColorBox text="Special Color" colors={colors.exterior.special} />
                </Panel>
                <Panel header="Wheels" key="2">
                  <WheelBox />
                </Panel>
                <Panel header="Interior Colors and Material" key="3">
                  <ColorBox text="" colors={colors.interior} />
                </Panel>
              </Collapse>
            </Selector>
          </Col>
        </Row>
      ) : <Empty />}
    </Wrapper>
  );
};

export default CustomCar;
