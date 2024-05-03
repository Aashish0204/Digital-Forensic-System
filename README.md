# Complete Instructions

This is a digital Forensic management Decentralized Application based on blockchain using Ethereum network. 
Hardhat is being used for the blockchain environment. 
Solidity codes, Frontend codes and connectivity is done. 

## For REFERENCE Do see the video from here 
https://www.youtube.com/watch?v=M-KRLlHG_zs&t=5210s
### I have considered this video to make the whole project for understanding how the blockchain is connected to react.
### You can also refer how to run as the process done here is also the same

## Must install

nodejs,
npm,
react,
hardhat and
metamask

## Steps to run the code

### STEP 1 Make changes needed at certain places .

####  Make Account on Pinata and store your api key, secret api key, gateway.

#### PINATA API KEY
#### PINATA SECRET API KEY
#### PINATA GATEWAY

#### YOUR ADMIN ADDRESS (Any address according to you chosen from The test Address provided to you described below )
#### YOUR CONTRACT ADDRESS ( Address returned by the compiler after you run discussed below )

### STEP 2 (ONLY IF RUNNING NOT FOR THE FIRST TIME) Go To metamask for each account used at least once (ie. made any transaction via that account)  and go to setting and then advance and clear transactions.

### STEP 3  Make 2 terminals as for root folder and 1 terminal for client side react app (inside client folder) on VS Code or any editor with the

#### a. Run npx hardhat clean (terminal 1 root)
#### b. Run npx hardhat node (terminal 1 root)(Now you would get some accounts and their private keys add number of accounts that you would be using as admin,police,lab,court to metamask using private keys and choose one as the ADMIN ADDRESS that you have to change in the contract solidity file)
#### c. Run npx hardhat compile (terminal 2 root)
#### d. Run npx hardhat run --network localhost scripts/deploy.js (terminal 2 root)(You will get the contract address that you have to replace as mentioned in step 1 for YOUR CONTRACT ADDRESS)
#### e. Run npm start (terminal 3 client)
