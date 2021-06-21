import React from "react";
import "./App.css";

function Test2(props) {
  const [isSelected, setIsSelected] = React.useState(false);
  const [show, setShow] = React.useState({
    tab1: "show active",
    "tab-2": "",
    "tab-3": "",
    "tab-4": "",
  });
  const [display, setDisplay] = React.useState({
    "display-1": "show",
    "display-2": "",
    "display-3": "",
    "display-4": "",
  });

  let json = require("./data.json");
  let index = "1";
  React.useEffect(() => {
    console.log("1");
  }, [isSelected]);

  const handleTabs = (i) => {
    setIsSelected(!isSelected);
    if (i == 1) {
      show["tab-1"] = "show active";
      show["tab-2"] = show["tab-3"] = show["tab-4"] = "";
      display["display-1"] = "show";
      display["display-2"] = display["display-3"] = display["display-4"] = "";
    } else if (i == 2) {
      show["tab-2"] = "show active";
      show["tab-1"] = show["tab-3"] = show["tab-4"] = "";
      display["display-2"] = "show";
      display["display-1"] = display["display-3"] = display["display-4"] = "";
    } else if (i == 3) {
      show["tab-3"] = "show active";
      show["tab-1"] = show["tab-2"] = show["tab-4"] = "";
      display["display-3"] = "show";
      display["display-2"] = display["display-1"] = display["display-4"] = "";
    } else if (i == 4) {
      show["tab-4"] = "show active";
      show["tab-1"] = show["tab-3"] = show["tab-2"] = "";
      display["display-4"] = "show";
      display["display-2"] = display["display-3"] = display["display-1"] = "";
    }
  };

  return (
    <div>
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            className={`nav-item nav-link  ${show["tab-1"]} `}
            data-toggle="tab"
            role="tab"
            aria-controls="nav-home"
            onClick={() => handleTabs(1)}
          >
            {json[0].title}
          </button>
          <button
            className={`nav-item nav-link ${show["tab-2"]} `}
            data-toggle="tab"
            role="tab"
            aria-controls="nav-profile"
            onClick={() => handleTabs(2)}
          >
            {json[1].title}
          </button>
          <button
            className={`nav-item nav-link ${show["tab-3"]} `}
            data-toggle="tab"
            role="tab"
            onClick={() => handleTabs(3)}
          >
            {json[2].title}
          </button>
          <button
            className={`nav-item nav-link ${show["tab-4"]} `}
            data-toggle="tab"
            role="tab"
            onClick={() => handleTabs(4)}
          >
            {json[3].title}
          </button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div
          className={`tab-pane fade ${display["display-1"]} `}
          role="tabpanel"
          dangerouslySetInnerHTML={{ __html: json[0].content }}
        ></div>
        <div
          className={`tab-pane fade ${display["display-2"]} `}
          role="tabpanel"
          dangerouslySetInnerHTML={{ __html: json[1].content }}
        ></div>
        <div
          className={`tab-pane fade ${display["display-3"]} `}
          role="tabpanel"
          dangerouslySetInnerHTML={{ __html: json[2].content }}
        ></div>

        <div
          className={`tab-pane fade ${display["display-4"]} `}
          role="tabpanel"
          dangerouslySetInnerHTML={{ __html: json[3].content }}
        ></div>
      </div>
    </div>
  );
}

export default Test2;
