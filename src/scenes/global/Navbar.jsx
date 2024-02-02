import { useState, useEffect } from "react";
import { Sidebar, Menu, MenuItem, sidebarClasses } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { useTranslation } from "react-i18next";

const subMenuHeaderStyle = (isCollapsed) => {
    return isCollapsed
        ? { textAlign: "center", m: "15px 0 5px 0" }
        : { m: "15px 30px 5px 20px" };
};
const sidebarStyle = (lang) => {
    return lang === "ar"
        ? { display: "flex", flexDirection: "row-reverse" }
        : undefined;
};

const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <MenuItem
            active={selected === title}
            style={{ color: colors.grey[100] }}
            onClick={() => setSelected(title)}
            icon={icon}
            component={<Link to={to} />}
            rootStyles={{
                "& :hover": {
                    color: "#868dfb !important",
                    backgroundColor: "transparent !important",
                },
                "& :active": {
                    color: "#6870fa !important",
                },
            }}
        >
            <Typography>{title}</Typography>
        </MenuItem>
    );
};

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(
        !window.innerWidth >= 720 ? false : true
    );
    const [selected, setSelected] = useState("Dashboard");
    useEffect(() => {
        setCurrentLanguage(i18n.language);
    }, [i18n.language]);

    const [isMobileScreen, setIsMobileScreen] = useState(
        window.innerWidth <= 480
    );

    useEffect(() => {
        const handleResize = () => {
            setIsMobileScreen(window.innerWidth <= 480);
        };

        handleResize(); // Initial check

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const sidebarRootStyles = {
        [`.${sidebarClasses.container}`]: {
            height: "1000px !important",
        },

        borderLeftWidth: "0 !important",
        borderRightWidth: "0 !important",
        

        // [`& .pro-sidebar-inner`]: {
        //     background: `${colors.primary[400]} !important`
        // },
        // [`& .pro-icon-wrapper`]: {
        //     backgroundColor: "transparent !important",
        // },
        // [`& .pro-inner-item`]: {
        //     padding: "5px 35px 5px 20px !important",
        // },
        // [`& .pro-inner-item:hover`]: {
        //     color: "red !important",
        // },
        // [`& .pro-menu-item.active`]: {
        //     color: "#6870fa !important",
        // },
    };

    return (
        <Box sx={sidebarStyle("ar")}>
            <Sidebar
                collapsed={isCollapsed}
                backgroundColor={colors.primary[400]}
                rootStyles={sidebarRootStyles}
                rtl={currentLanguage === "ar"}
                width={isMobileScreen? window.innerWidth*3:`270px`}
                >
                <Menu iconShape="square">
                    {/* LOGO AND MENU ICON*/}
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{
                            margin: "10px 0 20px 0px",
                            color: colors.grey[100],
                            paddingRight: "25px",
                        }}
                        rootStyles={{
                            "& :hover": {
                                color: "#868dfb !important",
                                backgroundColor: "transparent !important",
                            },
                            "& :active": {
                                color: "#6870fa !important",
                            },
                        }}
                    >
                        {!isCollapsed && (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                ml="15px"
                                style={{
                                    "& :hover": {
                                        color: "#868dfb !important",
                                        backgroundColor:
                                            "transparent !important",
                                    },
                                }}
                            >
                                <Typography
                                    variant="h3"
                                    color={colors.grey[100]}
                                >
                                    {t("ADMIN")}
                                </Typography>
                                <IconButton
                                    onClick={() => setIsCollapsed(!isCollapsed)}
                                >
                                    <MenuOutlinedIcon />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>
                    {/* USER */}
                    {!isCollapsed && (
                        <Box mb="25px">
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <img
                                    alt="Profile-user"
                                    width="100px"
                                    height="100px"
                                    src={`../../assets/1234.jpg`}
                                    style={{
                                        marginBottom: 5,
                                        cursor: "pointer",
                                        borderRadius: "50%",
                                    }}
                                />
                            </Box>
                            <Box textAlign="center">
                                <Typography
                                    variant="h4"
                                    color={colors.grey[100]}
                                    fontWeight="bold"
                                    sx={{ m: "10px 0 0 0 0" }}
                                >
                                    M Nour Banqusli
                                </Typography>
                                <Typography
                                    variant="h6"
                                    color={colors.greenAccent[500]}
                                >
                                    Web Developer
                                </Typography>
                            </Box>
                        </Box>
                    )}
                    {/*MENU ITEMS*/}
                    <Box paddingLeft={isCollapsed ? undefined : "5%"}>
                        <Item
                            title={t("Dashboard")}
                            to="/"
                            icon={<HomeOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Typography
                            color={colors.grey[300]}
                            sx={subMenuHeaderStyle(isCollapsed)}
                        >
                            {t("Data")}
                        </Typography>

                        <Item
                            title={t("Manage Team")}
                            to="/team"
                            icon={<PeopleOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title={t("Contact Information")}
                            to="/contacts"
                            icon={<ContactsOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title={t("Invoice Balances")}
                            to="/invoices"
                            icon={<ReceiptOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Typography
                            color={colors.grey[300]}
                            sx={subMenuHeaderStyle(isCollapsed)}
                        >
                            {t("Pages")}
                        </Typography>
                        <Item
                            title={t("Profile Form")}
                            to="/form"
                            icon={<PersonOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title={t("Calendar")}
                            to="/calendar"
                            icon={<CalendarTodayOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title={t("FAQ")}
                            to="/faq"
                            icon={<HelpOutlineOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Typography
                            color={colors.grey[300]}
                            sx={subMenuHeaderStyle(isCollapsed)}
                        >
                            {t("Charts")}
                        </Typography>
                        <Item
                            title={t("Bar Chart")}
                            to="/bar"
                            icon={<BarChartOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title={t("Pie Chart")}
                            to="/pie"
                            icon={<PieChartOutlineOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title={t("Line Chart")}
                            to="/line"
                            icon={<TimelineOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title={t("Geography Chart")}
                            to="/geography"
                            icon={<MapOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    </Box>
                </Menu>
            </Sidebar>
        </Box>
    );
};
export default Navbar;
