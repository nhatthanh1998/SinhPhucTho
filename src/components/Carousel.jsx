import React, { Component } from 'react';

class Carousel extends Component {
    render() {
        return (
            <div>
                <div id="carouselExampleControls" class="carousel mb-5 slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item" style={{ minHeight: "85vh", backgroundPosition: "center", backgroundAttachment: "fixed", backgroundImage: "url(https://www.thetablet.co.uk/UserFiles/images/news/funeral.jpg)", backgroundSize: "cover" }}>
                        </div>
                        <div class="carousel-item active" style={{ minHeight: "85vh", backgroundPosition: "center", backgroundAttachment: "fixed", backgroundImage: "url(https://media.npr.org/assets/img/2018/03/02/ap_18061667159395_wide-d69cd6f14da775a88af934751ce591c4cf4c0a04.jpg?s=1400)", backgroundSize: "cover" }}>
                        </div>
                        <div class="carousel-item" style={{ minHeight: "85vh", backgroundPosition: "center", backgroundAttachment: "fixed", backgroundImage: "url(http://static-cms.legacy.com/sites/default/files/styles/hero_detail/public/funeral_procession_1600x500.jpg?itok=-H0Bk7M2)", backgroundSize: "cover" }}>
                        </div>

                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        );
    }
}

export default Carousel;