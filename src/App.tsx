import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { Box, Typography } from "@mui/material";
import TenantService from "./services/tenant-service";
import TenantsTable from "./components/TenantsTable/tenantsTable";
import AutorenewIcon from "@mui/icons-material/Autorenew";

const useStyle = makeStyles(() => ({
  waitingIcon: {
    textAlign: "center",
    background: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "80vh",
  },
  heading: {
    position:'relative',
    marginBottom: "30px",
    fontWeight: 700,
    marginLeft: '15px'
  }
}));

const App = () => {
  const [tenantData, setTenantData] = useState<any>();

  const classes = useStyle();

  useEffect(() => {
    TenantService.getData().then((res: any) => {
      setTenantData(res);
    });
  }, []);

  return (
    <Box sx={{marginTop: 3 }}>
      <Typography component="div" variant="h5" color="#FF5677" className={`${classes.heading} heading-underline`}>
          Tenants Table
        </Typography>
      {!tenantData ? (
        <div className={classes.waitingIcon}>
          <AutorenewIcon style={{ color: "#999", fontSize: 100 }} />
        </div>
      ) : (
        <TenantsTable data={tenantData} />
      )}
    </Box>
  );
};

export default App;
