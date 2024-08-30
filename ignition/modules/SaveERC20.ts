import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const tokenAddress = "0x450A6f494c8C4Fd8F12A02bB016f2615F1D45148";

const SaveERC20Module = buildModule("SaveERC20Module", (m) => {

    const save = m.contract("SaveERC20", [tokenAddress]);

    return { save };
});

export default SaveERC20Module;

// Deployed SaveERC20: 0x9e92DE115F6c5a66c77062434Fa4F787Fd32daa9
