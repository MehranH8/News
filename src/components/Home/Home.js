import React from "react";
import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IconButton, Typography } from "@material-tailwind/react";
import Moviecard from "../Movie/Moviecard/Moviecard";
import Moviesidenews from "../Movie/Moviesidenews/Moviesidenews";
import Footer from "../../Ui/Footer/Footer";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import SideTwoCol from "./SideTwoCol";
import Fashionsidenews from "../Fashion/Fashionsidenews/Fashionsidenews";
import NewsTwoCol from "./NewsTwoCol";
import SidenewsImg from "./SidenewsImg";
import Sidetext from "./Sidetext";
import NewsOneCol from "./NewsOneCol";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";



const Home = () => {


    const [Sidenewstext, setSidenewstext] = useState({
        data: [
            ["یکی دیگر از پروژه های بزرگ آپارتمانی برای فروش گذاشته شد", "13/10/1403"],
            [" یکی دیگر از پروژه های بزرگ آپارتمانی برای فروش گذاشته شد", "13/10/1403"],
            ["یکی دیگر از پروژه های بزرگ آپارتمانی برای فروش گذاشته شد", "13/10/1403"],
            ["یکی دیگر از پروژه های بزرگ آپارتمانی برای فروش گذاشته شد", "13/10/1403"],
            ["یکی دیگر از پروژه های بزرگ آپارتمانی برای فروش گذاشته شد", "13/10/1403"],
        ]
    })


    const [Sideimg, setSideimg] = useState({
        data: [
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/120-696x471.jpg", "یکی دیگر از پروژه های بزرگ آپارتمانی برای فروش گذاشته شد", "13/10/1403"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/119-696x464.jpg", " یکی دیگر از پروژه های بزرگ آپارتمانی برای فروش گذاشته شد", "13/10/1403"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/118-696x464.jpg", "یکی دیگر از پروژه های بزرگ آپارتمانی برای فروش گذاشته شد", "13/10/1403"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/117-696x464.jpg", "یکی دیگر از پروژه های بزرگ آپارتمانی برای فروش گذاشته شد", "13/10/1403"],
        ]
    })
    const [thirdnews, setthirdnews] = useState({
        data: [
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/maxresdefault-5-696x392.jpg", "تکنیک های VFX: ایجاد یک پرچم CG با افترافکت", "13/10/1403","/movie/detail/3"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/maxresdefault-4-696x392.jpg", "دستور العمل های ویدئویی: چگونه یک کافه ماکیاتو عالی درست کنیم", "13/10/1403","/movie/detail/4"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/maxresdefault-7-696x392.jpg", "روال تمرینی برای ساعدهای بزرگ و بازو قدرتمند ", "13/10/1403","/movie/detail/5"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/maxresdefault-6-696x392.jpg", "عجیب ترین مکان ها خاکستر در آمریکای جنوبی پراکنده شده است", "13/10/1403","/movie/detail/6"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/maxresdefault-11-696x392.jpg", "عجیب ترین مکان ها خاکستر در آمریکای جنوبی پراکنده شده است", "13/10/1403","/movie/detail/7"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/maxresdefault-10-696x392.jpg", "گوروی دره سیلیکون تحت تاثیر سرمایه‌گذاری‌های فولمینانت کاهش یافته است", "13/10/1403","/movie/detail/8"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/maxresdefault-7-696x392.jpg", "روال تمرینی برای ساعدهای بزرگ و بازو قدرتمند ", "13/10/1403","/movie/detail/5"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/maxresdefault-5-696x392.jpg", "تکنیک های VFX: ایجاد یک پرچم CG با افترافکت", "13/10/1403","/movie/detail/3"],
         
        ]
    })
    const [firstnews, setfirstnews] = useState({
        data: [
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/31-696x466.jpg", " بهترین ابزارها و ویژگی های خانه هوشمند", "13/10/1403","/technology/detail/1"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/31-696x466.jpg", "بازی اکشن جدید با صدای Hi-Fi ممتاز به روز شده است", "13/10/1403","/technology/detail/2"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/29-696x464.jpg", "سوپر تراشه اسنپدراگون بر روی جدیدترین دوربین های عکاسی نصب شده است", "13/10/1403","/technology/detail/3"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/29-696x464.jpg", " دوربین بهتری را برای حساب YouTube خود کشف کنید", "13/10/1403","/technology/detail/4"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/27-696x464.jpg", " بهترین ابزارها و ویژگی های خانه هوشمند", "13/10/1403","/technology/detail/5"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/31-696x466.jpg", " بهترین ابزارها و ویژگی های خانه هوشمند", "13/10/1403","/technology/detail/1"],
       
        ]
    })

    const [SideTwoColdata, setSideTwoColdata] = useState({
        data: [
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/120-696x471.jpg", "یکی دیگر از پروژه های بزرگ آپارتمانی برای فروش گذاشته شد"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/119-696x464.jpg", " یکی دیگر از پروژه های بزرگ آپارتمانی برای فروش گذاشته شد"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/118-696x464.jpg", "یکی دیگر از پروژه های بزرگ آپارتمانی برای فروش گذاشته شد"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/117-696x464.jpg", "یکی دیگر از پروژه های بزرگ آپارتمانی برای فروش گذاشته شد"],
        ]
    })
    const [SideOneColdata, setSideOneColdata] = useState({
        data: [
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/120-696x471.jpg", "یکی دیگر از پروژه های بزرگ آپارتمانی برای فروش گذاشته شد"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/119-696x464.jpg", " یکی دیگر از پروژه های بزرگ آپارتمانی برای فروش گذاشته شد"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/118-696x464.jpg", "یکی دیگر از پروژه های بزرگ آپارتمانی برای فروش گذاشته شد"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/117-696x464.jpg", "یکی دیگر از پروژه های بزرگ آپارتمانی برای فروش گذاشته شد"],
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
    const data = [
        {
            label: "فوری",
            value: "topnews",
            desc:
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-6">
                    <div className="mb-8 xl:mb-0">
                        <Link className="" to="/topnews">
                            <div className="group flex flex-col gap-x-10">
                                <div>
                                    <div className="w-full mb-3 h-full lg:h-auto">
                                        <img className="w-full h-full  lg:h-auto  lg:max-h-[200px]" src="	https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/116-485x360.jpg" alt="news-img" />
                                    </div>
                                </div>
                                <div className="my-auto">
                                    <div className="mb-2">
                                        <h4 className="text-[14px] sm:text-[16px] font-bold text-black group-hover:text-[#4db2ec] transition-colors duration-200">
                                            یکی دیگر از پروژه های بزرگ آپارتمانی برای فروش گذاشته شد
                                        </h4>
                                    </div>
                                    <div className="mt-1 mb-4">
                                        <p className="text-[14px] text-[#797979] text-justify sm:text-start">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                                    </div>
                                    <div>
                                        <span className="text-[12px] text-[#797979]">18/10/1403</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="">
                        <Link to="/topnews">
                            <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-y-2 text-center sm:text-start gap-x-6 mb-4 sm:mb-2 group">
                                <div className=" lg:mx-0 my-auto">
                                    <img className="mb-2 max-w-[100px] mx-auto" src="	https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/105-218x150.jpg" alt="news-img" />
                                </div>
                                <div className="my-auto">
                                    <p className="text-[14px] group-hover:text-[#1aa4ce] transition-colors duration-200">
                                        خانه تک رنگ مدرن با تراس و پله های آرام و دنج
                                    </p>
                                    <span className="text-[12px] text-[#797979]">18/10/1403</span>
                                </div>
                            </div>
                        </Link>
                        <Link to="/topnews">
                            <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-y-2 text-center sm:text-start gap-x-6 mb-4 sm:mb-2 group">
                                <div className=" lg:mx-0 my-auto">
                                    <img className="mb-2 max-w-[100px] mx-auto" src="	https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/105-218x150.jpg" alt="news-img" />
                                </div>
                                <div className="my-auto">
                                    <p className="text-[14px] group-hover:text-[#1aa4ce] transition-colors duration-200">
                                        خانه تک رنگ مدرن با تراس و پله های آرام و دنج
                                    </p>
                                    <span className="text-[12px] text-[#797979]">18/10/1403</span>
                                </div>
                            </div>
                        </Link>
                        <Link to="/topnews">
                            <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-y-2 text-center sm:text-start gap-x-6 mb-4 sm:mb-2 group">
                                <div className=" lg:mx-0 my-auto">
                                    <img className="mb-2 max-w-[100px] mx-auto" src="	https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/105-218x150.jpg" alt="news-img" />
                                </div>
                                <div className="my-auto">
                                    <p className="text-[14px] group-hover:text-[#1aa4ce] transition-colors duration-200">
                                        خانه تک رنگ مدرن با تراس و پله های آرام و دنج
                                    </p>
                                    <span className="text-[12px] text-[#797979]">18/10/1403</span>
                                </div>
                            </div>
                        </Link>
                        <Link to="/topnews">
                            <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-y-2 text-center sm:text-start gap-x-6 mb-4 sm:mb-2 group">
                                <div className=" lg:mx-0 my-auto">
                                    <img className="mb-2 max-w-[100px] mx-auto" src="	https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/105-218x150.jpg" alt="news-img" />
                                </div>
                                <div className="my-auto">
                                    <p className="text-[14px] group-hover:text-[#1aa4ce] transition-colors duration-200">
                                        خانه تک رنگ مدرن با تراس و پله های آرام و دنج
                                    </p>
                                    <span className="text-[12px] text-[#797979]">18/10/1403</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
        },

        {
            label: "مد",
            value: "fashion",
            desc:
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-6">
            <div className="mb-8 xl:mb-0">
                <Link className="" to="/topnews">
                    <div className="group flex flex-col gap-x-10">
                        <div>
                            <div className="w-full mb-3 h-full lg:h-auto">
                                <img className="w-full h-full  lg:h-auto  lg:max-h-[200px]" src="	https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/116-485x360.jpg" alt="news-img" />
                            </div>
                        </div>
                        <div className="my-auto">
                            <div className="mb-2">
                                <h4 className="text-[14px] sm:text-[16px] font-bold text-black group-hover:text-[#4db2ec] transition-colors duration-200">
                                    یکی دیگر از پروژه های بزرگ آپارتمانی برای فروش گذاشته شد
                                </h4>
                            </div>
                            <div className="mt-1 mb-4">
                                <p className="text-[14px] text-[#797979] text-justify sm:text-start">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                            </div>
                            <div>
                                <span className="text-[12px] text-[#797979]">18/10/1403</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="">
                <Link to="/topnews">
                    <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-y-2 text-center sm:text-start gap-x-6 mb-4 sm:mb-2 group">
                        <div className=" lg:mx-0 my-auto">
                            <img className="mb-2 max-w-[100px] mx-auto" src="	https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/104-218x150.jpg" alt="news-img" />
                        </div>
                        <div className="my-auto">
                            <p className="text-[14px] group-hover:text-[#1aa4ce] transition-colors duration-200">
                                خانه تک رنگ مدرن با تراس و پله های آرام و دنج
                            </p>
                            <span className="text-[12px] text-[#797979]">18/10/1403</span>
                        </div>
                    </div>
                </Link>
                <Link to="/topnews">
                    <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-y-2 text-center sm:text-start gap-x-6 mb-4 sm:mb-2 group">
                        <div className=" lg:mx-0 my-auto">
                            <img className="mb-2 max-w-[100px] mx-auto" src="	https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/104-218x150.jpg" alt="news-img" />
                        </div>
                        <div className="my-auto">
                            <p className="text-[14px] group-hover:text-[#1aa4ce] transition-colors duration-200">
                                خانه تک رنگ مدرن با تراس و پله های آرام و دنج
                            </p>
                            <span className="text-[12px] text-[#797979]">18/10/1403</span>
                        </div>
                    </div>
                </Link>
                <Link to="/topnews">
                    <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-y-2 text-center sm:text-start gap-x-6 mb-4 sm:mb-2 group">
                        <div className=" lg:mx-0 my-auto">
                            <img className="mb-2 max-w-[100px] mx-auto" src="	https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/104-218x150.jpg" alt="news-img" />
                        </div>
                        <div className="my-auto">
                            <p className="text-[14px] group-hover:text-[#1aa4ce] transition-colors duration-200">
                                خانه تک رنگ مدرن با تراس و پله های آرام و دنج
                            </p>
                            <span className="text-[12px] text-[#797979]">18/10/1403</span>
                        </div>
                    </div>
                </Link>
                <Link to="/topnews">
                    <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-y-2 text-center sm:text-start gap-x-6 mb-4 sm:mb-2 group">
                        <div className=" lg:mx-0 my-auto">
                            <img className="mb-2 max-w-[100px] mx-auto" src="	https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/104-218x150.jpg" alt="news-img" />
                        </div>
                        <div className="my-auto">
                            <p className="text-[14px] group-hover:text-[#1aa4ce] transition-colors duration-200">
                                خانه تک رنگ مدرن با تراس و پله های آرام و دنج
                            </p>
                            <span className="text-[12px] text-[#797979]">18/10/1403</span>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
        },
        {
            label: "سبک زندگی",
            value: "lifstyle",
            desc: 
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-6">
            <div className="mb-8 xl:mb-0">
                <Link className="" to="/topnews">
                    <div className="group flex flex-col gap-x-10">
                        <div>
                            <div className="w-full mb-3 h-full lg:h-auto">
                                <img className="w-full h-full  lg:h-auto  lg:max-h-[200px]" src="	https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/116-485x360.jpg" alt="news-img" />
                            </div>
                        </div>
                        <div className="my-auto">
                            <div className="mb-2">
                                <h4 className="text-[14px] sm:text-[16px] font-bold text-black group-hover:text-[#4db2ec] transition-colors duration-200">
                                    یکی دیگر از پروژه های بزرگ آپارتمانی برای فروش گذاشته شد
                                </h4>
                            </div>
                            <div className="mt-1 mb-4">
                                <p className="text-[14px] text-[#797979] text-justify sm:text-start">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                            </div>
                            <div>
                                <span className="text-[12px] text-[#797979]">18/10/1403</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="">
                <Link to="/topnews">
                    <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-y-2 text-center sm:text-start gap-x-6 mb-4 sm:mb-2 group">
                        <div className=" lg:mx-0 my-auto">
                            <img className="mb-2 max-w-[100px] mx-auto" src="	https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/101-218x150.jpg" alt="news-img" />
                        </div>
                        <div className="my-auto">
                            <p className="text-[14px] group-hover:text-[#1aa4ce] transition-colors duration-200">
                                خانه تک رنگ مدرن با تراس و پله های آرام و دنج
                            </p>
                            <span className="text-[12px] text-[#797979]">18/10/1403</span>
                        </div>
                    </div>
                </Link>
                <Link to="/topnews">
                    <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-y-2 text-center sm:text-start gap-x-6 mb-4 sm:mb-2 group">
                        <div className=" lg:mx-0 my-auto">
                            <img className="mb-2 max-w-[100px] mx-auto" src="	https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/101-218x150.jpg" alt="news-img" />
                        </div>
                        <div className="my-auto">
                            <p className="text-[14px] group-hover:text-[#1aa4ce] transition-colors duration-200">
                                خانه تک رنگ مدرن با تراس و پله های آرام و دنج
                            </p>
                            <span className="text-[12px] text-[#797979]">18/10/1403</span>
                        </div>
                    </div>
                </Link>
                <Link to="/topnews">
                    <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-y-2 text-center sm:text-start gap-x-6 mb-4 sm:mb-2 group">
                        <div className=" lg:mx-0 my-auto">
                            <img className="mb-2 max-w-[100px] mx-auto" src="	https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/101-218x150.jpg" alt="news-img" />
                        </div>
                        <div className="my-auto">
                            <p className="text-[14px] group-hover:text-[#1aa4ce] transition-colors duration-200">
                                خانه تک رنگ مدرن با تراس و پله های آرام و دنج
                            </p>
                            <span className="text-[12px] text-[#797979]">18/10/1403</span>
                        </div>
                    </div>
                </Link>
                <Link to="/topnews">
                    <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-y-2 text-center sm:text-start gap-x-6 mb-4 sm:mb-2 group">
                        <div className=" lg:mx-0 my-auto">
                            <img className="mb-2 max-w-[100px] mx-auto" src="	https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/101-218x150.jpg" alt="news-img" />
                        </div>
                        <div className="my-auto">
                            <p className="text-[14px] group-hover:text-[#1aa4ce] transition-colors duration-200">
                                خانه تک رنگ مدرن با تراس و پله های آرام و دنج
                            </p>
                            <span className="text-[12px] text-[#797979]">18/10/1403</span>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
        },
        {
            label: "فیلم",
            value: "movie",
            desc:
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-6">
            <div className="mb-8 xl:mb-0">
                <Link className="" to="/topnews">
                    <div className="group flex flex-col gap-x-10">
                        <div>
                            <div className="w-full mb-3 h-full lg:h-auto">
                                <img className="w-full h-full  lg:h-auto  lg:max-h-[200px]" src="	https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/116-485x360.jpg" alt="news-img" />
                            </div>
                        </div>
                        <div className="my-auto">
                            <div className="mb-2">
                                <h4 className="text-[14px] sm:text-[16px] font-bold text-black group-hover:text-[#4db2ec] transition-colors duration-200">
                                    یکی دیگر از پروژه های بزرگ آپارتمانی برای فروش گذاشته شد
                                </h4>
                            </div>
                            <div className="mt-1 mb-4">
                                <p className="text-[14px] text-[#797979] text-justify sm:text-start">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                            </div>
                            <div>
                                <span className="text-[12px] text-[#797979]">18/10/1403</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="">
                <Link to="/topnews">
                    <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-y-2 text-center sm:text-start gap-x-6 mb-4 sm:mb-2 group">
                        <div className=" lg:mx-0 my-auto">
                            <img className="mb-2 max-w-[100px] mx-auto" src="	https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/91-218x150.jpg" alt="news-img" />
                        </div>
                        <div className="my-auto">
                            <p className="text-[14px] group-hover:text-[#1aa4ce] transition-colors duration-200">
                                خانه تک رنگ مدرن با تراس و پله های آرام و دنج
                            </p>
                            <span className="text-[12px] text-[#797979]">18/10/1403</span>
                        </div>
                    </div>
                </Link>
                <Link to="/topnews">
                    <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-y-2 text-center sm:text-start gap-x-6 mb-4 sm:mb-2 group">
                        <div className=" lg:mx-0 my-auto">
                            <img className="mb-2 max-w-[100px] mx-auto" src="	https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/91-218x150.jpg" alt="news-img" />
                        </div>
                        <div className="my-auto">
                            <p className="text-[14px] group-hover:text-[#1aa4ce] transition-colors duration-200">
                                خانه تک رنگ مدرن با تراس و پله های آرام و دنج
                            </p>
                            <span className="text-[12px] text-[#797979]">18/10/1403</span>
                        </div>
                    </div>
                </Link>
                <Link to="/topnews">
                    <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-y-2 text-center sm:text-start gap-x-6 mb-4 sm:mb-2 group">
                        <div className=" lg:mx-0 my-auto">
                            <img className="mb-2 max-w-[100px] mx-auto" src="	https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/91-218x150.jpg" alt="news-img" />
                        </div>
                        <div className="my-auto">
                            <p className="text-[14px] group-hover:text-[#1aa4ce] transition-colors duration-200">
                                خانه تک رنگ مدرن با تراس و پله های آرام و دنج
                            </p>
                            <span className="text-[12px] text-[#797979]">18/10/1403</span>
                        </div>
                    </div>
                </Link>
                <Link to="/topnews">
                    <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-y-2 text-center sm:text-start gap-x-6 mb-4 sm:mb-2 group">
                        <div className=" lg:mx-0 my-auto">
                            <img className="mb-2 max-w-[100px] mx-auto" src="	https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/91-218x150.jpg" alt="news-img" />
                        </div>
                        <div className="my-auto">
                            <p className="text-[14px] group-hover:text-[#1aa4ce] transition-colors duration-200">
                                خانه تک رنگ مدرن با تراس و پله های آرام و دنج
                            </p>
                            <span className="text-[12px] text-[#797979]">18/10/1403</span>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
        },
        {
            label: "تکنولوژی",
            value: "technology",
            desc: 
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-6">
            <div className="mb-8 xl:mb-0">
                <Link className="" to="/topnews">
                    <div className="group flex flex-col gap-x-10">
                        <div>
                            <div className="w-full mb-3 h-full lg:h-auto">
                                <img className="w-full h-full  lg:h-auto  lg:max-h-[200px]" src="	https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/116-485x360.jpg" alt="news-img" />
                            </div>
                        </div>
                        <div className="my-auto">
                            <div className="mb-2">
                                <h4 className="text-[14px] sm:text-[16px] font-bold text-black group-hover:text-[#4db2ec] transition-colors duration-200">
                                    یکی دیگر از پروژه های بزرگ آپارتمانی برای فروش گذاشته شد
                                </h4>
                            </div>
                            <div className="mt-1 mb-4">
                                <p className="text-[14px] text-[#797979] text-justify sm:text-start">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                            </div>
                            <div>
                                <span className="text-[12px] text-[#797979]">18/10/1403</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="">
                <Link to="/topnews">
                    <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-y-2 text-center sm:text-start gap-x-6 mb-4 sm:mb-2 group">
                        <div className=" lg:mx-0 my-auto">
                            <img className="mb-2 max-w-[100px] mx-auto" src="	https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/105-218x150.jpg" alt="news-img" />
                        </div>
                        <div className="my-auto">
                            <p className="text-[14px] group-hover:text-[#1aa4ce] transition-colors duration-200">
                                خانه تک رنگ مدرن با تراس و پله های آرام و دنج
                            </p>
                            <span className="text-[12px] text-[#797979]">18/10/1403</span>
                        </div>
                    </div>
                </Link>
                <Link to="/topnews">
                    <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-y-2 text-center sm:text-start gap-x-6 mb-4 sm:mb-2 group">
                        <div className=" lg:mx-0 my-auto">
                            <img className="mb-2 max-w-[100px] mx-auto" src="	https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/105-218x150.jpg" alt="news-img" />
                        </div>
                        <div className="my-auto">
                            <p className="text-[14px] group-hover:text-[#1aa4ce] transition-colors duration-200">
                                خانه تک رنگ مدرن با تراس و پله های آرام و دنج
                            </p>
                            <span className="text-[12px] text-[#797979]">18/10/1403</span>
                        </div>
                    </div>
                </Link>
                <Link to="/topnews">
                    <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-y-2 text-center sm:text-start gap-x-6 mb-4 sm:mb-2 group">
                        <div className=" lg:mx-0 my-auto">
                            <img className="mb-2 max-w-[100px] mx-auto" src="	https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/105-218x150.jpg" alt="news-img" />
                        </div>
                        <div className="my-auto">
                            <p className="text-[14px] group-hover:text-[#1aa4ce] transition-colors duration-200">
                                خانه تک رنگ مدرن با تراس و پله های آرام و دنج
                            </p>
                            <span className="text-[12px] text-[#797979]">18/10/1403</span>
                        </div>
                    </div>
                </Link>
                <Link to="/topnews">
                    <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-y-2 text-center sm:text-start gap-x-6 mb-4 sm:mb-2 group">
                        <div className=" lg:mx-0 my-auto">
                            <img className="mb-2 max-w-[100px] mx-auto" src="	https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/105-218x150.jpg" alt="news-img" />
                        </div>
                        <div className="my-auto">
                            <p className="text-[14px] group-hover:text-[#1aa4ce] transition-colors duration-200">
                                خانه تک رنگ مدرن با تراس و پله های آرام و دنج
                            </p>
                            <span className="text-[12px] text-[#797979]">18/10/1403</span>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
        },
    ];


    return (
        <div>
            {/*title */}
            <div>
                <div className="mx-8 sm:mx-16 md:mx-8 lg:mx-32 mt-20 mb-8 grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="h-full group">
                        <Link to="/movie/detail/1">
                            <div className="relative group h-full overflow-hidden">
                                <img className="w-full h-full group-hover:scale-125 transition-transform duration-300" src="	https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/h104-696x464.jpg" alt="news-img" />
                                <div className="bg-[#000000] opacity-0 group-hover:opacity-40 transition-opacity duration-300 w-full h-full absolute top-0"></div>
                                <div className="absolute bottom-2 sm:bottom-7  text-white mx-4">
                                    <span className="bg-[#000000b3] mb-2 text-white group-hover:bg-[#4db2ec] transition-colors duration-200 text-[10px] sm:text-[12px] px-2 sm:px-3 py-1">مد</span>
                                    <h3 className="text-[10px] sm:text-[16px] md:text-[18px] w-[80%]">
                                        جلوه های ویژه جدید برای فیلم کریستوفر نولان با بازی تام هنکس و برد پیت
                                    </h3>
                                    <span className="text-[9px] sm:text-[12px]">13/10/1403</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                        <div>
                            <Link to="/movie/detail/1">
                                <div className="relative group overflow-hidden">
                                    <img className="w-full group-hover:scale-125 transition-transform duration-300" src="	https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/28-696x368.jpg.webp" alt="news-img" />
                                    <div className="bg-[#000000] opacity-0 group-hover:opacity-40 transition-opacity duration-300 w-full h-full absolute top-0"></div>
                                    <div className="absolute bottom-2 sm:bottom-4  text-white mx-4">
                                        <span className="bg-[#000000b3] mb-2 text-white group-hover:bg-[#4db2ec] transition-colors duration-200 text-[10px] sm:text-[12px] px-2 sm:px-3 py-1">تکنولوژی</span>
                                        <h3 className="text-[10px] sm:text-[16px] w-[80%]">
                                            جلوه های ویژه جدید برای فیلم کریستوفر نولان با بازی تام هنکس و برد پیت
                                        </h3>
                                        <span className="text-[9px] sm:text-[12px]">13/10/1403</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            <div>
                                <Link to="/movie/detail/1">
                                    <div className="relative group overflow-hidden h-full">
                                        <img className="w-full h-full group-hover:scale-125 transition-transform duration-300" src="https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/54-1-696x405.jpg.webp" alt="news-img" />
                                        <div className="bg-[#000000] opacity-0 group-hover:opacity-40 transition-opacity duration-300 w-full h-full absolute top-0"></div>
                                        <div className="absolute bottom-2 sm:bottom-3  text-white mx-4">
                                            <span className="bg-[#000000b3] mb-2 text-white group-hover:bg-[#4db2ec] transition-colors duration-200 text-[10px] px-2 py-1">سبک زندگی</span>
                                            <h3 className="text-[10px] sm:text-[14px] md:w-[90%]">
                                                فواید سحر خیزی برای بدن
                                            </h3>
                                            <span className="text-[9px] sm:text-[12px]">13/10/1403</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div>
                                <Link to="/movie/detail/1">
                                    <div className="relative group h-full overflow-hidden">
                                        <img className="w-full h-full group-hover:scale-125 transition-transform duration-300" src="https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/43-2-696x464.jpg.webp" alt="news-img" />
                                        <div className="bg-[#000000] opacity-0 group-hover:opacity-40 transition-opacity duration-300 w-full h-full absolute top-0"></div>
                                        <div className="absolute bottom-2 sm:bottom-3  text-white mx-4">
                                            <span className="bg-[#000000b3] mb-2 text-white group-hover:bg-[#4db2ec] transition-colors duration-200 text-[10px] px-2 py-1">سبک زندگی</span>
                                            <h3 className="text-[10px] sm:text-[14px] md:w-[80%]">
                                                مهمترین عوامل شادبی در طول روز
                                            </h3>
                                            <span className="text-[9px] sm:text-[12px]">13/10/1403</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*title */}
            {/*first */}
            <div className="flex md:flex-row flex-col mx-8 sm:mx-12 md:mx-10 lg:mx-20 gap-16 ">
                {/*news list */}

                <div className="mt-0 md:mt-20 w-full">
                    {/*tab */}
                    <Tabs className=" mb-14" value="topnews">
                        <TabsHeader className="mb-4 grid grid-cols-3 sm:grid-cols-5">
                            {data.map(({ label, value }) => (
                                <Tab className="text-[14px]" key={value} value={value}>
                                    {label}
                                </Tab>
                            ))}
                        </TabsHeader>
                        <TabsBody>
                            {data.map(({ value, desc }) => (
                                <TabPanel key={value} value={value}>
                                    {desc}
                                </TabPanel>
                            ))}
                        </TabsBody>
                    </Tabs>
                    {/*tab */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center">
                    {firstnews.data.map((item) => (
                                <NewsTwoCol img={item[0]} title={item[1]} date={item[2]} link={item[3]} />
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
                <div className="lg:mx-auto mt-8 lg:mt-20 sticky top-10 w-full md:w-[50%] lg:w-[80%] xl:w-[60%] 2xl:w-[40%] h-full">
                    <div>
                        <div className="border-b-[2px] pb-[2px] border-[#000000]   mb-6">
                            <span className="text-white px-2  py-1 bg-[#000000]">ارتباط با ما</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-2 mb-20">
                        <div className="flex gap-3">
                            <span className="bg-[#516eab] text-[22px] text-white p-2">
                                <FaFacebookF />
                            </span>
                            <h5 className="my-auto text-[15px]">
                                28,400 دنبال کننده
                            </h5>
                        </div>
                        <div className="flex gap-3">
                            <span className="bg-[#29c5f6] text-[22px] text-white p-2">
                                <FaXTwitter />
                            </span>
                            <h5 className="my-auto text-[15px]">
                                8,800 طرفدار
                            </h5>
                        </div>
                        <div className="flex gap-3">
                            <span className="bg-[#e14e42] text-[22px] text-white p-2">
                                <FaYoutube />
                            </span>
                            <h5 className="my-auto text-[15px]">
                                112,700 بازدید کننده
                            </h5>
                        </div>                    </div>
                    <div className="mb-10 mx-auto lg:mx-0">
                        <img className="w-full " src="https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/newspaper-rec300c.jpg.webp" alt="ad-img" />
                    </div>
                    <div>
                        <div className="border-b-[2px] pb-[2px] border-[#000000]   mb-6">
                            <span className="text-white px-2  py-1 bg-[#000000]">خبر های مهم</span>
                        </div>
                    </div>
                    <div className=" grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 lg:gap-x-6">
                        {SideTwoColdata.data.map((item) => (
                            <SideTwoCol img={item[0]} title={item[1]} />
                        ))}
                    </div>
                </div>
                {/*sidebar */}
            </div>
            {/*first */}
            {/*second */}
            <div className="flex md:flex-row flex-col mx-8 sm:mx-12 md:mx-10 lg:mx-20 gap-16 ">
                {/*news list */}

                <div className="mt-0 md:mt-20 w-full">
                    <div className="justify-center">
                        {SideOneColdata.data.map((item) => (
                            <NewsOneCol img={item[0]} title={item[1]} date={item[2]} link={item[3]} />
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
                <div className="lg:mx-auto mt-8 lg:mt-20 sticky top-10 w-full md:w-[50%] lg:w-[80%] xl:w-[60%] 2xl:w-[40%] h-full">
                    <div className="mb-10 mx-auto lg:mx-0">
                        <img className="w-full " src="https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/newspaper-rec300c.jpg.webp" alt="ad-img" />
                    </div>
                    <div>
                        <div className="border-b-[2px] pb-[2px] border-[#8954c1]   mb-6">
                            <span className="text-white px-2  py-1 bg-[#8954c1]">ارتباط با ما</span>
                        </div>
                    </div>
                    <div>
                        <h4 className="hover:text-[#8954c1] transition-colors duration-200 text-[16px] sm:text-[20px] md:text-[16px] lg:text-[20px]">همه باید غذای مورد علاقه ی خود را بچشند</h4>
                    </div>
                    <div className="">
                        <Link to="/topnews">
                            <div className="group flex flex-col gap-x-4 md:mb-4 lg:mb-0 pb-3 mt-5">
                                <div className="sm:my-auto md:my-0 xl:my-auto lg:mx-auto xl:mx-0">
                                    <img className="mx-auto" src="https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/59-485x360.jpg" alt="news-img" />
                                </div>
                                <div className=" mt-3">
                                    <p className="text-[#767676] text-[14px] text-justify xl:text-start">
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                                    </p>
                                </div>
                            </div>

                        </Link>
                    </div>
                </div>
                {/*sidebar */}
            </div>
            {/*second */}
            {/*ad */}
            <div className="mt-16 mx-8 sm:mx-12 md:mx-10 lg:mx-20 mb-16 md:mb-0">
                <img className="mx-auto" src="https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/newspaper-rec728.jpg.webp" alt="ad" />
            </div>
            {/*ad */}
            {/*third */}
            <div>

                <div className="flex md:flex-row flex-col mx-8 sm:mx-12 md:mx-10 lg:mx-20 gap-16 ">
                    {/*news list */}
                    <div className="mt-0 md:mt-20 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center">
                            {thirdnews.data.map((item) => (
                                <NewsTwoCol img={item[0]} title={item[1]} date={item[2]} link={item[3]} />
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
                    <div className="lg:mx-auto mt-8 lg:mt-20 sticky top-10 w-full md:w-[50%] lg:w-[80%] xl:w-[60%] 2xl:w-[40%] h-full">
                        <div>
                            <div className="border-b-[2px] pb-[2px] border-[#000000]   mb-6">
                                <span className="text-white px-2  py-1 bg-[#000000]">خبر های مهم</span>
                            </div>
                        </div>
                        <div className="">
                            {Sideimg.data.map((item) => (
                                <SidenewsImg img={item[0]} title={item[1]} date={item[2]} />
                            ))}
                        </div>
                        <div className="mt-16">
                            <div className="border-b-[2px] pb-[2px] border-[#000000]  mb-6">
                                <span className="text-white px-2  py-1 bg-[#000000]">خبر های مهم</span>
                            </div>
                        </div>
                        <div className="">
                            {Sidenewstext.data.map((item) => (
                                <Sidetext title={item[0]} date={item[1]} />
                            ))}
                        </div>
                    </div>
                    {/*sidebar */}
                </div>
            </div>
            {/*third */}
            {/*footer */}
            <Footer />
            {/*footer */}
        </div>
    )
}

export default Home