var MCFTEnergyTokenContract = artifacts.require("./MCFTEnergyTokenContract.sol");

module.exports = function(deployer) {
  deployer.deploy(MCFTEnergyTokenContract);
};
