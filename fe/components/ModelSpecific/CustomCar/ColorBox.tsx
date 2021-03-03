/* eslint-disable no-nested-ternary */
import { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import { CheckCircleOutlined, SyncOutlined } from '@ant-design/icons';

import modelspecSlice from '../../../redux/reducers/modelspec';

const Wrapper = styled.div`
    padding: 8px;
`;
const Title = styled.div`
    font-size: 16px;
    font-weight: 200;
`;
const Colors = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
type ColorProps = {
    color: string, isSelected: boolean
}
const Color = styled.span<ColorProps>`
    width: ${(props) => (props.isSelected ? '65px' : '60px')};
    height: ${(props) => (props.isSelected ? '65px' : '60px')};
    background-color: ${(props) => props.color && `${props.color}`};
    
    position: relative;
    
    ${(props) => (props.isSelected
    ? 'box-shadow: 1px 1px 5px 1px gray; border: none; z-index: 5'
    : 'border: 1px solid lightgray;')};

    .anticon {
        font-size: 20px;
        border-radius: 50%;
        position: relative;
        top: 60%;
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

type Props = {
    text: string,
    colors: string[],
}
const ColorBox = ({ text, colors }:Props) => {
  const imgLoaded = true;
  const dispatch = useDispatch();
  const selectedColor = useSelector((state) => {
    if (text !== '') {
      return state.modelspec.custom.exterior;
    }
    return state.modelspec.custom.interior;
  });
  const onSelect = useCallback((e) => {
    console.log(e.target.id);
    if (text !== '') {
      dispatch(modelspecSlice.actions.exteriorColorChange(e.target.id));
    } else {
      dispatch(modelspecSlice.actions.interiorColorChange(e.target.id));
    }
  }, []);
  return (
    <Wrapper>
      <Title>{text}</Title>
      <Colors>
        {colors.map((color) => {
          if (color === selectedColor) {
            return (
              <Color color={color} isSelected id={color} onClick={onSelect}>
                { true
                  ? imgLoaded
                    ? <CheckCircleOutlined className="check" />
                    : <SyncOutlined spin className="loading" />
                  : ''}
              </Color>
            );
          }
          return (
            <Color color={color} isSelected={false} id={color} onClick={onSelect}>
              { false
                ? imgLoaded
                  ? <CheckCircleOutlined className="check" />
                  : <SyncOutlined spin className="loading" />
                : ''}
            </Color>
          );
        })}
      </Colors>
    </Wrapper>
  );
};

export default ColorBox;
