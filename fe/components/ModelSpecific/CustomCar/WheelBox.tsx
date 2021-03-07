/* eslint-disable no-nested-ternary */
import { useState, useCallback } from 'react';
// import Image from 'next/image';
import styled from '@emotion/styled';
import { CheckCircleOutlined, SyncOutlined } from '@ant-design/icons';

const Wrapper = styled.div`
    padding: 8px;
`;
const Wheels = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
type WheelProps = {
  imgSrc:string, isSelected: boolean
}
const Wheel = styled.span<WheelProps>`
    width: ${(props) => (props.isSelected ? '65px' : '60px')};
    height: ${(props) => (props.isSelected ? '65px' : '60px')};
    
    position: relative;
    
    ${(props) => (props.isSelected
    ? 'box-shadow: 1px 1px 5px 1px gray; border: none; z-index: 5'
    : 'border: 1px solid white;')};

    .anticon {
        font-size: 20px;
        border-radius: 50%;
        position: relative;
        top: -50%;
        left: 60%;
    }
    .check {
        border: 1px solid white;
        background: red;
        color: white;
    }
    .loading {
        border: 3px solid lightgray;
        background: lightgray;
        font-size: 16px;
        color: gray;
    }
`;

const WheelBox = () => {
  const wheels = [
    '/tire/tire_00.png',
    '/tire/tire_01.png',
    '/tire/tire_02.png',
    '/tire/tire_03.png',
    '/tire/tire_04.png',
    '/tire/tire_05.png',
    '/tire/tire_06.png',
    '/tire/tire_07.png',
  ];
  const imgLoaded = false;
  const [selectColor, setSelectColor] = useState('');
  const onSelect = useCallback((e) => {
    setSelectColor(e.target.alt);
  }, []);
  return (
    <Wrapper>
      <Wheels>
        {wheels.map((wheel) => {
          if (wheel === selectColor) {
            return (
              <Wheel imgSrc={wheel} isSelected id={wheel} onClick={onSelect}>
                <img src={`${wheel}`} alt={`${wheel}`} height={66} width={66} className="tire-img" />
                { true
                  ? imgLoaded
                    ? <CheckCircleOutlined className="check" />
                    : <SyncOutlined spin className="loading" />
                  : ''}
              </Wheel>
            );
          }
          return (
            <Wheel imgSrc={wheel} isSelected={false} id={wheel} onClick={onSelect}>
              <img src={`${wheel}`} alt={`${wheel}`} height={60} width={60} className="tire-img" />
              { false
                ? imgLoaded
                  ? <CheckCircleOutlined className="check" />
                  : <SyncOutlined spin className="loading" />
                : ''}
            </Wheel>
          );
        })}
      </Wheels>
    </Wrapper>
  );
};

export default WheelBox;
