import { Paper, Typography, Stack, Divider, Box, TextField, Button } from "@mui/material";

export default function Field(field: object) {
    function FieldItem(field) {
        return (
            <Stack direction={'row'} spacing={3} sx={{ p: '0.5em' }}>
                <Typography>{ }</Typography>
                <TextField variant="outlined" />
            </Stack>
        )
    }
}