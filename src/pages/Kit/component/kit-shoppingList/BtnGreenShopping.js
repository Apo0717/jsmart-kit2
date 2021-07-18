import React from 'react'
import { Link } from 'react-router-dom'

function BtnGreenShopping() {
  return (
    <>
      <div className="kit-go-buy-btn-area">
        <Link to="/kitSetList">
          <div className="kit-go-buy-btn kit-go-buy-btn-left">
            <div className="kit-go-buy-btn-s">我還想參考</div>
            <div className="kit-go-buy-btn-m">其他組合</div>
          </div>
        </Link>

        <div className="kit-go-buy-btn kit-go-buy-btn-right">
          <div className="kit-go-buy-btn-l">結帳去</div>
        </div>
      </div>
    </>
  )
}

export default BtnGreenShopping
