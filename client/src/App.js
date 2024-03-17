import DC from "./artifacts/contracts/DigitalForensics.sol/DigitalForensics.json";
import { useState, useEffect } from "react";
import Admin from './pages/Admin'
import Police from './pages/Police'
import Lab from './pages/Lab'
import Case from './pages/Case'
import Report from './pages/Report'
import Navigation from './components/Navigation'
import './app.css'
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const ethers = require("ethers")


function App() {
  const [account, setAccount] = useState("");
  const [role, setRole] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {

    const provider = new ethers.BrowserProvider(window.ethereum);

    const setup = async () => {

      if (provider) {
        await provider.send("eth_requestAccounts", []);

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        })

        const signer = await provider.getSigner();
        const address = await signer.getAddress();


        setAccount(address);

        let contractAddress = "YOUR_COMPILED_CONTRACT_ADDRESS";

        const contract = new ethers.Contract(
          contractAddress,
          DC.abi,
          signer
        );
        setContract(contract);
        setProvider(provider);

        console.log(account);
        console.log(contract);

        const currRole = await contract.getMyRole();
        if (currRole) {
          setRole(currRole)
        }
      } else {
        console.error("Metamask is not installed");
      }
    };
    provider && setup();
  }, []);
  return (


    <BrowserRouter>
      <Navigation account={account} role={role} />
      <Routes>
        <Route exact path="/admin" element={
          <Admin account={account} contract={contract} role={role} />
        }>
        </Route>
        <Route exact path="/police" element={
          <>
            <Police account={account} contract={contract} role={role} />
          </>
        }>
        </Route>
        <Route exact path="/cases/:caseId" element={
          <>
            <Case role={role} account={account} contract={contract} />
          </>
        }>
        </Route>
        <Route exact path="/lab" element={
          <>
            <Lab account={account} contract={contract} role={role} />
          </>
        }>
        </Route>
        <Route exact path="/reports/:reportId" element={
          <>
            <Report role={role} account={account} contract={contract} />
          </>
        }>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
