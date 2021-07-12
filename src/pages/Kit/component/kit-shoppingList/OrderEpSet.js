import React from 'react'
import { TiPlus } from 'react-icons/ti'
import SvgClothPad from '../svg-component/SvgClothPad'
import SvgCup from '../svg-component/SvgCup'
import SvgPanty from '../svg-component/SvgPanty'

function OrderEpSet() {
  return (
    <>
    <TiPlus class="TiPlus-r" size="100px" />
      <div class="kit-shopping-list-bg">
        {/* <!-- 刪除鈕 --> */}
        <div class="delete">
          <i class="fas fa-times fa-3x"></i>
        </div>
        {/* <!-- 右邊3個小可愛 --> */}
        <div class="right-little-btn">
          <div class="little-btn btn-cloth-pad">
            <SvgClothPad />
          </div>
          <div class="little-btn btn-cup">
            <SvgCup />
          </div>
          <div class="little-btn btn-panty">
            <SvgPanty />
          </div>
        </div>
        <div class="kit-shopping-list-wrap">
          {/* <!-- 組合名稱＋右上方總計 --> */}
          <div class="kit-shopping-list-set-title">
            {/* <!-- 組合名稱 --> */}
            <div>
              <div class="set-title">環保組合-月亮褲</div>
            </div>
            {/* <!-- 右上方總計區塊 --> */}
            <div class="sale-price-s">
              <div class="set1-total-s">總金額</div>
              <div class="set1-total-box set1-total-box-inlineblock">
                <div class="set1-total">NT$</div>
                <div class="set1-total-red">2,000</div>
              </div>
              <div>
                <s class="set1-total-box">
                  <div class="set1-total">原價NT$</div>
                  <div class="set1-total">2,200</div>
                </s>
              </div>
            </div>
          </div>
          <div class="kit-shopping-list-product">
            {/* <!-- 商品圖片區＋PLUS --> */}
            <div class="kit-shopping-list-product-wrap">
              <div class="kit-shopping-list-items-img"></div>
              <div class="kit-shopping-list-items-text">
                <p>21cm衛生棉 ＊3個</p>
                <p>25cm衛生棉 ＊3個</p>
              </div>
            </div>
            <TiPlus class="TiPlus" size="90px" />
            <div class="kit-shopping-list-product-wrap">
              <div class="kit-shopping-list-items-img"></div>
              <div class="kit-shopping-list-items-text">
                <p>夜用衛生棉 ＊3個</p>
              </div>
            </div>
            <TiPlus class="TiPlus" size="90px" />
            <div class="kit-shopping-list-product-wrap">
              <div class="kit-shopping-list-items-img"></div>
              <div class="kit-shopping-list-items-text">
                <p>夜用衛生棉 ＊3個</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderEpSet
