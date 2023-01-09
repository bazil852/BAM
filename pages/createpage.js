import react, { useEffect,useState } from "react";
import Header from "../components/Header";
import { useRouter } from "next/router";




const Create = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  
  const [colors, setColors] = useState([]);
  const getColors = colors => {
    
    setColors(c => [...c, ...colors]);
    //console.log(colors);
  }


  const goCreate = () => {
    router.push("/createnft");
  };

  return (
    <>
      <Header />
      <div
      className="card"

      style={{
        display: 'flex',
        alignItems: 'left',
        justifyContent: 'center',
        textAlign: 'center',
        marginLeft:'23%',
        marginTop:'10%',
        width: `50%`,
        height: `15rem`,
        background: `radial-gradient(
                circle,
                rgba(255, 255, 255, 0.05) 0%,
                purple 0%,
                rgba(255, 255, 255, 0.05) 70%
              )`,
        
      }}
    >
        <p id="card-list-header-text" onClick={goCreate}> Create NFT </p>
    </div>
    <div
      className="card"
      style={{
        display: 'flex',
        alignItems: 'left',
        justifyContent: 'center',
        textAlign: 'center',
        marginLeft:'23%',
        marginTop:'1%',
        width: `50%`,
        height: `15rem`,
        background: `radial-gradient(
                circle,
                rgba(255, 255, 255, 0.05) 0%,
                purple 0%,
                rgba(255, 255, 255, 0.05) 70%
              )`,
        
      }}
    >
        <p id="card-list-header-text"> Create Collection </p>
    </div>
    </>
  );
};

export default Create;
