import PieChart from "../../components/PieChart";
import Header from "../../components/Header";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";

const Pie = () => {
    const { t, i18n } = useTranslation();
    return <Box m='20px' >
        <Header title={t("Pie Chart")} subtitle={t("Simple Pie Chart")}/>
        <Box height="75vh" sx={{direction:'ltr'}}>
        <PieChart/>
        </Box>
    </Box>;
};
export default Pie;
