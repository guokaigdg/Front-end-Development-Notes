import React, { Component } from 'react'
import assign from 'object-assign'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import { USER_ROLE } from '~/shared/consts/pc-1v1'
import {
  getDateHHMMSS,
  parseEmoji,
} from '~/shared/utils/chatUtils'

import './index.less'

export default class ChatItem extends Component {
  state = {
    showUserOperaButtons: false, // 是否显示展开的按钮
    isHovering: false,
  }

  setIsHovering = (hovering) => {
    this.setState({
      isHovering: hovering === true,
    })
  }

  setShowUserOperaButtons = (show) => {
    this.setState({
      showUserOperaButtons: show === true,
    })
  }

  render() {
    const {
      theme, chatInfo, style, isSelf, chatOperaButtons, chatOperaButtonShowStateManager, isSelfManager,
    } = this.props
    const { showUserOperaButtons, isHovering } = this.state
    const wrapStyle = assign({}, style)

    let roleNote = ''
    if (chatInfo.role === USER_ROLE.TEACHER) {
      roleNote = ' (教师)'
    } else if (chatInfo.role === USER_ROLE.ASSISTANT) {
      roleNote = ' (助教)'
    }

    const parseEmojiText = (msg) => {
      return parseEmoji(msg)
    }
    const content = parseEmojiText(chatInfo.msg)
    const userSendChatTime = getDateHHMMSS(chatInfo.timestamp)

    return (
      <div
        className={
          classnames({
            'chat-item-wrap': true,
            'show-opera-buttons': showUserOperaButtons === true,
            'theme-dark': theme === 'dark',
          })
        }
        onMouseEnter={() => {
          this.setIsHovering(true)
        }}
        onMouseLeave={() => {
          this.setIsHovering(false)
          this.setShowUserOperaButtons(false)   //① 鼠标移开 改变数值
        }}
        style={wrapStyle}
      >
        <div className="chat-item">
          <div className="user-info">
            <div
              className={classnames({
                'user-name': true,
                'role-teacher': chatInfo.role === USER_ROLE.TEACHER,
                'role-assistant': chatInfo.role === USER_ROLE.ASSISTANT,
                'role-student': chatInfo.role === USER_ROLE.AUDIENCE,
              })}
            >
              <span className="nick-name">{ chatInfo.username }</span>{ roleNote }
            </div>
            <div className="user-send-chat-time time-text">
              { userSendChatTime }
            </div>
          </div>
          <div className="message">
            { content }
          </div>
        </div>
        {
          (isSelfManager === true && isSelf === false) && (React.cloneElement(chatOperaButtons, {
            showUserOperaButtons,
            isHovering,
            onToggleButtonsVisibility: (visible) => {
              if (visible === true) {
                this.setShowUserOperaButtons(true)
                chatOperaButtonShowStateManager.setCurrent(() => {
                  this.setShowUserOperaButtons(false)
                })
              } else {
                this.setShowUserOperaButtons(false)
              }
            },
          }))
        }
      </div>
    )
  }
}

ChatItem.propTypes = {
  theme: PropTypes.string,
  style: PropTypes.object,
  chatInfo: PropTypes.object,
  isSelf: PropTypes.bool, // 消息item是不是查看者本人发送的
  isSelfManager: PropTypes.bool, // 查看者是不是老师或助教
  chatOperaButtons: PropTypes.element,
  chatOperaButtonShowStateManager: PropTypes.object,
}

ChatItem.defaultProps = {
  theme: 'normal',
  style: {},
  chatInfo: {},
  isSelf: false,
  isSelfManager: false,
  chatOperaButtons: null,
  chatOperaButtonShowStateManager: null,
}
