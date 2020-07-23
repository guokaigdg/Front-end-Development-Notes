import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import {
  InviteAirButton,
} from '@dby-h5-clients/pc-1vn-components'

import {
  PopUpLayer,
} from '@dby-h5-clients/pc-1v1-components'

import localStore from '#/src/store/localStore'

const InviteAirButtonWrap = (props) => {
  const { userInfo } = props

  const onGiveUpMic = () => {
    localStore.teacherMicInviteState.removeOnAirUser(userInfo)
  }

  const onInviteAir = () => {
    PopUpLayer.addTip(
      <div>已达到最大上麦人数</div>,
    )
    // todo: delete 后续删除
    userInfo.uid = userInfo.userId
    localStore.teacherMicInviteState.addInvitedUser(userInfo)
  }

  const status = localStore.teacherMicInviteState.findMicStatusByUid(userInfo.userId)
  return (
    <InviteAirButton
      userInfo={_.assign(userInfo, {
        status,
      })}
      onGiveupMic={onGiveUpMic}
      onInviteAir={onInviteAir}
    />
  )
}

InviteAirButtonWrap.propTypes = {
  userInfo: PropTypes.object,
}

InviteAirButtonWrap.defaultProps = {
  userInfo: {},
}

export default InviteAirButtonWrap