import React from 'react';
import { AiFillFacebook,AiFillTwitterCircle,AiFillGooglePlusCircle,AiFillInstagram } from 'react-icons/ai';

const Strap = () => {
  return (
   <>
   <div className='topbar topbar-dark bg-dark'>
       <div className='container d-md-flex align-items-center px-0 px-xl-3'>
            <div className="d-none d-md-block text-nowrap me-3">
                <i className="ai-phone fs-base text-muted me-1 align-middle"></i>
                <span className="text-light me-2 fs-5 text-center">Support</span><i className=" topbar-link me-1 text-light " href="tel:9107848015">910-784-8015</i>
           </div>
           <div className='d-flex text-md-end ms-md-auto'>
                <div className="btn-group me-2" role="group" aria-label="First group">
                    <a type="button" className="btn"><AiFillInstagram className="text-light fs-3"/></a>
                </div>
                <div className="btn-group me-2" role="group" aria-label="First group">
                    <a type="button" className="btn"><AiFillFacebook className="text-light fs-3"/></a>
                </div>
                <div className="btn-group me-2" role="group" aria-label="First group">
                    <a type="button" className="btn"><AiFillTwitterCircle className="text-light fs-3"/></a>
                </div>
                <div className="btn-group me-2" role="group" aria-label="First group">
                    <a type="button" className="btn"><AiFillGooglePlusCircle  color="#e8e8e8" className="fs-3"/></a>
                </div>  
           </div>
       </div>
   </div>

   {/* <div className='container-fluid'>
      <div className="row  p-1 mb-1 bg-dark bg-gradient text-white">
      <div className="col-4 pt-1">       
      </div>
      <div className="col-4 text-center">
        <p className="mt-3 fs-5">Call Us: +1-999-999-1234</p>
      </div>
      <div className="col-4 d-flex justify-content-end align-items-center">
        <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
            <div className="btn-group me-2" role="group" aria-label="First group">
                <a type="button" className="btn btn-outline-secondary"><AiFillInstagram  color="#e8e8e8" className="fs-3"/></a>
            </div>
            <div className="btn-group me-2" role="group" aria-label="First group">
                <a type="button" className="btn btn-outline-secondary"><AiFillFacebook  color="#e8e8e8" className="fs-3"/></a>
            </div>
            <div className="btn-group me-2" role="group" aria-label="First group">
                <a type="button" className="btn btn-outline-secondary"><AiFillTwitterCircle  color="#e8e8e8" className="fs-3"/></a>
            </div>
            <div className="btn-group me-2" role="group" aria-label="First group">
                <a type="button" className="btn btn-outline-secondary"><AiFillGooglePlusCircle  color="#e8e8e8" className="fs-3"/></a>
            </div>      
        </div>  
      </div>
    </div>
    </div>  */}
   </>
  )
}

export default Strap