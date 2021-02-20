import styled from '@emotion/styled';
import { EnvironmentOutlined, DownloadOutlined } from '@ant-design/icons';

import Headline from '../common/Headline';

const Wrapper = styled.div`
    width: 86vw;
    margin: 30px auto;

    .content-container {
        display: flex;
        flex-wrap: wrap;
        padding: 10px 0;
    }
`;
const NextLink = styled.div`
    font-size: 16px;
    font-weight: 600;
    margin-right: 50px;
    padding: 10px 0 10px;
    span { 
        margin-right: 15px;
    }
    &:hover {
        color: #d5001c;
    }
`;
const NextPhase = () => (
  <Wrapper>
    <Headline text="다음 단계" />
    <div className="content-container">
      <NextLink>
        <EnvironmentOutlined />
        <span className="content-text">포르쉐 센터 찾기</span>
      </NextLink>
      {Array(3).fill(0).map(() => (
        <NextLink>
          <DownloadOutlined />
          <span className="content-text">Porsche 모델 관련 데이터 pdf</span>
        </NextLink>
      ))}
    </div>
  </Wrapper>
);

export default NextPhase;
