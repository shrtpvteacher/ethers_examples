const { ethers } = require("ethers");
// or as ES6 or Type script
//  import {ethers} from "ethers";
const rpcURL = 'https://cloudflare-eth.com/';


const provider = new ethers.providers.JsonRpcProvider();
// or if wanting to connect to metamask do this: it will wrap a Web3Provider around the window.ethereum object
// const provider = new ethers.providers.Web3Provider(window.ethereum)

const address = "0x73BCEb1Cd57C711feaC4224D062b0F6ff338501e";

const main = async () => {
  const balance = await provider.getBalance(address);
  console.log(balance);
};

