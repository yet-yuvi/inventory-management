import { Box, Button, InputBase, Stack } from "../ui";
import React from "react";

export const LoginPage = () => {
  return (
    <Box justifyContent="center" alignItem="center" marginY={10}>
      <Stack spacing={2}>
        <InputBase placeholder="email" />
        <InputBase type="password" placeholder="password" />
        <Button variant="contained">Login</Button>
      </Stack>
    </Box>
  );
};
