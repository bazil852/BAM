# BAM- Blockchain Auction Marketplace


Group: F22-097-D-BAM

## Prerequisites
1: Metamask Account
2: Nodejs and npm installed

## How to run:

1: Clone this repository

2:
> cd BAM 
> 
> npm install

incase the installation throws any errors use this command.
> npm install --legacy-peer-deps

3: 
Create a .env file in the project folder with the following variables.

>URL="https://matic-mumbai.chainstacklabs.com"

>PRIVATE_KEY="METAMASK_PRIVATE_KEY"

>NEXT_PUBLIC_RPC_URL="POLYGON_TESTNET_URI"

>NEXT_PUBLIC_CONTRACT_ADDRESS="CONTRACT_ADDRESS"

4: Compile the smart contract

npx hardhat compile

5:

>npx hardhat run scripts/deploy.js --network mumbai

6: Copy the resulted Contract address and paste in the .env file created.

7. 
> npm run dev

The project will start run on localhost:3000

