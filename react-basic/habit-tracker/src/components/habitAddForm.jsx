import React, { PureComponent } from 'react';
import '../app.css';

class HabbitAddForm extends PureComponent {
  inputRef = React.createRef();
  formRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault(); //새로고침을 막아줌
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    // this.inputRef.current.value = '';
    this.formRef.current.reset();
  };

  render() {
    console.log('input form');

    return (
      <form action='' ref={this.formRef} className='add-form' onSubmit={this.onSubmit}>
        <input type='text' ref={this.inputRef} className='add-input' placeholder='habit' />
        <button className='add-button'>Add</button>
      </form>
    );
  }
}

export default HabbitAddForm;
