import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import StatBox from "../../components/StatBox";
import { useTranslation } from "react-i18next";
import {
    Box,
    Button,
    IconButton,
    Typography,
    useTheme,
    Grid,
    container,
    Container,
} from "@mui/material";
import { tokens } from "../../theme";
import { useState,useEffect } from "react";

const Row1 = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const { t, i18n } = useTranslation();

    const [gridColumn, setGridColumn] = useState(12);

  const handleResize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 960) {
      setGridColumn(3);
    } else if (screenWidth >= 600) {
      setGridColumn(6);
    } else {
      setGridColumn(12);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

    return (
        <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn={`span ${gridColumn}`}
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius={1}
        >
          <StatBox
            title="12,361"
            subtitle={t("Emails Sent")}
            progress="0.75"
            increase="+14%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn={`span ${gridColumn}`}
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius={1}
        >
          <StatBox
            title="431,225"
            subtitle={t("Sales Obtained")}
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn={`span ${gridColumn}`}
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius={1}
        >
          <StatBox
            title="32,441"
            subtitle={t("New Clients")}
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn={`span ${gridColumn}`}
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius={1}
        >
          <StatBox
            title="1,325,134"
            subtitle={t("Traffic Received")}
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box> 
        </Box>
    )}
      
            

export default Row1;
