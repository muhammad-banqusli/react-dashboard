import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import TopBar from "./scenes/global/Topbar";
import Dashboard from "./scenes/dashboard";
import Navbar from "./scenes/global/Navbar";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Form from "./scenes/form";
import Calendar from "./scenes/calendar";
import FAQ from "./scenes/faq";
import Bar from "./scenes/bar";
import Pie from "./scenes/pie";
import Line from "./scenes/line";
import Geography from "./scenes/geography";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
    const [theme, colorMode] = useMode();
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

    useEffect(() => {
        setCurrentLanguage(i18n.language);
    }, [i18n.language]);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div
                    className={`app ${
                        currentLanguage === "ar" ? "rtl font-ar" : "font-en"
                    }`}
                >
                    <Navbar />
                    <main className="content">
                        <TopBar />
                        <Routes>
                            <Route path="/" element={<Dashboard />} />

                            <Route path="/team" element={<Team />} />
                            <Route path="/invoices" element={<Invoices />} />
                            <Route path="/contacts" element={<Contacts />} />
                            <Route path="/form" element={<Form />} />
                            <Route path="/calendar" element={<Calendar />} />
                            <Route path="/faq" element={<FAQ />} />
                            <Route path="/bar" element={<Bar />} />
                            <Route path="/pie" element={<Pie />} />
                            <Route path="/line" element={<Line />} />
                            <Route path="/geography" element={<Geography />} />
                        </Routes>
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
