import '../App.css';
import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Offcanvas, Carousel, Stack, Form } from 'react-bootstrap';
import { BiSearch, BiChevronDown } from "react-icons/bi";
import { CiUser } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineHeart, AiOutlineBars } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import { VscThreeBars } from "react-icons/vsc";
import { useParams } from 'react-router-dom';
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineLocalOffer } from "react-icons/md";
import ReactImageMagnify from "react-image-magnify";


function Singleproduct() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [categary, setcategary] = useState(false);
  const [menu, setmenu] = useState(true);
  let [val, setval] = useState([])
  let [status, setstatus] = useState(false)
  const params = useParams();
  const [showImage, setShowImage] = useState();


  const handleApiRequest = (data1) => {
    axios.get(`https://dummyjson.com/products/category/${data1}`)
      .then(response => {
        console.log(response.data);
        })
      .catch(error => {
        console.log(error);

      });


  };

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${params.id}`)
      .then(function (response) {
        setval(response.data)
        const img_big = response.data.thumbnail;
        setShowImage(img_big)
        setstatus(true)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [params.id])

  const Arr = val.images;

  const handleClick = (value) => {
    setShowImage(Arr[value]);
  };

  if (status) {
    return (
      <div className="App">
        <div className='header'>
          <Container fluid>
            <Stack direction="horizontal" gap={3}>
              <div className="header_left">
                <p className="welcome-msg">Welcome to Wolmart Store message or remove it!</p>
              </div>
              <div className="header_right d-flex ms-auto">
                <div className='drowp1'>
                  <Form.Select aria-label="Default select example p-0 m-0">
                    <option>USD</option>
                    <option value="2">EUR</option>
                  </Form.Select>
                </div>
                <div className='drowp2'>
                  <Form.Select aria-label="Default select example">
                    <option>ENG</option>
                    <option value="2">FRA</option>
                  </Form.Select>
                </div>
                <div className="vr  d-lg-show" />
                <ul className='manu d-none d-lg-flex block d-flex align-items-center p-0 ms-0'>
                  <li><a href='/'>Blog</a></li>
                  <li><a href='/'>Contact Us</a></li>
                  <li><a href='/'>My Account</a></li>
                  <li><a href='/'><CiUser className='user_icon' />Sign In / Register</a></li>
                </ul>
              </div>
            </Stack>
          </Container>


        </div>
        <div className='header-middle'>
          <Container fluid>
            <div className='navbar d-flex align-items-center'>
              <div className='navbottom_left d-flex'>
                <button className='nav_btn1 d-block d-md-none mt-0' onClick={handleShow}>
                  <VscThreeBars className='bar_icon1' />
                </button>

                <Offcanvas show={show} onHide={handleClose}>
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                  </Offcanvas.Body>
                </Offcanvas>
              </div>
              <div className='nav_left d-flex align-items-center'>
                <a href='/'><img src={require('../images/logo.png')} alt="" className='me-3' width='144px' height='45px' /></a>
                <form method="get" action="#" className="header-search hs-expanded hs-round d-none d-md-flex input-wrapper mt-0 mb-0">
                  <div className="select-box">
                    <select id="category" name="category">
                      {/* {
                                                    val.map((data,index) => {
                                                    return (
                                                        <option value="" key={index}>{data}</option>
                                                        )
                                                    })
                                                }
                                    */}
                    </select>
                  </div>
                  <input type="text" className="form-control" name="search" id="search" placeholder="Search in..." required="" />
                  <button className="btn btn-search" type="submit"><BiSearch className='search_icon' /></button>

                </form>
              </div>
              <div className='nav_right d-flex'>
                <div className="header-call wish d-lg-block d-lg-flex align-items-center">
                  <a href="/"><IoCallOutline className='icon_call' /></a>
                  <div className="call-info d-xl-block d-none">
                    <h4 className="chat mb-0">
                      <a href="/">Live Chat</a> or :</h4>
                    <a href="/" className="phone-number">0(800)123-456</a>
                  </div>
                </div>
                <a className="wishlist label-down wish d-lg-block" href="wishlist.html">
                  <AiOutlineHeart className='nav_icon' /><br />
                  <span className="wishlist-label d-xl-block d-none">Wishlist</span>
                </a>
                <a className="wishlist label-down link1 d-xs-show" href="wishlist.html">
                  <BsCart className='nav_icon' /><br />
                  <span className='cartn' bg="primary">9</span>
                  <span className="wishlist-label d-xl-block d-none">Cart</span>
                </a>


              </div>
            </div>
          </Container>
        </div>
        <div className='header-bottom d-none  d-md-block'>
          <Container fluid>
            <div className='navbar py-0 d-flex align-items-center'>
              <div className='navbottom_left d-flex'>
                <button className='nav_btn btn-off mt-0' onClick={handleShow}>
                  <AiOutlineBars className='bar_icon' />Browse Categories
                </button>

                <Offcanvas show={show} onHide={handleClose}>
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>   <form action="#" method="get" className="input-wrapper">
                      <input type="text" className="form-control1" name="search" autoComplete="off" placeholder="Search" required="" />
                      <button className="btn btn-search1" type="submit"><BiSearch className='search_icon icon_color' /></button>
                    </form>
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body className='p-0'>
                    <div>
                      <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                          <a href="#" className="nav-link active" onClick={handleClick}>Main Menu</a>
                        </li>
                        <li className="nav-item">
                          <a href="#" className="nav-link" onClick={handleClick}>Categories</a>
                        </li>
                      </ul>
                    </div>
                    {menu &&
                      <div className='menu_area'>
                        <ul className="menu_off active-underline align-items-center pt-2 d-block p-0 m-0 ">
                          <li>
                            <a href="/">Home</a>
                          </li>
                          <li>
                            <a href="shop-banner-sidebar.html">Shop<BiChevronDown className='nav_down_icon' /></a>
                          </li>
                          <li>
                            <a href="vendor-dokan-store.html">Vendor <BiChevronDown className='nav_down_icon' /></a>
                          </li>
                          <li>
                            <a href="blog.html">Blog <BiChevronDown className='nav_down_icon' /></a>
                          </li>
                          <li className="active has-submenu">
                            <a href="about-us.html">Pages <BiChevronDown className='nav_down_icon' /></a>
                          </li>
                          <li>
                            <a href="elements.html">Elements <BiChevronDown className='nav_down_icon' /></a>
                          </li>
                        </ul>
                      </div>
                    }
                    {categary &&
                      <div className='categary_area'>
                        <ul className="menu_off active-underline align-items-center pt-2 d-block p-0 m-0 ">
                          {
                            val.map((data, index) => {
                              return (
                                <li key={index}>
                                  {/* <a  href={`/product/${data}`} onClick={(e) => handleApiRequest(data)} className='cat_a'>{data}</a> */}
                                  <button onClick={(e) => handleApiRequest(data)} className='cat_a'>{data}</button>
                                </li>
                              )
                            })
                          }
                        </ul>
                      </div>
                    }
                  </Offcanvas.Body>
                </Offcanvas>

                <nav className='main-nav d-none d-xl-block'>
                  <ul className="menu active-underline align-items-center pt-2  d-flex ">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="shop-banner-sidebar.html">Shop<BiChevronDown className='nav_down_icon' /></a>
                    </li>
                    <li>
                      <a href="vendor-dokan-store.html">Vendor <BiChevronDown className='nav_down_icon' /></a>
                    </li>
                    <li>
                      <a href="blog.html">Blog <BiChevronDown className='nav_down_icon' /></a>
                    </li>
                    <li className="active has-submenu">
                      <a href="about-us.html">Pages <BiChevronDown className='nav_down_icon' /></a>
                    </li>
                    <li>
                      <a href="elements.html">Elements <BiChevronDown className='nav_down_icon' /></a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className='nav_right d-flex'>
                <a href="/" className="d-xl-show navfirst"><SlLocationPin className='right_icon pe-1' />Track Order</a>
                <a href="/"><MdOutlineLocalOffer className='right_icon pe-1' />Daily Deals</a>
              </div>
            </div>
          </Container>


        </div>
        <div className='slider'>
          <Carousel >
            <Carousel.Item >
              <img
                className="d-block w-50 slider_img"
                src={require('../images/asset 10.png')}
                alt="First slide" align='right'
              />
              <Carousel.Caption>
                <h4 className="banner-subtitle font-weight-bold">Accessories Collection</h4>
                <h2 className="banner-title text-white text-uppercase font-weight-bolder ls-10">Smart Watches</h2>
                <a href="shop-banner-sidebar.html" className="btn btn-light btn-rounded btn-icon-right">Discover Now</a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
              <img
                className="d-block w-50 slider_img"
                src={require('../images/asset 11.png')}
                alt="First slide" align='right'
              />
              <Carousel.Caption>
                <h4 className="banner-subtitle font-weight-bold">Accessories Collection</h4>
                <h2 className="banner-title text-white text-uppercase font-weight-bolder ls-10">Smart Watches</h2>
                <a href="shop-banner-sidebar.html" className="btn btn-light btn-rounded btn-icon-right">Discover
                  Now<i className="w-icon-long-arrow-right"></i></a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
              <img
                className="d-block w-50 slider_img"
                src={require('../images/asset 12.png')}
                alt="First slide" align='right'
              />
              <Carousel.Caption>
                <h4 className="banner-subtitle font-weight-bold">Accessories Collection</h4>
                <h2 className="banner-title text-white text-uppercase font-weight-bolder ls-10">Smart Watches</h2>
                <a href="shop-banner-sidebar.html" className="btn btn-light btn-rounded btn-icon-right">Discover
                  Now<i className="w-icon-long-arrow-right"></i></a>
              </Carousel.Caption>
            </Carousel.Item>

          </Carousel>
        </div>
        <section className='main_area'>
          <Container fluid>
            <Row>
              <Col xs={12}>
                <h2 className="title justify-content-center mb-4 mt-10 pt-1 ">Popular Departments</h2>
              </Col>
              <Col xs={12}>
                <div className='d-flex justify-content-center mb-3'>
                  <Button variant="outline-secondary mx-1 mb-2">New arrivals</Button>
                  <Button variant="outline-secondary mx-1 mb-2">Best seller</Button>
                  <Button variant="outline-secondary mx-1 mb-2">most popular</Button>
                  <Button variant="outline-secondary mx-1 mb-2">Featured</Button>
                </div>
              </Col>
            </Row>
            <Row className='my-4'>
              <Col md={5} sm={12}>
              <div>
      <div className='Img_area'>
        <ReactImageMagnify
          {...{
            smallImage: {
              isFluidWidth: true,
              src: showImage,
              width: 100,
              height: 250
            },
            largeImage: {
              src: showImage,
              width: 1000,
              height: 1000
            },
            enlargedImageContainerDimensions: {
              width: "120%",
              height: "111%"
            }
          }}
        />
      </div>
    </div>
            
    </Col>
              <Col md={7} sm={12}>
                <div className='cantain_area py-5 px-1'>
                  <div className='pro_title'>
                    <h3>{val.title}</h3>
                  </div>
                  <hr className="product-divider"></hr>
                  <div className='price'><h3>$ {val.price}</h3>
                  </div>
                  <div className='star d-flex'>
                    <h2>{val.rating} </h2><h4 className='pt-2'>(Rating)</h4>
                  </div>
                  <div className='disc'>
                    <p>{val.description}</p>
                  </div>
                  <hr className="product-divider"></hr>
                  <a href="shop-banner-sidebar.html" className="btn btn-dark btn-rounded btn-icon-right">Add to Cart</a>
                </div>
              </Col>
            </Row>
            <Row>
              <Col sm={12} className='p-0'>
                <ul className='d-flex p-0'>
                  {
                    Arr.map((data, index) => {
                      return (
                        <li key={index} className='px-2'>
                          <div className='smallImg_area d-flex '>
                            <img src={data} alt='' onClick={() => handleClick(index)} className='img-fluid img_small'></img>
                          </div></li>
                      )
                    })
                  }</ul>
              </Col>

            </Row>
          </Container>
        </section>
      </div>

    );
  }
  else {
    return (
      <>
        <div className="loader"></div>

      </>
    )
  }
}
export default Singleproduct;