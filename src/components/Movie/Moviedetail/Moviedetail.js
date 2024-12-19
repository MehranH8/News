import { useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../../../Ui/Footer/Footer";
import Newsdetail from "../../../Ui/Newsdetail/Newsdetail";



const Moviedetail = () => {


    const [Moviecarddata, setMoviecarddata] = useState({
        data: [
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/maxresdefault-9-696x392.jpg696x392.jpg", "  جلوه های ویژه جدید برای فیلم کریستوفر نولان با بازی تام هنکس و برد پیت", "13/10/1403","/movie/detail/1"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/maxresdefault-10-696x392.jpg", "  جلوه های ویژه جدید برای فیلم کریستوفر نولان با بازی تام هنکس و برد پیت", "13/10/1403","/movie/detail/2"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/maxresdefault-5-696x392.jpg", "تکنیک های VFX: ایجاد یک پرچم CG با افترافکت", "13/10/1403","/movie/detail/3"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/maxresdefault-4-696x392.jpg", "دستور العمل های ویدئویی: چگونه یک کافه ماکیاتو عالی درست کنیم", "13/10/1403","/movie/detail/4"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/maxresdefault-7-696x392.jpg", "روال تمرینی برای ساعدهای بزرگ و بازو قدرتمند ", "13/10/1403","/movie/detail/5"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/maxresdefault-6-696x392.jpg", "عجیب ترین مکان ها خاکستر در آمریکای جنوبی پراکنده شده است", "13/10/1403","/movie/detail/6"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/maxresdefault-11-696x392.jpg", "عجیب ترین مکان ها خاکستر در آمریکای جنوبی پراکنده شده است", "13/10/1403","/movie/detail/7"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/maxresdefault-10-696x392.jpg", "گوروی دره سیلیکون تحت تاثیر سرمایه‌گذاری‌های فولمینانت کاهش یافته است", "13/10/1403","/movie/detail/8"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/maxresdefault-9-696x392.jpg", "روال تمرینی برای ساعدهای بزرگ و بازو قدرتمند ", "13/10/1403","/movie/detail/9"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/maxresdefault-8-696x392.jpg", "تکنیک های VFX: ایجاد یک پرچم CG با افترافکت", "13/10/1403","/movie/detail/10"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/09/11-696x464.jpg", "عجیب ترین مکان ها خاکستر در آمریکای جنوبی پراکنده شده است", "13/10/1403","/movie/detail/11"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/09/57-696x464.jpg", "تکنیک های VFX: ایجاد یک پرچم CG با افترافکت", "13/10/1403","/movie/detail/12"],

        ]
    })

    const index = useLocation().pathname

    const choosenindex = Moviecarddata.data.findIndex((id) => {
        if (id[3] == index) {
            return Moviecarddata
        }
    })

    return (
        <div>
            <Newsdetail img={Moviecarddata.data[choosenindex][0]} title={Moviecarddata.data[choosenindex][1]}/>
            {/*footer */}
            <Footer />
            {/*footer */}
        </div>
    )
}

export default Moviedetail