require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");
const { API_URL, PRIVATE_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity:{
  compilers: [
    {
      version: "0.8.18",  
    }
  ],
  contracts: {
    // Nombre del contrato igual al especificado en el contrato y la ruta exacta
    MyNFT: "contracts/Mynft.sol"
  }
  },
  defaultNetwork: "mumbai",
  allowUnlimitedContractSize: true,
  networks: {
    mumbai: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};
