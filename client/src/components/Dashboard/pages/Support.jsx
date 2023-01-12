import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Support = () => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };
  return (
    <div className="dash-support dash-page">
      <div className="dash-support-img dash-img">
        <img
          src="https://libertas.gg/build/assets/Home_Page_1.b0beabec.svg"
          alt="dashboard support"
          width="500"
          height="500"
        />
      </div>
      <div className="dash-support-body dash-body">
        <h1 className="dash-support-title">Support</h1>
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'rgb(63, 82, 99)',
              '&:hover': {
                backgroundColor: 'rgb(109, 130, 148)',
              },
            }}
            onClick={() => openInNewTab('https://discord.gg/xhFnuYZHsH')}
          >
            Discord
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export default Support;
