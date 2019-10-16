import { types } from 'mobx-state-tree'
import _ from 'lodash'

import { MIC_INVITE_STATUS } from '../consts/pc-1vn'
import IUserInfo from './IUserInfo'


const TeacherMicInviteState = types
  .model({
    maxOnAirStudentLimit: types.number, // 最多让多少学生上麦
    invitedList: types.array(types.frozen<IUserInfo>()), // 已被邀请的学生 list
    preparingList: types.array(types.frozen<IUserInfo>()), // 正在准备中的学生 list
    onAirList: types.array(types.frozen<IUserInfo>()), // 上麦发言中的学生 list
  })
  .views(self => {
    return {
      findMicStatusByUid(id: string): string {
        if (_.find(self.onAirList, { uid: id }) !== undefined) {
          return MIC_INVITE_STATUS.ON_AIR
        }
        if (_.find(self.preparingList, { uid: id }) !== undefined) {
          return MIC_INVITE_STATUS.PREPARING
        }
        if (_.find(self.invitedList, { uid: id }) !== undefined) {
          return MIC_INVITE_STATUS.INVITED
        }
        return MIC_INVITE_STATUS.NOT_INVITED
      },
      get micAreaVacancyCount(): number {
        return self.invitedList.length < self.maxOnAirStudentLimit
          ? self.invitedList.length
          : self.maxOnAirStudentLimit
      },
      get onAirStudentCount(): number {
        return self.onAirList.length
      },
    }
  })
  .actions((self => ({
    initInvitedListAndOnAirList(onAirList: Array<IUserInfo>) {
      onAirList.forEach(student => {
        self.addInvitedUser(student)
      })
      onAirList.forEach(student => {
        self.addOnAirUser(student)
      })
    },
    addInvitedUser(student: IUserInfo) {
      if (_.find(self.invitedList, { uid: student.uid }) === undefined) {
        self.invitedList.push(student)
      }
    },
    addPreparingUser(student: IUserInfo) {
      self.preparingList.push(student)
    },
    addOnAirUser(student: IUserInfo) {
      if (_.find(self.onAirList, { uid: student.uid }) === undefined) {
        self.onAirList.push(student)
      }
    },
    removeInvitedUser(student: IUserInfo) {
      _.remove(self.invitedList, invitedStudent => invitedStudent.uid === student.uid)
    },
    removePreparingUser(student: IUserInfo) {
      _.remove(self.preparingList, preparingStudent => preparingStudent.uid === student.uid)
    },
    removeOnAirUser(student: IUserInfo) {
      _.remove(self.onAirList, onAirStudent => onAirStudent.uid === student.uid)
    },
    changeUserFromPreparingToOnAir(student: IUserInfo) {
      self.removePreparingUser(student)
      self.addOnAirUser(student)
    },
  })))

export default TeacherMicInviteState
