import React from "react"
import { render } from "react-dom";

class StartStop extends React.Component{
  constructor(props){
    super(props);
    this.state={
      initialState : "",
      arr: [ "Success", "Failure"],
      randomID: 0,
    };

  }
  
  componentDidUpdate (){
    console.log( this.state.randomID)
  }
  setSuccess = () => {
    this.setState({
      initialState: "Start",
      randomID:  Math.floor(Math.random() * 2),
    })
   
    setTimeout(() => {
      this.setState({
        initialState: this.state.arr[this.state.randomID],
      })
    }, 1000);
    
  }

  setStop = () => {
    this.setState({
      initialState: "Stopped"
    })
  }
  

  render(){
    return(
      <>
      <h2>{this.state.initialState}</h2>
      <button onClick={(e)=> this.setSuccess(e)}> Start </button>
      <button onClick={(e)=> this.setStop(e)}> Stop </button>
      </>
    )
  }
}

export default StartStop;