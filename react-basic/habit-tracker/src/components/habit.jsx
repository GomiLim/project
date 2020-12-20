import React, { PureComponent } from 'react';

class Habit extends PureComponent {
  componentDidMount() {
    //1. 로딩할떄 이럴떄 사용합니당
    //2. 소켓 초기화
    console.log(`등록`);
  }
  componentWillUnmount() {
    //1. ui상에서 사라질때 여기서 구현하면 됩니다!
    //2. 다시 리소스 할떄 ?
    console.log(`삭제`);
  }
  render() {
    const { name, count } = this.props.habit;
    return (
      <li className='habit'>
        <span className='habit-name'> {name} </span>
        <span className='habit-count'>{count}</span>
        <button className='habit-button habit-increase' onClick={() => this.props.onIncrement(this.props.habit)}>
          <i className='fas fa-plus-square'></i>
        </button>
        <button className='habit-button habit-decrease' onClick={() => this.props.onDecrement(this.props.habit)}>
          <i className='fas fa-minus-square'></i>
        </button>
        <button className='habit-button habit-trash' onClick={() => this.props.onDelete(this.props.habit)}>
          <i className='fas fa-trash-alt'></i>
        </button>
      </li>
    );
  }
}

export default Habit;
