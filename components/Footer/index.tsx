import * as React from 'react';

export default () => {
  return (
    <>
      <footer className="footer-section">
        <a href="mailto:contact@nibedit.com">Contact</a>
        <a href="mailto:support@nibedit.com">Support</a>
      </footer>
      <style jsx>
        {`
          .footer-section {
            background-color: #0000e4;
            color: white;

            display: flex;
            justify-content: space-evenly;
            align-items: center;

            padding: 10px;
            height: 320px;
            width: 100%;
          }
          .footer-section > a {
            color: white;
            margin: 20px;
            text-decoration: none;
          }
        `}
      </style>
    </>
  );
};
