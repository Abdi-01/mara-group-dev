import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SulengBintaroPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="container-fluid p-0">
                <section className='suleng-section'>
                    <div className='content text-center'>
                        <h1>SUDUT LENGGAH BINTARO</h1>
                        <p className='deskripsi mt-5 d-inline-grid'>
                            <span className='mb-3'>
                                We are ready to serve for your Event from Engagement, Wedding, Syukuran, Corporate Events, Parties and Gathering*
                            </span>
                            <span>
                                Please contact us and we can customise a menu that suits your needs to bring joy at your event.
                            </span>
                        </p>
                    </div>

                    <div className='content-grid col-md-12 col-sm-12'>
                        <div className='content-item col-lg-4 col-md-4 col-sm-4' >
                            <div data-content="" >
                                <a href='#'>
                                    <img src={require('../assets/image/suleng-bintaro/suleng-bintaro (1).jpg')} />
                                </a> 
                            </div>
                        </div>
                        <div className='content-item col-lg-4 col-md-4 col-sm-4' >
                            <div data-content="" >
                                <a href='#'>
                                    <img src={require('../assets/image/suleng-bintaro/suleng-bintaro (2).jpg')} />
                                </a> 
                            </div>
                        </div>
                        <div className='content-item col-lg-4 col-md-4 col-sm-4' >
                            <div data-content="">
                                <a href='#'>
                                    <img src={require('../assets/image/suleng-bintaro/suleng-bintaro (3).jpg')} />
                                </a> 
                            </div>
                        </div>
                    </div>

                    <div className='content text-center'>
                        <h3 className='mt-5 mb-4'>Also Available in Hampers</h3>
                        <span className='deskripsi'>
                            Coffee & Tea Bundling | Siomay | Ayam Bakar Sambal Plecing | Pizza Pepperoni | Iga Bakar | Sate Maranggi | Bebek Goreng | Marmer Cake | Etc.
                        </span>
                        <h3 className='mt-5 mb-4'>Terms & Conditions</h3>
                        <p className='deskripsi d-inline-grid'>
                           <span> * Minimum Order 50 Pax for Tea & Beverages </span>
                           <span> * Maximum Order 100 Pax for Food </span>
                           <span> * Price excluded Tax & Service and Handling feel </span>
                           <span> * Booking Fee 50% for Date Blocking </span>
                           <span> * Confirm Menu D-3 </span>
                           <span> * Cancellation Fee </span>
                           <span> * No Food Tasting </span>
                        </p>
                        <h3 className='mt-5 mb-4'>Contact Us</h3>
                        <Row>
                            <Col md={6} style={{marginBottom:'30px'}}>
                                <a href='https://www.instagram.com/sudut.lenggah/' target={'_blank'} className='sosmed d-inline-grid'>
                                    <span><FontAwesomeIcon  icon={['fab', 'instagram']} size='3x'/><br /></span>
                                    <span className='deskripsi'>@sudut.lenggah</span>
                                </a>
                            </Col>
                            <Col md={6}>
                                <a href='https://wa.me/6282144162323' target={'_blank'}  className='sosmed d-inline-grid'>
                                    <span><FontAwesomeIcon  icon={['fab', 'whatsapp']} size='3x'/><br /></span>
                                    <span className='deskripsi'>0821-4416-2323</span>
                                </a>
                            </Col>
                        </Row>
                        <h3 className='mt-5 mb-4'>Location</h3>
                        <img src={require('../assets/icon/pin.png')} width='50px' className='mb-2'></img> 
                        <span className='deskripsi'> 
                            <b>Ruma Mara</b> <br />
                            Jl. Bintaro Utara Blok HI No. 25, Sektor 1, Pesanggrahan, Jakarta Selatan, 12330
                        </span>

                        <h3 className='mt-5 mb-4'>Google Maps</h3>
                        <a href='https://goo.gl/maps/4kuRT1HEcoMpVsho8' target={'_blank'}>
                            <img src={require('../assets/map/rumamara.png')} className='maps mb-2'></img>
                        </a>
                    </div>
                </section>
            </div>
        );
    }
}

export default SulengBintaroPage;