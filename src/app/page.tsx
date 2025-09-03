"use client"
import Welcome from "@/app/welcome/page";
import { useEffect, useState } from "react";
import { CircleLoader } from "react-spinners";
import { AnimatePresence, motion } from "framer-motion";






export default function Home() {
  const [isLoading, setIsLoading] = useState(true);



  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer);

  }, []);




  return (
    <AnimatePresence mode="sync">
      {isLoading ? (
        <motion.main
          key="loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.6 }}
          transition={{ duration: 0.6 }}
          className="w-screen h-screen bg-blue-800 flex items-center justify-center"
        >
          <CircleLoader color="#56ddc3" size={100} />
        </motion.main>
      ) : (
        <motion.main
          key="welcome"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-screen h-screen bg-blue-800"
        >
          <Welcome />
        </motion.main>
      )}
    </AnimatePresence>
  );
}
