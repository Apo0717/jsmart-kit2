import React, { useState } from 'react'
import DailySet from './component/kit-setList/DailySet'
import EpSet from './component/kit-setList/EpSet'
import BtnGreenBig from './component/kit-setList/BtnGreenBig'
import { Link } from 'react-router-dom'

function KitSetList() {
  const [objDaily, setObjDaily] = useState({
    name: '一般組合',
    click: false,
    arr: [
      {
        name: '日常-量適中',
        span: '衛生棉＋衛生棉條',
        kitCategory: 1,
        key: 1,
        click: false,
      },
      {
        name: '日常-量多',
        span: '衛生棉＋衛生棉條',
        kitCategory: 2,
        key: 2,
        click: false,
      },
      {
        name: '戶外派',
        span: '衛生棉條組',
        kitCategory: 3,
        key: 3,
        click: false,
      },
    ],
  })

  const [objEp, setObjEp] = useState({
    name: '環保組合加購區',
    //判定 objDaily 按過後才能按這邊
    canClick: false,
    click: false,
    arr: [
      {
        name: '布衛生棉',
        span: null,
        kitCategory: 4,
        key: 4,
        click: false,
      },
      {
        name: '月亮杯',
        span: null,
        kitCategory: 5,
        key: 5,
        click: false,
      },
      {
        name: '月亮褲',
        span: null,
        kitCategory: 6,
        key: 6,
        click: false,
      },
    ],
  })

  //事件觸發(ex.onClick)了之後要做的動作
  const functionA = (obj) => {
    //ObjDaily被改變
    setObjDaily({
      name: '一般組合',
      click: true,
      // e 為 objA.arr 裡的 1 個 {}
      arr: objDaily.arr.map((e) => {
        return {
          ...e,
          // obj到時候要放觸發函式的變數，也就是e
          // 原本的 e 裡的 kitCategory 與被觸發的 obj.kitCategory 相同時，表示被按下 click:true
          click: e.kitCategory === obj.kitCategory ? true : false,
        }
      }),
    })

    // setObjEp({
    //   ...objEp,
    //   canClick: true,
    // })
  }

  //給環保組合用的函示
  const functionB = (obj) => {
    //ObjDaily被按了objEp才能被選擇
    if (objDaily.click) {
      //ObjDaily被改變
      setObjEp({
        name: '環保組合加購區',
        click: true,
        // e 為 objA.arr 裡的 1 個 {}
        arr: objEp.arr.map((e) => {
          return {
            ...e,
            // obj到時候要放觸發函式的變數，也就是e
            // 原本的 e 裡的 kitCategory 與被觸發的 obj.kitCategory 相同時，表示被按下 click:true
            click:
              //e.kitCategory === obj.kitCategory? !e.click? true:false
              e.kitCategory === obj.kitCategory
                ? !e.click
                  ? true
                  : false
                : false,
          }
        }),
      })
      // setObjEp結束
    }
    // if 結束
  }

  // 判斷環保組合有無被選取(click)
  // some 方法為有被選取一個就得 true
  // const result = objEp.arr.some((e) => e.click === true)
  // const objC = { keyA:'', keyB:'' }


  // 如果 result == true 就取得 objC 的值
  // const submit = () => {
  //   if (result) { objC.keyA === objDaily.arr.key
  //   }
  // }

  return (
    <>
      {/* <!-- kit-setList --> */}
      <div class="container">
        <DailySet
          functionA={functionA}
          objDaily={objDaily}
          setObjDaily={setObjDaily}
        />
        <hr />
        <EpSet functionB={functionB} objEp={objEp} setObjEp={setObjEp} />
        <Link
          to="/kitShoppingList"
          onClick={() => {
            ;<BtnGreenBig />
          }}
        >
          <BtnGreenBig />
        </Link>
      </div>
    </>
  )
}

export default KitSetList
