import styled from '@emotion/styled';
import { RightOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import React from 'react';
import Button from '../common/Button';

import { secondhandData } from '../../utils/landingpage-data';

const Wrapper = styled.div`
    width: 86vw;
    margin: 30px auto;
`;

const Headline = styled.h2`
    font-size: 32px;
    font-weight: 600;

    @media (min-width: 1140px ) {
        font-size: 36px;
    }
`;
const SecondhandsCard = styled.div`
    padding: 30px;
    img {
        width: 100%;
    }
    & > div {
        margin: 0 auto;
    }
`;

const responsive = {
  xs: {
    breakpoint: { max: 480, min: 10 },
    items: 1,
  },
  md: {
    breakpoint: { max: 992, min: 480 },
    items: 2,
  },
  lg: {
    breakpoint: { max: 4000, min: 992 },
    items: 3,
  },
};
const FindSecondhands = () => (
  <Wrapper>
    <Headline>포르쉐 인증 중고차 찾기</Headline>
    <div>
      <Carousel responsive={responsive} showDots autoPlay infinite>
        {secondhandData.map((item) => (
          <SecondhandsCard>
            <img src={item.imgSrc} alt={item.name} />
            <Button
              src="/"
              text={`${item.name} 모델 찾기`}
              size={16}
              color={{ fontColor: 'white', hoverColor: '#d5001c', backColor: '#313639' }}
            >
              <RightOutlined />
            </Button>
          </SecondhandsCard>
        ))}
      </Carousel>
    </div>
  </Wrapper>
);

export default FindSecondhands;