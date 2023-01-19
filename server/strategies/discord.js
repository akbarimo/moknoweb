require('dotenv').config();
const passport = require('passport');
const { Strategy } = require('passport-discord');
const userModel = require('../database/models/user');

passport.serializeUser((user, done) => {
  console.log('Serializing User...');
  console.log(user);
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await userModel.findById(id);
    if (!user) throw new Error('User not found');
    done(null, user);
  } catch (err) {
    console.error(err);
    done(err, null);
  }
});

passport.use(
  new Strategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: 'http://localhost:8080/auth/discord/redirect',
      scope: ['identify'],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const discordUser = await userModel.findOne({ discordId: profile.id });
        if (discordUser) {
          console.log(`Found User: ${discordUser}`);
          return done(null, discordUser);
        }
        const newUser = await userModel.create({ discordId: profile.id });
        console.log(`Created User: ${newUser}`);
        return done(null, newUser);
      } catch (err) {
        console.error(err);
        return done(err, null);
      }
    },
  ),
);
