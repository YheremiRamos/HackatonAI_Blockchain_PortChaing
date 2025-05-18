async function connectWallet() {
  const near = await nearApi.connect({
    networkId: 'testnet',
    keyStore: new nearApi.keyStores.BrowserLocalStorageKeyStore(),
    nodeUrl: 'https://rpc.testnet.near.org',
    walletUrl: 'https://wallet.testnet.near.org',
  });
  return near.wallet();
}

document.getElementById('login').addEventListener('click', async () => {
  const wallet = await connectWallet();
  await wallet.requestSignIn('portchain.testnet');
});