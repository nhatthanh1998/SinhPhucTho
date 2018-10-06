import React, {Component} from 'react'
import styled from 'styled-components'

export default class extends Component {
  render() {
    return (
      <Feature className="container">
        <div className="title">Mục tiêu</div>
        <div className="sub-title mb-4 mb-md-5 text-muted">Chúng tôi luôn hướng đến một tang lễ tron vẹn và hoàn hảo</div>
        <div className="row">
          <div className="col-12 col-md-4 mb-5 mb-md-0">
            <div className="shadow box px-3 py-4">
              <img src="./src/work.svg" className="feature-icon" alt=""/>
              <p className="text-center">
                Tang lễ do chúng tôi đảm nhiện luôn được đề cao sự
                <strong>
                  &nbsp;trang trọng</strong>,
                <strong>
                  &nbsp;thành kính
                </strong>
                &nbsp;và tính
                <strong>
                  &nbsp;thẩm mĩ</strong>. Chúng tôi luôn hướng đến sự hoàn mĩ
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-5 mb-md-0">
            <div className="shadow box px-3 py-4">
              <img src="./src/effort.svg" className="feature-icon" alt=""/>
              <p className="text-center">
                Chúng tôi luôn làm việc một cách
                <strong className="">
                  &nbsp;chu đáo</strong>,
                <strong className="">
                  &nbsp;tận tâm</strong>,
                <strong>
                  &nbsp;nhiệt thành
                </strong>
                &nbsp;và
                <strong>
                  &nbsp;trách nhiệm.</strong>
                &nbsp;Chúng tôi đề cao sự hài lòng của gia chủ.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4 ">
            <div className="shadow box px-3 py-4">
              <img src="./src/feedback.svg" className="feature-icon" alt=""/>
              <p className="text-center">
                Gia đình sẽ được tư vấn
                <strong>&nbsp;rõ ràng
                </strong>
                &nbsp;và
                <strong>&nbsp;chi tiết</strong>
                &nbsp;các loại áo quan, nghi lễ, dịch vụ, ... Chúng tôi luôn mong rằng sẽ mang
                đến cho gia đình một tang lễ
                <strong>&nbsp;trọn vẹn</strong>.
              </p>
            </div>
          </div>
        </div>
      </Feature>
    )
  }
}

const Feature = styled.div `
  font-family: 'Playfair Display', serif;
  font-size: .85rem;
  letter-spacing: .05rem;
  margin-bottom: 3rem;
  text-align: center;
  .feature-icon{
    width: 6rem;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2rem;
    display: block;
  }
  .box{
    height: 100%;
  }
  .title{
    margin-bottom: 0;
    font-size: 3rem;
  }
  .sub-title{
    letter-spacing: .05rem;
  }
`