import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from 'styled-components'
import config from 'config';

const TemplateMessage = styles.div`
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  @media screen and (max-width: 767px) {
    width: 100vw;
    margin-bottom: 5px;
  }
`
const TemplateItemWrapper = styles.ul`
  padding: 0px;
  height: 30px;
  @media screen and (max-width: 767px) {
    height: 25px;
  }
`
const TemplateItem = styles.li`
  border: ${(props) => props.sent ? '1px solid #F4F4F4' : '1px solid #FE9900'}; 
  padding: 4px 10px;
  border-radius: 20px;
  margin: 5px 0 5px 10px;
  display: inline-block;
  background-color: ${(props) => props.sent ? '#F4F4F4' : '#ffffff'}; 
  color: ${(props) => props.sent ? '#CACACA' : '#333'};
  ${(props) => props.sent ? 'pointer-events: none' : ''};
  cursor: pointer;
  @media screen and (max-width: 767px) {
    padding: 4px 5px;
  }
`
const Title = styles.p`
  padding: 5px;
  margin: 0 15px 5px 15px;
  border-bottom: 1px solid #cacaca;
  color: #cacaca;
`
export default class ChatTemplate extends Component {
  constructor(props) {
    super(props)
    this.state =  {
      sentMessage: []
    }
  }
    static propTypes = {
      templates: PropTypes.array,
      sendTemplate: PropTypes.func,
      isAuth: PropTypes.bool,
    }
    sendTemplate = (template, index) => {
      const { isAuth } = this.props;
      const { sentMessage } = this.state;

      if(isAuth) {
        this.setState({
          sentMessage: [index, ...sentMessage]
        });
        return this.props.sendTemplate(template);
      }
      return window.location.href = config.loginLocation
    }

    render() {
      const { templates } = this.props;
      const { sentMessage } = this.state;
      return (
        <React.Fragment>
          <Title>Hỏi người bán qua chat</Title>
          <TemplateMessage>
            <TemplateItemWrapper>
              {
                templates.map((template, index) => {
                  const sent = sentMessage.indexOf(index) > -1 ? true : false;
                  return <TemplateItem 
                    sent={sent} 
                    key={index} 
                    onClick={() => this.sendTemplate(template, index)}>{template}
                  </TemplateItem>
                })
              }
            </TemplateItemWrapper>
          </TemplateMessage>
        </React.Fragment>
      )
    }
}
