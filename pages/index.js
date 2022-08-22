import Image from "next/image";
// import {
//   bgWrap,
//   bgText,
//   shopButton,
//   contentWrap,
//   container,
//   main,
// } from "../styles.module.css";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import Head from "next/head";

import Layout from "../components/Layout";

const Home = () => {
  const router = useRouter();
  return (
    <Layout>
      <div className="bgWrap">
        <Image
          alt="Mountains"
          src="/images/home/raggzs-hero.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <section className="section">
        <div className="heroTextContainer">
          <div className="heroText">RAGGZS</div>
        </div>
        <div className="description">Canvas Bags.</div>
        <div className="buttonContainer">
          <button
            onClick={() => router.push("https://raggzs.bigcartel.com/")}
            className="shopButton"
          >
            Shop Now
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
