import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-etherscan";
import dotenv from 'dotenv';
dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    avartest: {
      url: process.env.AVARTEST_URL || "",
      chainId: Number(process.env.AVARTEST_CHAINID) || 0,
      accounts: process.env.SECRET ? [process.env.SECRET] : [],
    }
  },
  etherscan: {
    apiKey: process.env.API_KEY || "",
  }
};

export default config;