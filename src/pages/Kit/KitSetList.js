import React from 'react'
import SvgRibbonSet from './component/svg-component/SvgRibbonSet'

function KitSetList() {
  return (
    <>
      {/* <!-- kit-setList --> */}
      <div class="container">
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
        <hr />
        <div class="kit-set-list-title-ep">
          <h5 class="h5-tc">環保組合加購區</h5>
          <h6 class="h6-tc">鼓勵想要嘗試的妳</h6>
        </div>
        <div class="kit-set-wrap d-flex">
          <div class="kit-set-box">
            <div class="kit-set-img kit-set-img-ep">
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
            <div class="kit-set-img kit-set-img-ep">
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
            <div class="kit-set-img kit-set-img-ep">
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
        <button class="btn-soft-green-big">下一步</button>
      </div>
    </>
  )
}

export default KitSetList
