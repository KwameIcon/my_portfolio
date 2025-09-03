"use client";
import { setMousePosition } from "@/store/slice/mouseSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";





export function GlobalMouseTracker() {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      dispatch(setMousePosition({ x: e.clientX, y: e.clientY }));
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [dispatch]);

  

  return null;
}
