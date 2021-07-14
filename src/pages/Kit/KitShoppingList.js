import React, { useState, useEffect } from 'react'
import OrderDailySet from './component/kit-shoppingList/OrderDailySet'
import OrderEpSet from './component/kit-shoppingList/OrderEpSet'
import SummaryBig from './component/kit-shoppingList/SummaryBig'
import BtnGreenShopping from './component/kit-shoppingList/BtnGreenShopping'

function KitShoppingList() {
  const [dataLoading, setDataLoading] = useState(false)
  const [smalltotal, setSmalltotal] = useState()
  const [total, setTotal] = useState()
  const [shoppingItemDay, setShoppingItemDay] = useState([])
  const [shoppingItemEp, setShoppingItemEp] = useState([])
  const [catDay, setCatDay] = useState([])
  const [catEp, setCatEp] = useState([])
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
    // if (kitSetItemEp == null) {
    // } else {
    // }
    setShoppingItemEp(kitSetItemEp)
    // console.log('filter資料庫哦', kitSetItemEp)
    // 設定資料
  }
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
    //定義上個set的localStorage == Item.kitCategory
    //相同的話就讓資料出現
    //
    //日常組合
    let kitCatDaily = allDataCat.data.filter(
      (Cat) => Cat.kitCategoryId == kitCategoryA
    )
    setCatDay(kitCatDaily)
    console.log('filter分類資料庫哦', kitCatDaily)
    console.log('shoppingItem', shoppingItemDay)
    //
    //環保組合
    let kitCatEp = allDataCat.data.filter(
      (Cat) => Cat.kitCategoryId == kitCategoryB
    )
    setCatEp(kitCatEp)
    // console.log('filter資料庫哦', kitSetItemEp)
    // 設定資料
  }

  //渲染畫面就呼叫
  useEffect(() => {
    getKitFromServer()
    getKitCatServer()
    getSetLocalstorage()
  }, [])

  //呼叫對應上頁localStorage拿到的值，與資料庫的kitCategory比對，相等的話就叫出那組資料庫
  const getSetLocalstorage = () => {
    console.log('有出來嗎？')
    let kitCategoryA = localStorage.getItem('kitCategoryA')
    console.log('香蕉1號', kitCategoryA)
    let kitCategoryB = localStorage.getItem('kitCategoryB')
    console.log('香蕉2號', kitCategoryB)
  }

  return (
    <>
      {/* <!-- kit-shoppingList --> */}
      <div className="container">
        {/* <!-- 最上區塊的TITLE語 --> */}
        <h5 className="h5-tc kit-shopping-list-title">也許你適合這樣的組合</h5>
        {/* <!-- SET 1 -->*/}
        <OrderDailySet
          shoppingItemDay={shoppingItemDay}
          setShoppingItemDay={setShoppingItemDay}
          catDay={catDay}
          setCatDay={setCatDay}
          smalltotal={smalltotal}
          setSmalltotal={setSmalltotal}
        />
        {/* <!-- SET 2 --> */}
        <OrderEpSet
          shoppingItemEp={shoppingItemEp}
          setShoppingItemEp={setShoppingItemEp}
          catEp={catEp}
          setCatEp={setCatEp}
          smalltotal={smalltotal}
          setSmalltotal={setSmalltotal}
        />
        {/* <!-- 下方總計 --> */}
        <SummaryBig total={total} setTotal={setTotal} />
        {/* <!-- 其他選擇＋前往購買按鈕 --> */}
        <BtnGreenShopping />
      </div>
    </>
  )
}

export default KitShoppingList
