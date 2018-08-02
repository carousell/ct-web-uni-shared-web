import React, { Component } from 'react';
import Facebook from './buttons/facebook'
import Messenger from './buttons/messenger'
import Zalo from './buttons/zalo'
import Viber from './buttons/viber'
import SMS from './buttons/sms'
import Copy from './buttons/copy'

export default class ShareButtons extends Component {
  render () {
    return (
      <div>
        <Facebook {...this.props} />
        <Messenger {...this.props} />
        <Zalo {...this.props} />
        <Viber {...this.props} />
        <SMS {...this.props} />
        <Copy {...this.props} />
      </div>
    )
  }
}
export {
  Facebook,
  Messenger,
  Zalo,
  Viber,
  SMS,
  Copy,
};
