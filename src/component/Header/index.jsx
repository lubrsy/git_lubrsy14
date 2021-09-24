import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import './index.css';

export default class Header extends Component {
  // 对接收的 props 进行：类型、必要性的限制
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  };

  // 键盘事件的回调
  handleKeyUp = event => {
    // 解构赋值获取 keyCode, target
    const { keyCode, target } = event;
    // 判断按下的是否是回车键
    if (keyCode !== 13) return;
    // 判断输入是否为空，trim()可以去除空格
    if (target.value.trim() === '') {
      alert('输入不能为空！');
      return;
    }
    // 准备好一个 todo 对象
    // 此处 id 借助 nanoid 库生成
    const todoObj = { id: nanoid(), name: target.value, done: false };
    this.props.addTodo(todoObj);
    // 清空
    target.value = '';
  };

  render() {
    return (
      <div className="todo-header">
        <input
          onKeyUp={this.handleKeyUp}
          type="text"
          placeholder="请输入你的任务名称，按回车键确认"
        />
      </div>
    );
  }
}
