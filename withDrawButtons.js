/* eslint-disable react/button-has-type */
/* eslint-disable arrow-body-style */
// Write your code here
import './index.css'

const DenominationItem = props => {
  const {details, withDrawCash} = props
  const withDraw = () => {
    withDrawCash(details.value)
  }

  return (
    <li>
      <button onClick={withDraw}>{details.value}</button>
    </li>
  )
}
export default DenominationItem
