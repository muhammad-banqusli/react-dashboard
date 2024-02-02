import { Box, Typography, colors, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box width="1000px" m="0 30px">
            <Box display="flex" justifyContent="space-between">
                <Box>
                    {icon}
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        sx={{
                            color: colors.grey[100],
                        }}
                    >
                        {title}
                    </Typography>
                </Box>
                <Box>
                    <ProgressCircle progress={progress} />
                </Box>
            </Box>
            <Box display="flex" justifyContent="space-between" mt="2px">
                <Typography
                    variant="h5"
                    fontWeight="bold"
                    sx={{
                        color: colors.greenAccent[400],
                    }}
                >
                    {subtitle}
                </Typography>
                <Typography
                    variant="h5"
                    fontStyle="italic"
                    sx={{
                        color: colors.greenAccent[600],
                        direction: "ltr",
                    }}
                >
                    {increase}
                </Typography>
            </Box>
        </Box>
    );
};

export default StatBox;
