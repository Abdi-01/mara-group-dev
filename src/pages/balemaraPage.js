import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';

class BalemaraPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="container-fluid p-0">
                <section className='balemara-section'>
                    <div className='content text-center'>
                        <h1 className='mb-4'>BALE MARA VILLA</h1>
                        <h1 style={{fontWeight:'bold'}}>#StaylnBaleMara </h1>

                        <h3 className='mt-3 mb-4'>Capacity</h3>
                        <span className='deskripsi'>
                            20 - 30 Pax 
                        </span>

                        <h3 className='mt-3 mb-4'>Price List 2022 </h3>
                        <p className='deskripsi'>
                            <span> Weekday : IDR 7,.000,000,-*/ Night </span>
                            <span className='mt-1'> Weekend : IDR 7,500,000,*/ Night  </span>
                            <span className='mt-1'> 1 Floor Only : IDR 2,500,000,*/ Night </span>
                        </p>

                        <h3 className='mt-3 mb-4'>Facilities</h3>
                        <p className='deskripsi'>
                            <span> - 1 Suite Room  </span>
                            <span> - 6 Rooms </span>
                            <span> - 5 Bathrooms </span>
                            <span> - 2 Living Rooms </span>
                            <span> - 2 Kitchen Set </span>
                            <span> - 1 Rooftop  </span>
                            <span> - Swimming Pool  </span>
                            <span> - 2 Smart TV  </span>
                            <span> - Karaoke Set </span>
                            <span> - WiFi </span>
                            <span> - BBQ Grill </span>
                            <span> - Etc.  </span>
                        </p>

                        <h3 className='mt-5 mb-4'>Contact Us</h3>
                        <Row>
                            <Col md={6} style={{marginBottom:'30px'}}>
                                <a href='https://www.instagram.com/villabalemara/' target={'_blank'}>
                                    <img src={require('../assets/icon/instagram.png')} width='50px' className='mb-2'></img><br />
                                    <span style={{fontSize:'23px'}}>@villabalemara </span>
                                </a>
                            </Col>
                            <Col md={6}>
                                <a href='https://wa.me/62811388204296' target={'_blank'}>
                                    <img src={require('../assets/icon/whatsapp.png')} width='50px' className='mb-2'></img><br />
                                    <span style={{fontSize:'23px'}}>08113-8820-4296 </span>
                                </a>
                            </Col>
                        </Row>

                        <h3 className='mt-5 mb-4'>Location</h3>
                        <img src={require('../assets/icon/pin.png')} width='50px' className='mb-2'></img> 
                        <span className='deskripsi'> 
                            <b>Kutamara</b> <br />
                            JI. Pakancilan, RT 04, RW O4, Kuta, Kec. Megamendung, Bogor, Jawa Barat, 16770. 
                        </span>

                        <h3 className='mt-5 mb-4'>Google Maps</h3>
                        <a href='https://goo.gl/maps/57xaRjxJnWxq2Uk78' target={'_blank'}>
                            <img src={require('../assets/map/sulengbintaro.png')} width={'300px'} className='mb-2'></img><br />
                        </a>

                        <h3 className='mt-5 mb-4'>Reservation via WhatsApp or Tiket.com </h3>
                        <a className='deskripsi' href='http://shorturl.at/knpMQ' target={'_blank'}>
                            shorturl.at/knpMQ
                        </a>
                    </div>
                </section>
            </div>
        );
    }
}

export default BalemaraPage;