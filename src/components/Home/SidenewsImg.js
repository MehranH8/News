import { Link } from "react-router-dom"


const SidenewsImg = (props)=>{
    return(
        <Link to="/topnews">
            <div className="group flex flex-col sm:flex-row md:flex-col xl:flex-row gap-x-4 md:mb-4 lg:mb-0 border-b-[1px] border-dashed border-[#ededed] pb-3 mt-5">
                <div className="sm:my-auto md:my-0 xl:my-auto mx-auto sm:mx-0 lg:mx-auto xl:mx-0">
                    <img className="max-w-[100px] md:max-w-[170px] xl:max-w-[100px]" src={props.img} alt="news-img"/>
                </div>
                <div className=" mt-3">
                    <h4 className="text-[14px] text-center sm:text-start lg:text-center xl:text-start sm:text-[15px] font-bold group-hover:text-[#4db2ec] transition-colors duration-200">
                        {props.title}
                    </h4>
                    <span className="text-[12px] text-[#797979]">{props.date}</span>
                </div>
            </div>

        </Link>
    )
}

export default SidenewsImg