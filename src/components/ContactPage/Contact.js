import React from "react";

import Title from "../Title";

const Contact = () => {
  return (
    <section className="py-5">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <Title title="contact us" center />
          <form
            className="mt-5"
            action="https://formspree.io/tranhuyviet@gmail.com"
            method="POST"
          >
            {/* name  */}
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                className="form-control"
                placeholder="viet tran"
              />
            </div>

            {/* email  */}
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="viet@viet.com"
              />
            </div>

            {/* subject  */}
            <div className="form-group">
              <input
                type="text"
                name="subject"
                className="form-control"
                placeholder="subject"
              />
            </div>

            {/* message */}
            <div className="form-group">
              <textarea
                name="message"
                rows="10"
                className="form-control "
                placeholder="message"
              ></textarea>
            </div>

            {/* submit */}
            <div className="form-group mt-3">
              <input
                type="submit"
                value="Send"
                className="form-control bg-primary text-white"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
