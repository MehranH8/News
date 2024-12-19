import { useState } from "react"
import Newsdetailside from "./Newsdetailside"
import { FaCommentAlt, FaEye, FaTelegramPlane } from "react-icons/fa";
import { FaFacebookF, FaXTwitter, FaPinterestP } from "react-icons/fa6";
import { Link } from "react-router-dom";



const Newsdetail = (props) => {

    const [Newssidedata, setNewssidedata] = useState({
        data: [
            ["Ambrose به دنبال پیشنهادات در مرکز شهر برای آپارتمان است", "13/10/1403"],
            ["Ambrose به دنبال پیشنهادات در مرکز شهر برای آپارتمان است", "13/10/1403"],
            ["Ambrose به دنبال پیشنهادات در مرکز شهر برای آپارتمان است", "13/10/1403"],
            ["Ambrose به دنبال پیشنهادات در مرکز شهر برای آپارتمان است", "13/10/1403"],
            ["Ambrose به دنبال پیشنهادات در مرکز شهر برای آپارتمان است", "13/10/1403"],
        ]
    })


    return (
        <div className="flex lg:flex-row flex-col mx-8 md:mx-16 lg:mx-24 xl:mx-32 gap-16 ">
            {/*mainpart */}
            <div className="mt-20 lg:w-[90%]">
                {/*title */}
                <div className="mb-10">
                    <div className="flex gap-2 mb-6">
                        <span className="text-white bg-[#2360db] hover:bg-opacity-80 text-[12px] py-[2px] px-2">تکنولوژی</span>
                        <span className="text-white bg-[#4482ff] hover:bg-opacity-80 text-[12px] py-[2px] px-2">گجت ها</span>
                    </div>
                    <div className="mb-4">
                        <h2 className="text-[20px] md:text-[26px] font-bold">{props.title}</h2>
                    </div>
                    <div className="mb-3">
                        <p className="text-[14px] sm:text-[16px] text-[#999999]">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                        </p>
                    </div>
                    <div className="sm:flex justify-between  mb-4">
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
                    <div className="flex gap-2">
                        <Link  className="text-white bg-[#516eab] p-3 hover:bg-opacity-80 transition-opacity duration-200" to="#">
                            <span>
                                <FaFacebookF />
                            </span>
                        </Link>
                        <Link  className="text-white bg-[#26c5f6] p-3 hover:bg-opacity-80 transition-opacity duration-200" to="#">
                            <span>
                                <FaXTwitter />
                            </span>
                        </Link>
                        <Link  className="text-white bg-[#ca212a] p-3 hover:bg-opacity-80 transition-opacity duration-200" to="#">
                            <span>
                                <FaPinterestP />
                            </span>
                        </Link>
                        <Link  className="text-white bg-[#7bbf6a] p-3 hover:bg-opacity-80 transition-opacity duration-200" to="#">
                            <span>
                                <FaTelegramPlane />
                            </span>
                        </Link>
                    </div>
                </div>
                {/*title */}
                {/*text */}
                <div className="mb-8">
                    <div className="mb-8">
                        <img className="w-full" src={props.img} alt="blog-img" />
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
                <div className="flex gap-2 justify-center sm:justify-start  w-full border-y-[1px] border-[#ededed] mt-8 mb-14 py-6">
                    <span className="text-white bg-[#516eab] p-3 hover:bg-opacity-80 transition-opacity duration-200">
                        <Link to="#">
                            <FaFacebookF />
                        </Link>
                    </span>
                    <span className="text-white bg-[#26c5f6] p-3 hover:bg-opacity-80 transition-opacity duration-200">
                        <Link to="#">
                            <FaXTwitter />
                        </Link>
                    </span>
                    <span className="text-white bg-[#ca212a] p-3 hover:bg-opacity-80 transition-opacity duration-200">
                        <Link to="#">
                            <FaPinterestP />
                        </Link>
                    </span>
                    <span className="text-white bg-[#7bbf6a] p-3 hover:bg-opacity-80 transition-opacity duration-200">
                        <Link to="#">
                            <FaTelegramPlane />
                        </Link>
                    </span>
                </div>
                {/*contact */}
                {/*other news */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 sm:gap-y-0 gap-x-8">
                    <div>
                        <span className="text-[12px] text-[#c1c1c1] flex justify-self-start">مقاله قبلی</span>
                        <p className="text-[12px] sm:text-[14px] hover:text-[#4db2ec] mt-2 transition-colors duration-150">
                            <Link to="#">
                                سوپر تراشه اسنپدراگون بر روی جدیدترین دوربین های عکاسی نصب شده است
                            </Link>

                        </p>
                    </div>
                    <div>
                        <span className="text-[12px] text-[#c1c1c1] flex justify-self-end">مقاله بعدی</span>
                        <p className="text-[12px] sm:text-[14px] hover:text-[#4db2ec] transition-colors mt-2 duration-150 text-end">
                            <Link to="#">
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
            </div>
            {/*mainpart */}
            {/*sidebar */}
            <div className="lg:mx-auto mt-20 mb-8 sm:mb-20 lg:mb-36 sticky top-10  w-full lg:w-[40%] h-full">
                <div className="mb-16">
                    <div>
                        <div className=" lg:max-w-[90%]  mb-6">
                            <span className="text-[20px] font-bold">خبر های اخیر</span>
                        </div>
                    </div>
                    <div className="max-w-[90%]">
                        {Newssidedata.data.map((item) => (
                            <Newsdetailside title={item[0]} date={item[1]} />
                        ))}
                    </div>
                </div>
                <div>
                    <div>
                        <div className=" lg:max-w-[90%]  mb-6">
                            <span className="text-[20px] font-bold">خبر های مهم</span>
                        </div>
                    </div>
                    <div className="max-w-[90%]">
                        {Newssidedata.data.map((item) => (
                            <Newsdetailside title={item[0]} date={item[1]} />
                        ))}
                    </div>
                </div>
            </div>
            {/*sidebar */}

        </div >
    )
}

export default Newsdetail