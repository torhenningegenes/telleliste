import { useEffect } from "react";

function VisTidligereLister() {
  let gamleLister;
  useEffect(() => {
    // Perform localStorage action
    gamleLister = JSON.parse(window.localStorage.getItem("myContext"));
    console.log(gamleLister);
  }, []);

  return (
    <div className="center">
      <h3>Gamle lister</h3>
      <ul>
        <li>{gamleLister}</li>
      </ul>
    </div>
  );
}

export default VisTidligereLister;
