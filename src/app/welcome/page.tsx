"use client";
import { BsArrowRight } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Lens } from "@/components/magicui/lens";
import { RootState } from "@/store/store";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BorderBeam } from "@/components/magicui/border-beam";



export default function Welcome() {

    const mouse = useSelector((state: RootState) => state.mouse);
    const [password, setPassword] = useState("password");
    const [wrongPassword, setWrongPassword] = useState(false);
    const router = useRouter();



    const handleLogin = (value: string) => {
        if (value === "password") {
            setWrongPassword(false);
            alert("Login successful");
            router.push("/IkOS");
        } else {
            alert("Login failed");
        }
    }



    return (
        <div
            className="w-screen h-screen overflow-hidden flex items-center justify-center relative bg-background"
        >

            {/* bg overlay */}
            <div className="absolute inset-0 bg-[#1a1172] opacity-95 z-10" />

            {/* Orbiting images container */}

            <Lens position={mouse} zoomFactor={2} lensSize={200} >

                {/* Login card */}
                <div className="w-[min(395px,calc(100vw-32px))] h-[325px] flex flex-col items-center justify-end p-3 gap-3 border border-white/20 relative z-50 backdrop-blur-md bg-white/10 rounded-2xl shadow-2xl">

                    <div className="absolute top-4 w-28 h-28 rounded-full overflow-hidden">
                        <Image
                            src="/bg/programmer.jpg"
                            alt="Welcome"
                            layout="fill"
                            objectFit="cover"
                            // className="rounded-2xl"
                        />
                    </div>

                    <div className="w-10/12 h-2/4 bg-[#515a9c] rounded-2xl flex flex-col items-center justify-end p-3 gap-3 shadow-lg">
                        <h1 className="text-white text-2xl font-bold">Welcome Guest</h1>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            className="w-9/12 h-10 bg-[#666fb4] text-white flex items-center justify-center text-center outline-none border-none rounded shadow-lg placeholder-white/70"
                            placeholder="Enter password"
                        />
                    <BorderBeam duration={8} size={100} />
                    </div>
                    <button className="w-16 h-16 rounded-full bg-[#2563eb] text-black font-semibold shadow-lg hover:bg-[#063bad] hover:cursor-pointer transition-all duration-300 flex items-center justify-center hover:scale-105" onClick={() => handleLogin(password)}>
                        <BsArrowRight color="white" size={40} />
                    </button>
                    <BorderBeam duration={8} size={100} />
                </div>
            </Lens>
        </div>
    );
}