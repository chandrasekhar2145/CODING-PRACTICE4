// Write your code here

import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  onMango = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  onBanana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }
  render() {
    const {mango, banana} = this.state
    return (
      <div className="bg-container">
        <div className="fruits-con">
          <h1 className="heading">
            Bob ate <span className="count">{mango}</span> mangoes
            <span className="count"> {banana} </span>bananas
          </h1>
          <div className="fruits-items-container">
            <div className="fruits-item-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image"
              />
              <button className="button" onClick={this.onMango}>
                Eat Mango
              </button>
            </div>
            <div className="fruits-item-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image"
              />
              <button className="button" onClick={this.onBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
