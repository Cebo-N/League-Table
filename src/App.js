import React, { Component } from 'react';
import NavBar from './components/navbar';
import './App.css';
//import Teams from './components/teams';
import Team from './components/team'

class App extends Component {
  state = { 
    count: 1,
    teams: [
      
    ],
  }

  addNewTeam = () =>{
      if(this.state.teams.length < 16){
        this.setState(prevState => ({teams:[...prevState.teams,{name:'Team'+this.state.count,pl:0,gd:0,pts:0}]}));
        this.setState({count:this.state.count+1});
        
      }
  }
  upDate=()=>{
    let date = new Date().toLocaleDateString();
    localStorage.setItem('Last Updated', date);
    
  }
  render() { 
    return (
      <div>
        <NavBar/>
        <div className="container">
          <tr class="table-primary">
             
              <td className="px-3 py-1">Team</td>
              <td className="px-3 py-1">Pl</td>
              <td className="px-3 py-1">GD</td>
              <td className="px-3 py-1">Points</td>
          </tr>
          {this.state.teams.map(team => (
          <Team key={team.name} 
                name = {team.name}
                gp = {team.gp}
                gd = {team.gd}
                
          />))}
          <button onClick = {this.addNewTeam} className='btn btn-primary px-3'> Add New Team</button>
          <button onClick ={this.upDate} className='btn btn-primary px-3'>Update Table</button>
          <p>{localStorage.getItem('Last Updated')}</p>
        </div>
      </div>
     );
  }
}
 
export default App;