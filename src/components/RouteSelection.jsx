import React, { useState } from 'react';
import './RouteSelection.css';
export default function RouteSelection() {
  const [selectedRoute, setSelectedRoute] = useState('');


  
  const handleFixedRouteSelection = () => {
    setSelectedRoute('fixed');
    // הוסף לוגיקה של ניווט או בחירה כאן למסלולים קבועים
  };

  const handleCustomRouteSelection = () => {
    setSelectedRoute('custom');
    // הוסף לוגיקה של ניווט או בחירה כאן למסלול בהתאמה אישית
  };

  return (
    <div>
      <h1>ברוכים הבאים ללוח התורה</h1>
      <p>בחרו את המסלול בו תרצו להתחיל</p>
      <div style={{ display: 'flex', gap: '20px' }}>
        <div>
          <h3>מסלולים קבועים</h3>
          <button onClick={handleFixedRouteSelection}>בחר מסלול קבוע</button>
        </div>
        <div>
          <h3>מסלול בהתאמה אישית</h3>
          <button onClick={handleCustomRouteSelection}>בחר מסלול בהתאמה אישית</button>
        </div>
      </div>
      {selectedRoute && <p>בחרת את המסלול: {selectedRoute === 'fixed' ? 'מסלול קבוע' : 'מסלול בהתאמה אישית'}</p>}
    </div>
  );
}
