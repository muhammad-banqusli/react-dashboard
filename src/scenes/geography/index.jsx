import GeographyChart from "../../components/GeographyChart";
import Header from "../../components/Header";
import { Box } from "@mui/material";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import {useState,useEffect } from "react";

const Geography = () => {
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

    const { t, i18n } = useTranslation();
    const theme=useTheme();
    const colors=tokens(theme.palette.mode);
    return <Box m='20px'  >
        <Header title={t("Geography Chart")} subtitle={t("Simple Geography Chart")}/>
        <Box height={!isMobileScreen? "75vh":"100vh"} border={`1px solid ${colors.grey[100]}`} borderRadius="4px" sx={{direction:'ltr'}}>
        <GeographyChart isMobileScreen={isMobileScreen}/>
        </Box>
    </Box>;
};
export default Geography;
