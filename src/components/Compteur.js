import React, { Component } from 'react'
import '../App.css'

export class Compteur extends Component {
     constructor(props){
    super(props);
    this.state = {
     
      hours:0,
      minutes:0,
      secondes:0,
    };
  }
  componentDidMount(){
   this.interval = setInterval(()=> {
        this.setState({
          secondes:this.state.secondes+1,
        })
        if(this.state.secondes ===60){
          this.setState({
            minutes:this.state.minutes+1,
            secondes:0,
          })
          if(this.state.minutes ===60){
            this.setState({
              hours:this.state.hours+1,
            minutes:0,
            secondes:0,
            })
          }
        };
      },1000);   
  }
   componentWillUnmount() {
    clearInterval(this.state.interval);
  }
 
    render() {
        return (
            <div>
                <h1 className="counter" >
    <span>{this.state.hours}</span>:
     <span>{this.state.minutes}</span>:
      <span>{this.state.secondes}</span>

  </h1> 
            </div>
        )
    }
}

export default Compteur