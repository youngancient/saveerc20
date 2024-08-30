import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ClownTokenModule = buildModule("ClownTokenModule", (m) => {

    const erc20 = m.contract("ClownToken");

    return { erc20 };
});

export default ClownTokenModule;
