import styled from '@emotion/styled';
import { RightOutlined } from '@ant-design/icons';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Headline from '../common/Headline';
import Button from '../common/Button';

import { secondhandData } from '../../utils/landingpage-data';

const Wrapper = styled.div`
    width: 86vw;
    margin: 30px auto;
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
    <Headline text="포르쉐 인증 중고차 찾기" />
    <div>
      <Carousel swipeable responsive={responsive} showDots autoPlay infinite>
        {secondhandData.map((item) => (
          <SecondhandsCard>
            <img src={item.imgSrc} alt={item.name} />
            <Button
              src="/"
              text={`${item.name} 모델 찾기`}
              size={16}
              color={{
                fontColor: 'white',
                hoverFontColor: '#fff',
                backColor: '#313639',
                hoverBackColor: '#d5001c',
                borderColor: 'black',
                hoverBorderColor: '#d5001c',
              }}
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
