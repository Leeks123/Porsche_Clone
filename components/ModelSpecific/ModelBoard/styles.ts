import styled from '@emotion/styled';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Wrapper = styled.section`
  position: relative;
  height: 95vh;
  padding: 30px 0;
  background-color: #000;
  color: white;
`;
export const Background = styled.div`
  background: url("https://files.porsche.com/filestore/image/multimedia/none/modelseries-modelexplorer-backplate/normal/f2242816-9100-11ea-80c9-005056bbdc38;sM;twebp/porsche-normal.webp") no-repeat;
  background-size: 100% 100%;
  position: relative;
  height: 30%;
  
  @media (min-width: 768px) {
    height: 70%;
    top: 2%;    
  }

  @media (min-width: 1200px) {
    
  }
`;
export const StyledCarousel = styled(Carousel)`
    position: relative;
    top: -30%;
    
    @media (min-width: 768px) {
        top: -70%;
    }
`;
export const SpecContainer = styled.div`
  position: relative;
  width: 86vw;
  margin: 0 auto;

  @media (min-width: 768px) {
   
  }

  @media (min-width: 1200px) {
    
  }
`;
export const SpecHeadline = styled.div`
  position: relative;
  top: 150px;
  .headline-flag {
    color: #00b0f4;
    font-size: 16px;
  }
  .headline-title {
    font-size: 40px;
    font-weight: 600;
  }
  .healdline-copy {

  }

  @media (min-width: 768px) {
    top: 0;
    padding-bottom: 35px;
    text-align: center;
  }

  @media (min-width: 1200px) {
  
  }
`;
export const ImageContainer = styled.div`
  position: relative;
  top: -110px;
  height: 204px;
  position: relative;
  img {
      height: 100%;
      position: relative;
      left: 50%;
      margin-left: -181px;
  }
 
  @media (min-width: 768px) {
    top: 0;
    height: 351px;
    img {
        top: -12%;
        margin-left: -312px;
    }
  }

  @media (min-width: 1200px) {
    height: 455px;
    img {
        top: -20%;
        margin-left: -404px;
    }
  }

`;
export const SpecDesc = styled.div`
  position: relative;
  width: 100%;
  ul {
      padding: 0;
      margin: 0;
      display: flex;

      li {
        width: 50%;
        list-style: none;
        padding: 0;
        margin: 0 10px;
        .data-title {
            font-size: 16px;
            font-weight: bold;
        }
        .data-desc {
            font-size: 10px;
        }
        &:nth-of-type(3) {
            display: none;
        }
      }
  }

  @media (min-width: 768px) {
    margin: 0 auto;
    margin-top: -10%;
    ul {
        display: flex;
        justify-content: space-between;
  
        li {
          width: 33.33%;
          text-align: center;
          .data-title {
              font-size: 20px;
          }
          .data-desc {
          }
          &:nth-of-type(3) {
            display: block;
          }
        }
    }
  }
  @media (min-width: 1200px) {
      margin-top: -150px;
  }
`;
export const ButtonContainer = styled.div`
  padding: 30px 0;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
  }

  @media (min-width: 1200px) {

  }
`;
export const buttonColor = {
  fontColor: 'white',
  backColor: 'transparent',
  borderColor: 'white',
  hoverFontColor: '#00b0f4',
  hoverBackColor: 'transparent',
  hoverBorderColor: '#00b0f4',
};
export const Disclaimer = styled.div`
  font-size: 10px;
  text-align: center;
  position: relative;
  
  top: -200px;

  @media (min-width: 768px) {
    top: -475px;
  }

  @media (min-width: 1200px) {
  
  }
`;
