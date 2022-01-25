// BAD
async function pixTransfer(sender: User, receiver: User, amount: number) {
  ...
}

// GOOD
async function createPixTransfer(sender: User, receiver: User, amount: number) {
  await chargeAmountFromSender(sender, amount);
  await incrementAmountForReceiver(receiver, amount);
  await receiver.notifyNewPix(amount);
}
