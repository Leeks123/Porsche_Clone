import styled from '@emotion/styled';

import { menuDataProp } from '../../utils/menu-data';
import { mq } from '../../utils/mediaquery';

import ModelSiderItem from './ModelSiderItem';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3,1fr);
    
    ${mq[1]} {
        column-gap: 8vw;
    }
    ${mq[2]} {
        gap: 0;
    }
`;

type Props = {
    data: menuDataProp[], parentVisible: (arg:boolean) => void,
}
const ModelSider = ({ data, parentVisible }:Props) => (
  <Wrapper>
    {data.map((item) => (
      <ModelSiderItem
        key={item.title}
        title={item.title}
        img={item.imgSrc}
        submenu={item.subMenu}
        parentVisible={parentVisible}
      />
    ))}
  </Wrapper>
);

export default ModelSider;
