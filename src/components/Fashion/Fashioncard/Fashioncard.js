import { Link } from "react-router-dom"


const Fashioncard = (props) => {
    return (
        <Link className="" to={props.link}>
            <div className="group ">
                <div className="w-full mb-3">
                    <img className="w-full max-h-[300px]" src={props.img} alt="news-img" />
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
        </Link>
    )
}
export default Fashioncard