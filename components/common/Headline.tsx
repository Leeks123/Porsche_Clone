import styled from '@emotion/styled';

const StyledHeadline = styled.h2`
    font-size: 32px;
    font-weight: 600;

    @media (min-width: 1140px ) {
        font-size: 36px;
    }
`;

type Props = { text: string }

const Headline = ({ text }:Props) => (
  <StyledHeadline>
    {text}
  </StyledHeadline>
);

export default Headline;
