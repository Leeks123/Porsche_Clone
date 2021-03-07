import styled from '@emotion/styled';
import { Row, Col } from 'antd';

import Headline from '../common/Headline';

const Wrapper = styled.div`
    width: 86%;
    margin: 25px auto;
`;
const Text = styled.div`
    padding: 5px 0;
`;

const Concept = () => (
  <>
    <Row>
      <Col lg={12} xl={24}>
        <Wrapper>

          <Headline text="The 718 Concept" />
          <Text>
            <p>
              718 모델은 스포츠카의 핵심을 유지하면서 미드십 엔진을 탑재한 로드스터로,
              전설적인 포르쉐 718의 스포츠 정신에 미래형 스포츠카를 접목하여 오늘날의 도로에 적합하게 변신시켰습니다.
              목표는 단 하나, 일상의 주행을 최고의 즐거움으로 만드는 것입니다.
            </p>
          </Text>
        </Wrapper>
      </Col>
      <Col lg={12} xl={24}>
        <video
          crossOrigin=""
          playsInline
          width="100%"
          poster="data:image/gif;base64,R0lGODlhEAAJAPAAAAAAAP///yH5BAUAAAAALAAAAAAQAAkAAAIKhI+py+0Po5yUFQA7"
          autoPlay
          loop
          muted
        >
          <source src="https://files.porsche.com/filestore/video/multimedia/none/modelseries-718-models-intro/video-mp4/c4b0fabe-0edb-11eb-80ce-005056bbdc38/porsche-video.mp4" type="video/mp4" />
        </video>
      </Col>
    </Row>

  </>
);

export default Concept;
