import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { FaEthereum } from "react-icons/fa";
import { useMoralis } from "react-moralis";

function Login() {
  const { authenticate } = useMoralis();

  return (
    <div id="_chatapp-login">
      <Head>
        <title>Metaverse Challenge - Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="login_container w-full md:flex h-full">
        <section className="left-panel w-full bg-gray-100 py-4 px-2 h-full pb-10">
          <h1 className="brand_logo text-3xl font-bold mb-9 text-dodgerblue">
            Crypto<span className="text-blue-600">Chat</span>
          </h1>
          {/* Image here */}
          <div className="img_holder text-center mb-4 px-2">
            <Image
              src="/ether_svg.svg"
              width={350}
              height={350}
              alt="Brand Image"
            />
          </div>
          <div className="bottom_panel text-center mt-12">
            <h2 className="text-2xl font-bold">
              Ready To Have A Chat And Own Your Data?
            </h2>
            <p>Create an account now using just your metamask wallet!</p>
          </div>
        </section>
        <section className="right-panel w-full py-4 px-2 h-full">
          <h2 className="mt-5 font-bold text-2xl">Get Started</h2>
          <p>Create an account now using your metamask wallet</p>
          {/* login form */}
          <div className="login_form mt-20 bg-gray-100 rounded py-20 shadow">
            <button
              className="login_cta py-2 px-4 rounded-sm font-bold text-lg bg-orange-400 text-white hover:bg-orange-500 flex items-center mx-auto"
              onClick={authenticate}
            >
              <FaEthereum className="mr-2" />
              Start Now
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Login;
