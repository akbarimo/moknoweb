import React, { useRef } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const engagementTitles = [
  'Welcome',
  'Role Distribution',
  'Suggestions',
  'More!',
];

const engagementBodies = {
  Welcome:
    'Give new members a great first impression with a custom welcome message and powerful buttons.',
  Suggestions:
    'Communities are built by real people. Empower your members by allowing them to share their input!',
  'Role Distribution':
    'Roles are a great way to engage with your community. Distribute @roles using customizable components like buttons and select menus.',
  'More!':
    'Our team is always working to improve community engagement. keep an eye out for even more content!',
};

const utilityTitles = [
  'Custom Messages',
  'Timed Messages',
  'Custom Commands',
  'More!',
];

const utilityBodies = {
  'Custom Messages':
    'Post editable messages to your server and showcase important information to your users such as rules, FAQs, etc.',
  'Timed Messages':
    'Send reminder messages that post at a specific time and continue to post at repeated intervals.',
  'Custom Commands':
    'Create your very own custom slash commands to generate resources & activities for your users.',
  'More!':
    'Our team is always on the lookout for better server management tools. Stay tuned for more!',
};

const securityTitles = [
  'Moderation Commands',
  'Automated Moderation',
  'Audit Logging',
  'More!',
];

const securityBodies = {
  'Moderation Commands':
    'Keep your server secure with powerful moderation slash commands (i.e., timeout, kick, ban, etc.).',
  'Automated Moderation':
    'Ensure the safety of all your server members with configurable automated moderation enhancements.',
  'Audit Logging':
    'Never miss a beat within your server with detailed logs of every server event/change.',
  'More!':
    'Server security is paramount to maintaining a great community! Stay tuned as we continue to address server security concerns!',
};

const Home = () => {
  const featuresRef = useRef(null);
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  return (
    <>
      <div className="home-imagine home">
        <div className="home-imagine-content">
          <h1 className="home-imagine-title">Imagine a Bot</h1>
          <div className="home-imagine-body">
            Satisfy the needs of you and your friends, associates, or followers
            with the most easy-to-use Discord app!
          </div>
          <div>
            <Stack direction="row" spacing={2} sx={{ margin: '1em' }}>
              <Button
                className="home-button"
                variant="contained"
                sx={{
                  backgroundColor: 'rgb(63, 82, 99)',
                  '&:hover': {
                    backgroundColor: 'rgb(109, 130, 148)',
                  },
                }}
                onClick={() =>
                  openInNewTab(
                    'https://discord.com/api/oauth2/authorize?client_id=1062171390612086834&permissions=8&scope=applications.commands%20bot',
                  )
                }
              >
                Add to Discord
              </Button>
              <Button
                className="home-button"
                variant="contained"
                sx={{
                  backgroundColor: 'rgb(63, 82, 99)',
                  '&:hover': {
                    backgroundColor: 'rgb(109, 130, 148)',
                  },
                }}
                onClick={() =>
                  featuresRef.current.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Features
              </Button>
            </Stack>
          </div>
        </div>
        <div className="home-imagine-img home-img">
          <img
            src="https://libertas.gg/build/assets/Home_Page_1.b0beabec.svg"
            alt=""
            height="750"
            width="750"
          />
        </div>
      </div>
      <div className="home-engagement home">
        <div className="home-engagement-img home-img">
          <img
            src="https://libertas.gg/images/illustrations/Home_Page_2.svg"
            alt=""
            height="500"
            width="500"
          />
        </div>
        <div className="home-engagement-content">
          <h1 className="home-engagement-title home-title" ref={featuresRef}>
            Engagement
          </h1>
          <div className="home-engagement-body home-body">
            Liberate their Discord experience. Implement tools to engage your
            community members
          </div>
          {engagementTitles.map((eng, idx) => {
            return (
              <div key={Math.random(idx)}>
                <h3>{eng}</h3>
                <div className="feature-body">{engagementBodies[eng]}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="home-utility home">
        <div className="home-utility-img home-img">
          <img
            src="https://libertas.gg/images/illustrations/Home_Page_3.svg"
            alt=""
            height="500"
            width="500"
          />
        </div>
        <div className="home-utility-content">
          <h1 className="home-utility-title home-title">Utility</h1>
          <div className="home-utility-body home-body">
            Liberate your Discord experience in a healthy way by implementing
            tools that make your server more manageable than ever.
          </div>
          {utilityTitles.map((eng, idx) => {
            return (
              <div key={Math.random(idx)}>
                <h3>{eng}</h3>
                <div className="feature-body">{utilityBodies[eng]}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="home-security home">
        <div className="home-security-img home-img">
          <img
            src="https://libertas.gg/images/illustrations/Home_Page_4.svg"
            alt=""
            height="500"
            width="500"
          />
        </div>
        <div className="home-security-content">
          <h1 className="home-security-title home-title">Security</h1>
          <div className="home-security-body home-body">
            Increase your community&apos;s safety by leveraging the many
            moderation tools within your team.
          </div>
          {securityTitles.map((eng, idx) => {
            return (
              <div key={Math.random(idx)}>
                <h3>{eng}</h3>
                <div className="feature-body">{securityBodies[eng]}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
