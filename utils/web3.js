// utils/web3.js
import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
  // Menggunakan Web3 dari MetaMask
  web3 = new Web3(window.ethereum);
  window.ethereum.enable(); // Meminta akses ke akun MetaMask
} else {
  // Fallback jika tidak ada MetaMask
  const provider = new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/YOUR_INFURA_API_KEY');
  web3 = new Web3(provider);
}

export default web3;
