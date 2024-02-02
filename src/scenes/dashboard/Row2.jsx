import { useTranslation } from "react-i18next";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { useState, useEffect } from "react";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import LineChart from "../../components/LineChart";

const Row2 = () => {
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
                gridColumn={`span ${window.innerWidth >= 960 ? "8" : "12"}`}
                gridRow="span 2"
                backgroundColor={colors.primary[400]}
                borderRadius={1}
            >
                <Box
                    mt="25px"
                    p="0 30px"
                    display="flex "
                    justifyContent="space-between"
                    alignItems="center"
                    
                >
                    <Box>
                        <Typography
                            variant="h5"
                            fontWeight="600"
                            color={colors.grey[100]}
                        >
                            {t("Revenue Generated")}
                        </Typography>
                        <Typography
                            variant="h3"
                            fontWeight="bold"
                            color={colors.greenAccent[500]}
                        >
                            $59,342.32
                        </Typography>
                    </Box>
                    <Box>
                        <IconButton>
                            <DownloadOutlinedIcon
                                sx={{
                                    fontSize: "26px",
                                    color: colors.greenAccent[500],
                                }}
                            />
                        </IconButton>
                    </Box>
                </Box>
                <Box height="250px" m="-20px 0 0 0" sx={{ direction: "ltr" }}>
                    <LineChart isDashboard={true} />
                </Box>
            </Box>
            <Box
                gridColumn={`span ${window.innerWidth >= 960 ? "4" : "12"}`}
                gridRow="span 2"
                backgroundColor={colors.primary[400]}
                overflow="auto"
                borderRadius={1}
            >
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    borderBottom={`4px solid ${colors.primary[500]}`}
                    colors={colors.grey[100]}
                    p="15px"
                    position="sticky"
                    top="0"
                    zIndex="1"
                    backgroundColor={colors.primary[400]}

                >
                    <Typography
                        color={colors.grey[100]}
                        variant="h5"
                        fontWeight="600"
                    >
                        {t("Recent Transactions")}
                    </Typography>
                </Box>
                {mockTransactions.map((transaction, i) => (
                    <Box
                        key={`${transaction.txId}-${i}`}
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        borderBottom={`4px solid ${colors.primary[500]}`}
                        p="15px"
                    >
                        <Box>
                            <Typography
                                color={colors.greenAccent[500]}
                                variant="h5"
                                fontWeight="600"
                            >
                                {transaction.txId}
                            </Typography>
                            <Typography color={colors.grey[100]}>
                                {transaction.user}
                            </Typography>
                        </Box>
                        <Box color={colors.grey[100]}>{transaction.date}</Box>
                        <Box
                            backgroundColor={colors.greenAccent[500]}
                            p="5px 10px"
                            borderRadius="4px"
                        >
                            ${transaction.cost}
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default Row2;
