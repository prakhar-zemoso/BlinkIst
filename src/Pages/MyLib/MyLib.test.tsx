import {Footer} from "../../components/Organism/FooterBar/FooterNav";
import {HeaderComponent } from "../../components/Organism/Header/Header";
import React from "react"
import { Tabs } from "../../components/Organism/Tabs/Tabs";
import { MyLibrary } from "../../components/templates/MyLib/MyLib";

const LibraryPage = () => {
  return (
    <>
     <MyLibrary body={<Tabs />}/>
    </>
  );
};

export default LibraryPage;