import React from 'react'

const Contact = () => {
  return (
    <>
      <div className='my-5'>
        <h1 className='text-center'>Contact US</h1>
      </div>
      <div className='container contact_duv'>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>
            <form>
            <div className="mb-3">
              <label for="fullNameFormControlInput1" className="form-label">Full Name</label>
              <input type="text" className="form-control" id="FullNameFormControlInput1" placeholder="Full Name"/>
            </div>
            <div className="mb-3">
              <label for="PhoneNumberFormControlInput1" className="form-label">Phone</label>
              <input type="Number" className="form-control" id="PhoneNumberFormControlInput1" placeholder="Phone Number"/>
            </div>
            <div className="mb-3">
              <label for="EmailFormControlInput1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="EmailFormControlInput1" placeholder="mail@example.com"/>
            </div>
            <div className="mb-3">
              <label for="MessageFormControlTextarea1" className="form-label">Message</label>
              <textarea className="form-control" id="MessageFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="col-12">
              <button class="btn btn-outline-primary" type="submit">Submit form</button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact