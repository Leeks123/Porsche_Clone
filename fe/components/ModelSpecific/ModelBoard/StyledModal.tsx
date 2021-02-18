import Image from 'next/image';
import styled from '@emotion/styled';
import {
  SetStateAction, Dispatch, useEffect, useState,
} from 'react';
import { Collapse } from 'antd';
import Modal from 'react-modal';

const { Panel } = Collapse;

const ModalCloseButton = styled.button`
    background: #00B0F4;
    border: none;
    color: white;
    padding: 0 20px 5px;
    font-size: 30px;
    box-shadow: 5px 5px 15px gray;
    position: absolute;
    top: 20px;
    right: 20px;
`;
const Header = styled.div`
  background-color: #EFF0F1;
  padding: 30px 0;

  .modalheader-container {
    width: 86vw;
    margin: 0 auto;

    h1 {
        font-size: 40px;
        margin-bottom: 10px;
    }
    .data-content-container {
      display: flex;
      flex-wrap: wrap;
      .data-content {
        margin: 10px;
        padding: 0 25px 0 0;
        border-right: 1px solid lightgray;
        h2 {
            font-size: 24px;
            margin: 0;
        }
        p {
            margin: 0;
            font-size: 16px;
        }
      }
    }
  }
`;
const Content = styled.div`
  .modalcontent-container {
    width: 86vw;
    margin: 50px auto;
    .disclaimer {
        font-size: 5px;
    }
    .modalcontent-img-container {
        display: flex;
        width: 100%;
        padding: 30px 60px;
        .img-wrapper {
            width: 45%;
        }
        .model-sizes {
            padding: 60px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .model-size-content {
                padding: 10px;
                .model-size-title {
                    font-size: 16px;
                }
                .model-size-value {
                    font-size: 20px;
                    font-weight: bold;
                }
            }
        }
    }
  }
`;
const Collapses = styled.div`
    width: 86vw;
    margin: 50px auto;
    .ant-collapse {
        border-top: 1px solid lightgray;
        background: white;
    }
    .ant-collapse-item {
        border-bottom: 1px solid lightgray;
        .ant-collapse-header {
            font-size: 22px;
            font-weight: bold;
            padding: 16px 0;
            .anticon {
                padding: 18px 0;
                font-size: 18px;
            }
            &:hover {
                color: #00b0f4;
            }
        }
        .ant-collapse-content-box {
            padding: 0;
            ul {
                padding: 0;
                margin: 0;
                li {
                    list-style:  none;
                    margin: 0;
                    padding: 13px 0;
                    border-bottom: 1px solid lightgray;
                    display: flex;
                    .collapse-key, .collapse-value {
                        width: 50%;
                        padding-right:20px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                    }
                    .collapse-key {
                        font-size: 16px;
                    }
                    .collapse-value {
                        font-size: 18px;
                        font-weight: bold;
                    }
                }
            }
        }
    }
`;

type Props = {
    isOpen: boolean,
    setState: Dispatch<SetStateAction<boolean>>,
}
const StyledModal = ({ isOpen, setState }:Props) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(isOpen);
  }, [isOpen]);

  function afterOpenModal() {

  }

  const closeModal = () => {
    setIsOpen(false);
    setState(false);
  };
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={false}
        style={{
          overlay: {
            zIndex: 1000,
          },
          content: {
            padding: 0,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          },
        }}
      >
        <Header>
          <ModalCloseButton type="button" onClick={closeModal}>x</ModalCloseButton>
          <div className="modalheader-container">
            <h1>Taycan</h1>
            <div className="data-content-container">
              <div className="data-content">
                <h2>dfjkf</h2>
                <p>jsifjsifjisdjfidjsf</p>
              </div>

              <div className="data-content">
                <h2>dfjkf</h2>
                <p>jsifjsifjisdjfiafdsfdsfdsfdsfdssdfdsdjsf</p>
              </div>
              <div className="data-content">
                <h2>dfjdsfdsfdsfdskf</h2>
                <p>jsifjsifjisdjfiddsfdsfdsfjsf</p>
              </div>
              <div className="data-content">
                <h2>dfjkf</h2>
                <p>jsifjsifsafdsfasjisdjfidjsf</p>
              </div>
              <div className="data-content">
                <h2>dfjkf</h2>
                <p>dsfdsf</p>
              </div>
            </div>
          </div>
        </Header>
        <Content>
          <div className="modalcontent-container">
            <div className="disclaimer">
              * 국내 출시 이전 차량의 경우 국내 공인 연비 정보 및 타이어 에너지소비효율 정보가 존재하지 않습니다.
              <br />
              ¹ 표기된 EU/WLTP technical data는 2021 Model Year제품을 기준으로 작성된 자료로 판매되는 국가별로 차이가 있을 수 있습니다.
            </div>
            <div className="modalcontent-img-container">
              <div className="img-wrapper">
                <Image src="/modal.png" alt="modalcar" height={750} width={380} className="car-img" />
              </div>
              <div className="model-sizes">
                <div className="model-size-content">
                  <div className="model-size-title">Height</div>
                  <div className="model-size-value">dsfdsfdsf</div>
                </div>
                <div className="model-size-content">
                  <div className="model-size-title">Width</div>
                  <div className="model-size-value">dsfdsfdsf</div>
                </div>
                <div className="model-size-content">
                  <div className="model-size-title">Length</div>
                  <div className="model-size-value">dsfdsfdsf</div>
                </div>
                <div className="model-size-content">
                  <div className="model-size-title">Wheelbase</div>
                  <div className="model-size-value">dsfdsfdsf</div>
                </div>
              </div>
            </div>
          </div>
        </Content>
        <Collapses>
          <Collapse bordered={false} expandIconPosition="right">
            <Panel header="Power Unit" key="1">
              <ul>
                <li>
                  <div className="collapse-key">dsfdsfds</div>
                  <div className="collapse-value">dsfjskdfjkdsjf</div>
                </li>
                <li>
                  <div className="collapse-key">dsfdsfds</div>
                  <div className="collapse-value">dsfjskdfjkdsjf</div>
                </li>
                <li>
                  <div className="collapse-key">dsfdsfds</div>
                  <div className="collapse-value">dsfjskdfjkdsjf</div>
                </li>
              </ul>
            </Panel>
            <Panel header="Charging" key="2">
              <ul>
                <li>
                  <div className="collapse-key">dsfdsfds</div>
                  <div className="collapse-value">dsfjskdfjkdsjf</div>
                </li>
              </ul>
            </Panel>
            <Panel header="Performance" key="3">
              <ul>
                <li>
                  <div className="collapse-key">dsfdsfds</div>
                  <div className="collapse-value">dsfjskdfjkdsjf</div>
                </li>
              </ul>
            </Panel>
            <Panel header="Body" key="4">
              <ul>
                <li>
                  <div className="collapse-key">dsfdsfds</div>
                  <div className="collapse-value">dsfjskdfjkdsjf</div>
                </li>
              </ul>
            </Panel>
            <Panel header="Capacities" key="5">
              <ul>
                <li>
                  <div className="collapse-key">dsfdsfds</div>
                  <div className="collapse-value">dsfjskdfjkdsjf</div>
                </li>
              </ul>
            </Panel>
            <Panel header="Service and Warranty" key="6">
              <ul>
                <li>
                  <div className="collapse-key">dsfdsfds</div>
                  <div className="collapse-value">dsfjskdfjkdsjf</div>
                </li>
              </ul>
            </Panel>
            <Panel header="가격" key="7">
              <ul>
                <li>
                  <div className="collapse-key">dsfdsfds</div>
                  <div className="collapse-value">dsfjskdfjkdsjf</div>
                </li>
              </ul>
            </Panel>
          </Collapse>
        </Collapses>
      </Modal>
    </>
  );
};

export default StyledModal;
