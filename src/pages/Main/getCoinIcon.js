import { ReactComponent as ObyteNetwork } from "./img/networks/obyte.svg";
import { ReactComponent as BscNetwork } from "./img/networks/bsc.svg";
import { ReactComponent as EthNetwork } from "./img/networks/eth.svg";

import styles from "./coinIcon.module.css";

import { memo } from "react";

import { store } from "index";

export const getCoinIcon = (network, symbol) => {
  const networkName = String(network).toLowerCase();
  const symbolName = String(symbol).toLowerCase();
  const state = store.getState();
  const icons = state.cdnIcons.list;
  let NetworkIcon;
  
  if (networkName === "obyte") {
    NetworkIcon = ObyteNetwork
  } else if (networkName === "bsc") {
    NetworkIcon = BscNetwork
  } else if (networkName === "ethereum") {
    NetworkIcon = EthNetwork
  }

  return <div style={{ position: "relative", height: 40, marginRight: 10, overflow: "hidden" }}>
    <Coin symbol={symbolName} icons={icons} />
    <NetworkIcon width="50%" height="50%" style={{ right: 0, bottom: 0, position: "absolute" }} />
  </div>
}

const Coin = memo(({ symbol, icons }) => {
  const smb = symbol.replace(/[0-9]/g, '');
   if (icons.includes(String(symbol).toUpperCase())) {
     return <img src={`${process.env.REACT_APP_ICON_CDN_URL}/${symbol.toUpperCase()}-INV.svg`} width={40} height={40} key={smb} alt={smb} className={styles.icon} style={{ display: "inherit" }} />
  } else {
    return <img src={`https://cdn.jsdelivr.net/npm/cryptocurrency-icons@0.17.2/svg/color/${smb.toLowerCase()}.svg`} width={40} height={40} key={smb} alt={smb} className={styles.icon} style={{ display: "inherit" }} onError={(e) => { if (e.target.src !== "plug.svg") { e.target.src = "plug.svg"; e.target.onerror = null } }} />
  }
})