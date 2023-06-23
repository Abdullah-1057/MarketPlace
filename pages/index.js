import styles from "../styles/Home.module.css";
import { useMetamask, useAddress } from "@thirdweb-dev/react";
import Main from "../components/Home";

const style = {
  wrapper: `flex h-screen items-center justify-center`,
  connectWalletButton: `rounded-lg border border-black px-10 py-5 transition-all hover:bg-black hover:text-white`
}

export default function Home() {
  const ConnectWithMetaMask = useMetamask();
  const myAddres = useAddress();

  const Auth = () => {
    return (
      <div className={style.wrapper}>
        <button onClick={ConnectWithMetaMask} className={style.connectWalletButton}>Connect MetaMask</button>
      </div>
    );
  }
  return <>{myAddres ?  <Main/>  : Auth()}    </>

  // return <>{address ? <div>Logged In {myAddres}</div> : Auth()}</>


 
}
