import Link from 'next/link';
import { useSelector } from 'react-redux';
import styled from '@emotion/styled';
import { Row, Col } from 'antd';
import { ExportOutlined, RightOutlined } from '@ant-design/icons';

import { modelCardData, modelCardProp } from '../../utils/landingpage-data';

const Headline = styled.h2`
    width: 86vw;
    margin: 30px auto;
    font-size: 32px;
    font-weight: 600;

    @media (min-width: 1140px ) {
        font-size: 36px;
    }
`;
const StyledCol = styled(Col)`
    position: relative;
    height: 37.5vw;
    .container {
        overflow: hidden;
        background-color: #191F22;
        width: 100%;
        height: 100%;
        img {
            object-fit: cover;
            height: 100%;
            transition: all 1s;
            transition-timing-function: ease-in-out;
            &:hover {
                width: 150%;
                margin-left: -20%;
                transition: all 1s;
                transition-timing-function: ease-in-out;
            }
        }
        .modelcard-title {
            position: relative;
            top: -70px;
            color: white;
            font-size: 20px;
            font-weight: 600;
            display: flex;
            padding: 0 10px;
            & > span {
                color: #d5001c;
                margin: 5px;
            }
            .modelcard-price {
                font-size: 14px;
            }
        }
        .buttonwrapper {
            display: none;
            position: relative;
        }
    }

    @media (min-width: 665px) {
        
    }

    @media (min-width: 768px) {
        .container {
            img {
            }
            .modelcard-title {
                top: -100%;
                padding: 0 20px;
                font-size: 30px;
                & > span {
                    display: none;
                }
                .modelcard-name {
                    
                }
                .modelcard-price {
                    font-size: 18px;
                }
            }
            .buttonwrapper {
                display: flex;
                top: -170px;
                padding: 0 20px;
                font-size: 16px;
                .myporsche, .allmodel {
                    cursor: pointer;
                    span {
                        margin-right: 10px;
                        letter-spacing: -1px;
                    }
                }
                .myporsche {
                    background: white;
                    margin-right: 20px;
                    padding: 10px 15px;
                    color: black;
                }
                .allmodel {
                    border: 1px solid white;
                    padding: 10px 15px;
                    color: white;
                }
            }
    }
    
    @media (min-width:1200px) {
        height: 25vw;

    }
`;

const ModelsCards = () => {
  const windowWidth = useSelector((state) => state.layout?.windowWidth);

  return (
    <>
      <Headline>Models</Headline>
      <Row>
        {modelCardData.map((card) => (
          <StyledCol xs={12} xl={8}>
            <div className="container">
              {windowWidth < 768
                ? <Link href="/"><a><img src={card.imgSrc} alt={card.name} /></a></Link>
                : <img src={card.imgSrc} alt={card.name} />}
              <div className="modelcard-title">
                <RightOutlined />
                <div>
                  <span className="modelcard-name">{card.name}</span>
                  <p className="modelcard-price">{`${card.price} KRW 부터`}</p>
                </div>
              </div>
              <div className="buttonwrapper">
                <Link href="/">
                  <a>
                    <div className="myporsche">
                      <ExportOutlined />
                      <span className="myporsche-text">나만의 포르쉐 만들기</span>
                    </div>
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <div className="allmodel">
                      <RightOutlined />
                      <span className="allmodel-text">모든 모델</span>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </StyledCol>
        ))}
      </Row>
    </>
  );
};

export default ModelsCards;
