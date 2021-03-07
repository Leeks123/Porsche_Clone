/* eslint-disable no-unused-vars */
import { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import styled from '@emotion/styled';
import { Row, Col, Select } from 'antd';
import { SelectValue } from 'antd/lib/select';


import { select } from '../../utils/footer-data';

const { Option } = Select;

const Wrapper = styled.div`
    background : #191F22;
    padding: 30px 7vw;
    color: white;
    font-size: 16px;
`;
const ChangeCountry = styled.div`
    padding-bottom: 20px;
    span {
        font-size: 22px;
    }
`;
const StyledSelect = styled(Select)`
    width: 100%;
    background-color: #191f22;
`;
const StyledOption = styled(Option)`
    color: #d5001c;
`;
const Copyright = styled.div`
    padding: 5px 0 20px;
    font-weight: bold;
`;
const LegalNotice = styled.div`
    padding: 20px 0 60px 0;
`;

const FooterBottom = () => {
  // @ts-ignore
  const windowWidth = useSelector((state) => state.layout?.windowWidth);
  const [region, setRegion] = useState<SelectValue>(select[0].region);
  const [countries, setCountries] = useState<any>([]);
  const [country, setCountry] = useState<SelectValue>('');
  const [countrySelectAble, setCountrySelectAble] = useState(false);

  const onSelectRegion = useCallback((item:SelectValue):void => {
    setRegion(item);
    const filtered = select.filter((v) => (v.region === item));
    setCountries(filtered[0]?.countries);
    setCountrySelectAble(true);
  }, []);
  const onSelectCountry = useCallback((item:SelectValue):void => {
    setCountry(item);
  }, []);

  return (
    <Wrapper>
      {region && country}
      <ChangeCountry>
        <span>국가 / 지역 변경 :</span>
      </ChangeCountry>
      <Row gutter={[16, 24]}>
        <Col span={windowWidth > 565 ? 12 : 24}>
          <StyledSelect size="large" placeholder="지역을 선택하여 주십시오" onChange={onSelectRegion}>
            {select.map((v) => (
              <StyledOption value={v.region} key={v.region}>{v.region}</StyledOption>
            ))}
          </StyledSelect>
        </Col>
        <Col span={windowWidth > 565 ? 12 : 24}>
          {countrySelectAble ? (
            <StyledSelect size="large" placeholder="국가 / 지역을 선택하여 주십시오" onChange={onSelectCountry}>
              {countries.map((v:any) => (
                <Option value={v} key={v}>{v}</Option>
              ))}
            </StyledSelect>
          ) : <StyledSelect size="large" placeholder="국가 / 지역을 선택하여 주십시오" disabled />}
        </Col>
      </Row>
      <hr style={{ margin: '40px 0', border: '1px solid gray' }} />
      <Copyright>
        © 2021 Porsche Korea Ltd. Legal notice 개인정보처리방침
        <br />
        <br />
        포르쉐 고객센터 080-8100-911
      </Copyright>
      <LegalNotice>
        ※ 표기된 연비는 표준 모드에 의한 것으로 도로상태, 운전방법, 차량적재, 정비상태 및 외기온도에 따라 실주행연비와 차이가 있습니다.
        <br />
        ※ 본 웹사이트에 기재된 내용은 사전에 예고 없이 변경될 수 있으므로 실제 차량과 다를 수 있습니다.
        <br />
        ※ 차량 이미지는 실제 모델과 다를 수 있으며, 국내 적용 사양 및 구성에 따라 차이가 있을 수 있습니다.
        <br />
        ※ 국내 출시 이전 차량의 경우 국내 공인 연비 정보 및 타이어 에너지소비효율 정보가 존재하지 않을 수 있습니다.
        <br />
        ※ 개별소비세 인하 관련 공지사항
        <br />
        포르쉐 코리아는 정부의 일시적 개별소비세 인하 정책에 따라 2020년 3월부터 6월30일까지 관련 차량에 대해 개별소비세 감면 혜택을 적용합니다.
        자세한 사항은 포르쉐 센터를 통하여 문의하시기 바랍니다.
      </LegalNotice>
    </Wrapper>
  );
};

export default FooterBottom;
