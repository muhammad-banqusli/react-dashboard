import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useContext, useEffect } from "react";
import { ColorModeContext, tokens } from "../../theme";

import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const TopBar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
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

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setCurrentLanguage(lng);
    };

    return (
        <Box>
            <Box display="flex" justifyContent="space-between" p={2}>
                {/*SEARCH BAR*/}
                {!isMobileScreen && (
                    <Box
                        display="flex"
                        backgroundColor={colors.primary[400]}
                        borderRadius="3px"
                    >
                        <InputBase
                            sx={{ ml: 2, flex: 1, mr: 2 }}
                            placeholder={t("Search")}
                        ></InputBase>
                        <IconButton type="button" sx={{ p: 1 }}>
                            <SearchIcon />
                        </IconButton>
                    </Box>
                )}
                {/*ICONS*/}
                <Box display="flex" justifyContent="center">
                    <IconButton
                        onClick={() => changeLanguage("ar")}
                        style={{
                            display:
                                currentLanguage === "ar"
                                    ? "none"
                                    : "inline-flex",
                        }}
                    >
                        <Typography>عربي</Typography>
                    </IconButton>
                    <IconButton
                        onClick={() => changeLanguage("en")}
                        style={{
                            display:
                                currentLanguage === "en"
                                    ? "none"
                                    : "inline-flex",
                        }}
                    >
                        <Typography>EN</Typography>
                    </IconButton>

                    <IconButton onClick={colorMode.toggleColorMode}>
                        {theme.palette.mode === "dark" ? (
                            <DarkModeOutlinedIcon />
                        ) : (
                            <LightModeOutlinedIcon />
                        )}
                    </IconButton>
                    <IconButton>
                        <NotificationsOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <PersonOutlinedIcon />
                    </IconButton>
                </Box>
            </Box>
            {isMobileScreen && (
                <Box>
                    <Box
                        display="flex"
                        backgroundColor={colors.primary[400]}
                        borderRadius="3px"
                        m="20px"
                    >
                        <InputBase
                            sx={{ ml: 2, flex: 1, mr: 2 }}
                            placeholder={t("Search")}
                        ></InputBase>
                        <IconButton type="button" sx={{ p: 1 }}>
                            <SearchIcon />
                        </IconButton>
                    </Box>
                </Box>
            )}
        </Box>
    );
};
export default TopBar;
