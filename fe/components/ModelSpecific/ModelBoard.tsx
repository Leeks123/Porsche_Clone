/** @jsx jsx */
import { RightOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import { jsx, css } from '@emotion/react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Button from '../../components/common/Button';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};

const Wrapper = styled.section`
  position: relative;
  height: 90vh;
  padding: 30px 0;
  background-color: #000;
  color: white;
`;
const Background = styled.div`
  background: url("https://files.porsche.com/filestore/image/multimedia/none/modelseries-modelexplorer-backplate/normal/f2242816-9100-11ea-80c9-005056bbdc38;sM;twebp/porsche-normal.webp") no-repeat;
  background-size: 100% 100%;
  height: 70%;
  position: relative;
  top: 2%;
`;
const SpecContainer = styled.div`
  width: 86vw;
  margin: 0 auto;
  position: relative;
  top: -70%;
`;
const SpecHeadline = styled.div`
  padding-bottom: 35px;
  text-align: center;
  .headline-flag {
    color: #00b0f4;
    font-size: 16px;
  }
  .headline-title {
    font-size: 40px;
    font-weight: 600;
  }
  .healdline-copy {

  }
`;
const ImageContainer = styled.div`
  height: 351px;
  position: relative;
  img {
      height: 100%;
      position: relative;
      top: -12%;
      left: 50%;
      margin-left: -312px;
  }
`;
const SpecDesc = styled.div`
  ul {
      padding: 0;
      margin: 0;
      display: flex;
      justify-content: space-around;

      li {
        list-style: none;
        padding: 0;
        margin: 0;
        .data-title {
            font-size: 20px;
            font-weight: bold;
        }
        .data-desc {
            font-size: 10px;
        }
      }
  }
`;
const ButtonContainer = styled.div`
  display: flex;
`;
const buttonStyle = css`
  border: 1px solid white;
  &:hover {
      1px solid #00b0f4;
  }
`;
const Disclaimer = styled.div`
  font-size: 10px;
  text-align: center;
`;

const ModelBoard = () => (
  <Wrapper>
    <Background />
    <SpecContainer>
      <SpecHeadline>
        <div className="headline-flag">new</div>
        <div className="headline-title">Taycan</div>
        <div className="headline-copy">tba</div>
      </SpecHeadline>
      <ImageContainer>
        <img src="https://files.porsche.com/filestore/image/multimedia/none/j1-taycan-modelexplorer-01/normal/8beac980-c1b3-11ea-80ca-005056bbdc38;sP;twebp/porsche-normal.webp" alt="" />
      </ImageContainer>
      <SpecDesc>
        <ul>
          <li>
            <div className="data-title">
              dsfdsf
            </div>
            <div className="data-desc">
              dsfjdskfjdsklfjsdklfjds
            </div>
          </li>
          <li>
            <div className="data-title">
              dsfdsf
            </div>
            <div className="data-desc">
              dsfjdskfjdsklfjsdklfjds
            </div>
          </li>
          <li>
            <div className="data-title">
              dsfdsf
            </div>
            <div className="data-desc">
              dsfjdskfjdsklfjsdklfjds
            </div>
          </li>
        </ul>
      </SpecDesc>
      <ButtonContainer>
        <Button
          src="/"
          text="기술사양"
          color={{
            fontColor: 'white',
            backColor: 'transparent',
            hoverFontColor: '#00b0f4',
            hoverBackColor: 'transparent',
          }}
          style={buttonStyle}
        >
          <RightOutlined />
        </Button>
      </ButtonContainer>
    </SpecContainer>
    <Disclaimer>
      * 국내 출시 이전 차량의 경우 국내 공인 연비 정보 및 타이어 에너지소비효율 정보가 존재하지 않습니다.
      <br />
      ¹ 표기된 EU/WLTP technical data는 2021 Model Year제품을 기준으로 작성된 자료로 판매되는 국가별로 차이가 있을 수 있습니다.
      <br />
      ² 표기된 EU/WLTP technical data는 2020 Model Year제품을 기준으로 작성된 자료로 판매되는 국가별로 차이가 있을 수 있습니다.
      <br />
    </Disclaimer>

  </Wrapper>
);

export default ModelBoard;
