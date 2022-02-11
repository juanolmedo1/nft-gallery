import Web3 from 'web3';

const { REACT_APP_INFURA_URL = '' } = process.env;

const provider = new Web3.providers.WebsocketProvider(REACT_APP_INFURA_URL);

export const web3 = new Web3(provider);

export const getUserBalance = async (address: string): Promise<string> => {
    const balanceInWei = await web3.eth.getBalance(address);
    const balanceInEther = await web3.utils.fromWei(balanceInWei, 'ether');
    const balanceInEtherFormatted = balanceInEther.slice(0, 6);
    return balanceInEtherFormatted;
}
