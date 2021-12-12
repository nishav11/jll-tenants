import { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Stack,
} from "@mui/material";
import { makeStyles } from "@material-ui/core";
import TenantService from "../../services/tenant-service";

const useStyle = makeStyles(() => ({
  root: {
    margin: "unset",
  },
  description: {
    padding: "20px 10px",
  },
  statusItems: {
    ["@media (max-width:767px)"]: {
      marginTop: "20px !important",
    },
  },
}));

const TenantDetailsCard = (props: any) => {
  const [details, setDetails] = useState<any>([]);
  const classes = useStyle();

  useEffect(() => {
    if (props.id) {
      TenantService.getTenantDetails(props.id).then((res: any) => {
        setDetails(res);
      });
    }
  }, []);

  const initials = details && details.name?.split(" ");
  let firstInitial = initials && initials[0].split("")[0];
  let lastInitial = initials && initials[1];

  return (
    <>
      {details && (
        <Card sx={{ display: "flex" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                flexWrap="wrap"
                spacing={2}
              >
                <Stack direction="row" spacing={2}>
                  {initials && (
                    <Avatar
                      sx={{ bgcolor: "#B958A5" }}
                    >{`${firstInitial}${lastInitial}`}</Avatar>
                  )}
                  <Typography component="div" variant="h6">
                    {details.name}
                  </Typography>
                </Stack>
                <Stack
                  className={classes.statusItems}
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                >
                  <Typography component="div" variant="subtitle2" color="green">
                    <span style={{ color: "#4a4a4a" }}>Status:&nbsp;</span>{" "}
                    {details.status}
                  </Typography>
                  <Typography
                    component="div"
                    variant="subtitle2"
                    color="orange"
                  >
                    <span style={{ color: "#4a4a4a" }}>Type:&nbsp;</span>{" "}
                    {details.type}
                  </Typography>
                </Stack>
              </Stack>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                component="div"
                className={classes.description}
              >
                {details.description}
              </Typography>
            </CardContent>
          </Box>
        </Card>
      )}
    </>
  );
};

export default TenantDetailsCard;
