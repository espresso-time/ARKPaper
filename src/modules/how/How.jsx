import React  from "react";
import AnimationsWrapper from "../animationWrapper/AnimationWrapper";

export default function How() {
  return (
    <div className="container has-text-centered">
      <AnimationsWrapper>
        <div className="columns">
          <div className="column is-8 is-offset-2 has-text-left">
            <h1 className="title top35">What is a paper wallet?</h1>
            <p>
              One of the most exciting things you can do with your ARK is to
              send them to a piece of paper.
            </p>
            <p>
              First of all, the first rule of crypto-club is: Your keys — Your
              ARK, Not your keys — Not your ARK.
            </p>
            <p>
              In the most specific sense, an ARK paper wallet is a document
              containing all of the data necessary to access a the wallet from
              ARK Desktop Wallet.
              <br />
            </p>
            <h2 className="title top35">
              What are the benifits of having a paper wallet?
            </h2>
            <p>
              A paper wallet can be generated offline and allows you to have a
              copy of your copy literally on a piece of paper
            </p>
            <h2 className="title top35">
              What can I do with a paper wallet?
            </h2>
            <p>
              With an ARK paper wallet you can store you ARK passphrase away
              of a computer. If the paper wallet is stored properly then this
              might be considered an extra layer of security in storing your
              passphrase
            </p>
            <p>
              Another use case of a paper wallet is to gift it to friends for
              example for Christmas. Let&apos;s say you want to give 10 ARK
              to John, but John doesn&apos;t know how to create an ARK wallet.
              You could create an ARK Paper Wallet for John, send some ARK to
              the generated address and then gift the paper wallet to him.
            </p>
            <h2 className="title top35">
              Is this application communicating with any server?
            </h2>
            <p>
              No, ARKPaper is running only in your browser. This means
              that when you visit ARKPaper you are downloading the
              application in your browser and is running it locally. No data
              is transmitted to any server and there is no tracking/analytics
              software in place. In order to verify this, you can analyze on{" "}
              <a
                href="https://github.com/espresso-time/ARKPaper/releases"
                className="underlined"
              >
                {" "}Github{" "}
              </a>{" "}
              the source code. In order to avoid any doubts, downloading the
              software from Github and running it offline is encouraged.
            </p>
            <h2 className="title top35">
              How do I generate the paper wallet offline?
            </h2>
            <p>
              The code of{" "}
              ARKPaper{" "}
              is open source. You can improve it and submit a PR to the
              repository. If you need assistance, feel free to contact
              Espresso on the ARK chat.
            </p>
            <p>
              The safest way to generate a wallet is{" "}
              <a
                href="https://github.com/espresso-time/ARKPaper/releases"
                className="underlined"
              >
                to download the application here
              </a>, transfer it into an usb drive, start an offline linux
              distribution, and open the index.html.
            </p>
            <p>
              If you don&apos;t want to bother to use an offline linux
              distribution, you can just download{" "}
              <a
                href="https://github.com/espresso-time/ARKPaper/releases"
                className="underlined"
              >
                ARKpaper.zip from here
              </a>, unzip it and execute the index.html. There is no need to
              be connected to internet while running the ARKpaper app.
            </p>
          </div>
        </div>
      </AnimationsWrapper>
    </div>
  );
}
