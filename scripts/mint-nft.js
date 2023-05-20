const ethers = require('ethers');

// Get Alchemy API Key
const API_KEY = "4aKgl-0gWpWo_BZ2p1ix-zAMjvDuu0Nv";

// Define an Alchemy Provider
const provider = new ethers.providers.AlchemyProvider('maticmum', API_KEY);
// Get contract ABI file
const contract = require("../artifacts/contracts/Nftredes.sol/MyNft.json");
// Create a signer
const privateKey = "4298049cc970c319198c81970d4fc267e1459e01528c53eee86b837770a3eab3";
const signer = new ethers.Wallet(privateKey, provider)
// Get contract ABI and address
const abi = contract.abi;
const contractAddress = '0x777DBd695490B4BC5999fE9b86EA47700bd38C7a'
// Create a contract instance
const myNftContract = new ethers.Contract(contractAddress, abi, signer)
// Get the NFT Metadata IPFS URL
let random = Math.floor(Math.random() * 20) + 1;
let tokenUri = "https://gateway.pinata.cloud/ipfs/QmQChQ5kb6j4QkGnpbvb3VRVBdJtSDyuA3kJ4Bpa5aaB2c/"+random.toString()+".json";
// Call mintNFT function
const mintNFT = async () => {
    let nftTxn = await myNftContract.mintNFT(signer.address, tokenUri)
    await nftTxn.wait()
    console.log(`NFT Minted! Check it out at: https://mumbai.polygonscan.com//tx/${nftTxn.hash}`)
}
mintNFT()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
});