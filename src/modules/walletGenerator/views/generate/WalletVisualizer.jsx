import React  from "react";
import QRCode from "qrcode.react";

export default function WalletVisualizer(props) {
  const renderQR = wallet => {
    if (wallet && wallet.address && !!wallet.address.length) {
      return <QRCode value={wallet.address} />;
    } else {
      return <div />;
    }
  };
  let wallet = { ...props.wallet };

  return (
    <div className="image">
      <img src={props.image} alt="" className="" />
      <p className="text-over-address is-size-4 has-text-dark">
        <strong>
          {wallet.address || ""}
        </strong>
      </p>
      <p className="text-over-passphrase is-size-4 has-text-dark">
        <strong>
          {wallet.passphrase || ""}
        </strong>
      </p>
      <p className="text-over-message is-size-4 has-text-dark">
        <strong>
          {props.message || ""}
        </strong>
      </p>
      <span className="qr-code">
          {renderQR(wallet)}
        </span>
    </div>
  );
}
