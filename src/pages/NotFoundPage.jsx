import React from 'react';
import { Link } from 'react-router-dom';
export default function NotFoundPage() {
  return (
<>
        

    <div className="not-found-container">
      <div className="water-bg">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-text">Oops! Looks like you're diving in the wrong lane.</p>
        <Link to="/" className="btn btn-primary mt-3">Back to Home</Link>
      </div>
    </div>

</>
  );
}
