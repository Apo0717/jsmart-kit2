import React from 'react'
import SvgClothPad from './component/svg-component/SvgClothPad'
import SvgCup from './component/svg-component/SvgCup'
import SvgPanty from './component/svg-component/SvgPanty'
import {TiPlus} from 'react-icons/ti'
import {TiPlusOutline} from 'react-icons/ti'


function KitShoppingList() {
  return (
    <>
      {/* <!-- kit-shoppingList --> */}
      <div class="container">
        {/* <!-- 最上區塊的TITLE語 --> */}
        <h5 class="h5-tc kit-shopping-list-title">也許你適合這樣的組合</h5>
        {/* <!-- SET 1 -->
      <!-- 購買選單白背景 --> */}
        <div class="kit-shopping-list-bg">
          <div class="kit-shopping-list-wrap">
            {/* <!-- 組合名稱＋右上方總計 --> */}
            <div class="kit-shopping-list-set-title">
              {/* <!-- 組合名稱 --> */}
              <div>
                <div class="set-title">一般組合/月</div>
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
              <div class="kit-shopping-list-product-img">
                <div class="kit-shopping-list-items-img"></div>
                <TiPlus color="#FDD2BB" sixe="90px" />
                <div class="kit-shopping-list-items-img"></div>
                <TiPlus />
                <div class="kit-shopping-list-items-img"></div>
              </div>
              {/* <!-- 商品文字區 --> */}
              <div class="kit-shopping-list-product-text">
                <div class="kit-shopping-list-items-text">
                  <p>21cm衛生棉 ＊3個</p>
                  <p>25cm衛生棉 ＊3個</p>
                </div>
                <div class="fake-box"></div>
                <div class="kit-shopping-list-items-text">
                  <p>夜用衛生棉 ＊3個</p>
                </div>
                <div class="fake-box"></div>
                <div class="kit-shopping-list-items-text">
                  <p>棉條 ＊3個</p>
                </div>
              </div>
            </div>
            {/* <!-- 按鈕 --> */}
            <div class="kit-shopping-list-btn">
              {/* <!-- 按鈕-下拉 --> */}
              <div class="dropdown btn-margin">
                <button
                  class="btn-border-s dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  一個月份
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="javascript:;">
                    一個月份
                  </a>
                  <a class="dropdown-item" href="javascript:;">
                    二個月份
                  </a>
                  <a class="dropdown-item" href="javascript:;">
                    三個月份
                  </a>
                  <a class="dropdown-item" href="javascript:;">
                    四個月份
                  </a>
                  <a class="dropdown-item" href="javascript:;">
                    五個月份
                  </a>
                </div>
              </div>
              <button class="btn-border-s btn-margin">半年份</button>
              <button class="btn-border-s btn-margin">一年份</button>
            </div>
          </div>
        </div>
        <TiPlusOutline color="#E64B4B" sixe="90px" />
        {/* <!-- SET 2 -->
      <!-- 購買選單白背景 --> */}
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
              <div class="kit-shopping-list-product-img">
                <div class="kit-shopping-list-items-img"></div>
                <TiPlus />
                <div class="kit-shopping-list-items-img"></div>
                <TiPlus />
                <div class="kit-shopping-list-items-img"></div>
              </div>
              {/* <!-- 商品文字區 --> */}
              <div class="kit-shopping-list-product-text">
                <div class="kit-shopping-list-items-text">
                  <p>21cm衛生棉 ＊3個ＰＰＰＰＰＰＰＰＰ</p>
                  <p>25cm衛生棉 ＊3個</p>
                </div>
                <div class="fake-box"></div>
                <div class="kit-shopping-list-items-text">
                  <p>夜用衛生棉 ＊3個</p>
                </div>
                <div class="fake-box"></div>
                <div class="kit-shopping-list-items-text">
                  <p>棉條 ＊3個</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- 下方總計 --> */}
        <div class="kit-shopping-list-total-area">
          <div class="kit-shopping-list-total">
            {/* <!-- 項目區塊(上) --> */}
            <div class="kit-items">
              {/* <!-- 單項塊 --> */}
              <div class="kit-item-wrap">
                <div class="kit-item-box">
                  <div class="kit-total-item">
                    <div class="kit-item kit-item-name">
                      日常組合(1個月份)YPPPPPP
                    </div>
                  </div>
                  <div class="kit-total-item">
                    <div class="kit-item">NT$</div>
                    <div class="kit-item">2,000</div>
                  </div>
                </div>
              </div>

              <div class="kit-item-wrap">
                <div class="kit-item-box">
                  <div class="kit-total-item">
                    <div class="kit-item kit-item-name">
                      日常組合(1個月份)YPPPPPPPPPPP
                    </div>
                  </div>
                  <div class="kit-total-item">
                    <div class="kit-item">NT$</div>
                    <div class="kit-item">2,0000</div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- 項目區塊＋頂線(下) --> */}
            <div class="kit-total-box-solid">
              <div class="kit-total">總計</div>
              <div class="kit-total-price">
                <div class="kit-total kit-total-name">NT$</div>
                <div class="kit-total kit-total-red">2,200</div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- 其他選擇＋前往購買按鈕 --> */}
        <div class="kit-go-buy-btn-area">
          <div class="kit-go-buy-btn kit-go-buy-btn-left">
            <div class="kit-go-buy-btn-s">我還想參考</div>
            <div class="kit-go-buy-btn-m">其他組合</div>
          </div>
          <div class="kit-go-buy-btn kit-go-buy-btn-right">
            <div class="kit-go-buy-btn-l">結帳去</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default KitShoppingList
