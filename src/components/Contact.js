import React from "react";

export const Contact = () => {
  return (
    <>
      <div className="contactContainer">
        <div className="ContactForm">
          {/* <img src="   https://cdn-icons-png.flaticon.com/512/14946/14946653.png " alt="" /> */}
          <form
            id="contactForm"
            action="mailto:yashasharma21005@gmail.com"
            method="post"
            encType="text/plain"
          >
            <label htmlFor="name">Name:</label>
            <br />
            <input type="text" id="name" name="name" required="" />
            <br />
            <br />
            <label htmlFor="email">Email:</label>
            <br />
            <input type="email" id="email" name="email" required="" />
            <br />
            <br />
            <label htmlFor="subject">Subject:</label>
            <br />
            <input type="text" id="subject" name="subject" required="" />
            <br />
            <br />
            <label htmlFor="message">Message:</label>
            <br />
            <textarea
              id="message"
              name="message"
              rows={4}
              cols={50}
              required=""
              defaultValue={""}
            />
            <br />
            <br />
            <input type="submit" defaultValue="Send" />
          </form>
        </div>
        <div className="Contact">
          <center>
            <h1>CONTACT</h1>
          </center>
          <div className="contactLink">
            <img
              src="https://cdn-icons-png.flaticon.com/512/15699/15699795.png"
              alt=""
            />
            <a href="mailto:yashasharma21005@gmail.com">
              yashasharma21005@gmail.com
            </a>
          </div>
          <div className="contactLink">
            <img
              src="https://cdn-icons-png.flaticon.com/512/16439/16439341.png"
              alt=""
            />
            <a href="tel:+919004054122">+919004054122</a>
          </div>
          <div className="contactLink">
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt=""
            />
            <a href="https://www.linkedin.com/in/sharma-yash-374bb12bb/">
              Yash Sharma
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

// call =    https://cdn-icons-png.flaticon.com/512/16439/16439341.png
// mail =     https://cdn-icons-png.flaticon.com/512/15699/15699795.png
// img =    https://cdn-icons-png.flaticon.com/512/14946/14946653.png
