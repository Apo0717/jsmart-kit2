import React from 'react'

function SummaryBig(props) {
  const { total, setTotal } = props
  return (
    <>
      <div className="kit-shopping-list-total-area">
        <div className="kit-shopping-list-total">
          {/* <!-- 項目區塊(上) --> */}
          <div className="kit-items">
            {/* <!-- 單項塊 --> */}
            <div className="kit-item-wrap">
              <div className="kit-item-box">
                <div className="kit-total-item">
                  <div className="kit-item kit-item-name">
                    日常組合(1個月份)YPPPPPP
                  </div>
                </div>
                <div className="kit-total-item">
                  <div className="kit-item">NT$</div>
                  <div className="kit-item">2,000</div>
                </div>
              </div>
            </div>

            <div className="kit-item-wrap">
              <div className="kit-item-box">
                <div className="kit-total-item">
                  <div className="kit-item kit-item-name">
                    日常組合(1個月份)YPPPPPPPPPPP
                  </div>
                </div>
                <div className="kit-total-item">
                  <div className="kit-item">NT$</div>
                  <div className="kit-item">2,0000</div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- 項目區塊＋頂線(下) --> */}
          <div className="kit-total-box-solid">
            <div className="kit-total">總計</div>
            <div className="kit-total-price">
              <div className="kit-total kit-total-name">NT$</div>
              <div className="kit-total kit-total-red">2,200</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SummaryBig
