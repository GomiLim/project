import React, { Component } from 'react';
import HabbitAddForm from './habitAddForm';
import Habit from './habit';

class Habits extends Component {
  render() {
    const { habit, onDecrement, onIncrement, onDelete, onAdd, onReset } = this.props;
    return (
      <>
        <HabbitAddForm onAdd={onAdd} />
        <ul>
          {habit.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              onDelete={onDelete}
            />
          ))}
        </ul>
        <button className='habit-reset' onClick={onReset}>
          Reset All
        </button>
      </>
    );
  }
}

export default Habits;

// import React, { Component } from 'react';
// import Habit from './habit';
// import HabitAddForm from './habitAddForm';

// class Habits extends Component {
//   handleIncrement = (habit) => {
//     this.props.onIncrement(habit);
//   };

//   handleDecrement = (habit) => {
//     this.props.onDecrement(habit);
//   };

//   handleDelete = (habit) => {
//     this.props.onDelete(habit);
//   };

//   handleAdd = (name) => {
//     this.props.onAdd(name);
//   };

//   render() {
//     console.log('habits');
//     return (
//       <div className='habits'>
//         <HabitAddForm onAdd={this.handleAdd} />
//         <ul>
//           {this.props.habits.map((habit) => (
//             <Habit
//               key={habit.id}
//               habit={habit}
//               onIncrement={this.handleIncrement}
//               onDecrement={this.handleDecrement}
//               onDelete={this.handleDelete}
//             />
//           ))}
//         </ul>
//         <button className='habits-reset' onClick={this.props.onReset}>
//           Reset All
//         </button>
//       </div>
//     );
//   }
// }

// export default Habits;
