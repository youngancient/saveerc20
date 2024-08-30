import { ethers } from "hardhat";

async function main() {
    const clownTokenAddress = "0x450A6f494c8C4Fd8F12A02bB016f2615F1D45148";
    const cltk = await ethers.getContractAt("IERC20", clownTokenAddress);

    const saveERC20ContractAddress = "0x7EcE3f4cC4dcAa6a484c61ffCDDdEb185D85b35B";
    const saveERC20 = await ethers.getContractAt("SaveERC20", saveERC20ContractAddress);

    // Approve savings contract to spend token
    const approvalAmount = ethers.parseUnits("1000", 18);

    const approveTx = await cltk.approve(saveERC20, approvalAmount);
    approveTx.wait();

    const contractBalanceBeforeDeposit = await saveERC20.getContractBalance();
    // console.log("Contract balance before :::", contractBalanceBeforeDeposit);

    const depositAmount = ethers.parseUnits("150", 18);
    const depositTx = await saveERC20.deposit(depositAmount);

    // console.log(depositTx);

    depositTx.wait();

    const contractBalanceAfterDeposit = await saveERC20.getContractBalance();

    // console.log("Contract balance after :::", contractBalanceAfterDeposit);

    
    
    // Withdrawal Interaction
    const contractBalanceBeforeWithdrawal = await saveERC20.getContractBalance();
    console.log(contractBalanceBeforeWithdrawal)
    const withdrawAmount = ethers.parseUnits("100",18);
    const withdrawTx = await saveERC20.withdraw(withdrawAmount);
    console.log(withdrawTx);
    withdrawTx.wait();
    const contractBalanceAfterWithdrawal = await saveERC20.getContractBalance();
    console.log(contractBalanceAfterWithdrawal)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
