
const hre = require("hardhat");

async function main() {
 
  const MyNFT = await hre.ethers.getContractFactory("MyNft");

  const mynft = await MyNFT.deploy();

  console.log("Contract deployed to:", mynft.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});