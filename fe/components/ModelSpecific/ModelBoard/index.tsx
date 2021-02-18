/** @jsx jsx */
import { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { RightOutlined } from '@ant-design/icons';
import { jsx } from '@emotion/react';

import {
  Wrapper, Background, StyledCarousel, SpecContainer,
  SpecHeadline, ImageContainer, SpecDesc, ButtonContainer,
  buttonColor, Disclaimer,
} from '../ModelBoard/styles';
import Button from '../../../components/common/Button';
import StyledModal from './StyledModal';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};

const ModelBoard = () => {
  const windowWidth = useSelector((state) => state.layout?.windowWidth);
  const [modalState, setModal] = useState(false);
  const openModal = useCallback(() => {
    setModal(true);
  }, []);

  return (
    <Wrapper id="modelboard">
      <Background />
      <StyledCarousel
        swipeable
        draggable
        showDots
        responsive={responsive}
        ssr
      >
        {[1, 2, 3, 4].map((item) => (
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
                    dsfdsf1
                  </div>
                  <div className="data-desc">
                    Acceleration 0 - 100 km/h with Launch Control
                  </div>
                </li>
                <li>
                  <div className="data-title">
                    dsfdsf2
                  </div>
                  <div className="data-desc">
                    Overboost Power with Launch Control up to (kW)/Overboost Power with Launch Control up to (PS)
                  </div>
                </li>
                <li>
                  <div className="data-title">
                    dsfdsf3
                  </div>
                  <div className="data-desc">
                    Top speed
                  </div>
                </li>
              </ul>
            </SpecDesc>
            <ButtonContainer>
              <Button
                src="/"
                text="기술사양"
                color={buttonColor}
                style={windowWidth < 768 ? { width: '100%' } : {}}
                onClick={openModal}
              >
                <RightOutlined />
              </Button>
              <Button
                src="/"
                text="나만의 포르쉐 만들기"
                color={buttonColor}
                style={windowWidth < 768 ? { width: '100%' } : {}}
              >
                <RightOutlined />
              </Button>
              <Button
                src="/"
                text="비교하기"
                color={buttonColor}
                style={windowWidth < 768 ? { width: '100%' } : {}}
              >
                <RightOutlined />
              </Button>
            </ButtonContainer>
          </SpecContainer>
        ))}
      </StyledCarousel>
      <StyledModal isOpen={modalState} setState={setModal} />
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
};

export default ModelBoard;
