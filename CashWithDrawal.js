/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-state */
// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {cash: 2000}

  withDrawCash = value => {
    this.setState(pervState => {
      return {cash: pervState.cash - value}
    })
  }

  render() {
    const {denominationsList} = this.props
    const {cash} = this.state
    return (
      <div className="back-card">
        <div className="card">
          <div className="card1">
            <p className="circle">s</p>
            <p className="sarah">Sarah Williams</p>
          </div>

          <div className="card2">
            <p className="p">Your Balance</p>

            <div className="rupees-card">
              <p className="paragraph">{cash}</p>
              <p className="in-rupees">In Rupees</p>
            </div>
          </div>

          <div>
            <p>Withdraw</p>
            <p className="with">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul className="but-card">
            {denominationsList.map(each => (
              <DenominationItem
                details={each}
                key={each.id}
                withDrawCash={this.withDrawCash}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
