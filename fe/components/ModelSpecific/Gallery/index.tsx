/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState, useCallback } from 'react';
import styled from '@emotion/styled';
import { Select } from 'antd';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Headline from '../../common/Headline';
import ZoomedImages from './ZoomedImages';

const { Option } = Select;

const GalleryHeader = styled.div`
    width: 86vw;
    margin: 0 auto;
    padding: 40px 0;
`;
const StyledSelect = styled(Select)`
    width: 66%;

    .ant-select-selector {
        background-color: #313639 !important;
        color: white;
        .ant-select-arrow {
            color: white;
        }        
    }
`;

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 768 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

type ImagesProp = {
  type: string, src: string,
}
type Props = {
  data:ImagesProp[],
  model:string,
}
const Gallery = ({ data, model }:Props) => {
  const [category, setCategory] = useState('all');
  const [isZoomed, setZoomed] = useState(false);

  const onChange = useCallback((value:string|any):void => {
    setCategory(value);
  }, []);
  const onClick = useCallback(() => {
    setZoomed(true);
  }, []);

  return (
    <div>
      <GalleryHeader>
        <Headline text="갤러리." />
        <StyledSelect defaultValue="all" size="large" onChange={onChange}>
          <Option value="all">All Media</Option>
          <Option value="image">Images</Option>
          <Option value="sound">Sounds</Option>
          <Option value="wallpaper">WallPaper</Option>
        </StyledSelect>
      </GalleryHeader>

      {isZoomed && <ZoomedImages setZoomed={setZoomed} data={data} model={model}/>}
      <div>
        {category === 'all' && (
        <Carousel responsive={responsive}>
          <div>
            <img src={data[0].src} alt="" style={{ width: '100%' }} onClick={onClick} />
            <img src={data[1].src} alt="" style={{ width: '50%' }} onClick={onClick} />
            <img src={data[2].src} alt="" style={{ width: '50%' }} onClick={onClick} />
          </div>
          <div>
            <img src={data[3].src} alt="" style={{ width: '50%' }} onClick={onClick} />
            <img src={data[4].src} alt="" style={{ width: '50%' }} onClick={onClick} />
            <img src={data[5].src} alt="" style={{ width: '100%' }} onClick={onClick} />
          </div>
          <div>
            <img src={data[6].src} alt="" style={{ width: '100%' }} onClick={onClick} />
            <img src={data[7].src} alt="" style={{ width: '50%' }} onClick={onClick} />
            <img src={data[8].src} alt="" style={{ width: '50%' }} onClick={onClick} />
          </div>
        </Carousel>
        )}
      </div>

    </div>
  );
};

export default Gallery;
