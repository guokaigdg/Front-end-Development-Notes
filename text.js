import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { MIC_INVITE_STATUS } from '~/shared/consts/pc-1vn'

import BaseButton from '../BaseButton'

import './index.less'

function InviteAirButton(props) {
  const { userInfo, onGiveUpMic, onInviteAir } = props

  const { status } = userInfo

  const handleInviteAir = () => {
    onInviteAir()
  }

  const handleGiveUpMic = () => {
    onGiveUpMic()
  }
  return (
    <div
      className="invite-Air-button"
    >
      {
        status === MIC_INVITE_STATUS.NOT_INVITED && (
          <span
            className="invite-Air-button__normal"
            onClick={handleInviteAir}
            role="button"
            tabIndex={0}
          >邀请上麦
          </span>
        )
      }
      {
        status === MIC_INVITE_STATUS.INVITED && (
          <span className="invite-Air-button__invited">已邀请</span>
        )
      }
      {
        status === MIC_INVITE_STATUS.ON_AIR && (
          <div
            className="invite-Air-button__onAir"
          >
            <span
              className="invite-Air-button__onAir__info"
            >发言中
            </span>
            <BaseButton
              className="invite-Air-button__onAir__button"
              text="下 麦"
              onClick={handleGiveUpMic}
            />
          </div>
        )
      }
    </div>
  )
}

InviteAirButton.propTypes = {
  userInfo: PropTypes.object,
  onGiveUpMic: PropTypes.func,
  onInviteAir: PropTypes.func,
}

InviteAirButton.defaultProps = {
  userInfo: {},
  onGiveUpMic: _.noop,
  onInviteAir: _.noop,
}

export default InviteAirButton