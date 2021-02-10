import { ReactChild, ReactChildren } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

interface WrapperProps {
    fontColor: string,
    hoverColor: string | undefined,
    backColor: string,
    size: number,
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
      ${(props) => (props.hoverColor && `background-color: ${props.hoverColor};`)}
    }
`;

type ButtonProps = {
    src: string,
    text: string,
    color: {
        fontColor: string,
        hoverColor: string | undefined,
        backColor: string
    },
    size: number,
    children: ReactChild | ReactChildren | undefined
}
const Button = ({
  src = '', text = '', children, color = { fontColor: 'black', hoverColor: '#d5001c', backColor: 'gray' }, size = 16,
}:ButtonProps) => (

  <Wrapper
    fontColor={color.fontColor}
    hoverColor={color.hoverColor}
    backColor={color.backColor}
    size={size}
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
