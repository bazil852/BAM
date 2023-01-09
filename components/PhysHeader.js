import react, { useState, useContext } from "react";
import { Link } from "next/link";
// import { useEthers, useEtherBalance } from "@usedapp/core";
// import { useNavigate } from "react-router-dom";
import { useSelector ,useDispatch} from 'react-redux'
import { closeLogOutScreen } from "./redux/features/CloseLogOut";
import Login from "./SignIn/Login"
import Register from "./Register/Register";
import LogOutHomeButton from "./LogOutButton/LogOutHome";


const PhysHeader = () => {
  const dispatch = useDispatch();
    // let navigate = useNavigate();
    const logincurrentStatus = useSelector((state) => state.loginReducer.value);
    const [isOpen, setIsOpen] = useState(false);
    const logOutScreenStatus = useSelector(
      (state) => state.closeLogOutReducer.value
    );
    const togglePopup = () => {
      setIsOpen(!isOpen);
    };
    
    const [isOpen2, setIsOpen2] = useState(false);
  
    const togglePopup2 = () => {
      setIsOpen2(!isOpen2);
    };
    const toggleLogOut = () => {
      dispatch(closeLogOutScreen({ logoutScreenStatus: true }));
    };
  
  const goDigital = () => {
    // navigate("/");
  };
  console.log("Status: ",logincurrentStatus)

    return (
        <div id="header">
        <Link to='/' id='logo'><img width="10%" src="https://i.postimg.cc/DZcqCBzM/image.png"></img></Link>

        <div id="link-containers">
          <a onClick={goDigital}>Switch to Digital</a>
          {!logincurrentStatus.Login &&(
              <a onClick={togglePopup}>
            
              Sign In
            </a>
          )}
          {!logincurrentStatus.login &&(
            <a onClick={togglePopup2}>
            Register
          </a>
          )}
          {logincurrentStatus.login && (
                  <a onClick={toggleLogOut} >
                    Sign out
                  </a>
            )}
           <div>

           {logOutScreenStatus.logoutScreenStatus && (
              <div >
                <LogOutHomeButton />
              </div>
            )}
           </div>
          
              
          <div>
            

        {isOpen && (
          <Login
            handleClose={togglePopup}
            handleClose1={togglePopup2}
            setIsOpen={setIsOpen}
          ></Login>
        )}
      </div>
      <div>
        {isOpen2 && (
          <Register
            handleClose={togglePopup2}
            handleClose1={togglePopup}
          ></Register>
        )}
      </div>
        </div>
      </div>
    );
}

export default PhysHeader;