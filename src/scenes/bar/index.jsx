import BarChart from "../../components/BarChart";
import Header from "../../components/Header";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";

const Bar = () => {
    const { t, i18n } = useTranslation();
    return <Box m='20px' >
        <Header title={t("Bar Chart")} subtitle={t("Simple Bar Chart")}/>
        <Box height="75vh"  sx={{direction:'ltr'}}>
        <BarChart isMobileScreen={true}/>
        </Box>
    </Box>;
};
export default Bar;
