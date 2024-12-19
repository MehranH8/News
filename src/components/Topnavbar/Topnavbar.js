import { Link } from "react-router-dom"

const Topnavbar = () => {
    return (
        <div className=" justify-between lg:flex hidden lg:mx-16 xl:mx-32 mt-4">
            <div>
                <Link to="/">
                    <img className="max-w-[250px]" src="https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2022/10/np12blue-retina.png.webp" alt="logo" />
                </Link>
            </div>
            <div className="my-auto">
                <img src="https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/newspaper-rec728.jpg.webp" alt="banner" />
            </div>
        </div>
    )
}

export default Topnavbar