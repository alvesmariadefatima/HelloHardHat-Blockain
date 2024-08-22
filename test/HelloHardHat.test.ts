import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import hre from "hardhat";

describe("HelloHardHat", function () {
  async function deployFixture() {

    const [owner, otherAccount] = await hre.ethers.getSigners();

    const HelloHardHat = await hre.ethers.getContractFactory("HelloHardHat");
    const contract = await HelloHardHat.deploy();

    return { contract, owner, otherAccount };
  }

  it("Should get Hello World", async function () {
    const { contract } = await loadFixture(deployFixture);

    expect(await contract.helloWorld()).to.equal("Hello World");
  });

  it("Should set new message", async function () {
    const { contract } = await loadFixture(deployFixture);

    await contract.setMessage("New Message");

    // Verifica se a mensagem foi atualizada corretamente
    expect(await contract.helloWorld()).to.equal("New Message");
  });
});