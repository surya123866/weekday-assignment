/* eslint-disable react/prop-types */

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + "...";
};

const StyledCard = styled(Card)({
  width: "100%",
  transition: "transform 0.3s",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
  border: "3px solid secondary",
  borderRadius: "20px",
  gap: "8px",
  "&:hover": {
    transform: "scale(1.02)",
  },
});

const EachCard = ({ data }) => {
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
            <img
              src={data.logoUrl}
              alt={"Logo"}
              style={{ width: "50px", marginRight: "10px" }}
            />
            <div>
              <Typography sx={{ fontSize: 18 }} color="text.secondary">
                {data.companyName}
              </Typography>
              <Typography sx={{ fontSize: 18 }}>{data.jobRole}</Typography>
              <Typography sx={{ fontSize: 14 }}>{data.location}</Typography>
            </div>
          </Box>{" "}
          <Typography variant="body2" color="text.secondary">
            Estimated Salary: {data.minJdSalary ? data.minJdSalary : 0} -{" "}
            {data.maxJdSalary ? data.maxJdSalary : 0} {data.salaryCurrencyCode}
          </Typography>
          <Typography variant="body2">About Company:</Typography>
          <Typography variant="body2">About us:</Typography>
          <Typography
            variant="body2"
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {truncateText(data.jobDetailsFromCompany, 850)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Minimum Experience
          </Typography>
          <Typography variant="body2">
            {data.minExp ? data.minExp : 0} years
          </Typography>{" "}
          <CardActions style={{ justifyContent: "center" }}>
            <Button size="small" href={data.jdLink}>
              View Job
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
            {" "}
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
              <p style={{ color: "#00000" }}>⚡ Easy Apply</p>
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
                <svg
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="PersonIcon"
                >
                  <path
                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                    fill="#fff"
                  ></path>
                </svg>{" "}
              </Avatar>
              <p style={{ color: "#ffffff" }}>Unlock refferral ask</p>
            </div>
          </CardActions>
        </CardContent>
      </StyledCard>
    </Box>
  );
};

export default EachCard;
