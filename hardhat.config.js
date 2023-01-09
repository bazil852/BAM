require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.16",
  networks: {
    mumbai: {
      url: "https://matic-mumbai.chainstacklabs.com",
      accounts: ["fde1833da69058f43e230739c54eaa936ceb61e9a1fa51447e8d64b0ef676177"],
    },
  },
};
