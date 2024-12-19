import React from "react";
import Technologycard from "./Tecgnologycard/Tecgnologycard";
import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IconButton, Typography } from "@material-tailwind/react";
import Footer from "../../Ui/Footer/Footer";
import Technologysidenews from "./Technologysidenews/Technologysidenews";



const Technology = () => {



    const [technologycarddata, settechnologycarddata] = useState({
        data: [
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/31-696x466.jpg", " بهترین ابزارها و ویژگی های خانه هوشمند", "13/10/1403","/technology/detail/1"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/30-696x392.jpg", "بازی اکشن جدید با صدای Hi-Fi ممتاز به روز شده است", "13/10/1403","/technology/detail/2"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/29-696x464.jpg", "سوپر تراشه اسنپدراگون بر روی جدیدترین دوربین های عکاسی نصب شده است", "13/10/1403","/technology/detail/3"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/28-696x368.jpg", " دوربین بهتری را برای حساب YouTube خود کشف کنید", "13/10/1403","/technology/detail/4"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/27-696x464.jpg", " بهترین ابزارها و ویژگی های خانه هوشمند", "13/10/1403","/technology/detail/5"],
        ]
    })
    const [Technologyside, setTechnologyside] = useState({
        data: [
            ["Ambrose به دنبال پیشنهادات در مرکز شهر برای آپارتمان است", "13/10/1403"],
            ["Ambrose به دنبال پیشنهادات در مرکز شهر برای آپارتمان است", "13/10/1403"],
            ["Ambrose به دنبال پیشنهادات در مرکز شهر برای آپارتمان است", "13/10/1403"],
            ["Ambrose به دنبال پیشنهادات در مرکز شهر برای آپارتمان است", "13/10/1403"],
            ["Ambrose به دنبال پیشنهادات در مرکز شهر برای آپارتمان است", "13/10/1403"],
        ]
    })


    const [active, setActive] = React.useState(2);

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

            <div className="flex lg:flex-row flex-col mx-8 md:mx-16 lg:mx-24 xl:mx-32 gap-16 ">
                {/*news list */}

                <div className="mt-20 lg:max-w-[70%]">
                    <div className="border-b-[2px] pb-[6px] border-[#000000] mb-6">
                        <span className="text-white px-3  py-2 bg-[#000000]">تکنولوژی</span>
                    </div>
                    <div className="grid grid-cols-1 gap-10 justify-center">
                    {technologycarddata.data.map((item) => (
                            <Technologycard img={item[0]} title={item[1]} date={item[2]} link={item[3]}/>
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
                <div className="lg:mx-auto mt-20 mb-8 sm:mb-20 lg:mb-36 sticky top-10  w-full 2xl:w-[40%] h-full">
                    <div>
                        <div className=" lg:max-w-[90%]  mb-6">
                            <span className="text-[20px] font-bold">خبر های مهم</span>
                        </div>
                    </div>
                    <div className="max-w-[90%]">
                        {Technologyside.data.map((item) => (
                            <Technologysidenews title={item[0]} date={item[1]} />
                        ))}
                    </div>
                    <div className="mt-10 max-w-[90%] mx-auto lg:mx-0">
                        <img className="w-full " src="https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/newspaper-rec300c.jpg.webp" alt="ad-img" />
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

export default Technology