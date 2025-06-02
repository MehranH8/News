import React from "react";
import {
    Drawer,
    Button,
    Typography,
    IconButton,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
} from "@material-tailwind/react";
import { FaBars, FaMoneyBillWave, FaNewspaper } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import { GrTechnology } from "react-icons/gr";
import { RiPlantFill } from "react-icons/ri";
import { Link } from "react-router-dom";



export function Smallnavbar() {
    const [openRight, setOpenRight] = React.useState(false);
    const openDrawerRight = () => setOpenRight(true);
    const closeDrawerRight = () => setOpenRight(false);

    return (
        <div className="lg:hidden block bg-[#000000]">
            <div className="flex justify-between sm:justify-start mx-8 ">
                <div className="my-auto">
                    <button className="my-auto text-[24px] text-white" onClick={openDrawerRight}><FaBars /></button>
                </div>
                <div className="my-auto sm:mx-auto ">
                    <Link to="/">
                    <img className="max-w-[150px]  sm:max-w-[250px] sm:-mr-8" src="https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/09/np10blue-white-retina.png.webp" alt="logo" />
                    </Link>
                </div>

            </div>
            <Drawer
                className="bg-[#000000]"
                placement="right"
                open={openRight}
                onClose={closeDrawerRight}>
                <div className="mb-2  flex-col items-center justify-between p-4">
                    <IconButton variant="text" color="blue-gray" onClick={closeDrawerRight}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-7 w-7 text-white"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </IconButton>
                    <Typography variant="h5" color="blue-gray">
                        <div className="my-auto ">
                            <Link onClick={closeDrawerRight} to="/">
                                <img className="" src="https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/09/np10blue-white-retina.png.webp" alt="logo" />
                            </Link>
                        </div>
                    </Typography>
                </div>
                <List>
                    <Link onClick={closeDrawerRight}  to="/">
                        <ListItem className="text-[16px] text-white">
                            <ListItemPrefix className="ml-3 text-[18px]">
                                <FaNewspaper />
                            </ListItemPrefix>
                            اخبار
                        </ListItem>
                    </Link>
                    <Link onClick={closeDrawerRight}  to="/fashion">
                        <ListItem className="text-[16px] text-white">
                            <ListItemPrefix className="ml-3 text-[18px]">
                                <GiClothes />
                            </ListItemPrefix>
                            مد
                        </ListItem>
                    </Link>
                    <Link onClick={closeDrawerRight}  to="/technology">
                        <ListItem className="text-[16px] text-white">
                            <ListItemPrefix className="ml-3 text-[18px]">
                                <GrTechnology />
                            </ListItemPrefix>
                            تکنولوژی
                        </ListItem>
                    </Link>
                    <Link  onClick={closeDrawerRight} to="/lifestyle">
                        <ListItem className="text-[16px] text-white">
                            <ListItemPrefix className="ml-3 text-[18px]">
                                <RiPlantFill />
                            </ListItemPrefix>
                            سبک زندگی
                        </ListItem>
                    </Link>
                    <Link onClick={closeDrawerRight}  to="/movie">
                        <ListItem className="text-[16px] text-white">
                            <ListItemPrefix className="ml-3 text-[18px]">
                                <FaMoneyBillWave />
                            </ListItemPrefix>
                            فیلم و سریال
                        </ListItem>
                    </Link>

                </List>
            </Drawer>
        </div>
    );
}