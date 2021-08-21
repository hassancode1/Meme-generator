import React, { Component } from 'react';

class Memegenerator extends Component {
    constructor(){
        super()
        this.state={
         topText :"",
         bottomText: "",
         randomimg: "https://i.imgflip.com/4l6e7g.jpg",
          allmemeimg :[]
        }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount() {
        fetch(" https://api.imgflip.com/get_memes")
        .then( response => response.json())
        .then(response => {
            const {memes} = response.data 
            this.setState({allmemeimg: memes})
        })
    }

    handleChange(event){
     const {name , value} = event.target
     this.setState ({ [name]: value}) 
     
    }
handleSubmit (event){
    event.preventDefault()
  const randumNum =   Math.floor(Math.random() * this.state.allmemeimg.length  )
  const  randomMemeimg = this.state.allmemeimg[randumNum].url
  this.setState({ randomimg: randomMemeimg })
   
}
    
  render(){
      return(
          <div>
              <form className="meme-form" onSubmit={this.handleSubmit}>
            <input type="text" 
            placeholder="toptext" 
            name="topText"
             value={this.state.topText} 
             onChange={this.handleChange}/>

            <input type="text" 
             placeholder="bottomtext" 
             name="bottomText" 
             value={this.state.bottomText}  
              onChange={this.handleChange}/>
                <button >Gen</button>
              </form>

            <div className="meme">
                <img src= {this.state.randomimg} alt=""/>
      <h2 className="top">{this.state.topText}</h2>
      <h2 className="bottom">{this.state.bottomText}</h2>
        
            </div>
          </div>
      )
  }

}

export default Memegenerator;