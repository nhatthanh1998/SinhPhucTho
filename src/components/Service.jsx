import React, {Component} from 'react'
import styled from 'styled-components'

export default class extends Component {
  render() {
    return (
      <Service className="container">
        <div className="row">
          <div className="col-12 col-md-6 align-self-lg-center px-5 order-3 order-md-1 mt-4">
            <div className="title mb-2">Trang trọng và trọn vẹn</div>
            <div className="sub-title text-muted">
              Để tang lễ được thực hiện một cách trang trọng và trọn vẹn, Sinh Phúc Thọ cung
              cấp nhiều loại dịch vụ, các nghi thức tang lễ phù hợp với tôn giáo, văn hóa và
              phong tục của gia đình.
            </div>
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
          <div className="col-12 col-md-2 order-1 order-md-3 align-self-end pb-5">
            <div className="little-divider"></div>
            <div className="title">Dịch vụ chúng tôi</div>
          </div>
          <div className="col-12 col-md-4 order-2 order-md-2 align-self-end pb-2">
            <img
              src="img/2.jpeg"
              className="w-100 shadow"
              alt=""/>
          </div>
        </div>
      </Service>
    )
  }
}

const Service = styled.div `
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
    margin-bottom: 1rem;
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
