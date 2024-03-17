const hre = require("hardhat");

async function main() {
  const Df = await hre.ethers.getContractFactory("DigitalForensics");
  const df = await Df.deploy();

  await df.waitForDeployment();

  console.log("Library deployed to:", df.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

