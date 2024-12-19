import { useState } from "react"
import { FaCommentAlt, FaEye, FaTelegramPlane } from "react-icons/fa";
import { FaFacebookF, FaXTwitter, FaPinterestP } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Fashionsidenews from "../Fashionsidenews/Fashionsidenews";
import Fashiondetailside from "./Fashiondetailside";
import Footer from "../../../Ui/Footer/Footer";
import { useLocation } from "react-router-dom";



const Fashiondetail = () => {

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


    const index = useLocation().pathname

    const choosenindex = Fashioncarddata.data.findIndex((id) => {
        if (id[3] == index) {
            return Fashioncarddata
        }
    })


    const [Fashiondetailimgdata, setFashiondetailimgdata] = useState({
        data: [
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/120-696x471.jpg", "یکی دیگر از پروژه های بزرگ آپارتمانی برای فروش گذاشته شد", "13/10/1403"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/119-696x464.jpg", " یکی دیگر از پروژه های بزرگ آپارتمانی برای فروش گذاشته شد", "13/10/1403"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/118-696x464.jpg", "یکی دیگر از پروژه های بزرگ آپارتمانی برای فروش گذاشته شد", "13/10/1403"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/117-696x464.jpg", "یکی دیگر از پروژه های بزرگ آپارتمانی برای فروش گذاشته شد", "13/10/1403"],
        ]
    })
    const [Fashiondetaildata, setFashiondetaildata] = useState({
        data: [
            ["یکی دیگر از پروژه های بزرگ آپارتمانی برای فروش گذاشته شد", "13/10/1403"],
            [" یکی دیگر از پروژه های بزرگ آپارتمانی برای فروش گذاشته شد", "13/10/1403"],
            ["یکی دیگر از پروژه های بزرگ آپارتمانی برای فروش گذاشته شد", "13/10/1403"],
            ["یکی دیگر از پروژه های بزرگ آپارتمانی برای فروش گذاشته شد", "13/10/1403"],
        ]
    })

    return (
        <div>
            <div className="mx-8 md:mx-16 lg:mx-24 xl:mx-32 mt-20">
                {/*title */}
                <div className="flex gap-2 mb-6">
                    <span className="text-white bg-[#ce2d70] hover:bg-opacity-80 text-[12px] py-[2px] px-2">فوری</span>
                </div>
                <div className="mb-4">
                    <h2 className="text-[20px] md:text-[26px] font-bold">{Fashioncarddata.data[choosenindex][1]}</h2>
                </div>
                <div className="mb-3">
                    <p className="text-[14px] sm:text-[16px] text-[#999999]">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                    </p>
                </div>
                <div className="sm:flex gap-x-10  mb-4">
                    <div className="text-[12px] text-[#767676] mb-4 sm:mb-0">
                        <span>
                            توسط <span className="text-black font-bold">علی رضایی</span> - 13/10/1403
                        </span>
                    </div>
                    <div className="text-[12px] flex gap-4">
                        <span className="flex gap-2">
                            <FaEye className="my-auto" />
                            7230
                        </span>
                        <span className="flex gap-2">
                            <FaCommentAlt className="text-[10px] my-auto" />
                            0
                        </span>
                    </div>
                </div>
                {/*title */}

                <div className="flex lg:flex-row flex-col  gap-16 ">
                    {/*mainpart */}
                    <div className="mt-10 lg:w-[90%]">
                        {/*text */}
                        <div className="mb-8">
                            <div className="mb-8">
                                <img className="w-full" src={Fashioncarddata.data[choosenindex][0]} alt="blog-img" />
                            </div>
                            <div className="flex flex-col  sm:flex-row gap-2 justify-center mb-10">
                                <Link className="" to="#">
                                    <span className="rounded-2xl mx-auto sm:mx-0 max-w-[200px] flex gap-x-3 justify-center sm:justify-start text-white bg-[#516eab] p-3 hover:bg-opacity-80 transition-opacity duration-200">
                                        <FaFacebookF className="my-auto " /> | فیسبوک
                                    </span>
                                </Link>
                                <Link className="" to="#">
                                    <span className="rounded-2xl mx-auto sm:mx-0 max-w-[200px] flex gap-x-3 justify-center sm:justify-start text-white bg-[#26c5f6] p-3 hover:bg-opacity-80 transition-opacity duration-200">
                                        <FaXTwitter className="my-auto " /> | توییتر
                                    </span>
                                </Link>
                                <Link className="" to="#">
                                    <span className="rounded-2xl mx-auto sm:mx-0 max-w-[200px] flex gap-x-3 justify-center sm:justify-start text-white bg-[#ca212a] p-3 hover:bg-opacity-80 transition-opacity duration-200">
                                        <FaPinterestP className="my-auto " /> | پینترست
                                    </span>
                                </Link>
                                <Link className="" to="#">
                                    <span className="rounded-2xl mx-auto sm:mx-0 max-w-[200px] flex gap-x-3 justify-center sm:justify-start text-white bg-[#7bbf6a] p-3 hover:bg-opacity-80 transition-opacity duration-200">
                                        <FaTelegramPlane className="my-auto " /> | تلگرام
                                    </span>
                                </Link>
                            </div>
                            <div className="mb-8">
                                <p className="text-justify text-[14px] sm:text-[16px]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد</p>
                            </div>
                            <div className="mb-6">
                                <p className="font-bold text-justify text-[14px] sm:text-[16px]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                            </div>
                            <div>
                                <p className="text-justify text-[14px] sm:text-[16px]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد</p>
                            </div>
                        </div>
                        <div>
                            <div className="mb-4">
                                <img className="w-full" src="https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/girl2.jpg" alt="blog-img" />
                                <Link to="#">
                                    <span className="text-[12px] text-[#444444] border-b-[1px] border-white hover:border-[#4db2ea] transition-colors duration-200 ">جدید ترین تحقیق در مورد اثر تکنولوژی روی شادی</span>
                                </Link>
                            </div>
                            <div className="mb-8 text-justify xl:text-start">
                                <p className="text-justify text-[14px] sm:text-[16px]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد</p>
                            </div>
                            <div className="">
                                <p className="mb-6 text-justify text-[14px] sm:text-[16px]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد</p>
                                <p className="mb-6 text-justify text-[14px] sm:text-[16px]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد</p>
                                <p className="mb-6 text-justify text-[14px] sm:text-[16px]"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم استلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                                <p className="mb-6 text-justify text-[14px] sm:text-[16px]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد</p>
                                <p className="mb-6 text-justify text-[14px] sm:text-[16px]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                                <img className="w-full" src="https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/30-696x392.jpg" alt="blog-img" />
                            </div>
                        </div>
                        {/*text */}
                        {/*contact */}
                        <div className="mt-10">
                            <h3 className="text-[20px] md:text-[26px] text-[#4db2ec] mb-8 text-center">
                                اگر آن را دارید، می توانید هر چیزی را خوب جلوه دهید
                            </h3>
                            <p className="mb-10 text-justify text-[14px] sm:text-[16px]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد</p>
                            <div>
                                <div className="flex gap-x-2 mb-2">
                                    <span className="text-white bg-black text-[12px] py-[2px] px-2">از طریق</span>
                                    <span className="bg-white border-[1px] text-[12px] py-[2px] px-2">روزنامه خبری</span>

                                </div>
                                <div className="flex gap-x-2">
                                    <span className="text-white bg-black text-[12px] py-[2px] px-2">منبع</span>
                                    <span className="bg-white border-[1px] text-[12px] py-[2px] px-2">گوگل</span>

                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2 justify-center sm:justify-start  w-full border-y-[1px] border-[#ededed] mt-8 mb-14 py-6">
                                <Link className="" to="#">
                                    <span className="rounded-2xl flex gap-x-3 mx-auto justify-center sm:justify-start sm:mx-0 max-w-[200px] text-white bg-[#516eab] p-3 hover:bg-opacity-80 transition-opacity duration-200">
                                        <FaFacebookF className="my-auto " /> | فیسبوک
                                    </span>
                                </Link>
                                <Link className="" to="#">
                                    <span className="rounded-2xl flex gap-x-3 mx-auto justify-center sm:justify-start sm:mx-0 max-w-[200px] text-white bg-[#26c5f6] p-3 hover:bg-opacity-80 transition-opacity duration-200">
                                        <FaXTwitter className="my-auto " /> | توییتر
                                    </span>
                                </Link>
                                <Link className="" to="#">
                                    <span className="rounded-2xl flex gap-x-3 mx-auto justify-center sm:justify-start sm:mx-0 max-w-[200px] text-white bg-[#ca212a] p-3 hover:bg-opacity-80 transition-opacity duration-200">
                                        <FaPinterestP className="my-auto " /> | پینترست
                                    </span>
                                </Link>
                                <Link className="" to="#">
                                    <span className="rounded-2xl flex gap-x-3 mx-auto justify-center sm:justify-start sm:mx-0 max-w-[200px] text-white bg-[#7bbf6a] p-3 hover:bg-opacity-80 transition-opacity duration-200">
                                        <FaTelegramPlane className="my-auto " /> | تلگرام
                                    </span>
                                </Link>
                        </div>
                        {/*contact */}
                        {/*other news */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 sm:gap-y-0 gap-x-8">
                            <div>
                                <span className="text-[12px] text-[#c1c1c1] flex justify-self-start">مقاله قبلی</span>
                                <p className="text-[12px] sm:text-[14px] hover:text-[#4db2ec] mt-2 transition-colors duration-150">
                                    <Link to="/fashion/detail">
                                        سوپر تراشه اسنپدراگون بر روی جدیدترین دوربین های عکاسی نصب شده است
                                    </Link>

                                </p>
                            </div>
                            <div>
                                <span className="text-[12px] text-[#c1c1c1] flex justify-self-end">مقاله بعدی</span>
                                <p className="text-[12px] sm:text-[14px] hover:text-[#4db2ec] transition-colors mt-2 duration-150 text-end">
                                    <Link to="/fashion/detail">
                                        سوپر تراشه اسنپدراگون بر روی جدیدترین دوربین های عکاسی نصب شده است
                                    </Link>
                                </p>
                            </div>
                        </div>
                        {/*other news */}
                        {/*writter */}
                        <div className="flex flex-col  sm:flex-row border-[1px] border-[#ededed] py-8 gap-x-8 px-6 sm:px-10 mt-16">
                            <div className="mb-4 sm:mb-0 mx-auto sm:mx-0">
                                <Link to="#">
                                    <img src="https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/about-image-150x150.jpg.webp" alt="writter-img" />
                                </Link>

                            </div>
                            <div>
                                <div className="mb-3">
                                    <h4 className="font-bold mb-2 text-center sm:text-start hover:text-[#4db2ec] transition-colors duration-150">
                                        <Link to="#">
                                            زهرا زمانی
                                        </Link>
                                    </h4>
                                    <div className="text-center sm:text-start">
                                        <a href="#" className="text-[14px]  hover:text-[#4db2ec] transition-colors duration-150">
                                            http://www.example.com
                                        </a>
                                    </div>
                                </div>
                                <div className="mb-4 md:mb-1">
                                    <p className="text-[14px] text-justify xl:text-start">
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                                    </p>
                                </div>
                                <div className="flex gap-4 justify-center sm:justify-start">
                            <Link to="#">
                                <span className="hover:text-[#4db2ec] transition-colors duration-150">
                                    <FaFacebookF />
                                </span>
                            </Link>
                            <Link to="#">
                                <span className="hover:text-[#4db2ec] transition-colors duration-150">
                                    <FaXTwitter />
                                </span>
                            </Link>

                            <Link to="#">
                                <span className="hover:text-[#4db2ec] transition-colors duration-150">
                                    <FaPinterestP />
                                </span>
                            </Link>
                            <Link to="#">
                                <span className="hover:text-[#4db2ec] transition-colors duration-150">
                                    <FaTelegramPlane />
                                </span>
                            </Link>
                        </div>
                            </div>
                        </div>
                        {/*writter */}
                        {/*related posts */}
                        <div className="mt-16 ">
                            <div className="border-b-[2px] pb-[2px] border-[#000000] mb-6">
                                <span className="text-white px-2  py-1 bg-[#000000]">خبر های مهم</span>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-8 gap-x-4 xl:gap-x-8 ">
                                <Link to="/fashion/detail">
                                    <div className="border-[1px] border-[#eaeaea]">
                                        <div className="mb-6">
                                            <img src="https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/20-696x464.jpg" alt="news-img" />
                                        </div>
                                        <div className="mx-6 md:mx-3 xl:mx-6 mb-4">
                                            <h5 className="font-bold text-[14px] sm:text-[15px]">
                                                10 کفش فوق العاده بالای مچ پا برای پوشیدن در این فصل سرد
                                            </h5>
                                        </div>
                                        <div className="mx-6 md:mx-3 xl:mx-6 mb-3">
                                            <span className="text-[#767676] text-[12px]">13/10/1403</span>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/fashion/detail">
                                    <div className="border-[1px] border-[#eaeaea]">
                                        <div className="mb-6">
                                            <img src="	https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/21-696x464.jpg" alt="news-img" />
                                        </div>
                                        <div className="mx-6 md:mx-3 xl:mx-6 mb-4">
                                            <h5 className="font-bold text-[14px] sm:text-[15px]">
                                                10 کفش فوق العاده بالای مچ پا برای پوشیدن در این فصل سرد
                                            </h5>
                                        </div>
                                        <div className="mx-6 md:mx-3 xl:mx-6 mb-3">
                                            <span className="text-[#767676] text-[12px]">13/10/1403</span>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/fashion/detail">
                                    <div className="border-[1px] border-[#eaeaea]">
                                        <div className="mb-6">
                                            <img src="	https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/22-696x465.jpg" alt="news-img" />
                                        </div>
                                        <div className="mx-6 md:mx-3 xl:mx-6 mb-4">
                                            <h5 className="font-bold text-[14px] sm:text-[15px]">
                                                10 کفش فوق العاده بالای مچ پا برای پوشیدن در این فصل سرد
                                            </h5>
                                        </div>
                                        <div className="mx-6 md:mx-3 xl:mx-6 mb-3">
                                            <span className="text-[#767676] text-[12px]">13/10/1403</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        {/*related posts */}
                    </div>
                    {/*mainpart */}
                    {/*sidebar */}
                    <div className="lg:mx-auto mt-6 sm:mt-20 mb-8 sm:mb-20 lg:mb-36 sticky top-10  w-full lg:w-[40%] h-full">
                        <div className="mb-16 max-w-[90%] mx-auto lg:mx-0">
                            <div className="mb-4 ">
                                <img className="rounded-full mx-auto max-w-[170px] sm:max-w-[200px]" src="https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/about-image-300x300.jpg.webp" alt="writter-img" />
                            </div>
                            <div className="mb-5">
                                <h4 className="text-[18px] font-bold text-center">
                                    نیکا ملکی
                                </h4>
                            </div>
                            <div>
                                <p className="text-[14px] text-[#555555] text-center">
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                                </p>
                            </div>
                        </div>
                        <div className="mb-10 max-w-[90%] mx-auto lg:mx-0">
                            <img className="w-full " src="https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/newspaper-rec300c.jpg.webp" alt="ad-img" />
                        </div>
                        <div className="mb-16">
                            <div>
                                <div className="border-b-[2px] pb-[2px] border-[#000000] lg:max-w-[90%]  mb-6">
                                    <span className="text-white px-2  py-1 bg-[#000000]">خبر های مهم</span>
                                </div>
                            </div>
                            <div className="max-w-[90%]">
                                {Fashiondetailimgdata.data.map((item) => (
                                    <Fashiondetailside img={item[0]} title={item[1]} date={item[2]} />
                                ))}
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className="border-b-[2px] pb-[2px] border-[#000000] lg:max-w-[90%]  mb-6">
                                    <span className="text-white px-2  py-1 bg-[#000000]">خبر های اخیر</span>
                                </div>
                            </div>
                            <div className="max-w-[90%]">
                                {Fashiondetaildata.data.map((item) => (
                                    <Fashionsidenews title={item[0]} date={item[1]} />
                                ))}
                            </div>
                        </div>
                    </div>
                    {/*sidebar */}

                </div>

            </div>
            {/*footer */}
            <Footer />
            {/*footer */}
        </div>
    )
}


export default Fashiondetail