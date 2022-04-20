import type { NextPage } from "next";
import Head from "next/head";
import React, { useState, useEffect } from "react";
import { motion, useViewportScroll } from "framer-motion";

const Home: NextPage = () => {
  const { scrollYProgress } = useViewportScroll();
  const [hapaxColor, setHapaxColor] = useState("text-white");

  // we want to change the font color of the "hapax"
  // text after some interval
  useEffect(() => {
    const timer = setTimeout(() => {
      setHapaxColor("text-red-500");
    }, 9000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Head>
        <title>Hapax</title>
        {/* Add description of what Hapax is
        <meta name="description" content="" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen w-screen flex justify-center items-center bg-gradient-to-t from-gray-700 via-gray-900 to-black">
        <div className="font-bold text-4xl flex justify-center text-white">
          {/* container for Hapax */}
          <div className="flex tracking-wide">
            <motion.div
              animate={{ y: -40 }}
              transition={{ delay: 4, duration: 1 }}
              style={{ position: "relative" }}
            >
              <span className={`${hapaxColor}`}>Ha</span>
              <motion.div
                style={{
                  position: "absolute",
                  left: "100%",
                  top: 0,
                  opacity: 0,
                }}
                animate={{ opacity: 1 }}
                transition={{ delay: 6 }}
              >
                ckers
              </motion.div>
            </motion.div>
            <motion.div style={{ position: "relative" }}>
              <motion.div
                style={{
                  position: "absolute",
                  right: "100%",
                  top: 0,
                  opacity: 0,
                }}
                animate={{ opacity: 1, x: -15 }}
                transition={{ delay: 7 }}
              >
                1st{" "}
              </motion.div>
              <span className={`${hapaxColor}`}>p</span>
              <motion.div
                style={{
                  position: "absolute",
                  left: "100%",
                  top: 0,
                  opacity: 0,
                }}
                animate={{ opacity: 1 }}
                transition={{ delay: 7 }}
              >
                rinciples
              </motion.div>
            </motion.div>
            <motion.div
              animate={{ y: 40 }}
              transition={{ delay: 5, duration: 1 }}
            >
              <motion.div
                style={{
                  position: "absolute",
                  right: "100%",
                  top: 0,
                  opacity: 0,
                }}
                animate={{ opacity: 1 }}
                transition={{ delay: 8 }}
              >
                M{" "}
              </motion.div>
              <span className={`${hapaxColor}`}>ax</span>
              <motion.div
                style={{
                  position: "absolute",
                  left: "100%",
                  top: 0,
                  opacity: 0,
                }}
                animate={{ opacity: 1, x: 15 }}
                transition={{ delay: 8 }}
              >
                returns
              </motion.div>
            </motion.div>
          </div>
          {/* container for dictionary definition */}
          <motion.div
            className="font-normal"
            animate={{ opacity: 0 }}
            transition={{ delay: 4 }}
          >
            <span> : </span>
            <span>"A word that only appears once"</span>
          </motion.div>
        </div>
      </div>
      <div className="h-screen w-screen"></div>
    </div>
  );
};

export default Home;
