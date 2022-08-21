import Web3Modal from 'web3modal'
import { ethers } from 'ethers'
import { CollectionABI } from "../ABI/factoryabi";
import { CollectionContractAddress} from "../address/AddressCollection";

export const mint = async (idno) =>{
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)   
    const signer = provider.getSigner()
    let CollectionContract = new ethers.Contract(CollectionContractAddress, CollectionABI, signer);
    let recipt = await CollectionContract.safeMint(idno);
    return recipt;
};