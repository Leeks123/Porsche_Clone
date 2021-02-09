import { useSelector } from 'react-redux';
import styled from '@emotion/styled';
import { Carousel } from 'antd';
import { RightOutlined } from '@ant-design/icons';

const Content = styled.div`
    height: 112.5vw;
    & > div {
        position: relative;
        img {
            height: 112.5vw;
            width: 100%;
            object-fit: cover;
        }
        .slide-text {
            display: flex;
            padding: 20px;
            position: relative;
            top: -160px;
            height: 100px;
            color: white;
            font-size: 30px;
            font-weight: 500;
            .anticon {
                padding-top: 4px;
                color: #d5001c;
            }
            .slide-text-title {
                padding-left: 5px;
                white-space: normal;
                word-break: normal;
                line-height: 35px;
                transition: all 0.5s;
                transition-timing-function: ease;
                p {
                    margin: 0;
                }
                span {
                    font-size:20px;
                }
                &:hover {
                    color: #d5001c;
                    transition: all 0.5s;
                    transition-timing-function: ease;
                }
            }
        }
    }

@media (min-width: 568px) {
    height: 38.4vw;
    & > div {
        img {
            height: 38.4vw;
        }
        .slide-text {
            font-size: 38px;
            top: -140px;
            .slide-text-title {
                span {
                    font-size: 22px;
                }
            }
        }  
    }
  }
`;

const Slide = () => {
  const windowWidth = useSelector((state) => state.layout?.windowWidth);
  return (
    <Carousel easing="ease-in" autoplay>
      <div>
        <Content>
          <div>
            <img src="https://files.porsche.com/filestore/image/multimedia/none/rd-2021-homepage-banner-ww-tagheuer-kw05/normal/aebc38e3-6628-11eb-80d2-005056bbdc38;sM;twebp/porsche-normal.webp" alt="1" />
            <div className="slide-text">
              <RightOutlined />
              <div className="slide-text-title">
                <p>One name. Two legends. Reignited.</p>
                <span>TAG Heuer and Porshe</span>
              </div>
            </div>
          </div>
        </Content>
      </div>
      <div>
        <Content>
          <div>
            <img src="https://files.porsche.com/filestore/image/multimedia/none/rd-2017-homepage-banner-ww-718caymangts-kw44/normal/17aab8b1-b8c5-11e7-b591-0019999cd470;twebp/porsche-normal.webp" alt="2" />
            <div className="slide-text" style={{ paddingLeft: (windowWidth > 568 ? 'calc(100vw - 248px)' : '5px') }}>
              <RightOutlined />
              <div className="slide-text-title">
                <p>Insatiable</p>
                <span>718 GTS Models</span>
              </div>

            </div>
          </div>
        </Content>
      </div>
      <div>
        <Content>
          <div>
            <img src="https://files.porsche.com/filestore/image/multimedia/none/rd-2021-homepage-banner-ww-taycanbasis-kw03/normal/bac79971-5656-11eb-80d1-005056bbdc38;twebp/porsche-normal.webp" alt="3" />
            <div className="slide-text" style={{ paddingLeft: (windowWidth > 568 ? 'calc(100vw - 360px)' : '5px') }}>
              <RightOutlined />
              <div className="slide-text-title">
                <p>Soul, electricfied</p>
                <span>The new Taycan</span>
              </div>

            </div>
          </div>
        </Content>
      </div>
      <div>
        <Content>
          <div>
            <img src="https://files.porsche.com/filestore/image/multimedia/none/rd-2021-homepage-banner-ww-e-performance-kw02/normal/d320de46-518d-11eb-80d1-005056bbdc38;twebp/porsche-normal.webp" alt="4" />
            <div className="slide-text" style={{ paddingLeft: (windowWidth > 568 ? 'calc(100vw - 360px)' : '5px') }}>
              <RightOutlined />
              <div className="slide-text-title">
                <p>Direction: Future</p>
                <span>Porsche E-Performance</span>
              </div>

            </div>
          </div>
        </Content>
      </div>
      <div>
        <Content>
          <div>
            <img src="https://files.porsche.com/filestore/image/multimedia/none/rd-2020-homepage-banner-ww-992tops-kw14/normal/02361f54-6f39-11ea-80c9-005056bbdc38;twebp/porsche-normal.webp" alt="5" />
            <div className="slide-text">
              <RightOutlined />
              <div className="slide-text-title">
                <p>Relentless.</p>
                <span>The 911 Turbo S models.</span>
              </div>

            </div>
          </div>
        </Content>
      </div>
    </Carousel>
  );
};

export default Slide;
