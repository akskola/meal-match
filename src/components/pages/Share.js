import React, { useState } from 'react';
import './Share.css';

function Share({ setShowShare, linkID }) {
  const [link, setLink] = useState('');

  const generateLink = () => {
    const newLink = `https://nossherlock.github.io/lighthall-challenge-4/#/singlesession/${linkID}`;
    setLink(newLink);
    navigator.clipboard.writeText(newLink);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={() => setShowShare(false)}>
          &times;
        </span>
        <div className="share-header">
          <h2>Know what your partner wants!</h2>
        </div>
        <div className="link-container">
          
          {link && (
            <div className="generated-link-container">
              <label>Share Link:</label>
              <div className="generated-link"><a href={link} target="_blank" rel="noreferrer">{link}</a>

</div>
            </div>
          )}
          <br /> {/* New line added here */}
        </div>
        <button className="generate-link-btn" onClick={generateLink}>
          Generate & Copy Link
        </button>
      </div>
    </div>
  );
}

export default Share;