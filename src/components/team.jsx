import React, { Component } from 'react';


class Team extends Component {
    state = { 
        name:this.props.name,
        gamesPlayed: this.props.gd,
        goalDifference: 0,
        points: 0
     }
    //  constructor(){
    //      super();
    //      this.addThreePoints = this.addThreePoints.bind(this);
    //      this.addOnePoint= this.addOnePoint.bind(this);
    //      this.increaseGd = this.increaseGd.bind(this);
    //      this.decreaseGd = this.decreaseGd.bind(this);

    //  }

     addThreePoints=()=>{
         if(this.state.gamesPlayed < 30){
            this.setState({points: this.state.points+3});
            this.setState({gamesPlayed: this.state.gamesPlayed +1})
         }   
     }
     addOnePoint=()=>{
         if(this.state.gamesPlayed < 30){
            this.setState({points: this.state.points+1});
            this.setState({gamesPlayed: this.state.gamesPlayed +1})
            console.log(this.props);
            
        }
    }
    noPoints = () =>{
        if(this.state.gamesPlayed < 30){
            this.setState({gamesPlayed:this.state.gamesPlayed+1})
        }
    }
    increaseGd = () =>{
        this.setState({goalDifference:this.state.goalDifference+1});  
    }
    decreaseGd = ()=>{
        this.setState({goalDifference:this.state.goalDifference-1});  
    }
  
    render() { 
        return ( 
            <tr class="table-light">
                <td className="px-3">{this.state.name}</td>
                <td className="px-3">{this.state.gamesPlayed}</td>
                <td className="px-3">{this.state.goalDifference}
                    <button onClick={this.increaseGd} className="btn btn-outline-success btn-sm m-2">+</button>
                    <button onClick={this.decreaseGd}className="btn btn-outline-danger btn-sm">-</button>
                </td>
                <td className="px-3">
                    {this.state.points}
                </td>
                <td className="px-3">
                <div class="btn-group" role="group" aria-label="Basic outlined example">
                    <button 
                        onClick = {this.addThreePoints}
                        className="btn btn-outline-success">
                            3 Points
                    </button>
                
                    <button 
                        onClick = {this.addOnePoint}
                        className="btn btn-outline-warning">
                            1 Point
                    </button>
                
                    <button 
                        onClick = {this.noPoints}
                        className="btn btn-outline-danger">
                            No Points
                     </button>
                </div>
                </td>
            </tr>
         );
    }
}
 
export default Team;