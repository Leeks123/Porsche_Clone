import styled from '@emotion/styled';
import { menuDataProp } from '../../utils/menu-data';
import ModelMenu from './ModelMenu';

const Wrapper = styled.div`
    display: flex;
`;
type Prop = {
    data:menuDataProp[]
}
const ModelMenuList = ({ data }:Prop) => (
  <Wrapper>
    {data.map((item) => (
      <ModelMenu title={item.title} img={item.imgSrc} submenu={item.subMenu} />
    ))}
  </Wrapper>
);

export default ModelMenuList;
