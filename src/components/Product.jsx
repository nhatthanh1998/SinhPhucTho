import React, { Component } from 'react'
import styled from 'styled-components'

export default class extends Component {
  render() {
    return (
      <Product className="container pt-md-5">
        <div className="row">
          <div className="col-12 col-md-2">
            <div className="little-divider mb-3"></div>
            <div className="title mb-4">Các loại áo quan của chúng tôi</div>
          </div>
          <div className="col-12 col-md-4 mb-5">
            <img
              src="img/1.jpg"
              className="w-100 shadow"
              alt="" />
          </div>
          <div className="col-12 col-md-6 align-self-lg-center px-5">
            <div className="title mb-2">Chất liệu và phân loại</div>
            <div className="sub-title text-muted">
              Áo quan của Sinh Phúc Thọ được sản xuất một cách tinh xảo, tỉ mỉ từ các chất
              liệu cao cấp như gỗ giáng hương, gỗ trai, gỗ đỏ. Được chia thành 6 nhóm chính.</div>
            <div className="row">
              <div className="col-lg-6 px-1">
                <ul className="text-muted category list-group pt-4 text-center">
                  <li className="list-group-item list-group-item-action pointer">Hòm nhất nắp tròn</li>
                  <li className="list-group-item list-group-item-action pointer">Hòm nắp tròn cẩn</li>
                  <li className="list-group-item list-group-item-action pointer">Hòm Đài Loan Gỗ</li>
                </ul>
              </div>
              <div className="col-lg-6 px-1">
                <ul className="text-muted category list-group pt-4 text-center">
                  <li className="list-group-item list-group-item-action pointer">Hòm Đài Loan Cẩn</li>
                  <li className="list-group-item list-group-item-action pointer">Hòm Đài Loan Hỏa Táng</li>
                  <li className="list-group-item list-group-item-action pointer">Hòm Công Giáo</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </Product>
    )
  }
}

const Product = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: .85rem;
  letter-spacing: .05rem;
  margin-bottom: 4rem;
  .category{
    padding-left: 0.5rem;
    list-style-type: none
  }
  .little-divider{
    width: 3rem;
    border-top: 5px solid #f5a637;
  }
  .title{
    margin-bottom: 0;
    font-size: 1.3rem;
  }
  .sub-title{
    letter-spacing: .05rem;
  }
  .pointer{
    cursor: pointer;
  }
`
