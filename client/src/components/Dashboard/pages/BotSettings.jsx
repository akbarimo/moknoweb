import * as React from 'react';

const BotSettings = () => {
  return (
    <div className="dash-settings dash-page">
      <div className="dash-settings-img dash-img">
        <img
          src="https://libertas.gg/build/assets/Home_Page_1.b0beabec.svg"
          alt="dashboard settings"
          width="500"
          height="500"
        />
      </div>
      <div className="dash-settings-body dash-body">
        <h1 className="dash-settings-title">Settings</h1>
        <div className="dash-settings-features">Bot Settings Here</div>
      </div>
    </div>
  );
};

export default BotSettings;
