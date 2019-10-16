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
  font-size: 13px;
  background-color: ${(props) => props.sent ? '#F4F4F4' : '#ffffff'}; 
  color: ${(props) => props.sent ? '#9B9B9B' : '#000000'};
  ${(props) => props.sent ? 'pointer-events: none' : ''};
  cursor: pointer;
  @media screen and (max-width: 767px) {
    padding: 4px 5px;
  }
`
const Title = styles.p`
  padding: 5px 5px 5px 0;
  margin: 0 15px 5px 15px;
  border-bottom: 1px solid #cacaca;
  color: #777777;
  font-weight: bold;
`


class ChatTemplate extends Component {
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
  componentWillReceiveProps(nextProps) {
    const { listId } = nextProps;
    if (listId !== this.props.listId) {
      this.setState({sentMessage: []})
    }
  }
  sendTemplate = async (template, index) => {
    const { isAuth } = this.props;
    const { sentMessage } = this.state;
    if(isAuth) {
      return this.props.sendTemplate(template)
        .then(() => 
          this.setState({
            sentMessage: [index, ...sentMessage]
          }))
        .catch(err => err)
    }
    const currentAdUrl = window.location.href;
    return window.location.href = `${config.loginLocation}?continue=${currentAdUrl}`    
  }
  render() {
    const { templates } = this.props;
    const { sentMessage } = this.state;
    return (
      <div>
        <Title>Hỏi người bán qua chat</Title>
        <TemplateMessage>
          <TemplateItemWrapper>
            {
              templates.map((template, index) => {
                const sent = sentMessage.indexOf(index) > -1 ? true : false;
                return (<TemplateItem 
                  sent={sent} 
                  key={index} 
                  onClick={() => this.sendTemplate(template, index)}
                >
                  {template}
                </TemplateItem>)
              })
            }
          </TemplateItemWrapper>
        </TemplateMessage>
      </div>
    )
  }
}

export default ChatTemplate