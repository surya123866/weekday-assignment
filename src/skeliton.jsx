import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Skeleton from "@mui/material/Skeleton";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)({
  width: "100%",
  transition: "transform 0.3s",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
  border: "3px solid secondary",
  borderRadius: "20px",
  "&:hover": {
    transform: "scale(1.02)",
  },
});

const DummyCard = () => {
  return (
    <Box sx={{ width: 300 }}>
      <StyledCard variant="outlined">
        <CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <Skeleton
              variant="circular"
              width={50}
              height={50}
              sx={{ marginRight: "10px" }}
            />
            <div>
              <Typography sx={{ fontSize: 18 }} color="text.secondary">
                <Skeleton width={100} />
              </Typography>
              <Typography sx={{ fontSize: 18 }}>
                <Skeleton width={80} />
              </Typography>
              <Typography sx={{ fontSize: 14 }}>
                <Skeleton width={50} />
              </Typography>
            </div>
          </Box>{" "}
          <Typography variant="body2" color="text.secondary">
            <Skeleton width={150} />
          </Typography>
          <Typography variant="body2">
            <Skeleton width={200} />
          </Typography>
          <Typography variant="body2">
            <Skeleton width={200} />
          </Typography>
          <Typography variant="body2">
            <Skeleton width={200} />
          </Typography>
          <Typography variant="body2">
            <Skeleton width={200} />
          </Typography>{" "}
          <CardActions style={{ justifyContent: "center" }}>
            <Button size="small">
              <Skeleton width={70} />
            </Button>
          </CardActions>
          <CardActions
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: "10px",
              width: "100%",
            }}
          >
            <div
              style={{
                backgroundColor: "#54efc4",
                padding: "10px",
                borderRadius: "5px",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p style={{ color: "#00000" }}>
                <Skeleton width={100} />
              </p>
            </div>
            <div
              style={{
                backgroundColor: "#4943da",
                padding: "10px",
                borderRadius: "5px",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "4px",
                marginRight: "5px",
              }}
            >
              <Avatar sx={{ width: 24, height: 24 }}>
                <Skeleton variant="circular" width={20} height={20} />
              </Avatar>
              <p style={{ color: "#ffffff" }}>
                <Skeleton width={100} />
              </p>
            </div>
          </CardActions>
        </CardContent>
      </StyledCard>
    </Box>
  );
};

export default DummyCard;
