import React, { useEffect, useState } from "react";
// import "./LogoutHome.css";
import Cross from "./assets/vector4.png";
import Dash from "./assets/Line 43.png";
import { useSelector, useDispatch } from "react-redux";
import { closeLogOutScreen } from "../redux/features/CloseLogOut";
import { LoginStatusCheck } from "../redux/features/Login";

const Logout = () => {
  const language = useSelector((state) => state.languageSelectorReducer.value);
  const [loginstatus, setLoginstate] = useState(true);
  const dispatch = useDispatch();
  const logOutScreenStatus = useSelector(
    (state) => state.closeLogOutReducer.value
  );
  const logincurrentStatus = useSelector((state) => state.loginReducer.value);

  const toggleLogoutScreen = () => {
    dispatch(closeLogOutScreen({ logoutScreenStatus: false }));
  };
  const LogOutFunction = () => {
    setLoginstate(false);
    dispatch(
      LoginStatusCheck({
        login: loginstatus,
      })
    );
  };
  useEffect(() => {
    dispatch(
      LoginStatusCheck({
        login: loginstatus,
      })
    );
  }, [loginstatus]);

  return (
    <>
      {logincurrentStatus.login && logOutScreenStatus.logoutScreenStatus && (
        <div className="logOut_root_home">
          <div className="LogoutContainer_home">
            <img className="Line" src={Dash} alt="Line"></img>
            <button
              onClick={() => toggleLogoutScreen()}
              className="cross_logOut_home"
            >
              <img className="Cross_home" src={Cross} alt="cross"></img>
            </button>
            <div className="Prompt_home">Are you sure, you want to log out?</div>
            <div className="Button_home">
              <button
                className="CancelButton_home"
                onClick={() => toggleLogoutScreen()}
              >
                Cancel
              </button>
              <button className="LogoutButton_home" onClick={LogOutFunction}>
                Log Out
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Logout;
