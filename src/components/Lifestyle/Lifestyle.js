import React from "react";
import { useState } from "react";
import { FaArrowRight, FaArrowLeft, FaInstagram, FaYoutube, } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IconButton, Typography } from "@material-tailwind/react";
import Footer from "../../Ui/Footer/Footer";
import Lifestylecard from "./Lifestylecard/Lifestylecard";
import Lifestylesidenews from "./Lifestylesidenews/Lifestylesidenews";
import "./index.css"




const Lifestyle = () => {

    const [Lifestylecarddata, setLifestylecarddata] = useState({
        data: [
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/65-696x464.jpg", "بزرگترین اشتباهات اینفلوئنسرها در اینستاگرام", "13/10/1403","/lifestyle/detail/5"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/64-696x464.jpg", "استقامت خود را از طریق روش پیلاتس افزایش دهید", "13/10/1403","/lifestyle/detail/6"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/63-696x464.jpg", "بهترین تمرین برای بهبود عضلات پشت", "13/10/1403","/lifestyle/detail/7"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/62-696x464.jpg", "آهنگ های انگیزشی برای داشتن یک تمرین موفق", "13/10/1403","/lifestyle/detail/8"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/61-696x464.jpg", "چگونه با فعالیت های دلپذیر کالری بسوزانیم", "13/10/1403","/lifestyle/detail/9"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/60-696x452.jpg", "خطرات خوردن بیش از حد غذاهای رستورانی", "13/10/1403","/lifestyle/detail/10"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/59-696x466.jpg", "همه باید برای غذاهای مورد علاقه خود سفر کنند", "13/10/1403","/lifestyle/detail/11"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/58-696x465.jpg", "گوشت خوک خوشمزه در فر برای مسافران غذا", "13/10/1403","/lifestyle/detail/12"],

        ]
    })
    const [Lifestyleside, setLifestyleside] = useState({
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
                <div className="mx-8 sm:mx-16 md:mx-24 lg:mx-16 xl:mx-32 mt-12 mb-8">
                    <h2 className="text-[18px] sm:text-[22px] lg:text-[28px] font-bold mb-4">
                        سبک زندگی
                    </h2>
                    <p className="text-[#777777] text-[14px] md:text-[16px] text-justify md:text-start">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                    </p>
                </div>
                {/*title */}
                {/*title news*/}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-1">
                    <Link to="/lifestyle/detail/1">
                        <div className="relative group overflow-hidden">
                            <img className="w-full group-hover:scale-125  transition-transform duration-300" src="	https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/69-696x464.jpg" alt="news-img" />
                            <div className="title-news-first transition-opacity duration-300 w-full h-full absolute top-0"></div>
                            <div className="absolute bottom-2 xl:bottom-7  text-white mx-4">
                                <span className=" text-white  text-[10px] sm:text-[12px]">بیزینس</span>
                                <h3 className="text-[12px] xl:mt-2 xl:mb-2 mt-2 mb-2 lg:mb-0 lg:mt-0 sm:text-[16px] lg:text-[14px] xl:text-[16px] w-[80%]">
                                    برای ساختن آن در دنیای تجارت به چه چیزی نیاز دارم؟
                                </h3>
                                <span className="text-[10px] sm:text-[12px]">13/10/1403</span>
                            </div>
                        </div>
                    </Link>
                    <Link to="/lifestyle/detail/2">
                        <div className="relative group overflow-hidden">
                            <img className="w-full group-hover:scale-125  transition-transform duration-300" src="	https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/68-696x464.jpg" alt="news-img" />
                            <div className="title-news-second transition-opacity duration-300 w-full h-full absolute top-0"></div>
                            <div className="absolute bottom-2 xl:bottom-7  text-white mx-4">
                                <span className=" text-white  text-[10px] sm:text-[12px]">بیزینس</span>
                                <h3 className="text-[12px] xl:mt-2 xl:mb-2 mt-2 mb-2 lg:mb-0 lg:mt-0 sm:text-[16px] lg:text-[14px] xl:text-[16px] w-[80%]">
                                    برای ساختن آن در دنیای تجارت به چه چیزی نیاز دارم؟
                                </h3>
                                <span className="text-[10px] sm:text-[12px]">13/10/1403</span>
                            </div>
                        </div>
                    </Link>
                    <Link to="/lifestyle/detail/3">
                        <div className="relative group overflow-hidden">
                            <img className="w-full group-hover:scale-125  transition-transform duration-300" src="	https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/67-696x464.jpg" alt="news-img" />
                            <div className="title-news-third transition-opacity duration-300 w-full h-full absolute top-0"></div>
                            <div className="absolute bottom-2 xl:bottom-7  text-white mx-4">
                                <span className=" text-white  text-[10px] sm:text-[12px]">بیزینس</span>
                                <h3 className="text-[12px] xl:mt-2 xl:mb-2 mt-2 mb-2 lg:mb-0 lg:mt-0 sm:text-[16px] lg:text-[14px] xl:text-[16px] w-[80%]">
                                    برای ساختن آن در دنیای تجارت به چه چیزی نیاز دارم؟
                                </h3>
                                <span className="text-[10px] sm:text-[12px]">13/10/1403</span>
                            </div>
                        </div>
                    </Link>
                    <Link to="/lifestyle/detail/4">
                        <div className="relative group overflow-hidden">
                            <img className="w-full group-hover:scale-125  transition-transform duration-300" src="https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/66-696x465.jpg" alt="news-img" />
                            <div className="title-news-forth transition-opacity duration-300 w-full h-full absolute top-0"></div>
                            <div className="absolute bottom-2 xl:bottom-7  text-white mx-4">
                                <span className=" text-white  text-[10px] sm:text-[12px]">بیزینس</span>
                                <h3 className="text-[12px] xl:mt-2 xl:mb-2 mt-2 mb-2 lg:mb-0 lg:mt-0 sm:text-[16px] lg:text-[14px] xl:text-[16px]  w-[80%]">
                                    برای ساختن آن در دنیای تجارت به چه چیزی نیاز دارم؟
                                </h3>
                                <span className="text-[10px] sm:text-[12px]">13/10/1403</span>
                            </div>
                        </div>
                    </Link>

                    <div></div>
                </div>
                {/*title news*/}
            </div>
            <div className="flex md:flex-row flex-col mx-10 sm:mx-12 md:mx-10 lg:mx-16 xl:mx-32 gap-16 mt-16 md:mt-0">
                {/*news list */}

                <div className="mt-0 md:mt-20">
                    <div className="grid grid-cols-1 justify-center">
                        {Lifestylecarddata.data.map((item) => (
                            <Lifestylecard img={item[0]} title={item[1]} date={item[2]} link={item[3]} />
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
                <div className="lg:mx-auto mt-8 md:mt-20 sticky top-10 lg:w-[50%] xl:w-[60%] 2xl:w-[30%] h-full">
                    <div className="mb-10 mx-auto lg:mx-0">
                        <img className="w-full " src="https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/newspaper-rec300c.jpg.webp" alt="ad-img" />
                    </div>
                    <div className="mb-16">
                        <div className="">
                            <div className="border-b-[2px] pb-[2px] border-[#000000]   mb-6">
                                <span className="text-white px-2  py-1 bg-[#000000]">خبر های مهم</span>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 justify-around">
                            <Link to="#">
                                <div className="flex flex-col text-center border-[1px] border-[#ededed] max-w-[200px]  mx-auto md:mx-0 p-3 group">
                                    <span className="mx-auto mb-2 text-[26px] text-red-700">
                                        <FaYoutube />
                                    </span>
                                    <span className="text-[16px] font-bold text-black group-hover:text-opacity-65 transition-opacity duration-200">241,000</span>
                                    <span className="text-[14px] text-black group-hover:text-opacity-65 transition-opacity duration-200">دنبال کننده</span>
                                </div>
                            </Link>
                            <Link to="#">
                                <div className="flex flex-col text-center border-[1px] border-[#ededed] max-w-[200px]  mx-auto md:mx-0 p-3 group">
                                    <span className="mx-auto mb-2 text-[26px]">
                                        <FaXTwitter />
                                    </span>
                                    <span className="text-[16px] font-bold text-black group-hover:text-opacity-65 transition-opacity duration-200">78,000</span>
                                    <span className="text-[14px] text-black group-hover:text-opacity-65 transition-opacity duration-200">دنبال کننده</span>
                                </div>
                            </Link>
                            <Link to="#">
                                <div className="flex flex-col text-center border-[1px] border-[#ededed] max-w-[200px]  mx-auto md:mx-0 p-3 group">
                                    <span className="mx-auto mb-2 text-[26px] text-[#4db2ec]">
                                        <FaInstagram />
                                    </span>
                                    <span className="text-[16px] font-bold text-black group-hover:text-opacity-65 transition-opacity duration-200">40,000</span>
                                    <span className="text-[14px] text-black group-hover:text-opacity-65 transition-opacity duration-200">دنبال کننده</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className="border-b-[2px] pb-[2px] border-[#000000]   mb-6">
                            <span className="text-white px-2  py-1 bg-[#000000]">خبر های مهم</span>
                        </div>
                    </div>
                    <div className="">
                        {Lifestyleside.data.map((item) => (
                            <Lifestylesidenews img={item[0]} title={item[1]} date={item[2]} />
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

export default Lifestyle