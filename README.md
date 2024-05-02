# Complete Instructions

This is a digital Forensic management Decentralized Application based on blockchain using Ethereum network. 
Hardhat is being used for the blockchain environment. 
Solidity codes, Frontend codes and connectivity is done. 

# Must install

nodejs
npm
react
hardhat
metamask

# Steps to run the code

## STEP 1 Make changes needed at certain places .

###  Make Account on Pinata and store your api key, secret api key, gateway.

#### PINATA API KEY
#### PINATA SECRET API KEY
#### PINATA GATEWAY

#### YOUR ADMIN ADDRESS (Any address according to you chosen from The test Address provided to you described below )
#### YOUR CONTRACT ADDRESS ( Address returned by the compiler after you run discussed below )

## STEP 3 (ONLY IF RUNNING NOT FOR THE FIRST TIME) Go To metamask for each account used at least once (ie. made any transaction via that account)  and go to setting and then advance and clear transactions.

## STEP 2  Make 2 terminals as for root folder and 1 terminal for client side react app (inside client folder) on VS Code or any editor with the

### Run npx hardhat clean (terminal 1 root)
### Run npx hardhat node (terminal 1 root)
### Run npx hardhat compile (terminal 2 root)
### Run npx hardhat run --network localhost scripts/deploy.js (terminal 2 root)
### Run npm start (terminal 3 client)
