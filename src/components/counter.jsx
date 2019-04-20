import React, { Component } from 'react';

class Counter extends Component {
   state = {
      value: this.props.counter.value,
   };
   
    render() {
       return (
           <div>
               <span className={this.getBadgeType()}>{this.formatCount()}</span>
               <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={()=>this.props.onDelete(this.props.counter.id)}className="btn btn-danger btn-sm m-2">Delete</button>
           </div>
       );
   }

   getBadgeType() {
    let BadgeType = "badge m-2 badge-";
    BadgeType += this.state.value === 0 ? "warning":"primary";
    return BadgeType;
   }

   formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
   }

   handleIncrement = () =>  {
      this.setState({value: this.state.value + 1 })
   };

}
 
export default Counter;