import React from 'react'
import SvgRibbonSet from '../svg-component/SvgRibbonSet'

function DailySet() {
  return (
    <>
      {/* <!-- 最上區塊的日常組合TITLE語 --> */}
      <h5 class="h5-tc kit-set-list-title-daily">日常組合</h5>
      <div class="kit-set-wrap">
        <div class="kit-set-box">
          <div class="kit-set-img kit-set-img-daily">
            <div class="kit-set-ribbon">
              <SvgRibbonSet />
            </div>
            <div class="kit-set-text">
              <h4 class="kit-settext h4-tc">日常量適中</h4>
              <div class="kit-set-text-p">衛生棉＋衛生棉條</div>
            </div>
          </div>
        </div>
        <div class="kit-set-box">
          <div class="kit-set-img kit-set-img-daily">
            <div class="kit-set-ribbon">
              <SvgRibbonSet />
            </div>
            <div class="kit-set-text">
              <h4 class="kit-settext h4-tc">日常量適中</h4>
              <div class="kit-set-text-p">衛生棉＋衛生棉條</div>
            </div>
          </div>
        </div>
        <div class="kit-set-box">
          <div class="kit-set-img kit-set-img-daily">
            <div class="kit-set-ribbon">
              <SvgRibbonSet />
            </div>
            <div class="kit-set-text">
              <h4 class="kit-settext h4-tc">日常量適中</h4>
              <div class="kit-set-text-p">衛生棉＋衛生棉條</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DailySet
