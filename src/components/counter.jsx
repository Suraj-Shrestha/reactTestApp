import React, { Component } from 'react';

class Counter extends Component {
   
    componentDidUpdate(prevProps, prevState) {
        console.log("prevProps", prevProps);
        console.log("prevState", prevState);
        if(prevProps.counter.value !== this.props.counter.value) {
            //Ajax call and get new data from server
        }
    }

    componentWillUnmount() {
       console.log("Counter unmounted");
    }

    render() {
       return (
           <div>
               <span className={this.getBadgeType()}>{this.formatCount()}</span>
               <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={()=>this.props.onDelete(this.props.counter.id)}className="btn btn-danger btn-sm m-2">Delete</button>
           </div>
       );
   }

   getBadgeType() {
    let BadgeType = "badge m-2 badge-";
    BadgeType += this.props.counter.value === 0 ? "warning":"primary";
    return BadgeType;
   }

   formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
   }

}
 
export default Counter;