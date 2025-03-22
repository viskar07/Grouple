"use client"

import { Label } from "@/components/ui/label"
import React from "react"
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperProps } from "swiper/react"

type SliderProps = {
    children: React.ReactNode
    overlay?: boolean
    label?: string
} & SwiperProps

export const Slider = ({ children, overlay, label, ...rest }: SliderProps) => {
    return (
        <div className="w-full max-w-full overflow-x-hidden mt-5 relative">
            {overlay && (
                <>
                    <div className="absolute w-[40px] slider-overlay left-0 h-full z-50" />
                    <div className="absolute w-[40px] slider-overlay-rev left-0 h-full z-50" />
                </>
            )}

            {label && (
                <Label className="pl-7 ml-3 text-themeTextGray">{label}</Label>
            )}
            <Swiper
                modules={[Navigation, Pagination, Autoplay, FreeMode]}
                {...rest}
            >
                {children}
            </Swiper>
        </div>
    )
}
