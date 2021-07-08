import React from 'react'

function AnswerEp() {
  return (
    <>
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
    </>
  )
}

export default AnswerEp
