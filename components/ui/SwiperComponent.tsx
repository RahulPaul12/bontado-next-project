'use client'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide} from 'swiper/react';
import { Pagination, Navigation} from 'swiper/modules';
const SwiperComponent = ({children}: {children: React.ReactNode}) => {
    return (
        <>
        <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            navigation={{
                 prevEl: '.swiper-button-prev',
                 nextEl: '.swiper-button-next',
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            {children}
        </Swiper>
            <div className="swiper-button-prev" />
            <div className="swiper-button-next" />
        </>
    )
}

export default SwiperComponent