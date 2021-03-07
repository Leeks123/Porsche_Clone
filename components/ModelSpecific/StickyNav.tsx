import { useEffect, useState, useCallback } from 'react';
import styled from '@emotion/styled';

type WrapperProps = {
  active: number,
}
const Wrapper = styled.div<WrapperProps>`
  position: sticky;
  top: 0;
  height: 60px;
  background-color: white;
  z-index: 20;
  box-shadow: 0px 1px 5px lightgray;
  & > div {
    width: 86vw;
    margin: 0 auto;
    overflow: scroll;
    ul {
      width: 1000px;
      padding: 0;
      display: flex;
      flex-wrap: nowrap;
      li {
        height: 48px;
        margin: 0 10px;
        padding: 15px 0 5px;
        list-style: none;
        font-size: 16px;
        color: black;
  
        a {
          color: black;
          &:hover {
            color: #d5011c;
          }
        }
        ${(props) => props.active && `&:nth-of-type(${props.active}) { border-bottom: 3px solid #d5011c; }`}
      }
    }
  }
`;

type StickyNavProps = {
  navList: string[] | undefined,
}
const StickyNav = ({ navList }:StickyNavProps) => {
  const [activeNav, setActiveNav] = useState(1);
  const [scrollPos, setScrollPos] = useState(0);
  const [sectionPosition, setSectionPosition] = useState<number[]>([]);

  useEffect(() => {
    function onScroll() {
      setScrollPos(window.scrollY);
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    setSectionPosition([...document.querySelectorAll('.sticky-nav-section')]
      .map((item) => parseInt(`${item.getBoundingClientRect().top
        + window.scrollY - 60}`, 10)));
  }, [scrollPos]);

  useEffect(() => {
    sectionPosition.forEach((section:number, i:number) => {
      if (section <= window.scrollY) {
        setActiveNav(+i + 1);
      }
    });
  }, [scrollPos]);

  const onClick = useCallback((e) => {
    const targetSectionId = e.target.getAttribute('href');
    e.preventDefault();
    setActiveNav(+e.target.id);

    window.scrollTo({
      top: document.querySelector(targetSectionId).getBoundingClientRect().top
      + window.scrollY - 60,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <Wrapper active={activeNav}>
      <div>
        <ul>
          {navList?.map((v, i) => (
            <li><a href={`#nav${i + 1}`} id={`${i + 1}`} onClick={onClick}>{v}</a></li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
};

export default StickyNav;
