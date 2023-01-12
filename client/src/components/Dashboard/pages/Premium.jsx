import * as React from 'react';
import PremiumCard from './PremiumCard.jsx';

const cards = [
  {
    plan: 'Lifetime',
    cost: '88.99',
    payment: 'one-time payment',
  },
  {
    plan: '1-Year',
    cost: '3.99',
    payment: 'per month',
  },
  {
    plan: '6-Month',
    cost: '4.99',
    payment: 'per month',
  },
  {
    plan: 'Monthly',
    cost: '5.99',
    payment: 'per month',
  },
];

const Premium = () => {
  return (
    <div className="dash-premium dash-page">
      <div className="dash-premium-img dash-img">
        <img
          src="https://libertas.gg/build/assets/Home_Page_1.b0beabec.svg"
          alt="dashboard premium"
          width="500"
          height="500"
        />
      </div>
      <div className="dash-premium-body dash-body">
        <h1 className="dash-premium-title">Premium</h1>
        <div className="dash-premium-cards">
          {cards.map((card, idx) => {
            return <PremiumCard key={Math.random(idx)} card={card} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Premium;
