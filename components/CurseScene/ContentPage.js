import React, { Component } from 'react';
import styled from 'styled-components';
import CheckIcon from '../../static/icons/checked.svg';
import { Collapse } from 'antd';

const Panel = Collapse.Panel;

const ContentWrapper = styled.div`
  width: 70%;
  padding: 0 10%;
  margin-top: 50px;
`;

const TextAboutWrapper = styled.div`
  color: #656e70;
  line-height: 24px;
  font-size: 19px;
  margin-top: 60px;
  p {
    margin-bottom: 40px;
  }
`;

const BoxInfo = styled.div`
  background: #f0faf2;
  border: 1px solid #ccf2d4;
  display: flex;
  align-items: flex-start;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
  span {
    width: 90%;
  }
`;

const BoxIconHolder = styled.div`
  width: 2.5%;
  height: 100%;
  margin-right: 10px;
  svg {
    width: 100%;
    fill: #43a25f;
  }
`;

const CollapseWrapper = styled.div`
  margin-top: 30px;
  .ant-collapse-header {
    font-size: 18px !important;
    font-weight: 500 !important;
  }
`;

const InsidePanel = styled.div`
  padding: 15px;
  ul {
    list-style: none;
  }
  ul li {
    font-size: 18px;
  }
`;

export default class ContentPage extends Component {
  render() {
    return (
      <ContentWrapper>
        <TextAboutWrapper>
          <h1>O que você vai aprender</h1>
          {this.props.data &&
            this.props.data.map(
              (item, index) =>
                index === 0 && (
                  <div key={index}>
                    {item.conteudos &&
                      item.conteudos.map((conteudo, key) => {
                        return (
                          <BoxInfo key={key}>
                            <BoxIconHolder>
                              <CheckIcon />
                            </BoxIconHolder>
                            <span>{conteudo.titulo}</span>
                          </BoxInfo>
                        );
                      })}
                  </div>
                )
            )}
        </TextAboutWrapper>
        <TextAboutWrapper>
          <h1>Conteúdo do Curso</h1>
          <CollapseWrapper>
            <Collapse defaultActiveKey={['0']}>
              {this.props.data &&
                this.props.data.map(
                  (item, index) =>
                    index !== 0 && (
                      <Panel header={item.nome} key={index}>
                        <InsidePanel>
                          <ul>
                            {item.conteudos &&
                              item.conteudos.map((conteudo, key) => {
                                return (
                                  <li key={key}>
                                    {conteudo.titulo} ({conteudo.tipio})
                                  </li>
                                );
                              })}
                          </ul>
                        </InsidePanel>
                      </Panel>
                    )
                )}
            </Collapse>
          </CollapseWrapper>
        </TextAboutWrapper>
      </ContentWrapper>
    );
  }
}
