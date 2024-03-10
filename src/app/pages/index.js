// app/pages/index.js
import React from 'react';
import LineChart from '../../components/chart/LineChart';
import Sidebar from '../../components/layout/Sidebar';
import web3 from '../utils/web3'

const HomePage = () => {
    const [account, setAccount] = useState('');
    useEffect(() => {
      const loadWeb3Data = async () => {
        // Menggunakan objek web3 untuk interaksi dengan Ethereum
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
      };
      loadWeb3Data();
    }, []); 

  const chartData = [ { name: 'Jan', value: 10 },
  { name: 'Feb', value: 20 },
  { name: 'Mar', value: 15 },]; // Isi dengan data yang sesuai

  return (
    <div>
      <h1>Web3 Dashboard</h1>
      <p>Alamat akun MetaMask: {account}</p>
      {/* Konten lainnya */}
      <Sidebar />
      <LineChart data={chartData} />
    </div>
  );
};

export default HomePage;
