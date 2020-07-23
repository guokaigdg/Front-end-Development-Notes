import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import CX from "classnames";

import "./index.less";

const optionsList = ["A", "B", "C", "D", "E", "F"];
const optionsImages = {
  A: require("~/shared/assets/image/icon-select-A.svg"),
  B: require("~/shared/assets/image/icon-select-B.svg"),
  C: require("~/shared/assets/image/icon-select-C.svg"),
  D: require("~/shared/assets/image/icon-select-D.svg"),
  E: require("~/shared/assets/image/icon-select-E.svg"),
  F: require("~/shared/assets/image/icon-select-F.svg")
};
class AnswerQuestionsArea extends Component {
  state = {
    chosenOption: null,
    isChosenOption: false
  };

  renderAnswerOptions(optionsCount) {
    // 渲染选项数目
    return optionsList.slice(0, optionsCount).map(item => (
      <div
        role="button"
        tabIndex={0}
        key={item}
        className={CX({
          answer_options: true,
          disable:
            this.state.isChosenOption === true ||
            this.props.enableChoose !== true, // 未被选中的按钮状态
          active: this.state.chosenOption === item // 被选中的按钮状态
        })}
        onClick={() => this.handleChoose(item)}
      >
        <span className="chose_content">选择</span>
        <span className="letter_content">
          <img src={optionsImages[item]} alt=" " />
        </span>
      </div>
    ));
  }

  handleChoose(option) {
    if (this.props.enableChoose !== true) {
      return;
    }
    this.setState({
      chosenOption: option,
      isChosenOption: true
    });
    this.props.onClickChooseButton(option);
  }

  handleHide() {
    this.props.onClickHideButton();
  }

  render() {
    const wrapStyles = _.assign({}, this.props.style);
    const { optionsCount } = this.props;
    return (
      <div className="answer_border" style={wrapStyles}>
        <div className="answer_title">
          <div className="tip_wrap">
            <span className="content">
              {this.state.chosenOption === null
                ? "正在答题中..."
                : `你选择了选项 "${this.state.chosenOption}"`}
            </span>
          </div>
          <div className="hide_wrap">
            <span
              role="button"
              tabIndex={0}
              className="content"
              onClick={() => this.handleHide()}
            >
              隐藏
            </span>
          </div>
        </div>
        <div className="answer_content">
          {this.renderAnswerOptions(optionsCount)}
        </div>
      </div>
    );
  }
}
AnswerQuestionsArea.propTypes = {
  style: PropTypes.object,
  optionsCount: PropTypes.number, // 选项个数
  onClickHideButton: PropTypes.func, // 隐藏操作
  enableChoose: PropTypes.bool, // 是否允许点击
  onClickChooseButton: PropTypes.func // 给父组件反馈选项
};
AnswerQuestionsArea.defaultProps = {
  style: {},
  optionsCount: 3,
  onClickHideButton: _.noop,
  enableChoose: true,
  onClickChooseButton: _.noop
};
export default AnswerQuestionsArea;
