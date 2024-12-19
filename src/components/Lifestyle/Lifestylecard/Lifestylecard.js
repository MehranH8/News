import { Link } from "react-router-dom"



const Lifestylecard = (props) => {
    return (
        <Link className="" to={props.link}>
            <div className="group flex flex-col sm:flex-row md:flex-col lg:flex-row gap-x-6 mb-12 sm:mb-6">
                <div className="my-auto">
                    <div className="w-full mb-3">
                        <img className="w-full  max-h-[200px]" src={props.img} alt="news-img" />
                    </div>
                </div>
                <div className="my-auto">
                    <div className="mb-3">
                    <span className="bg-[#000000b3] mb-2 text-white group-hover:bg-[#4db2ec] transition-colors duration-200 text-[10px] sm:text-[12px] px-1 sm:px-2 py-1 ">سلامت</span>
                    </div>
                    <div className="mb-2">
                        <h4 className="text-[14px] sm:text-[16px] font-bold text-black group-hover:text-[#4db2ec] transition-colors duration-200">
                            {props.title}
                        </h4>
                    </div>
                    <div className="my-1">
                        <p className="text-[14px] text-[#797979] text-justify sm:text-start">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است</p>
                    </div>
                    <div>
                        <span className="text-[12px] text-[#797979]">{props.date}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Lifestylecard