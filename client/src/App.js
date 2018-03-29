import React, { Component } from 'react';
import axios from 'axios'

// const api = 

class App extends Component {

  state = {
    text:"hello from react"
  }

  componentDidMount = () => {
    this.callApi()
  }

  callApi = async() => {
    try{
      const res = await axios.get('/api')
      console.log(res.data.msg)
      this.setState({
        text: res.data.msg
      })
    }catch(e){
      console.log(e)
    }
  }

  render(){
    return(
      <div>
        <div> {this.state.text + ' this is frontend'} </div>
      </div>
    )
  }
}

export default App;
