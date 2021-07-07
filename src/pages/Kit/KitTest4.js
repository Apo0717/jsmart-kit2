import React from 'react'
import SvgClothPadS from './component/svg-component/SvgClothPadS'
import SvgSport from './component/svg-component/SvgSport'
import SvgTampon from './component/svg-component/SvgTampon'
import SvgSetEp from './component/svg-component/SvgSetEp'

function KitTest4() {
  return (
    <>
      {/* <!-- kit-test --> */}
      <div class="container">
        {/* <!-- 最上方的題目進度條 --> */}
        <div class="kit-test-step-area d-flex">
          <div class="kit-test-step kit-test-step-r"></div>-
          <div class="kit-test-step"></div>-<div class="kit-test-step"></div>-
          <div class="kit-test-step"></div>
        </div>
        {/* <!-- 題目 --> */}
        <div class="kit-test-question-bg">
          <div class="kit-test-question-img">
            <div class="kit-test-question-text-area d-flex">
              <div class="kit-test-question-text">
                <h3 class="h3-en">Q1</h3>
                <h5 class="h5-tc kit-test-question-text">
                  是否會想嘗試月亮杯或是月亮褲等重複利用型的生理用品呢？
                </h5>
              </div>
              <div class="kit-test-question-icon d-flex">
                <SvgSetEp />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- 選項 --> */}
        <div class="kit-test-answer-area d-flex">
          <div class="kit-test-answer-btn d-flex">
            <div class="kit-test-answer d-flex">
              <h4 class="h4-tc">是的！</h4>
              <div class="kit-test-answer-p">我一直都很想嘗試</div>
            </div>
          </div>
          <div class="kit-test-answer-btn-ep d-flex">
            <buttom class="btn-ep btn-border-s">布衛生棉</buttom>
            <buttom class="btn-ep btn-border-s">月亮杯</buttom>
            <buttom class="btn-ep btn-border-s">月亮褲</buttom>
          </div>
          <div class="kit-test-answer-btn d-flex">
            <div class="kit-test-answer d-flex">
              <h4 class="h4-tc">不了</h4>
              <div class="kit-test-answer-p">下次再說吧</div>
            </div>
          </div>
        </div>
        <button class="btn-soft-green-big">看結果</button>
      </div>
      {/* <!-- kit-test --> */}
    </>
  )
}

export default KitTest4
