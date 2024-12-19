import { useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../../../Ui/Footer/Footer";
import Newsdetail from "../../../Ui/Newsdetail/Newsdetail";




const Technologydetail = () => {



    const [technologycarddata, settechnologycarddata] = useState({
        data: [
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/31-696x466.jpg", " بهترین ابزارها و ویژگی های خانه هوشمند", "13/10/1403","/technology/detail/1"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/30-696x392.jpg", "بازی اکشن جدید با صدای Hi-Fi ممتاز به روز شده است", "13/10/1403","/technology/detail/2"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/29-696x464.jpg", "سوپر تراشه اسنپدراگون بر روی جدیدترین دوربین های عکاسی نصب شده است", "13/10/1403","/technology/detail/3"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/28-696x368.jpg", " دوربین بهتری را برای حساب YouTube خود کشف کنید", "13/10/1403","/technology/detail/4"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/27-696x464.jpg", " بهترین ابزارها و ویژگی های خانه هوشمند", "13/10/1403","/technology/detail/5"],
        ]
    })



    const index = useLocation().pathname

    const choosenindex = technologycarddata.data.findIndex((id) => {
        if (id[3] == index) {
            return technologycarddata
        }
    })

    return (
        <div>
            <Newsdetail  img={technologycarddata.data[choosenindex][0]} title={technologycarddata.data[choosenindex][1]}/>
            {/*footer */}
            <Footer />
            {/*footer */}
        </div>
    )
}

export default Technologydetail