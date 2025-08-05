// components/NewsPromotion.js
import React from 'react';

function HomeNews(){
  return (
    <div className="bg-light p-3 rounded shadow-sm" style={{ minHeight: '194px' }}>
      {/* News Item */}
      <div className="d-flex align-items-center mb-3">
        <img src="https://img.icons8.com/emoji/48/000000/fire.png" alt="fire" width="24" className="me-2" />
        <div>
          <div><a href="#"><strong>News title</strong></a></div>
          <small className="text-muted">date DD/MM/YYYY</small>
        </div>
      </div>

      {/* Promotion Item */}
      <div className="d-flex align-items-center">
        <div className="me-2" style={{ width: '24px', height: '24px' }}></div>
        <div>
          <div><strong>Hot promotion</strong></div>
          <small className="text-muted">date DD/MM/YYYY</small>
        </div>
      </div>

      {/* See More */}
      <div className="mt-3">
        <a href="#" className="text-primary text-decoration-underline">See More....</a>
      </div>
    </div>
  );
};

export default HomeNews;
