import BookDetailView from "./BookDetails";
import {Footer} from "../../components/Organism/FooterBar/FooterNav";
import {HeaderComponent } from "../../components/Organism/Header/Header";
import React from "react"


interface Props {}

const BookDetailViewPage = (props: Props) => {
  return (
    <>
      <HeaderComponent  />
      <BookDetailView />
      <Footer />
    </>
  );
};

export default BookDetailViewPage;