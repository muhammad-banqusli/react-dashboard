import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import arLocale from "@fullcalendar/core/locales/ar";
import { formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
    Box,
    List,
    ListItem,
    ListItemText,
    Typography,
    useTheme,
    Grid
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { useTranslation } from "react-i18next";

const Calendar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [currentEvents, setCurrentEvents] = useState([]);
    const { t, i18n } = useTranslation();

    const handleDateClick = (selected) => {
        const title = prompt("Please enter a new title for your event");
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();

        if (title) {
            calendarApi.addEvent({
                id: `${selected.dateStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay,
            });
        }
    };

    const handleEventClick = (selected) => {
        if (
            window.confirm(
                `Are you sure you want to delete the event '${selected.event.title}'`
            )
        ) {
            selected.event.remove();
        }
    };

    return (
        <Box m="20px">
            <Header
                title={t("Calendar")}
                subtitle={t("Full Calendar Interactive Page")}
            />

            <Box display="flex" justifyContent="space-between">
                {/* CALENDAR SIDEBAR */}
                <Box
                    flex="1 1 20%"
                    backgroundColor={colors.primary[400]}
                    p="15px"
                    borderRadius="4px"
                >
                    <Typography variant="h5" fontFamily="Almarai">
                        {t("Events")}
                    </Typography>
                    <List>
                        {currentEvents.map((event) => (
                            <ListItem
                                key={event.id}
                                sx={{
                                    backgroundColor: colors.greenAccent[500],
                                    margin: "10px 0",
                                    borderRadius: "2px",
                                }}
                            >
                                <ListItemText
                                    sx={
                                        i18n.language === "ar"
                                            ? { textAlign: "right" }
                                            : undefined
                                    }
                                    primary={event.title}
                                    secondary={
                                        <Typography fontFamily="Almarai">
                                            {formatDate(event.start, {
                                                year: "numeric",
                                                month: "short",
                                                day: "numeric",
                                            })}
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>

                {/* CALENDAR */}
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Box
                            flex="1 1 100%"
                            ml="15px"
                            height="70vh"
                            width="100%"
                        >
                            <FullCalendar
                                contentHeight="auto"
                                aspectRatio={2} // Adjust as needed
                                windowResizeDelay={100}
                                direction={
                                    i18n.language === "ar" ? "rtl" : undefined
                                }
                                locale={
                                    i18n.language === "ar"
                                        ? arLocale
                                        : undefined
                                }
                                firstDay={i18n.language === "ar" ? 6 : 7}
                                plugins={[
                                    dayGridPlugin,
                                    timeGridPlugin,
                                    interactionPlugin,
                                    listPlugin,
                                ]}
                                headerToolbar={{
                                    left: "prev,next today",
                                    center: "title",
                                    right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
                                }}
                                initialView="dayGridMonth"
                                editable={true}
                                selectable={true}
                                selectMirror={true}
                                dayMaxEvents={true}
                                select={handleDateClick}
                                eventClick={handleEventClick}
                                eventsSet={(events) => setCurrentEvents(events)}
                                initialEvents={[
                                    {
                                        id: "12315",
                                        title: "All-day event",
                                        date: "2022-09-14",
                                    },
                                    {
                                        id: "5123",
                                        title: "Timed event",
                                        date: "2022-09-28",
                                    },
                                ]}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Calendar;
