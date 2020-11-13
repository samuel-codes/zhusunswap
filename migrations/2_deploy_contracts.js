const Adoption = artifacts.require("Adoption");

//部署Adoption合约
module.exports = function (deployer) {
  deployer.deploy(Adoption);
};
