import { useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../../../Ui/Footer/Footer";
import Newsdetail from "../../../Ui/Newsdetail/Newsdetail";



const Lifestyledetail = () => {

    const [Lifestylecarddata, setLifestylecarddata] = useState({
        data: [
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/69-696x464.jpg", "برای ساختن آن در دنیای تجارت به چه چیزی نیاز دارم؟", "13/10/1403","/lifestyle/detail/1"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/68-696x464.jpg", "برای ساختن آن در دنیای تجارت به چه چیزی نیاز دارم؟", "13/10/1403","/lifestyle/detail/2"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/67-696x464.jpg", "برای ساختن آن در دنیای تجارت به چه چیزی نیاز دارم؟", "13/10/1403","/lifestyle/detail/3"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/66-696x464.jpg", "برای ساختن آن در دنیای تجارت به چه چیزی نیاز دارم؟", "13/10/1403","/lifestyle/detail/4"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/65-696x464.jpg", "بزرگترین اشتباهات اینفلوئنسرها در اینستاگرام", "13/10/1403","/lifestyle/detail/5"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/64-696x464.jpg", "استقامت خود را از طریق روش پیلاتس افزایش دهید", "13/10/1403","/lifestyle/detail/6"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/63-696x464.jpg", "بهترین تمرین برای بهبود عضلات پشت", "13/10/1403","/lifestyle/detail/7"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/62-696x464.jpg", "آهنگ های انگیزشی برای داشتن یک تمرین موفق", "13/10/1403","/lifestyle/detail/8"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/61-696x464.jpg", "چگونه با فعالیت های دلپذیر کالری بسوزانیم", "13/10/1403","/lifestyle/detail/9"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/60-696x452.jpg", "خطرات خوردن بیش از حد غذاهای رستورانی", "13/10/1403","/lifestyle/detail/10"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/59-696x466.jpg", "همه باید برای غذاهای مورد علاقه خود سفر کنند", "13/10/1403","/lifestyle/detail/11"],
            ["https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/58-696x465.jpg", "گوشت خوک خوشمزه در فر برای مسافران غذا", "13/10/1403","/lifestyle/detail/12"],

        ]
    })

    const index = useLocation().pathname

    const choosenindex = Lifestylecarddata.data.findIndex((id) => {
        if (id[3] == index) {
            return Lifestylecarddata
        }
    })
    return (
        <div>
            <Newsdetail img={Lifestylecarddata.data[choosenindex][0]} title={Lifestylecarddata.data[choosenindex][1]}/>
            {/*footer */}
            <Footer />
            {/*footer */}
        </div>
    )
}

export default Lifestyledetail