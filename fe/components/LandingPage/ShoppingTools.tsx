import styled from '@emotion/styled';
import { RightOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';

import Headline from './Headline';
import Button from '../common/Button';

const Wrapper = styled.div`
    width: 86vw;
    margin: 30px auto;
`;
const StyledCol = styled(Col)`
    .container {
        height: 47vw;
        position: relative;
    
        @media (min-width: 768px) {
            height: 24.1vw;
        }
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

const ShoppingTools = () => (
  <Wrapper>
    <Headline text="Shopping Tools" />
    <Row gutter={[0, 0]}>
      <StyledCol sm={24} md={12} lg={9}>
        <div className="container">
          <img src="https://files.porsche.com/filestore/image/multimedia/none/homepage-teaser-shoppingtools-models/normal/4f278b6a-9703-11e7-b591-0019999cd470;sN;twebp/porsche-normal.webp" alt="" />
          <Button
            src="/"
            text="포르쉐 모델 자세히 보기"
            color={{
              fontColor: 'white', backColor: 'transparent', hoverFontColor: '#d5001c', hoverBackColor: 'transparent',
            }}
            size={20}
            style={{
              top: '-65px',
              fontWeight: '600',
            }}
          >
            <RightOutlined style={{ color: '#d5001c' }} />
          </Button>
        </div>
      </StyledCol>
      <StyledCol sm={12} md={6} lg={5}>
        <div className="container">
          <img src="https://files.porsche.com/filestore/image/multimedia/none/homepage-teaser-shoppingtools-dealersearch/normal/c365840c-687b-11e7-9717-0019999cd470;sQ;twebp/porsche-normal.webp" alt="" />
          <Button
            src="/"
            text="포르쉐 센터 찾기"
            color={{
              fontColor: 'white', backColor: 'transparent', hoverFontColor: '#d5001c', hoverBackColor: 'transparent',
            }}
            size={20}
            style={{
              top: '-75px',
              fontWeight: '600',
            }}
          >
            <RightOutlined style={{ color: '#d5001c' }} />
          </Button>
        </div>
      </StyledCol>
      <StyledCol sm={12} md={6} lg={5}>
        <div className="container">
          <img src="https://files.porsche.com/filestore/image/multimedia/none/homepage-teaser-shoppingtools-financialservice/normal/24394ea0-992d-11e7-b591-0019999cd470;sQ;twebp/porsche-normal.webp" alt="" />
          <Button
            src="/"
            text="포르쉐 파이낸셜 서비스"
            color={{
              fontColor: 'white', backColor: 'transparent', hoverFontColor: '#d5001c', hoverBackColor: 'transparent',
            }}
            size={20}
            style={{
              top: '-75px',
              fontWeight: '600',
            }}
          >
            <RightOutlined style={{ color: '#d5001c' }} />
          </Button>
        </div>
      </StyledCol>
      <StyledCol sm={0} md={0} lg={5}>
        <div className="container">
          <img src="https://files.porsche.com/filestore/image/multimedia/none/homepage-teaser-shoppingtools-passion/normal/0630c5ca-9703-11e7-b591-0019999cd470;sQ;twebp/porsche-normal.webp" alt="" />
          <Button
            src="/"
            text="포르쉐 익스클루시브 매뉴팩투어"
            color={{
              fontColor: 'white', backColor: 'transparent', hoverFontColor: '#d5001c', hoverBackColor: 'transparent',
            }}
            size={20}
            style={{
              top: '-75px',
              fontWeight: '600',
            }}
          >
            <RightOutlined style={{ color: '#d5001c' }} />
          </Button>
        </div>
      </StyledCol>
    </Row>
  </Wrapper>
);

export default ShoppingTools;
