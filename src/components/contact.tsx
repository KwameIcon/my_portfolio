import CustomeModal from "./commons/modal";
import emailjs from '@emailjs/browser';
import { useEffect, useRef, useState } from "react";






export default function ContactMe() {
    const form = useRef<HTMLFormElement>(null);
    const [isSending, setIsSending] = useState(false);
    const [isError, setIsError] = useState(false);
    const [message, setMessage] = useState("");


    
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSending(true);
        setIsError(false);
        setMessage("Sending...");

        emailjs
            .sendForm(
                'service_uxzbpbj',
                'template_ia3zzzm',
                form.current!,
                'nQIw5vy24xpcJVul0'
            )
            .then(
                () => {
                    setIsSending(false);
                    setMessage("Mail sent successfully!");
                },
                (error) => {
                    setIsSending(false);
                    setIsError(true);
                    setMessage("Failed to send mail!");
                    console.log('FAILED...', error.text);
                }
            )
    }



    useEffect(() => {
        if (!isSending && message) {
            setTimeout(() => {
                setMessage("");
            }, 7000)
        }
    }, [isSending, message])



    return (
        <CustomeModal title="Contact Me" type="contact" id="contact">
            <div className="w-full h-full p-4 flex flex-col gap-4 justify-start text-black/70">

                <h2 className="text-xl font-semibold mt-5">Send me an email message</h2>

                <form ref={form} onSubmit={sendEmail} className="flex flex-col items-start gap-3">

                    <div className="w-full flex items-center justify-center">
                        {message && <p className={`text-sm font-bold w-fit p-2 rounded-full text-center ${isError ? 'bg-[#FBD8D5] text-[#AA0303]' : 'bg-[#ECF8EC] text-[#009788]'}`}>{message}</p>}
                    </div>

                    <label>Name</label>
                    <input type="text" name="user_name" className="border rounded-xl w-full h-12 focus:border-[#3498D8] transition-colors duration-300 ease-linear hover:border-cyan-500 px-2" required />
                    <label>Email</label>
                    <input type="email" name="user_email" className="border rounded-xl w-full h-12 focus:border-[#3498D8] transition-colors duration-300 ease-linear hover:border-cyan-500 px-2" required />
                    <label>Message</label>
                    <textarea name="message" className="border rounded-xl w-full h-40 focus:border-[#3498D8] transition-colors duration-300 ease-linear hover:border-cyan-500 p-3" required />
                    <div className="w-full flex items-center justify-end h-20">
                        <input type="submit" value={isSending ? "Sending..." : "Send"} disabled={isSending} className="px-4 py-2 bg-[#3498DB] text-white rounded-lg cursor-pointer transition-all duration-300 ease-linear hover:bg-[#2980b9] hover:scale-105 hover:font-bold" />
                    </div>
                </form>
            </div>
        </CustomeModal>
    );
}