import { useParams } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { Stack, Box, Typography } from "@mui/material";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import TenantDetailsCard from "../TenantDetailsCard/tenantDetailsCard";

const TenantDetails = (props: any) => {
  const params: any = useParams();

  const handleGoBack = () => {
    props.history.goBack();
  };

  return (
    <Box sx={{ p: 4 }}>
      <Stack direction="row" spacing={2} alignItems="center">
        <KeyboardBackspaceRoundedIcon
          onClick={handleGoBack}
          style={{ color: "#4a4a4a", fontSize: "30px", cursor: "pointer" }}
        />
        <Typography
          component="div"
          variant="h5"
          color="#4C3F91"
          style={{ position: "relative" }}
          className="heading-underline pink"
        >
          Tenant's Details
        </Typography>
      </Stack>
      <br />
      <br />
      <TenantDetailsCard id={params.id} />
    </Box>
  );
};

export default withRouter(TenantDetails);
