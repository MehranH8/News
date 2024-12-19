import React from "react";
import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IconButton, Typography } from "@material-tailwind/react";
import Moviecard from "./Moviecard/Moviecard";
import Moviesidenews from "./Moviesidenews/Moviesidenews";
import Footer from "../../Ui/Footer/Footer";




const Movie = () => {

    const [Moviecarddata, setMoviecarddata] = useState({
        data: [
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/maxresdefault-5-696x392.jpg", "تکنیک های VFX: ایجاد یک پرچم CG با افترافکت", "13/10/1403","/movie/detail/3"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/maxresdefault-4-696x392.jpg", "دستور العمل های ویدئویی: چگونه یک کافه ماکیاتو عالی درست کنیم", "13/10/1403","/movie/detail/4"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/maxresdefault-7-696x392.jpg", "روال تمرینی برای ساعدهای بزرگ و بازو قدرتمند ", "13/10/1403","/movie/detail/5"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/maxresdefault-6-696x392.jpg", "عجیب ترین مکان ها خاکستر در آمریکای جنوبی پراکنده شده است", "13/10/1403","/movie/detail/6"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/maxresdefault-11-696x392.jpg", "عجیب ترین مکان ها خاکستر در آمریکای جنوبی پراکنده شده است", "13/10/1403","/movie/detail/7"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/maxresdefault-10-696x392.jpg", "گوروی دره سیلیکون تحت تاثیر سرمایه‌گذاری‌های فولمینانت کاهش یافته است", "13/10/1403","/movie/detail/8"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/maxresdefault-9-696x392.jpg", "روال تمرینی برای ساعدهای بزرگ و بازو قدرتمند ", "13/10/1403","/movie/detail/9"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/maxresdefault-8-696x392.jpg", "تکنیک های VFX: ایجاد یک پرچم CG با افترافکت", "13/10/1403","/movie/detail/10"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/09/11-696x464.jpg", "عجیب ترین مکان ها خاکستر در آمریکای جنوبی پراکنده شده است", "13/10/1403","/movie/detail/11"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/09/57-696x464.jpg", "تکنیک های VFX: ایجاد یک پرچم CG با افترافکت", "13/10/1403","/movie/detail/12"],

        ]
    })
    const [Movieside, setMovieside] = useState({
        data: [
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/120-696x471.jpg", "یکی دیگر از پروژه های بزرگ آپارتمانی برای فروش گذاشته شد", "13/10/1403"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/119-696x464.jpg", " یکی دیگر از پروژه های بزرگ آپارتمانی برای فروش گذاشته شد", "13/10/1403"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/118-696x464.jpg", "یکی دیگر از پروژه های بزرگ آپارتمانی برای فروش گذاشته شد", "13/10/1403"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/117-696x464.jpg", "یکی دیگر از پروژه های بزرگ آپارتمانی برای فروش گذاشته شد", "13/10/1403"],
        ]
    })



    const [active, setActive] = React.useState(1);

    const next = () => {
        if (active === 10) return;

        setActive(active + 1);
    };

    const prev = () => {
        if (active === 1) return;

        setActive(active - 1);
    };



    return (
        <div>
            <div>
                {/*title */}
                <div className="mx-8 sm:mx-16 md:mx-24 lg:mx-32 mt-20 mb-8">
                    <h2 className="text-[18px] sm:text-[22px] lg:text-[28px] font-bold mb-4">
                        فیلم و سریال
                    </h2>
                    <p className="text-[#777777] text-[14px] md:text-[16px] text-justify md:text-start">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                    </p>
                </div>
                {/*title */}
                {/*title news*/}
                <div className="grid grid-cols-1 lg:grid-cols-2 mx-8 sm:mx-12 md:mx-10 lg:mx-32 gap-y-8 gap-x-4">
                    <Link to="/movie/detail/1">
                        <div className="relative group">
                            <img className="w-full" src="https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/maxresdefault-9-696x392.jpg" alt="news-img" />
                            <div className="bg-[#000000] opacity-0 group-hover:opacity-40 transition-opacity duration-300 w-full h-full absolute top-0"></div>
                            <div className="absolute bottom-2 sm:bottom-7  text-white mx-4">
                                <span className="bg-[#000000b3] mb-2 text-white group-hover:bg-[#4db2ec] transition-colors duration-200 text-[10px] sm:text-[12px] px-2 sm:px-3 py-1">فیلم</span>
                                <h3 className="text-[12px] sm:text-[16px] md:text-[18px] w-[80%]">
                                    جلوه های ویژه جدید برای فیلم کریستوفر نولان با بازی تام هنکس و برد پیت
                                </h3>
                                <span className="text-[10px] sm:text-[12px]">13/10/1403</span>
                            </div>
                        </div>
                    </Link>
                    <Link to="/movie/detail/2">
                        <div className="relative group">
                            <img className="w-full" src="https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/maxresdefault-10-696x392.jpg" alt="news-img" />
                            <div className="bg-[#000000] opacity-0 group-hover:opacity-40 transition-opacity duration-300 w-full h-full absolute top-0"></div>
                            <div className="absolute bottom-2 sm:bottom-7  text-white mx-4">
                                <span className="bg-[#000000b3] mb-2 text-white group-hover:bg-[#4db2ec] transition-colors duration-200 text-[10px] sm:text-[12px] px-2 sm:px-3 py-1">فیلم</span>
                                <h3 className="text-[12px] sm:text-[16px] md:text-[18px] w-[80%]">
                                    جلوه های ویژه جدید برای فیلم کریستوفر نولان با بازی تام هنکس و برد پیت
                                </h3>
                                <span className="text-[10px] sm:text-[12px]">13/10/1403</span>
                            </div>
                        </div>
                    </Link>
                    <div></div>
                </div>
                {/*title news*/}
            </div>
            <div className="flex md:flex-row flex-col mx-8 sm:mx-12 md:mx-10 lg:mx-32 gap-16 ">
                {/*news list */}

                <div className="mt-0 md:mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center">
                        {Moviecarddata.data.map((item) => (
                            <Moviecard img={item[0]} title={item[1]} date={item[2]} link={item[3]}/>
                        ))}
                    </div>
                    {/*pagnition */}
                    <div className="flex items-center justify-center mt-14 gap-4 sm:gap-8">
                        <IconButton
                            size="sm"
                            variant="outlined"
                            onClick={prev}
                            disabled={active === 1}
                        >
                            <FaArrowRight strokeWidth={2} className="h-4 w-4" />
                        </IconButton>

                        <Typography color="gray" className="font-normal">
                            صفحه <strong className="text-gray-900">{active}</strong> از{" "}
                            <strong className="text-gray-900">10</strong>
                        </Typography>
                        <IconButton
                            size="sm"
                            variant="outlined"
                            onClick={next}
                            disabled={active === 10}
                        >
                            <FaArrowLeft strokeWidth={2} className="h-4 w-4" />
                        </IconButton>
                    </div>
                    {/*pagnition */}
                </div>
                {/*news list */}
                {/*sidebar */}
                <div className="lg:mx-auto mt-8 lg:mt-20 sticky top-10 lg:w-[80%] xl:w-[60%] 2xl:w-[40%] h-full">
                    <div className="mb-10 mx-auto lg:mx-0">
                        <img className="w-full " src="https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/newspaper-rec300c.jpg.webp" alt="ad-img" />
                    </div>
                    <div>
                        <div className="border-b-[2px] pb-[2px] border-[#000000]   mb-6">
                            <span className="text-white px-2  py-1 bg-[#000000]">خبر های مهم</span>
                        </div>
                    </div>
                    <div className="">
                        {Movieside.data.map((item) => (
                            <Moviesidenews img={item[0]} title={item[1]} date={item[2]} />
                        ))}
                    </div>
                </div>
                {/*sidebar */}
            </div>
            {/*footer */}
            <Footer />
            {/*footer */}
        </div>
    )
}


export default Movie