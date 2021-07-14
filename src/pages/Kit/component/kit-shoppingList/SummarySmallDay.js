import React, { useEffect } from 'react'

function SummarySmallDay(props) {
  const { shoppingItemDay, smallTotalD, setSmallTotalD } = props
  // const [sTotal, setSTotal] = useState()
  console.log('說吧你到底是不是被選到的日常組合', shoppingItemDay)
  // 計算總價的函式
  // const yo = [{ itemPrice: 3 }, { itemPrice: 7 }, { itemPrice: 10 }]

  //因為週期的關係，一開始可能陣列裡面沒有值，所以要判斷他是陣列&&有值的時候才行動
  const sum = (Item) => {
    let total = 0
    //本人(true為存在所以要大於0)＋本人的長度
    if (Item && Item.length > 0) {
      for (let i = 0; i < Item.length; i++) {
        total += Item[i].itemPrice
      }
      setSmallTotalD(total)
      return total
    }
  }

  // const getSmallTotal = () => {
  //   console.log('誰', props)
  //   setSmallTotalD(sum(shoppingItemDay))
  // }

  // console.log('出來吧', sum(yo))

  useEffect(() => {
    sum()
  }, [])

  return (
    <>
      <div className="sale-price-s">
        <div className="set1-total-s">總金額</div>
        <div className="set1-total-box set1-total-box-inlineblock">
          <div className="set1-total">NT${sum(shoppingItemDay)}</div>
          <div className="set1-total-red"></div>
        </div>
        <div>
          <s className="set1-total-box">
            <div className="set1-total">原價NT$</div>
            <div className="set1-total">{sum(shoppingItemDay) * 0.8}</div>
          </s>
        </div>
      </div>
    </>
  )
}

export default SummarySmallDay
