import React from 'react'
import { NavLink } from 'react-router-dom'

const Common = (props) => {
  return (
   <>
   <section id="header" className="d-flex align-items-center">
        <div className='container-fluid'>
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 mt-5 order-2 order-lg-1">
                  <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3">
                    <div className="p-lg-5 my-5">
                      <h1 className="display-4 fw-normal">{props.name}</h1>
                      <p className="lead fw-normal">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple’s marketing pages.</p>
                      <NavLink className="btn btn-outline-secondary" to={props.visit}>{props.btnname}</NavLink>
                    </div>
                    <div className="product-device shadow-sm d-none d-md-block"></div>
                    <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
                  </div>
                </div>
                  <div className="col-md-6 mt-5 order-1 order-lg-2 header-img">
                      <img src={props.imgsrc} className="img-fluid animated" alt='Header Img' />
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
   </>
  )
}

export default Common