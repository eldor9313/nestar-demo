import React from "react";
import { Box, Stack } from "@mui/material";

const TopAgentsCard = () => {
  return (
    <Stack className="top-agent-card">
      <Box
        className={"agent-img"}
        style={{
          backgroundImage: `url("/img/profile/girl.svg")`,
        }}
      ></Box>
      <Box className={"info"}>
        <strong>Martina</strong>
        <span>Agent</span>
      </Box>
    </Stack>
  );
};

export default TopAgentsCard;
