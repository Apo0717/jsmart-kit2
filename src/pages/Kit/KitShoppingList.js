import React, { useState, useEffect } from 'react'
import LunarPhaseNavbar from '../../component/LunarPhaseNavbar'
import Footer from '../../component/Footer'
import OrderDailySet from './component/kit-shoppingList/OrderDailySet'
import OrderEpSet from './component/kit-shoppingList/OrderEpSet'
import SummaryBig from './component/kit-shoppingList/SummaryBig'
import BtnGreenShopping from './component/kit-shoppingList/BtnGreenShopping'

function KitShoppingList() {
  const [dataLoading, setDataLoading] = useState(false)
  const [smallTotalD, setSmallTotalD] = useState() //日常右上方小總計
  const [smallTotalE, setSmallTotalE] = useState() //環保右上方小總計
  const [total, setTotal] = useState(0) //下方大總計
  const [shoppingItemDay, setShoppingItemDay] = useState([]) //日常組合商品Cat:1~3
  const [shoppingItemEp, setShoppingItemEp] = useState([]) //環保組合商品Cat:4~6
  const [catDay, setCatDay] = useState([]) //日常種類Cat:1~3
  const [catEp, setCatEp] = useState([]) //環保種類Cat:4~6
  const [handle, setHandle] = useState() //控制下方的元件叉叉

  //++++++++++++++++++++++++++++
  // 設定資料(分類的資料庫)
  async function getKitFromServer() {
    // 開啟載入指示
    setDataLoading(true)

    // 連接的伺服器資料網址-商品資料
    const url = 'http://localhost:4567/kitset'

    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const allData = await response.json()
    let kitCategoryA = localStorage.getItem('kitCategoryA')
    let kitCategoryB = localStorage.getItem('kitCategoryB')
    console.log('我是資料庫哦', allData)
    //定義上個set的localStorage == Item.kitCategory
    //相同的話就讓資料出現
    //
    //日常組合
    let kitSetItemDaily = allData.data.filter(
      (Item) => Item.kitCategory == kitCategoryA
    )
    setShoppingItemDay(kitSetItemDaily)
    console.log('filter資料庫哦', kitSetItemDaily)
    console.log('shoppingItem', shoppingItemDay)
    //
    //環保組合
    let kitSetItemEp = allData.data.filter(
      (Item) => Item.kitCategory == kitCategoryB
    )

    setShoppingItemEp(kitSetItemEp)
    // console.log('filter資料庫哦', kitSetItemEp)
  }
  //++++++++++++++++++++++++++++

  // 設定資料(分類的資料庫)
  async function getKitCatServer() {
    // 開啟載入指示
    setDataLoading(true)

    // 連接的伺服器資料網址-商品分類
    const url = 'http://localhost:4567/kitcat'

    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const allDataCat = await response.json()
    let kitCategoryA = localStorage.getItem('kitCategoryA')
    let kitCategoryB = localStorage.getItem('kitCategoryB')
    console.log('我是分類的資料庫哦', allDataCat)
    //
    //定義上個set的localStorage == Item.kitCategory
    //相同的話就讓資料出現
    //
    //日常組合
    let kitCatDaily = allDataCat.data.filter(
      (Cat) => Cat.kitCategoryId == kitCategoryA
    )
    setCatDay(kitCatDaily)
    console.log('filter分類資料庫哦', kitCatDaily)
    //
    //環保組合
    let kitCatEp = allDataCat.data.filter(
      (Cat) => Cat.kitCategoryId == kitCategoryB
    )
    setCatEp(kitCatEp)
    // console.log('filter資料庫哦', kitSetItemEp)
    // 設定資料
  }
  //++++++++++++++++++++++++++++
  //呼叫對應上頁localStorage拿到的值，與資料庫的kitCategory比對，相等的話就叫出那組資料庫
  const getSetLocalstorage = () => {
    let kitCategoryA = localStorage.getItem('kitCategoryA')
    console.log('Localstorage日常', kitCategoryA)
    let kitCategoryB = localStorage.getItem('kitCategoryB')
    console.log('Localstorage環保', kitCategoryB)
  }
  //++++++++++++++++++++++++++++
  //渲染畫面（更動）就呼叫
  useEffect(() => {
    getKitFromServer()
    getKitCatServer()
    getSetLocalstorage()
    sumEpSmall()
    sumDaySmall()
    sumTotal()
    // console.log('DidUpdate', smallTotalD)
  }, [])
  //++++++++++++++++++++++++++++
  //小區塊的總計需要的狀態
  const [clickMon, setClickMon] = useState(1) //紀錄是哪個數字(月份按鈕)被按
  const [clickName, setClickName] = useState('一個月') //紀錄是哪個月份名稱
  const btnDropdown = {
    click: '一個月',
    arr: [
      {
        name: '一個月',
        month: 1,
      },
      {
        name: '二個月',
        month: 2,
      },
      {
        name: '三個月',
        month: 3,
      },
      {
        name: '四個月',
        month: 4,
      },
      {
        name: '五個月',
        month: 5,
      },
    ],
  } //按鈕下拉選單
  const btnHalfYear = { name: '半年', month: 6 } //按鈕半年
  const btnYear = { name: 'ㄧ年', month: 12 } //按鈕一年
  //紀錄誰被按然後送出倍率
  const orderMonth = (o, s) => {
    //函式變數可以自定義有幾種類型 o=obj a=array
    //函式會自己判斷然後算出來
    if (s !== undefined) {
      setClickName(s)
    }
    setClickMon(o)

    // console.log('辛酸淚滴', o, s)
  }
  // console.log('我就看你是啥', btnDropdown.arr[0].month)
  //++++++++++++++++++++++++++++
  //日常右上小總計
  const sumDaySmall = (Item) => {
    let total = 0
    //本人(true為存在所以要大於0)＋本人的長度
    if (Item && Item.length > 0) {
      for (let i = 0; i < Item.length; i++) {
        total += Item[i].itemPrice * clickMon
      }
      setSmallTotalD((total * 0.8).toLocaleString('en-US'))
      return total.toLocaleString('en-US')
    }
  }

  //環保右上小總計
  const sumEpSmall = (Item) => {
    let total = 0
    //本人(true為存在所以要大於0)＋本人的長度
    if (Item && Item.length > 0) {
      for (let i = 0; i < Item.length; i++) {
        total += Item[i].itemPrice
      }
      setSmallTotalE((total * 0.8).toLocaleString('en-US'))
      return total.toLocaleString('en-US')
    }
  }

  //下方大總計
  const sumTotal = () => {
    // 先把千位符的','去掉，然後轉數字Number()
    // console.log('判斷是什麼', smallTotalD, smallTotalD)
    if ((smallTotalD, smallTotalD)) {
      let moneyD = smallTotalD.replace(/,/g, '')
      let moneyE = smallTotalE.replace(/,/g, '')
      let allTotal = Number(moneyD) + Number(moneyE)
      console.log('小計', allTotal)
      setTotal(allTotal.toLocaleString('en-US'))
    }
  }
  //++++++++++++++++++++++++++++
  return (
    <>
      <LunarPhaseNavbar />
      {/* <!-- kit-shoppingList --> */}
      <div className="container">
        {/* <!-- 最上區塊的TITLE語 --> */}
        <h5 className="h5-tc kit-shopping-list-title">也許你適合這樣的組合</h5>
        {/* <!-- SET 1 -->*/}
        <OrderDailySet
          shoppingItemDay={shoppingItemDay}
          catDay={catDay}
          sumDaySmall={sumDaySmall}
          orderMonth={orderMonth}
          clickMon={clickMon}
          clickName={clickName}
          btnDropdown={btnDropdown}
          btnHalfYear={btnHalfYear}
          btnYear={btnYear}
        />
        {/* <!-- SET 2 --> */}
        <OrderEpSet
          shoppingItemEp={shoppingItemEp}
          catEp={catEp}
          sumEpSmall={sumEpSmall}
          smallTotalE={smallTotalE}
        />
        {/* <!-- 下方總計 --> */}
        <SummaryBig
          catDay={catDay}
          catEp={catEp}
          smallTotalD={smallTotalD}
          smallTotalE={smallTotalE}
          total={total}
        />
        {/* <!-- 其他選擇＋前往購買按鈕 --> */}
        <BtnGreenShopping />
      </div>
      <Footer />
    </>
  )
}

export default KitShoppingList
