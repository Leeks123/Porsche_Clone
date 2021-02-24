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
  overflow: scroll;
  ul {
    width: 86vw;
    margin: 0 auto;
    padding: 0;
    display: flex;

    li {
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
`;

const StickyNav = () => {
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
      <ul>
        <li><a href="#nav1" id="1" onClick={onClick}>dskfjdskf</a></li>
        <li><a href="#nav2" id="2" onClick={onClick}>dskfjdskf</a></li>
        <li><a href="#nav3" id="3" onClick={onClick}>모델 및 사양</a></li>
        <li><a href="#nav4" id="4" onClick={onClick}>나만의 포르쉐 만들기</a></li>
        <li><a href="#nav5" id="5" onClick={onClick}>갤러리</a></li>
        <li><a href="#nav6" id="6" onClick={onClick}>다음 단계</a></li>
      </ul>
    </Wrapper>
  );
};

export default StickyNav;
