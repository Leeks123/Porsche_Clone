import { useEffect, useState, useCallback } from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  height: 60px;
  background-color: white;
  z-index: 20;
  border: 1px solid red;
  ul {
    margin: 0;
    padding: 0;
    display: flex;

    li {
      margin: 0;
      padding: 10px;
      list-style: none;

      ${(props) => props.active && `&:nth-child(${props.active}) { background-color: yellow; }`}
    }
  }
`;

const StickyNav = () => {
  const [activeNav, setActiveNav] = useState(1);
  const [sectionPosition, setSectionPosition] = useState([]);

  useEffect(() => {
    setSectionPosition([...document.querySelectorAll('.sticky-nav-section')]
      .map((item) => Number.parseInt(item.getBoundingClientRect().top
        + window.scrollY - 60, 10)));

    function onScroll() {
      sectionPosition.forEach((section, i) => {
        if (section < window.scrollY) {
          console.log(window.scrollY, i, activeNav);
          setActiveNav(activeNav + 1);
        }
      });
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const onClick = useCallback((e) => {
    const targetSectionId = e.target.getAttribute('href');
    e.preventDefault();
    setActiveNav(e.target.id);

    window.scrollTo({
      top: document.querySelector(targetSectionId).getBoundingClientRect().top
      + window.scrollY - 60,
      left: 0,
      behavior: 'smooth',
    });
    console.log(e.target.id);
    console.log(
      document.querySelector(targetSectionId).getBoundingClientRect().top
      + window.scrollY,
    );
  }, []);

  console.log(sectionPosition);
  return (
    <Wrapper active={activeNav}>
      <ul>
        <li><a href="#nav1" id={1} onClick={onClick}>dskfjdskf</a></li>
        <li><a href="#nav2" id={2} onClick={onClick}>dskfjdskf</a></li>
        <li><a href="#nav3" id={3} onClick={onClick}>dskfjdskf</a></li>
      </ul>
    </Wrapper>
  );
};

export default StickyNav;
