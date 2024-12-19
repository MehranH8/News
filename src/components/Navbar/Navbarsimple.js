import React from "react";
import {
    Navbar,
    Collapse,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
    IconButton,
} from "@material-tailwind/react";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

function NavList() {

    const [openMenu, setOpenMenu] = React.useState(false);
    const [openMenusecond, setopenMenusecond] = React.useState(false);

    return (
        <ul className="my-2 flex  gap-2 lg:mb-0 lg:mt-0 flex-row lg:items-center lg:gap-4 xl:gap-8">
            <Link to="/">
                <li className="font-bold border-b-[3px] text-[14px] xl:text-[16px] border-white hover:border-[#4db2ec] pb-1 px-3 ">
                    اخبار
                </li>
            </Link>
            <Link to="/fashion">
                <li className="">
                    <Menu open={openMenu} handler={setOpenMenu} allowHover placement="bottom">
                        <MenuHandler>
                            <Button
                                variant="text"
                                className="flex py-0 items-center gap-3  bg-white shadow-none text-[14px] xl:text-[16px] hover:bg-white hover:shadow-none rounded-none font-bold border-b-[3px] border-white hover:border-[#4db2ec] pb-1 px-3 "
                            >
                                مد{" "}
                                <FaChevronDown
                                    strokeWidth={1.5}
                                    className={`h-3 w-3 transition-transform ${openMenu ? "rotate-180" : ""
                                        }`}
                                />
                            </Button>
                        </MenuHandler>
                        <MenuList className="!border-none hover:!border-none">
                            <div className="flex gap-x-8 !border-none hover:!border-none mb-4">
                                <Link to="/fashion/detail/1">
                                    <MenuItem >
                                        <div>
                                            <div className="w-full min-w-[150px] xl:min-w-[200px] mb-3">
                                                <img className="w-full" src="https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/22-324x400.jpg" alt="news-img" />
                                            </div>
                                            <div className="mb-2">
                                                <h4 className="text-[16px] text-black">
                                                    10 کفش فوق العاده برای این فصل
                                                </h4>
                                            </div>
                                            <div>
                                                <span className="text-[12px] text-[#797979]">13/10/1403</span>
                                            </div>
                                        </div>
                                    </MenuItem>
                                </Link>
                                <Link to="/fashion/detail/2">
                                    <MenuItem>
                                        <div>
                                            <div className="w-full min-w-[150px] xl:min-w-[200px] mb-3">
                                                <img className="w-full" src="https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/20-324x400.jpg" alt="news-img" />
                                            </div>
                                            <div className="mb-2">
                                                <h4 className="text-[16px] text-black">
                                                    10 کفش فوق العاده برای این فصل
                                                </h4>
                                            </div>
                                            <div>
                                                <span className="text-[12px] text-[#797979]">13/10/1403</span>
                                            </div>
                                        </div>
                                    </MenuItem>
                                </Link>
                                <Link to="/fashion/detail/3">
                                    <MenuItem>
                                        <div>
                                            <div className="w-full min-w-[150px] xl:min-w-[200px] mb-3">
                                                <img className="w-full" src="https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/21-324x400.jpg" alt="news-img" />
                                            </div>
                                            <div className="mb-2">
                                                <h4 className="text-[16px] text-black">
                                                    10 کفش فوق العاده برای این فصل
                                                </h4>
                                            </div>
                                            <div>
                                                <span className="text-[12px] text-[#797979]">13/10/1403</span>
                                            </div>
                                        </div>
                                    </MenuItem>
                                </Link>
                                <Link to="/fashion/detail/4">
                                    <MenuItem>
                                        <div>
                                            <div className="w-full min-w-[150px] xl:min-w-[200px] mb-3">
                                                <img className="w-full" src="https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/23-324x400.jpg" alt="news-img" />
                                            </div>
                                            <div className="mb-2">
                                                <h4 className="text-[16px] text-black">
                                                    10 کفش فوق العاده برای این فصل
                                                </h4>
                                            </div>
                                            <div>
                                                <span className="text-[12px] text-[#797979]">13/10/1403</span>
                                            </div>
                                        </div>
                                    </MenuItem>
                                </Link>
                            </div>
                            <Link to="/fashion">
                                <MenuItem className="hover:!bg-white max-w-fit">
                                    <span className="text-[16px]  hover:text-[#4db2ec] transition-colors duration-200">
                                        بیشتر
                                    </span>
                                </MenuItem>
                            </Link>
                        </MenuList>
                    </Menu>
                </li>
            </Link>
            <Link to="/technology">
                <li>
                    <Menu open={openMenusecond} handler={setopenMenusecond} allowHover placement="bottom">
                        <MenuHandler>
                            <Button
                                variant="text"
                                className="flex py-0 items-center gap-3 bg-white shadow-none hover:bg-white hover:shadow-none rounded-none font-bold border-b-[3px] text-[14px] xl:text-[16px] border-white hover:border-[#4db2ec] pb-1 px-3 "

                            >
                                تکنولوژی{" "}
                                <FaChevronDown
                                    strokeWidth={1.5}
                                    className={`h-3 w-3 transition-transform ${openMenusecond ? "rotate-180" : ""
                                        }`}
                                />
                            </Button>
                        </MenuHandler>
                        <MenuList className="!border-none hover:!border-none">
                            <div className="flex gap-x-8 !border-none hover:!border-none mb-4">
                                <Link to="/technology/detail/1">
                                    <MenuItem >
                                        <div>
                                            <div className="w-full min-w-[150px] xl:min-w-[200px] mb-3">
                                                <img className="w-full" src="https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/28-324x400.jpg" alt="news-img" />
                                            </div>
                                            <div className="mb-2">
                                                <h4 className="text-[16px] text-black">
                                                    بهترین هدست های واقعیت مجازی
                                                </h4>
                                            </div>
                                            <div>
                                                <span className="text-[12px] text-[#797979]">13/10/1403</span>
                                            </div>
                                        </div>
                                    </MenuItem>
                                </Link>
                                <Link to="/technology/detail/2">
                                    <MenuItem>
                                        <div>
                                            <div className="w-full min-w-[150px] xl:min-w-[200px] mb-3">
                                                <img className="w-full" src="https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/29-324x400.jpg" alt="news-img" />
                                            </div>
                                            <div className="mb-2">
                                                <h4 className="text-[16px] text-black">
                                                    بهترین هدست های واقعیت مجازی
                                                </h4>
                                            </div>
                                            <div>
                                                <span className="text-[12px] text-[#797979]">13/10/1403</span>
                                            </div>
                                        </div>
                                    </MenuItem>
                                </Link>
                                <Link to="/technology/detail/3">
                                    <MenuItem>
                                        <div>
                                            <div className="w-full min-w-[150px] xl:min-w-[200px] mb-3">
                                                <img className="w-full" src="https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/30-324x400.jpg" alt="news-img" />
                                            </div>
                                            <div className="mb-2">
                                                <h4 className="text-[16px] text-black">
                                                    بهترین هدست های واقعیت مجازی
                                                </h4>
                                            </div>
                                            <div>
                                                <span className="text-[12px] text-[#797979]">13/10/1403</span>
                                            </div>
                                        </div>
                                    </MenuItem>
                                </Link>
                                <Link to="/technology/detail/4">
                                    <MenuItem>
                                        <div>
                                            <div className="w-full min-w-[150px] xl:min-w-[200px] mb-3">
                                                <img className="w-full" src="https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/31-324x400.jpg" alt="news-img" />
                                            </div>
                                            <div className="mb-2">
                                                <h4 className="text-[16px] text-black">
                                                    بهترین هدست های واقعیت مجازی
                                                </h4>
                                            </div>
                                            <div>
                                                <span className="text-[12px] text-[#797979]">13/10/1403</span>
                                            </div>
                                        </div>
                                    </MenuItem>
                                </Link>
                            </div>
                            <Link to="/technology">
                                <MenuItem className="hover:!bg-white max-w-fit">
                                    <span className="text-[16px]  hover:text-[#4db2ec] transition-colors duration-200">
                                        بیشتر
                                    </span>
                                </MenuItem>
                            </Link>
                        </MenuList>

                    </Menu>
                </li>
            </Link>
            <Link to="/lifestyle">
                <li className="font-bold border-b-[3px] text-[14px] xl:text-[16px] border-white hover:border-[#4db2ec] pb-1 px-3">
                    سبک زندگی
                </li>
            </Link>
            <Link to="/movie">
                <li className="font-bold border-b-[3px] text-[14px] xl:text-[16px] border-white hover:border-[#4db2ec] pb-1 px-3">
                    فیلم و سریال
                </li>
            </Link>
        </ul>
    );
}

export function NavbarSimple() {

    return (
        <Navbar className="w-full max-w-none lg:block hidden rounded-none px-6 py-4">
            <div className="flex items-center justify-between text-blue-gray-900 lg:mx-16 xl:mx-32">
                <div className="">
                    <NavList />
                </div>
                <div>
                    <div class="w-full  max-w-sm min-w-[200px]">
                        <div class="relative">
                            <input
                                class="w-full bg-transparent text-block rounded text-sm border border-slate-200 pr-3 pl-28 py-2 "
                                placeholder="جستوجو ..."
                            />
                            <button
                                class="absolute h-full top-0 left-0 flex items-center rounded bg-[#222222] hover:bg-[#4db2ec] duration-200 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm "
                                type="button"
                            >
                                جستوجو
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 mr-2">
                                    <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Navbar>
    );
}