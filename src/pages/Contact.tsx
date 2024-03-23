import React, { useState, useEffect, FormEvent } from 'react';
import Header from "../components/Header"
import Footer from "../components/Footer"

const Contact: React.FC = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [response, setResponse] = useState<string>("");
    const [btnDisabled, setBtnDisabled] = useState<boolean>(true);

    useEffect(() => {
        if(email.includes("@") && name.length > 4 && message.length > 10){
            setBtnDisabled(false);
        } else {
            setBtnDisabled(true);
        }
    }, [name, email, message]);

    const handleForm = async (e: FormEvent) => {
        e.preventDefault();
        
        const requestOptions: RequestInit = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, message })
        };

        try {
            const response = await fetch("/api/mail", requestOptions);
            const data = await response.json();
            setResponse(data.message);
        } catch(err: any) {
            setResponse(err.message);
        }
    };

    return (
        <>
        <Header/>
        <main className='Main'>
            <div className='right-side'>
                <h1 className="heading text-center">Contact us</h1>
                <form className="contect-section">
                    <div className="mb-4">
                        <input type="text" className="Name-Section textbox" placeholder="Name" value={name} onChange={(e) => { setName(e.target.value) }} />
                    </div>
                    <div className="mb-4">
                        <input type="email" className=" Email-Section textbox" placeholder="Enter Email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    </div>
                    <div className="mb-4">
                        <textarea className="Message-Section textarea" placeholder="Enter Message..." value={message} onChange={(e) => { setMessage(e.target.value) }}></textarea>
                    </div>
                    <div className="Submit">
                        <button type="submit" className={`w-full py-2 bg-blue-500 text-white rounded ${btnDisabled ? "opacity-75 cursor-not-allowed" : ""}`} onClick={(e) => { handleForm(e) }} disabled={btnDisabled}>Send Message</button>
                    </div>
                    <p className="text-red-800 font-bold text-center">{response}</p>
                </form>
            </div>
        </main>
        <Footer/>
        </>
    );
}

export default Contact;
