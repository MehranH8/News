import { Link } from "react-router-dom"

const Newsdetailside = (props) => {
    return (
        <Link to="#">
            <div className="group border-b-[1px] border-dashed border-[#ededed] pb-3 mt-5">
                <h4 className="text-[14px] sm:text-[15px] font-bold group-hover:text-[#4db2ec] transition-colors duration-200">
                    {props.title}
                </h4>
                <span className="text-[12px] text-[#797979]">{props.date}</span>
            </div>
        </Link>
    )
}

export default Newsdetailside