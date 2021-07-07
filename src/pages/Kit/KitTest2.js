import React from 'react'
import SvgClothPadS from './component/svg-component/SvgClothPadS'
import SvgSport from './component/svg-component/SvgSport'
import SvgTampon from './component/svg-component/SvgTampon'
import SvgSetEp from './component/svg-component/SvgSetEp'

function KitTest2() {
  return (
    <>
      {/* <!-- kit-test --> */}
      <div class="container">
        {/* <!-- 最上方的題目進度條 --> */}
        <div class="kit-test-step-area">
          <div class="kit-test-step kit-test-step-r"></div>-
          <div class="kit-test-step"></div>-<div class="kit-test-step"></div>-
          <div class="kit-test-step"></div>
        </div>
        {/* <!-- 題目 --> */}
        <div class="kit-test-question-bg">
          <div class="kit-test-question-img">
            <div class="kit-test-question-text-area">
              <div class="kit-test-question-text">
                <h3 class="h3-en">Q1</h3>
                <h5 class="h5-tc kit-test-question-text">
                  以每個月白天的平均量來說，
                  <br />
                  我總是使用約多長的生理用品呢？
                </h5>
              </div>
              <div class="kit-test-question-icon">
                <SvgClothPadS />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- 選項 --> */}
        <div class="kit-test-answer-area">
          <div class="kit-test-answer-btn">
            <div class="kit-test-answer">
              <h4 class="h4-tc">量少型</h4>
              <div class="kit-test-answer-p">18cm</div>
            </div>
          </div>
          <div class="kit-test-answer-btn">
            <div class="kit-test-answer">
              <h4 class="h4-tc">量普通型</h4>
              <div class="kit-test-answer-p">21cm</div>
            </div>
          </div>
          <div class="kit-test-answer-btn">
            <div class="kit-test-answer">
              <h4 class="h4-tc">量多型</h4>
              <div class="kit-test-answer-p">25cm</div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- kit-test --> */}
    </>
  )
}

export default KitTest2
