import Web3Modal from 'web3modal'
import { ethers } from 'ethers'
import { FactoryABI } from "../ABI/factoryabi";
import { FactoryContractAddress} from "../address/AddressFactory";

export const createNewCollection = async (collectionName, collectionSymbol, tokenURIs, whitelisted) =>{
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)   
    const signer = provider.getSigner()
    let FactoryContract = new ethers.Contract(FactoryContractAddress, FactoryABI, signer);
    let recipt = await FactoryContract.createNewPanch(collectionName, collectionSymbol, tokenURIs, whitelisted);
    return recipt;
};

