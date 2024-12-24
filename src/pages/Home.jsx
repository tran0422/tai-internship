import React, { useEffect, useState } from "react";
import BrowseByCategory from "../components/home/BrowseByCategory";
// import HotCollections from "../components/home/HotCollections";
import Landing from "../components/home/Landing";
import LandingIntro from "../components/home/LandingIntro";
// import NewItems from "../components/home/NewItems";
import TopSellers from "../components/home/TopSellers";
import APIhotCollect from "../components/home/APIhotCollect";
import APInewItem from "../components/home/APInewItem";

const Home = () => {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        <Landing />
        <LandingIntro />
        <APIhotCollect />
        <APInewItem />
        {/* <HotCollections nft={ nft } loading={loading} /> */}
        {/* <NewItems /> */}
        <TopSellers />
        <BrowseByCategory />
      </div>
    </div>
  );
};

export default Home;
