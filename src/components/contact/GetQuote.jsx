import React from "react";

function GetQuote() {
  return (
    <div className="ltn__contact-message-area mb-120 mb--100">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ltn__form-box contact-form-box box-shadow white-bg">
              <h4 className="title-2">Enquire Now</h4>
              <form
                id="contact-form"
                action="https://tunatheme.com/tf/html/autixir-preview/autixir/mail.php"
                method="post"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="input-item input-item-name ">
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-email ">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter email address"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-phone ">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-phone ">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Make of the Vehicle"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-name ">
                      <input
                        type="text"
                        name="name"
                        placeholder="Model of the Vehicle"
                      />
                    </div>
                  </div>
                 
                  <div className="col-md-6">
                    <div className="input-item input-item-name ">
                      <input
                        type="text"
                        name="name"
                        placeholder="Manufacture Year"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-name ">
                      <input
                        type="text"
                        name="name"
                        placeholder="Budget"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-name ">
                      <input
                        type="text"
                        name="name"
                        placeholder="Ready to Buy?"
                      />
                    </div>
                  </div>
                  
                </div>
                <div className="input-item input-item-textarea ">
                  <textarea
                    name="message"
                    placeholder="Leave any extra details you would like to share!"
                  ></textarea>
                </div>
               
                <div className="btn-wrapper mt-0">
                  <button
                    className="btn theme-btn-1 btn-effect-1 text-uppercase"
                    type="submit"
                  >
                    Send Enquiry
                  </button>
                </div>
                <p className="form-messege mb-0 mt-20"></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetQuote;
