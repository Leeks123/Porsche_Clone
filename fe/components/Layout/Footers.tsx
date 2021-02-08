import styled from '@emotion/styled';
import FooterTop from './FooterTop';
import FooterBottom from './FooterBottom';

const Wrapper = styled.div`
    padding: 30px 7vw 70px 7vw;
`;

const Footers = () => (
  <Wrapper>
    <FooterTop />
    <div style={{ height: '1000px', background: 'black' }} />
    <FooterBottom />
  </Wrapper>
);

export default Footers;
