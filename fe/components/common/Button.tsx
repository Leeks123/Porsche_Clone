import { ReactChild, ReactChildren } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

interface WrapperProps {
    fontColor?: string | undefined,
    backColor?: string | undefined,
    hoverBackColor?: string | undefined,
    hoverFontColor?: string | undefined,
    size?: number,
}
const Wrapper = styled.div<WrapperProps>`
    display: block;
    width: fit-content;
    position: relative;
    cursor: pointer;
    margin-right: 20px;
    padding: 12px 21px;
    span {
        margin-right: 10px;
        letter-spacing: -1px;
        color: ${(props) => props.fontColor && props.fontColor};
    }
    font-size: ${(props) => props.size && `${props.size}px`};
    background: ${(props) => props.backColor && props.backColor};

    &:hover {
      ${(props) => (props.hoverBackColor && `background-color: ${props.hoverBackColor};`)}
      span {
        color: ${(props) => props.hoverFontColor && props.hoverFontColor};
      }
    }
`;

type ButtonProps = {
    src: string | '/',
    text: string | '',
    color: {
        fontColor: string | 'black',
        backColor: string | 'white',
        hoverBackColor: string | 'white',
        hoverFontColor: string | 'black',
    },
    size?: number | 16,
    style?: object,
    children: ReactChild | ReactChildren | undefined
}
const Button = ({
  src = '',
  text = '',
  children,
  color = {
    fontColor: 'black', backColor: 'gray', hoverFontColor: '#d5001c', hoverBackColor: '#d5001c',
  },
  size = 16,
  style,
}:ButtonProps) => (

  <Wrapper
    fontColor={color.fontColor}
    hoverFontColor={color.hoverFontColor}
    hoverBackColor={color.hoverBackColor}
    backColor={color.backColor}
    size={size}
    style={style}
  >
    <Link href={src}>
      <a>
        {children}
        <span>{text}</span>
      </a>
    </Link>
  </Wrapper>

);

export default Button;
