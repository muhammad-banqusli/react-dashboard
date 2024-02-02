import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Header from "../../components/Header";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

const Dashboard1 = () => {
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

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const { t, i18n } = useTranslation();

    return (
        <Box m="20px">
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
                <Header
                    title={t("Dashboard")}
                    subtitle={t("Welcome to your dashboard")}
                />

                {!isMobileScreen && (
                    <Box>
                        <Button
                            sx={{
                                backgroundColor: colors.blueAccent[700],
                                color: colors.grey[100],
                                fontSize: "14px",
                                fontWeight: "bold",
                                padding: "10px 20px",
                            }}
                        >
                            <DownloadOutlinedIcon
                                sx={
                                    i18n.language === "ar"
                                        ? { ml: "10px" }
                                        : { mr: "10px" }
                                }
                            />
                            {t("Download Reports")}
                        </Button>
                    </Box>
                )}
            </Box>
            {isMobileScreen && (
                <Box>
                    <Box mb='20px' display="flex" justifyItems="center">
                        <Button fullWidth={isMobileScreen? "480px":false}
                            sx={isMobileScreen?{
                              backgroundColor: colors.blueAccent[700],
                              color: colors.grey[100],
                              fontSize: "20px",
                              fontWeight: "bold",
                              padding: "10px 20px",
                          }:{
                            backgroundColor: colors.blueAccent[700],
                            color: colors.grey[100],
                            fontSize: "14px",
                            fontWeight: "bold",
                            padding: "10px 20px",
                        }}
                        >
                            <DownloadOutlinedIcon
                                sx={
                                    i18n.language === "ar"
                                        ? { ml: "10px" }
                                        : { mr: "10px" }
                                }
                            />
                            {t("Download Reports")}
                        </Button>
                    </Box>
                </Box>
            )}
            <Box>
                <Row1 />
                <Row2 />
                <Row3 />
            </Box>
        </Box>
    );
};

export default Dashboard1;
