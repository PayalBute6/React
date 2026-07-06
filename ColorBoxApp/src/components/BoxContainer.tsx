import { Component } from 'react'
import './BoxContainer.css'
import Box from './Box.tsx'
import { rgbValue, generateColors } from './helper.tsx'

interface BoxContainerProps{
    num?: number;
}

interface BoxContainerState{
    colors: string[];
}
class BoxContainer extends Component<BoxContainerProps, BoxContainerState>{

    static defaultProps = {
        num : 18
    }
    constructor(props: BoxContainerProps) {
        super(props)
        this.state = {
            colors : generateColors(this.props.num ?? 18)
        }
        this.changeColor = this.changeColor.bind(this)
    }

    changeColor(c: string) {

        let newColor: string
        do{
            newColor = `rgb(
            ${rgbValue()},
            ${rgbValue()},
            ${rgbValue()}
        )`

        }while(newColor === c)

        this.setState(st => ({
            colors : st.colors.map(color =>{
                if(color !== c) return color
                return newColor
            })
        }))
    }

    render(){
        return(
            <div className = 'BoxContainer'>
                {this.state.colors.map((color, index) => (
                    <Box key={index} color = {color} changeColor={this.changeColor}/>
                ))}
            </div>          
        )
    }
}

export default BoxContainer