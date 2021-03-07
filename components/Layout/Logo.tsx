import Link from 'next/link';
import styled from '@emotion/styled';

import { mq } from '../../utils/mediaquery';

const StyledLogo = styled.div`
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background-color: #ffff;
    border: 0.0625rem solid #c9cacb;
    border-top: 0;
    width: 6.75rem;
    height: 4.8125rem;
    padding: 0.3125rem 0.1875rem 0.5625rem 0.1875rem;
    margin: 0;
    display: inline-block;

    img { 
        width: 100%;
    }
    ${mq[0]} {
        width: 6.875rem;
        height: 5.25rem;
        padding: 0.5625rem 0.25rem 0.8125rem 0.25rem;
    }
    ${mq[1]} {
        width: 6.875rem;
        height: 5.25rem;
        padding: 0.375rem 0.3125rem 0.4375rem 0.3125rem;
    }
    ${mq[2]} {
        width: 8.3125rem;
        height: 8.3125rem;
        padding: 1.75rem 0.25rem 1.875rem 0.25rem;
    }
`;
const Logo = () => (
  <Link href="/">
    <a style={{ zIndex: 400 }}>
      <StyledLogo>
        <img
          srcSet="
            https://cdn.ui.porsche.com/porsche-design-system/marque/porsche-marque-trademark.small.min.b95854f1d63d3fde4498a56a79e94b52@1x.png 1x,
            https://cdn.ui.porsche.com/porsche-design-system/marque/porsche-marque-trademark.small.min.02fd4c5069964f0cc8b765140807406f@2x.png 2x,
            https://cdn.ui.porsche.com/porsche-design-system/marque/porsche-marque-trademark.small.min.4278429e2318f275eed1bea7217fa69d@3x.png 3x
          "
          src="https://cdn.ui.porsche.com/porsche-design-system/marque/porsche-marque-trademark.small.min.02fd4c5069964f0cc8b765140807406f@2x.png"
          alt="logo"
        />
      </StyledLogo>
    </a>
  </Link>

);

export default Logo;
