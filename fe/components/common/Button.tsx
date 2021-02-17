import { ReactChild, ReactChildren } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

interface WrapperProps {
    fontColor?: string | undefined,
    backColor?: string | undefined,
    borderColor?: string | undefined,
    hoverBackColor?: string | undefined,
    hoverFontColor?: string | undefined,
    hoverBorderColor?: string | undefined,
    size?: number,
}
const Wrapper = styled.div<WrapperProps>`
    display: block;
    width: fit-content;
    position: relative;
    cursor: pointer;
    margin: 10px 0;
    margin-right: 20px;
    padding: 12px 21px;
    span {
        margin-right: 10px;
        letter-spacing: -1px;
        color: ${(props) => props.fontColor && props.fontColor};
    }
    font-size: ${(props) => props.size && `${props.size}px`};
    background: ${(props) => props.backColor && props.backColor};
    border: 1px solid ${(props) => props.borderColor && props.borderColor};

    &:hover {
      ${(props) => (props.hoverBackColor && `background-color: ${props.hoverBackColor};`)}
      span {
        color: ${(props) => props.hoverFontColor && props.hoverFontColor};
      }
      border: 1px solid ${(props) => props.hoverBorderColor && props.hoverBorderColor};
    }
`;

export type ButtonProps = {
    src: string | '/',
    text: string | '',
    color: {
        fontColor: string | 'black',
        backColor: string | 'white',
        borderColor?: string | 'transparent',
        hoverBackColor: string | 'white',
        hoverFontColor: string | 'black',
        hoverBorderColor?: string | 'transparent',
    },
    size?: number | 16,
    style?: object,
    onClick?: () => void,
    children: ReactChild | ReactChildren | undefined
}
const Button = ({
  src = '',
  text = '',
  children,
  color,
  size = 16,
  style,
  onClick,
}:ButtonProps) => (

  <Wrapper
    fontColor={color.fontColor}
    hoverFontColor={color.hoverFontColor}
    backColor={color.backColor}
    hoverBackColor={color.hoverBackColor}
    borderColor={color.borderColor}
    hoverBorderColor={color.hoverBorderColor}
    size={size}
    style={style}
    onClick={onClick}
  >
    {onClick ? (
      <div>
        {children}
        <span>{text}</span>
      </div>
    ) : (
      <Link href={src}>
        <a>
          {children}
          <span>{text}</span>
        </a>
      </Link>
    )}
  </Wrapper>

);

export default Button;
