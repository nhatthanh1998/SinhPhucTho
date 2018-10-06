import React, {Component} from 'react'
import styled from 'styled-components'

export default class extends Component {
  render() {
    return (
      <Footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 px-5 px-md-3 mt-4">
              <div className="heading mb-3">Về chúng tôi</div>
              <p className="about-us">
                Với nhiều năm kinh nghiệm, chúng tôi đảm bảo sẽ đem lại dịch vụ chuyên nghiệp và
                chu toàn cho gia đình.
              </p>
            </div>
            <div className="col-12 col-md-4 px-md-3 px-5 mt-4">
              <div className="heading mb-3">Liên hệ</div>
              <p className="contact">
                <i className="fas contact-icon fa-map-marker-alt fa-sm"></i>
                <span>37 Nguyễn Du phường 7, Gò Vấp, Hồ Chí Minh</span>
              </p>
              <p className="contact">
                <i className="fas contact-icon fa-mobile-alt fa-sm"></i>
                <span>0913673661 - Anh Thời</span>
              </p>
              <p className="contact">
                <i className="far contact-icon fa-envelope fa-sm"></i>
                <span>admin@domain.com</span>
              </p>
            </div>
            <div className="col-12 col-md-4 px-md-3 px-5 mt-4">
              <div className="heading mb-3">Giờ làm việc</div>
              <p className="open-hour">
                <i className="fas fa-sm contact-icon fa-business-time"></i>Thứ hai - Chủ nhật</p>
              <p className="open-hour">
                <i className="far fa-sm contact-icon fa-clock"></i>00:00 - 24:00</p>
            </div>
          </div>
        </div>
      </Footer>
    )
  }
}

const Footer = styled.div `
    background-color: #151515;
    padding: 3rem 0;
    color: white;
    font-size: .75rem;
    font-family: Lato, sans-serif;
    .heading{
        color: #f5a637;
        letter-spacing: .05em;
        font-weight: bold;
        text-transform: uppercase;
    }
    .contact-icon{
        min-width: 1.5rem;
    }
    .about-us{
        letter-spacing: .05em;
    }
    .open-hour{
        text-transform: uppercase;
        letter-spacing: .08em;
    }

`