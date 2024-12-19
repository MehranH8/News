import { Link } from "react-router-dom"

const Tecgnologycard = (props) => {
    return (
        <Link className="" to={props.link}>
            <div className="group flex flex-col-reverse md:grid lg:flex xl:grid grid-cols-2 gap-x-10">
                <div className="my-auto">
                    <div className="mb-2">
                        <span className="text-[#4db2ec] text-[14px]">تکنولوژی</span>
                    </div>
                    <div className="mb-2">
                        <h4 className="text-[14px] sm:text-[16px] font-bold text-black group-hover:text-[#4db2ec] transition-colors duration-200">
                            {props.title}
                        </h4>
                    </div>
                    <div className="mt-1 mb-4">
                        <p className="text-[14px] text-[#797979] text-justify sm:text-start">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد</p>
                    </div>
                    <div>
                        <span className="text-[12px] text-[#797979]">{props.date}</span>
                    </div>
                </div>
                <div>
                    <div className="w-full mb-3 h-full lg:h-auto">
                        <img className="w-full h-full  lg:h-autolg:max-h-[300px]" src={props.img} alt="news-img" />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Tecgnologycard