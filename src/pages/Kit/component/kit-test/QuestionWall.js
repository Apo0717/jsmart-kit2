import React from 'react'
import SvgClothPadS from '../svg-component/SvgClothPadS'
// import SvgSport from '../svg-component/SvgSport'
// import SvgTampon from '../svg-component/SvgTampon'
// import SvgSetEp from '../svg-component/SvgSetEp'

function QuestionWall() {
  return (
    <>
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
    </>
  )
}

export default QuestionWall
