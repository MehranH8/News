import { Link } from "react-router-dom"


const SideTwoCol = (props) => {
    return (
        <Link to="/topnews">
            <div className="group flex flex-col gap-x-4 pb-3 mt-3">
                <div className="sm:my-auto md:my-0 xl:my-auto lg:mx-auto xl:mx-0">
                    <img className="" src={props.img} alt="news-img"/>
                </div>
                <div className="mt-2">
                    <h4 className="text-[13px] lg:text-center xl:text-start lg:text-[15px]  group-hover:text-[#4db2ec] transition-colors duration-200">
                        {props.title}
                    </h4>
                </div>
            </div>

        </Link>
    )
}

export default SideTwoCol