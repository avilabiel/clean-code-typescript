// BAD
async function createPixTransfer(sender: User, receiver: User, amount: number) {
  if (sender.balance < amount) {
    throw new Error(
      "Sender does not have enough balance to make this transfer"
    );
  }

  sender.balance = sender.balance - amount;
  await sender.save();

  receiver.balance = receiver.balance + amount;
  await receiver.save();
  await receiver.notifyNewPix(amount);
}

// GOOD
async function createPixTransfer(sender: User, receiver: User, amount: number) {
  await chargeAmountFromSender(sender, amount);
  await incrementAmountForReceiver(receiver, amount);
  await receiver.notifyNewPix(amount);
}

async function chargeAmountFromSender(sender: User, amount: number) {
  if (sender.balance < amount) {
    throw new Error(
      "Sender does not have enough balance to make this transfer"
    );
  }

  sender.balance = sender.balance - amount;
  await sender.save();
}

async function incrementAmountForReceiver(receiver: User, amount: number) {
  receiver.balance = receiver.balance + amount;
  await receiver.save();
}
