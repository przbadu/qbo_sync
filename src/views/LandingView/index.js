import QboIcon from "../../assets/qbo.png";
import Img2 from "../../assets/img2.svg";

import "./Landing.css";

const Login = () => {
  return (
    <div className="container-wrapper">
      <nav className="container">
        <h1>Access QuickBooks Data Like A PRO!</h1>
      </nav>
      <div className="container">
        <div className="first-content">
          <div className="col">
            <a target="_blank" href="https://quickbooks.intuit.com/">
              <img src={QboIcon} alt="QuickBooks Online" className="qbo-img" />
            </a>

            <div className="header">
              <h3>
                Ability to Import, Export and Bulk Delete QuickBooks Online Data
              </h3>
            </div>

            <ul>
              <li>- Analytics Dashboard</li>
              <li>- Bulk Delete Unwanted transactions and lists</li>
              <li>- Bulk Update unwanted transactions and lists</li>
              <li>- Bulk Import unwanted transactions and lists</li>
              <li>
                - 3 Simple steps to import: Upload File {"->"} Map File header
                {"->"} Review and Import
              </li>
            </ul>
          </div>

          <img src={Img2} style={{ width: 420 }} alt="app icon" />
        </div>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              zIndex: 2,
            }}
          >
            <a
              href={`${process.env.REACT_APP_SERVER_URL}/quickbooks/oauth2`}
              className="button mt"
            >
              Start Now
              <svg
                className="right-arrow"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
