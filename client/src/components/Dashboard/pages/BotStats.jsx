import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { DateTime } from 'luxon';
import getBotData from '../../../actions/botActions';

const BotStats = () => {
  const { data: botData } = useSelector((state) => state.bot);
  const dispatch = useDispatch();

  const dt = DateTime.local();

  useEffect(() => {
    dispatch(getBotData());
  }, []);

  setInterval(() => dispatch(getBotData()), 5000);

  const time = DateTime.fromMillis(
    Date.now() - botData?.stats?.uptime - 57600000,
  ).toFormat("HH 'hours and' mm 'minutes' ss 'seconds'");

  return (
    <div>
      Mokno&apos;s Stats
      <div>
        <div className="uptime">Uptime: {time}</div>
        <div className="guildId">Guild: {botData?.meta?.guildId}</div>
        <div className="queries">
          <div className="query-count">
            Query Count: {botData?.meta?.queryCount}
          </div>
          <ul>
            Queries
            {botData?.queries?.slice(0, 20)?.map((query, idx) => {
              return (
                <li key={Math.random()}>
                  {`User: '${query.user}'   Query: '${query.string}'`}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BotStats;
