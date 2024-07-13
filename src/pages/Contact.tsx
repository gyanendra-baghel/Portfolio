import React, { useState, useEffect, FormEvent } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { pageView } from "../config/analytics";

const Contact: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [response, setResponse] = useState<string>("");
  const [btnDisabled, setBtnDisabled] = useState<boolean>(true);

  useEffect(() => {
    pageView("Contact Page");
  });

  useEffect(() => {
    if (email.includes("@") && message.length > 10) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  }, [email, message]);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log("Submission");
    // @ts-expect-error
    const form: HTMLFormElement = event.target;
    var data = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          setResponse("Thanks for your submission!");
          setEmail("");
          setMessage("");
        } else {
          response.json().then((data) => {
            if (data["errors"]) {
              setResponse(
                data["errors"].map((error: any) => error["message"]).join(", ")
              );
            } else {
              setResponse("Oops! There was a problem submitting your form");
            }
          });
        }
      })
      .catch(() => {
        setResponse("Oops! There was a problem submitting your form");
      });
  }

  return (
    <>
      <Header />
      <main className="wrapper-container ">
        <div className="wrapper">
          <div className="contact-section">
            <h1 className="heading text-center">Contact</h1>
            <form
              className="contect-section"
              method="POST"
              action="https://formspree.io/f/mdknkekp"
              onSubmit={handleSubmit}
            >
              <label>Email:</label>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  className="textbox"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <label>Message:</label>
              <div className="mb-4">
                <textarea
                  className="textarea"
                  name="message"
                  placeholder="Enter Message..."
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                ></textarea>
              </div>
              <div className="txt-center">
                <button
                  type="submit"
                  className="submit-btn"
                  disabled={btnDisabled}
                >
                  Send Message
                </button>
              </div>
              <p
                className="font-bold text-center"
                style={{ marginTop: "10px", color: "#bb0000" }}
              >
                {response}
              </p>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
