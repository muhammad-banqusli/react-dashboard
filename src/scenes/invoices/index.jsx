import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid,arSD } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const Invoices = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

    const getDirection = (lang) => {
        return lang === "ar" ? "rtl" : "ltr";
    };

    const columns = [
        { field: "id", headerName: t("ID") },
        {
            field: "name",
            headerName: t("Name"),
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "phone",
            headerName: t("Phone Number"),
            flex: 1,
        },
        {
            field: "email",
            headerName: t("Email"),
            flex: 1.2,
            cellClassName: "email-column--cell",
        },
        {
            field: "cost",
            headerName: t("Cost"),
            flex: 0.5,
            cellClassName: "cost-column--cell",
        },
        {
            field: "date",
            headerName: t("Date"),
            flex: 1,
        },
    ];

    useEffect(() => {
        setCurrentLanguage(i18n.language);
    }, [i18n.language]);

    return (
        <Box m="20px">
            <Header
                title={t("Invoice Balances")}
                subtitle={t("List of Invoice Balances")}
            />
            <Box
                m="40px 0 0 0"
                height="75vh"
                sx={{
                    direction: getDirection(currentLanguage), // Set the direction based on the language
                    "& .MuiDataGrid-root": {
                        border: "none",

                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },
                    "& .name-column--cell": {
                        color: colors.greenAccent[300],
                    },
                    "& .email-column--cell": {
                        direction: "ltr", // Set direction explicitly for the Email field
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700],
                     
                    },
                    "& .MuiCheckbox-root": {
                        color: `${colors.greenAccent[200]} !important`,
                    },
                    "& .email-column--cell": {
                        direction: "ltr", // Set direction explicitly for the Email field
                    },
                    "& .cost-column--cell": {
                        justifyContent: "right",
                    },
                }}
            >
                <DataGrid
                    localeText={currentLanguage==='ar'? arSD.components.MuiDataGrid.defaultProps.localeText:undefined}
                    rows={mockDataInvoices}
                    columns={columns}
                    checkboxSelection
                />
            </Box>
        </Box>
    );
};

export default Invoices;
