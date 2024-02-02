import LineChart from "../../components/LineChart";
import Header from "../../components/Header";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";

const Line = () => {
    const { t, i18n } = useTranslation();
    const isMobileScreen=true;
    return <Box m='20px'  >
        <Header title={t("Line Chart")} subtitle={t("Simple Line Chart")}/>
        <Box height={!isMobileScreen? "75vh":"50vh"} sx={{direction:'ltr'}}>
        <LineChart/>
        </Box>
    </Box>;
};
export default Line;
