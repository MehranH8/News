import { Chip } from "@material-tailwind/react";
import React from "react";
import Fashioncard from "./Fashioncard/Fashioncard";
import Fashionsidenews from "./Fashionsidenews/Fashionsidenews";
import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IconButton, Typography } from "@material-tailwind/react";
import Footer from "../../Ui/Footer/Footer";


const Fashion = () => {

    const [Fashioncarddata, setFashioncarddata] = useState({
        data: [
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/23-696x464.jpg", " های لباس مد از بزرگترین اینفلوئنسرهای اینستاگرام", "13/10/1403","/fashion/detail/1"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/22-696x465.jpg.", "مدل مد در خز مصنوعی و شطرنجی ظاهر می شود", "13/10/1403","/fashion/detail/2"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/21-696x464.jpg", "10 کفش فوق العاده بالای مچ پا برای پوشیدن در این فصل سرد", "13/10/1403","/fashion/detail/3"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/20-696x464.jpg", " در شب گالا چه بپوشیم؟ بزرگ ترین نام ها را پرسیدیم!", "13/10/1403","/fashion/detail/4"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/19-696x464.jpg", " درست در زمان بهار: چرخش سبک جامعه تأثیر عمده ای دارد", "13/10/1403","/fashion/detail/5"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/18-696x464.jpg", " کتاب سلفی کیم برای پیش‌سفارش در دسترس است، آخرین باند راه می‌رود", "13/10/1403","/fashion/detail/6"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/13-696x464.jpg", " جوایز آکادمی موسیقی کشور میزبان نمایش مد امسال است", "13/10/1403","/fashion/detail/7"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/14-696x464.jpg", " های لباس مد از بزرگترین اینفلوئنسرهای اینستاگرام", "13/10/1403","/fashion/detail/8"],
        ]
    })
    const [Fashionside, setFashionside] = useState({
        data: [
            ["یکی دیگر از پروژه های بزرگ آپارتمانی برای فروش گذاشته شد", "13/10/1403"],
            [" یکی دیگر از پروژه های بزرگ آپارتمانی برای فروش گذاشته شد", "13/10/1403"],
            ["یکی دیگر از پروژه های بزرگ آپارتمانی برای فروش گذاشته شد", "13/10/1403"],
            ["یکی دیگر از پروژه های بزرگ آپارتمانی برای فروش گذاشته شد", "13/10/1403"],
            ["یکی دیگر از پروژه های بزرگ آپارتمانی برای فروش گذاشته شد", "13/10/1403"],
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
            {/*title */}
            <div className="relative  bg-cover w-full bg-center h-full" style={{ backgroundImage: `url(https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/38.jpg)` }} >
                <div className="w-full h-full bg-[#000] bg-opacity-60 absolute top-0"></div>
                <div className="relative -top-[60%] mx-8 sm:mx-16 text-white flex flex-col flex-wrap  ">
                    <h4 className="text-[26px] text-start font-bold mt-32 mb-8">مد و پوشاک</h4>
                    <div className="grid grid-cols-2 sm:flex gap-y-2 sm:gap-y-0 gap-x-2 mb-8">
                        <Chip className="bg-[#f96945] text-[12px] py-1 max-w-[100px] rounded-none" value="استایل جدید" />
                        <Chip className="bg-[#f24d4d] text-[12px] py-1 max-w-[100px] rounded-none" value="مد و پوشاک" />
                        <Chip className="bg-[#e8436c] text-[12px] py-1 max-w-[100px] rounded-none" value="صنعت فشن" />
                    </div>
                    <div className="mb-32">
                        <p className="lg:text-start text-justify text-[14px] sm:text-[16px] max-w-[1000px]">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                        </p>
                    </div>

                </div>
            </div>
            {/*title */}
            {/*news*/}
            <div className="flex lg:flex-row flex-col mx-8 sm:mx-16 md:mx-24 lg:mx-32 gap-16 ">
                {/*news list */}

                <div className="mt-20">
                    <div className="border-b-[2px] pb-[6px] border-[#000000] mb-6">
                        <span className="text-white px-3  py-2 bg-[#000000]">آخرین خبر ها</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center">
                        {Fashioncarddata.data.map((item) => (
                            <Fashioncard img={item[0]} title={item[1]} date={item[2]} link={item[3]} />
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
                <div className="lg:mx-auto mt-8 sm:mt-20 lg:mt-36 sticky top-10 lg:w-[80%] xl:w-[60%] 2xl:w-[40%] h-full">
                    <div className="mb-10 max-w-[90%] mx-auto lg:mx-0">
                        <img className="w-full " src="https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/newspaper-rec300c.jpg.webp" alt="ad-img" />
                    </div>
                    <div>
                        <div className="border-b-[2px] pb-[2px] border-[#000000] lg:max-w-[90%]  mb-6">
                            <span className="text-white px-2  py-1 bg-[#000000]">خبر های مهم</span>
                        </div>
                    </div>
                    <div className="max-w-[90%]">
                        {Fashionside.data.map((item) => (
                            <Fashionsidenews title={item[0]} date={item[1]} />
                        ))}
                    </div>
                </div>
                {/*sidebar */}
            </div>

            {/*news*/}
            {/*footer */}
            <Footer />
            {/*footer */}
        </div>
    )
}


export default Fashion