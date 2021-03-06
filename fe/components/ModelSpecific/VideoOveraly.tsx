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
    // overflow: scroll;
    
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

type Props = {
  data: {
    poster:string, src:string, title:string, content:string,
  } | undefined | any
}
const VideoOveraly = ({ data }:Props) => {
  const wrapper = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const [elTop, setElTop] = useState(false);

  useEffect(() => {
    function onScroll() {
      // window.scrollY : 얼마나 내렸는지
      // document.documentElement.clientHeight : 화면에 보이는 길이
      // document.documentElement.scrollHeight : 총길이
      // console.log(
      //   window.scrollY,
      //   wrapper.current?.getBoundingClientRect().top,
      // );
      if (wrapper.current !== null) {
        const elTopPos = wrapper.current.getBoundingClientRect().top;
        if (elTopPos <= 100) {
          // console.log('on top');
          setElTop(true);
          video.current?.play();
        } else {
          setElTop(false);
        }
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
          poster={data.poster}
          loop
          muted
          preload="none"
        >
          <source src={data.src} type="video/mp4" />
        </video>
      </Background>
      <Overlay onTop={elTop}>
        <div className="overlay-top" />
        <div className="overlay-bottom">
          <div className="overlay-bottom-container">
            <h1>{data.title}</h1>
            <p>
              {data.content}
            </p>
            <Button src="" text="자세히 보기" color={buttonColor}><PlusOutlined /></Button>
          </div>
        </div>
      </Overlay>
    </Wrapper>
  );
};

export default VideoOveraly;
