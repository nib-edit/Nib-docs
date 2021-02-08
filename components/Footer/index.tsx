import * as React from 'react';

export default () => {
  return (
    <>
      <footer className="footer-section">
        <a href="mailto:contact@nibedit.com">Contact</a>
        <a
          href="https://github.com/nib-edit"
          target="_blank"
          className="github_wrapper"
        >
          <img src="github.png" />
          Github
        </a>
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
            height: 160px;
            width: 100%;
          }
          .footer-section > a {
            color: white;
            margin: 20px;
            text-decoration: none;
          }
          img {
            margin-right: 4px;
            width: 24px;
          }
          .github_wrapper {
            align-items: center;
            display: flex;
          }
        `}
      </style>
    </>
  );
};
