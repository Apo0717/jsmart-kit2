import React from 'react'
import Step from './component/kit-test/Step'
import QuestionWall from './component/kit-test/QuestionWall'
import AnswerEp from './component/kit-test/AnswerEp'
import BtnGreenBig from './component/kit-test/BtnGreenBig'

function KitTest4() {
  return (
    <>
      {/* <!-- kit-test --> */}
      <div class="container">
        {/* <!-- 最上方的題目進度條 --> */}
        <Step />
        {/* <!-- 題目 --> */}
        <QuestionWall />
        {/* <!-- 選項區 --> */}
        <AnswerEp />
        <BtnGreenBig />
      </div>
      {/* <!-- kit-test --> */}
    </>
  )
}

export default KitTest4
