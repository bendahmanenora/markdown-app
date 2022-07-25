
import { Component } from 'react';
import './App.css';
import {sampleText} from './sampleText'
import {marked} from 'marked'

class App extends Component {
 state ={
    text: sampleText
  }
  handleChange = event => {
    const text= event.target.value;
    this.setState({text})
  }
  renderText = text => {
    const __html = marked(text, { sanitize: true })
    return { __html }
  }
  componentDidMount () {
    const text = localStorage.getItem('text')

    if (text) {
      this.setState({ text })
    } else {
      this.setState({ text: sampleText })
    }
  }

  componentDidUpdate () {
    const { text } = this.state
    localStorage.setItem('text', text)
  }
  render(){
  return (
  <div className='container'>
    <div className='row'>
      <div className='col-sm-6'>
        <textarea
         className='form-control'
         value={this.state.text}
         onChange={this.handleChange}
         rows='35'/>
      </div>
      <div className='col-sm-6'>
     <div dangerouslySetInnerHTML={this.renderText(this.state.text)}></div>
      </div>
    </div>
  </div>
  )
}
  
}  
export default App
