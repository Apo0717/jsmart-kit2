import React from 'react'

function SummarySmall(props) {
  const { smalltotal, setSmalltotal } = props
  return (
    <>
      <div className="sale-price-s">
        <div className="set1-total-s">總金額</div>
        <div className="set1-total-box set1-total-box-inlineblock">
          <div className="set1-total">NT$</div>
          <div className="set1-total-red">2,000</div>
        </div>
        <div>
          <s className="set1-total-box">
            <div className="set1-total">原價NT$</div>
            <div className="set1-total">2,200</div>
          </s>
        </div>
      </div>
    </>
  )
}

export default SummarySmall
