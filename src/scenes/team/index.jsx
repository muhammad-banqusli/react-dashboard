import { Box, Typography, useTheme, Button } from "@mui/material";
import { DataGrid, arSD } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import Modal from "react-modal";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import ModalPopup from "../../components/ModalPopup";

const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
    const [isPopupMenuOpen, setIsPopupMenuOpen] = useState(false);

    const getDirection = (lang) => {
        return lang === "ar" ? "rtl" : "ltr";
    };

    useEffect(() => {
        setCurrentLanguage(i18n.language);
    }, [i18n.language]);

    const toggleModal = () => {
        setIsPopupMenuOpen(!isPopupMenuOpen);
    };

    const columns = [
        { field: "id", headerName: t("ID"), width: 100 },
        {
            field: "name",
            headerName: t("Name"),
            width: 240,
            cellClassName: "name-column--cell",
        },
        {
            field: "age",
            headerName: t("Age"),
            type: "number",
            headerAlign: "left",
            align: "left",
            width: 100,
        },
        {
            field: "phone",
            headerName: t("Phone Number"),

            width: 200,
        },
        {
            field: "email",
            headerName: t("Email"),
            width: 240,
            flex: 1,
        },
        {
            field: "accessLevel",
            headerName: t("Access Level"),
            headerAlign: "center",
            width: 240,
            renderCell: ({ row: { access } }) => {
                access = t(access);
                return (
                    <Box
                        width="60%"
                        m="0 auto"
                        p="5px"
                        display="flex"
                        justifyContent="center"
                        backgroundColor={
                            access === t("admin")
                                ? colors.greenAccent[600]
                                : access === t("manager")
                                ? colors.greenAccent[700]
                                : colors.greenAccent[700]
                        }
                        borderRadius="4px"
                    >
                        {access === t("admin") && (
                            <AdminPanelSettingsOutlinedIcon />
                        )}
                        {access === t("manager") && <SecurityOutlinedIcon />}
                        {access === t("user") && <LockOpenOutlinedIcon />}
                        <Typography
                            color={colors.grey[100]}
                            sx={{ m: "0 5px" }}
                        >
                            {access}
                        </Typography>
                    </Box>
                );
            },
        },
    ];

    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between">
                <Header
                    title={t("Manage Team")}
                    subtitle={t("Managing the Team Members")}
                />
                <Box>
                    <Button
                        sx={{
                            backgroundColor: colors.blueAccent[700],
                            color: colors.grey[100],
                            fontSize: "14px",
                            fontWeight: "bold",
                            padding: "10px 20px",
                            textTransform: "none",
                        }}
                        onClick={toggleModal}
                    >
                        <PersonAddAlt1Icon
                            sx={
                                i18n.language === "ar"
                                    ? { ml: "10px" }
                                    : { mr: "10px" }
                            }
                        />
                        {t("Add a Team Member")}
                    </Button>
                </Box>
            </Box>

            <Box
                m="40px 0 0 0"
                height="75vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },
                    "& .name-column--cell": {
                        color: colors.greenAccent[300],
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
                }}
            >
                <div>
                    <DataGrid
                        checkboxSelection
                        rows={mockDataTeam}
                        columns={columns}
                        localeText={
                            currentLanguage === "ar"
                                ? arSD.components.MuiDataGrid.defaultProps
                                      .localeText
                                : undefined
                        }
                    />
                </div>
            </Box>
            
            
        </Box>
    );
};

export default Team;
