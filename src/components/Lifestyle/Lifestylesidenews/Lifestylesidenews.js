import { Link } from "react-router-dom"


const Lifestylesidenews = (props) => {
    return (
        <Link to="/topnews">
            <div className="group flex flex-col gap-x-4 md:mb-4 lg:mb-0 border-b-[1px] border-dashed border-[#ededed] pb-3 mt-5">
                <div className="sm:my-auto md:my-0 xl:my-auto lg:mx-auto xl:mx-0">
                    <img className="max-h-[250px] md:max-h-[170px] w-full" src={props.img} alt="news-img"/>
                </div>
                <div className=" mt-3">
                    <h4 className="text-[14px] lg:text-center xl:text-start sm:text-[15px] font-bold group-hover:text-[#4db2ec] transition-colors duration-200">
                        {props.title}
                    </h4>
                    <span className="text-[12px] text-[#797979]">{props.date}</span>
                </div>
            </div>

        </Link>
    )
}

export default Lifestylesidenews