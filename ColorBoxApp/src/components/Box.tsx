import { Component } from 'react'

interface BoxProps{
  color: string;
  changeColor: (color: string) => void;
}
class Box extends Component<BoxProps>{
  constructor(props: BoxProps){
    super(props)
    this.handleChangeColor = this.handleChangeColor.bind(this)
  }

  // Handler callback
  handleChangeColor(){
  
    // Call parent component changeColor  method passing the
    // color value of div
    this.props.changeColor(this.props.color)
  }

  render(){
  
    // Create a div component and assign the given 
    // color value by BoxContainer component as its
    // background color
    return <div
    
    // Set click handler to the div and pass a callback
      onClick={this.handleChangeColor} 
      style={{backgroundColor:this.props.color, 
                  width:'13em', height:'13em'}} 
    />
  }
}

export default Box