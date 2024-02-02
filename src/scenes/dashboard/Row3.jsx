import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import ProgressCircle from "../../components/ProgressCircle";
import { useTranslation } from "react-i18next";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { useState, useEffect } from "react";
import { mockTransactions } from "../../data/mockData";
const Row3 = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const { t, i18n } = useTranslation();

    const [gridColumn, setGridColumn] = useState(12);

    
    useEffect(() => {
        setGridColumn();
        window.addEventListener("resize", setGridColumn);
        return () => {
            window.removeEventListener("resize", setGridColumn);
        };
    }, []);

    return (
        <Box
            display="grid"
            gridTemplateColumns="repeat(12, 1fr)"
            gridAutoRows="140px"
            gap="20px"
            mt="20px"
        >
            <Box
                gridColumn={`span ${window.innerWidth>=960? "4":"12"}`}
                gridRow="span 2"
                backgroundColor={colors.primary[400]}
                p="30px"
                borderRadius={1}
            >
                <Typography variant="h5" fontWeight="600">
                    {t("Campaign")}
                </Typography>
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    mt="25px"
                >
                    <ProgressCircle size="125" />
                    <Typography
                        variant="h5"
                        color={colors.greenAccent[500]}
                        sx={{ mt: "15px" }}
                    >
                        $48,352 {t("revenue generated")}
                    </Typography>
                    <Typography>
                        {t("Includes extra misc expenditures and costs")}
                    </Typography>
                </Box>
            </Box>
            <Box
                gridColumn={`span ${window.innerWidth>=960? "4":"12"}`}
                gridRow="span 2"
                backgroundColor={colors.primary[400]}
                borderRadius={1}
            >
                <Typography
                    variant="h5"
                    fontWeight="600"
                    sx={{ padding: "30px 30px 0 30px" }}
                >
                    {t("Sales Quantity")}
                </Typography>
                <Box height="250px" mt="-20px" sx={{ direction: "ltr" }}>
                    <BarChart isDashboard={true} />
                </Box>
            </Box>
            <Box
                gridColumn={`span ${window.innerWidth>=960? "4":"12"}`}
                gridRow="span 2"
                backgroundColor={colors.primary[400]}
                padding="30px"
                borderRadius={1}
            >
                <Typography
                    variant="h5"
                    fontWeight="600"
                    sx={{ marginBottom: "15px" }}
                >
                    {t("Geography Based Traffic")}
                </Typography>
                <Box height="200px">
                    <GeographyChart isDashboard={true} />
                </Box>
            </Box>
        </Box>
    );
};

export default Row3;
