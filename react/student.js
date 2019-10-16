import { types } from 'mobx-state-tree'
import _ from 'lodash'

import { MIC_CHECK_STATUS } from '../consts/pc-1vn'
import IUserInfo from './IUserInfo'

const StudentMicInviteState = types
  .model({
    maxOnAirUserLimit: types.number, // 最大可上麦人数
    invited: types.boolean, // 是否被邀请了
    deviceCheckStatus: types.enumeration(_.values(MIC_CHECK_STATUS)), // 设备的状态，分为没有通过检测，不可用和可用
    inviteAccepted: types.boolean, // 同意上麦邀请
    currentMicAuditCount: types.number, // 已获得上麦名额的人
    onAirList: types.array(types.frozen<IUserInfo>()), // 所有上麦发言人的 list
  })
  .views(self => {
    return {
      getUserOnAirStatusByUid(id: string): boolean {
        return _.find(self.onAirList, { uid: id }) !== undefined
      },
      get shouldCheckDevice(): boolean {
        return self.invited && (self.deviceCheckStatus === MIC_CHECK_STATUS.NOT_PASS)
      },
      get shouldShowNotation(): boolean {
        return self.invited && (self.deviceCheckStatus === MIC_CHECK_STATUS.NOT_AVAILABLE)
      },
      get shouldShowConfirm(): boolean {
        return self.invited && (self.deviceCheckStatus === MIC_CHECK_STATUS.AVAILABLE)
      },
      get onAirUserOverLimit(): boolean {
        return self.currentOnAirCount < self.maxOnAirUserLimit
      },
      get teacherEndMicInvite(): boolean {
        return self.inviteAccepted === true && self.invited === false
      },
      get shouldSendMicReq(): boolean {
        // 任意条件不满足都不能使用麦克风上麦：超过上麦人数限制，没有被邀请，没有接受邀请
        return (self.onAirUserOverLimit === false) && self.invited && self.inviteAccepted
      },
    }
  })
  .actions((self => ({
    initOnAirList(onAirList: Array<IUserInfo>) {
      onAirList.forEach(student => {
        self.addOnAirUser(student)
      })
    },
    acceptInvite() {
      self.inviteAccepted = true
    },
    refuseInvite() {
      self.invited = false
      self.inviteAccepted = false
      self.deviceCheckStatus = MIC_CHECK_STATUS.NOT_PASS
    },
    giveUpMic() {
      self.invited = false
      self.inviteAccepted = false
      self.deviceCheckStatus = MIC_CHECK_STATUS.NOT_PASS
    },
    addOnAirUser(student: IUserInfo) {
      if (_.find(self.onAirList, { uid: student.uid }) === undefined) {
        self.onAirList.push(student)
      }
    },
    removeOnAirUser(student: IUserInfo) {
      _.remove(self.onAirList, onAirUser => onAirUser.uid === student.uid)
    },
  })))

export default StudentMicInviteState

