import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const PremiumCard = ({ card: { plan, cost, payment } }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <img src="https://i.imgur.com/tdLpExb.png" alt="" />
        </Typography>
        <Typography variant="h5" component="div">
          {`${plan} Plan`}
        </Typography>
        <Typography sx={{ mb: 1.5, fontSize: 20 }} color="text.secondary">
          {cost}
        </Typography>
        <Typography variant="body2">{payment}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{`${cost} ${payment}`}</Button>
      </CardActions>
    </Card>
  );
};

export default PremiumCard;
