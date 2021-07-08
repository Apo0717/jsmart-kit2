import React from 'react'

function SummaryBig() {
  return (
    <>
      <div class="kit-shopping-list-total-area">
        <div class="kit-shopping-list-total">
          {/* <!-- 項目區塊(上) --> */}
          <div class="kit-items">
            {/* <!-- 單項塊 --> */}
            <div class="kit-item-wrap">
              <div class="kit-item-box">
                <div class="kit-total-item">
                  <div class="kit-item kit-item-name">
                    日常組合(1個月份)YPPPPPP
                  </div>
                </div>
                <div class="kit-total-item">
                  <div class="kit-item">NT$</div>
                  <div class="kit-item">2,000</div>
                </div>
              </div>
            </div>

            <div class="kit-item-wrap">
              <div class="kit-item-box">
                <div class="kit-total-item">
                  <div class="kit-item kit-item-name">
                    日常組合(1個月份)YPPPPPPPPPPP
                  </div>
                </div>
                <div class="kit-total-item">
                  <div class="kit-item">NT$</div>
                  <div class="kit-item">2,0000</div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- 項目區塊＋頂線(下) --> */}
          <div class="kit-total-box-solid">
            <div class="kit-total">總計</div>
            <div class="kit-total-price">
              <div class="kit-total kit-total-name">NT$</div>
              <div class="kit-total kit-total-red">2,200</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SummaryBig
