import React from 'react';

export default function Contacts() {
  return (
    <div>
      <center>
        <div className="card mb-3 mt-5" style={{ maxWidth: '740px' }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src="/contact.jpg" className="img-fluid rounded-start  me-3" alt="contact" style={{ height: '250px', width:'350px' }}/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Get in Touch with Us</h5>
                <p className="card-text">

We’re here to assist you! If you have any questions or need support, feel free to reach out through the following channels:<br/>

Email: support@emart.com<br/>
Phone: +1 (800) 123-4567<br/>
Physical Address: 123 eMart Blvd, City, State, ZIP.</p>
                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div></center>
    </div>
  );
}
