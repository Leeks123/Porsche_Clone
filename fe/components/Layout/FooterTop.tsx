import { useCallback, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from '@emotion/styled';
import { Row, Col, Collapse } from 'antd';
import {
  SelectOutlined, InstagramOutlined, YoutubeOutlined,
  FacebookOutlined, TwitterOutlined, LinkedinOutlined,
} from '@ant-design/icons';

const { Panel } = Collapse;

const Wrapper = styled.div`
    padding: 30px 7vw;
`;

const Container = styled.ul`
    padding: 0;
    margin: 0;
    h3, li {
        padding: 12px 0;
    }
    li { 
        list-style-type: none;
        font-size : 16px;
        span:hover {
            color: #d5001c;
        }
    }
    h3 { 
        font-size: 20px;
    }
`;
const StyledCollapse = styled(Collapse)`
    .custom-collapse-panel {
        padding: 5px 0 0 0;
        margin-top: -1px;
        font-size: 18px;
        font-weight: bold;
        background: white;
        border : 0;
        border-top : 1px solid lightgray;
        .ant-collapse-header {
            padding: 12px 40px 12px 0;
            border-bottom : 1px solid lightgray;
        }

        & .ant-collapse-content-box {
            padding: 0;
            ul {
                padding: 0;
                margin: 0;
                li {
                    font-size: 16px;
                    font-weight: 400;   
                    height: 66px;
                    display:flex;
                    flex-direction: column;
                    justify-content: center;
                    span {
                         &:hover {
                            color: #d5001c;
                         }
                    }
                }
            }
        }
    }
`;
const PageRecomend = styled.div`
    padding: 50px 0;
    .container {
        .header {
            background-color: black;
            padding: 13px 21px;
            margin-bottom: 20px;
            font-size: 16px;
            font-weight: 600;
            color: white;
            span#text {
                margin-left: 14px;
            }
            &:hover {
                background-color: #d5001c;
            }
        }
        .buttons {
            ul {
                padding: 12px 0 28px;
                margin : 0;
                display: flex;
                justify-content: space-between;
                li {
                    width: 50px;
                    height: 50px;
                    background: black;
                    color: white;
                    font-size: 41px;
                    padding: 5px;
                    margin: 0;
                    list-style: none;
                    span {
                        display: block;
                    }
                    &:hover {
                        &:nth-of-type(1) {
                            background: #336189;
                        }
                        &:nth-of-type(2) {
                            background: #CD201F;
                        }
                        &:nth-of-type(3) {
                            background: #6A87C2;
                        }
                        &:nth-of-type(4) {
                            background: #0474B3;
                        }
                        &:nth-of-type(5) {
                            background: #54ACEE;
                        }
                    }
                }
            }
        }
    }
`;
const FooterTop = () => {
  const windowWidth = useSelector((state) => state.layout?.windowWidth);
  let collapseItemScrollPosition: number[] = [188, 246, 304, 361]; // x+ pageHeight
  const footerTop = useRef<HTMLDivElement>();

  useEffect(() => {
    // console.log(footerTop.current.offsetTop);
    collapseItemScrollPosition = collapseItemScrollPosition.map((v) => v + footerTop.current.offsetTop);
  }, [windowWidth]);

  const onChangePanel = useCallback((key: string|string[]) => {
    // console.log(collapseItemScrollPosition);
    window.scroll({
      top: collapseItemScrollPosition[+key - 1] - 150,
      left: 0,
      behavior: 'smooth',
    });
  }, [windowWidth]);

  return (
    <Wrapper ref={footerTop}>
      {windowWidth > 565 ? (
        <Row gutter={[32, 32]} style={{ borderTop: '1px solid lightgray', paddingTop: 30 }}>
          <Col xs={12} md={12} lg={6}>
            <Container>
              <h3>Build & Find</h3>
              <li><span>나만의 포르쉐 만들기</span></li>
              <li><span>포르쉐 인증 중고차 찾기</span></li>
              <li><span>포르쉐 센터 찾기</span></li>
            </Container>
          </Col>
          <Col xs={12} md={12} lg={6}>
            <Container>
              <h3>온라인 서비스</h3>
              <li><span>Porsche Financial Services</span></li>
              <li><span>뉴스 가입</span></li>
            </Container>
          </Col>
          <Col xs={12} md={12} lg={6}>
            <Container>
              <h3>Behind the Scenes</h3>
              <li><span>Passion Motorsports</span></li>
              <li><span>Porsche Classic</span></li>
            </Container>
          </Col>
          <Col xs={12} md={12} lg={6}>
            <Container>
              <h3>Porsche Company</h3>
              <li><span>At a Glance</span></li>
              <li><span>Responsibility</span></li>
              <li><span>Contact & Information</span></li>
              <li><span>Christophorus - The Porsche Magazine</span></li>
            </Container>
          </Col>
        </Row>
      ) : (
        <StyledCollapse
          accordion
          bordered={false}
          expandIconPosition="right"
          className="custom-collapse"
          onChange={onChangePanel}
        >
          <Panel header="Build & Find" key="1" className="custom-collapse-panel">
            <ul>
              <li><span>나만의 포르쉐 만들기</span></li>
              <li><span>포르쉐 인증 중고차 찾기</span></li>
              <li><span>포르쉐 센터 찾기</span></li>
            </ul>
          </Panel>
          <Panel header="온라인 서비스" key="2" className="custom-collapse-panel">
            <ul>
              <li><span>Porsche Financial Services</span></li>
              <li><span>뉴스 가입</span></li>
            </ul>
          </Panel>
          <Panel header="Behind the Scenes" key="3" className="custom-collapse-panel">
            <ul>
              <li><span>Passion Motorsports</span></li>
              <li><span>Porsche Classic</span></li>
            </ul>
          </Panel>
          <Panel header="Porsche Company" key="4" className="custom-collapse-panel">
            <ul>
              <li><span>At a Glance</span></li>
              <li><span>Responsibility</span></li>
              <li><span>Contact & Information</span></li>
              <li><span>Christophorus - The Porsche Magazine</span></li>
            </ul>
          </Panel>
        </StyledCollapse>

      )}
      <PageRecomend>
        <Row gutter={[32, 32]}>
          <Col span={windowWidth > 565 ? 12 : 24} offset={windowWidth > 565 ? 12 : 0}>
            <div className="container">
              <div className="header">
                <SelectOutlined />
                <span id="text"> 페이지 추천</span>
              </div>
              <div className="buttons">
                <ul>
                  <li><InstagramOutlined /></li>
                  <li><YoutubeOutlined /></li>
                  <li><FacebookOutlined /></li>
                  <li><LinkedinOutlined /></li>
                  <li><TwitterOutlined /></li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </PageRecomend>
    </Wrapper>
  );
};

export default FooterTop;
