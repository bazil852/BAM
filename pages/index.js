import Head from "next/head";
import Image from "next/image";
import data from "../constants/mock-nft.json";
import mockartist from "../constants/mock-artist.json";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Footer, Header } from "../components";
import {exploreList} from "../components/constants/MockupData";
import CardList from "../components/CardList";


export default function Home() {
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const [addr, setAddr] = useState("");

  const router = useRouter();

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Please Install MetaMask");
        return;
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setIsWalletConnected(true);
      localStorage.setItem("walletAddress", accounts[0]);
      router.push("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const addr = localStorage.getItem("walletAddress");
    setAddr(addr);
  }, []);

  return (
    <div className="">
      <Head>
        <title>BAM </title>
        <link rel="shortcut icon" href="logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
      </Head>

      <div className="bg-[#110F17] absolute left-[-250px] top-[-210px] h-[352px] w-[652px] blur-[350px] rounded-full "></div>

      {isWalletConnected ||  addr ? <Header /> : null}

      <div className="relative overflow-hidden">
        {/* HeroSection */}
        <section  className="max-w-[1240px] grid grid-cols-2  gap-2 font-body h-[540px] overflow-hidden top-7 md:gap-12 medium md:px-5 sm:grid-cols-1 sm:h-full relative ">
          <div style={{marginLeft:'50%', marginTop:'-10%'}} className="flex flex-col items-centre justify-center h-full w-full sm:items-center">
            <h1 style={{
              fontSize: '56px',
              fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
              fontFamily:'"Rock Salt", cursive',
            }} className="w-full text-center text-4xl sm:text-center">
            NFT <br/> <br/>
              Marketplace
            </h1>
            <p className="text-gray-500 text-center sm:text-center">
            Create Collections and single NFTs
            </p>
            {addr ? (
              <button
                type="button"
                className="bg-[#b43b8b] outline-none border-none py-3 px-5 text-lg rounded-xl font-body cursor-pointer transition duration-250 ease-in-out hover:scale-125 hover:drop-shadow-xl hover:shadow-sky-600 w-auto focus:scale-90"
                onClick={()=> {router.push("/dashboard")}}
              >
                Explore
              </button>
              
            ) : (
              <button
                type="button"
                className="bg-[#b43b8b] outline-none border-none py-3 px-5 rounded-xl font-body cursor-pointer  duration-250 ease-in-out hover:transform-x-1 hover:drop-shadow-xl hover:shadow-sky-600 w-full mt-8 transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:hover:transform-none "
                onClick={connectWallet}
              >
                Connect Wallet
              </button>
            )}
          </div>
         
        </section>

       

       

       
        <div>
        <h1 style={{
              fontSize: '56px',
              fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
              fontFamily:'"Rock Salt", cursive',
            }} className="w-full text-center text-4xl sm:text-center">
            Gallery
            </h1>
          <CardList list={exploreList}/>
        </div>


      </div>
    </div>
  );
}
