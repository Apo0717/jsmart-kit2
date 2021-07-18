import React, { useState } from 'react'
import LunarPhaseNavbar from '../../component/LunarPhaseNavbar'
import Footer from '../../component/Footer'
import Step from './component/kit-test/Step'
import QuestionWall from './component/kit-test/QuestionWall'
import Answer1 from './component/kit-test/Answer1'

function KitTest1() {
  const [test, setTest] = useState(
    {
      qId: 1,
      qNum: 'Q1',
      questionText:
        '以每個月白天的平均量來說，<br />我總是使用約多長的生理用品呢？',
      questionImg: '/img/Kit/test01',
      answer: [
        {
          aId: 1,
          aTitle: '量少型',
          aSubTitle: '18cm',
        },
        {
          aId: 2,
          aTitle: '量普通型',
          aSubTitle: '21cm',
        },
        {
          aId: 3,
          aTitle: '量多型',
          aSubTitle: '22cm以上',
        },
      ],
    },
    {
      qId: 2,
      qNum: 'Q2',
      questionText: '有使用棉條的經驗嗎?',
      questionImg: '/img/Kit/test02',
      answer: [
        {
          aId: 1,
          aTitle: '完全不用',
          aSubTitle: '',
        },
        {
          aId: 2,
          aTitle: '特定時刻使用',
          aSubTitle: '',
        },
        {
          aId: 3,
          aTitle: '棉條派',
          aSubTitle: '我只用棉條',
        },
      ],
    },
    {
      qId: 3,
      qNum: 'Q3',
      questionText: '月經來臨的期間，運動或是戶外活動的頻率？',
      questionImg: '/img/Kit/test03',
      answer: [
        {
          aId: 1,
          aTitle: '沒有',
          aSubTitle: '不喜歡戶外運動 :(',
        },
        {
          aId: 2,
          aTitle: '有時候',
          aSubTitle: '還是會有外出需求',
        },
        {
          aId: 3,
          aTitle: '經常',
          aSubTitle: '我是追風的女子！',
        },
      ],
    },
    {
      qId: 4,
      qNum: 'Q4',
      questionText: '是否會想嘗試月亮杯或是月亮褲等重複利用型的生理用品呢？',
      questionImg: '/img/Kit/test04',
      answer: [
        {
          aId: 1,
          aTitle: '是的！',
          aSubTitle: '我一直都很想嘗試',
          moreChoice: [
            { cId: 4, cName: '布衛生棉' },
            { cId: 5, cName: '月亮杯' },
            { cId: 6, cName: '月亮褲' },
          ],
        },
        {
          aId: 2,
          aTitle: '不了',
          aSubTitle: '下次再說吧',
        },
      ],
    }
  )
  return (
    <>
      <LunarPhaseNavbar />
      {/* <!-- kit-test --> */}
      <div className="container">
        {/* <!-- 最上方的題目進度條 --> */}
        <Step />
        {/* <!-- 題目 --> */}
        <QuestionWall />
        {/* <!-- 選項區 --> */}
        <Answer1 />
      </div>
      {/* <!-- kit-test --> */}
      <Footer />
    </>
  )
}

export default KitTest1
