/* eslint-disable jsx-a11y/media-has-caption */
import {
  useRef, useState, useEffect, RefObject,
} from 'react';
import styled from '@emotion/styled';
import { PlusOutlined } from '@ant-design/icons';
import Button, { ButtonProps } from '../common/Button';

type WrapperProp = {
    ref: RefObject<HTMLDivElement>,
    onTop: boolean,
}
const Wrapper = styled.section<WrapperProp>`
    width: 100%;
    height: 100vh;
    overflow: hidden;

    position: sticky;
    top: 60px;
    margin-top: 20px;
`;
const Background = styled.div`
    width: 100%;
    height: 100%;
    video {
        height: 100vh;
        object-fit: cover;
    }
`;

type OverlayProp = {
    onTop: boolean,
}
const Overlay = styled.div<OverlayProp>`
    position: relative;
    top: -100%;
    height: 100vh;

    ${(props) => (props.onTop ? 'overflow: scroll;' : 'overflow: hidden;')}
    
    .overlay-top {
        height: 100vh;
    }
    .overlay-bottom {
        background: linear-gradient(transparent,black);
        height: 100vh;
        z-index: 10;

        .overlay-bottom-container {
            color: white;
            width: 86vw;
            margin: 0 auto;
            position: relative;
            top: 50%;
            transform: translateY(-50%);
            h1 {
                color: white;
                font-size: 40px;
            }
            p {
                width: 60%;
                font-size: 16px;
                margin: 60px 0;
            }
        }
    }
`;
const buttonColor:ButtonProps['color'] = {
  fontColor: 'black',
  backColor: 'white',
  borderColor: 'transparent',
  hoverBackColor: '#d5001c',
  hoverFontColor: 'white',
  hoverBorderColor: 'transparent',
};

const VideoOveraly = () => {
  const wrapper = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const [elTop, setElTop] = useState(false);

  useEffect(() => {
    function onScroll() {
      // window.scrollY : 얼마나 내렸는지
      // document.documentElement.clientHeight : 화면에 보이는 길이
      // document.documentElement.scrollHeight : 총길이
      console.log(
        window.scrollY,
        wrapper.current?.getBoundingClientRect().top,
      );
      const elTopPos = wrapper.current.getBoundingClientRect().top;
      if (elTopPos <= 60) {
        console.log('on top');
        setElTop(true);
        video.current?.play();
      } else {
        setElTop(false);
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <Wrapper ref={wrapper} onTop={elTop}>
      <Background>
        <video
          ref={video}
          crossOrigin=""
          width="100%"
          height="100vh"
          poster="https://files.porsche.com/filestore/video/multimedia/none/modelseries-718-models-overview-design-loop/zoom/d5cda61c-095d-11eb-80ce-005056bbdc38;sE;twebp/porsche-image.webp"
          loop
          muted
          preload="none"
        >
          <source src="https://files.porsche.com/filestore/video/multimedia/none/modelseries-718-models-overview-design-loop/video-mp4/92fb8d17-1205-11eb-80ce-005056bbdc38/porsche-video.mp4" type="video/mp4" />
        </video>
      </Background>
      <Overlay onTop={elTop}>
        <div className="overlay-top" />
        <div className="overlay-bottom">
          <div className="overlay-bottom-container">
            <h1>디자인.</h1>
            <p>
              정교하며, 과하지 않습니다. 자신감 넘치며, 구속받지 않습니다. 낮고, 와이드하며, 매끈합니다.
              718 모델의 익스 테리어 디자인은 스포티하면서도 독특한 에지와 함께 뚜렷하게 정의된 전통적인 윤곽으로 차별화된 특징을 선보입니다.
            </p>
            <Button src="" text="자세히 보기" color={buttonColor}><PlusOutlined /></Button>
          </div>
        </div>
      </Overlay>
    </Wrapper>
  );
};

export default VideoOveraly;
