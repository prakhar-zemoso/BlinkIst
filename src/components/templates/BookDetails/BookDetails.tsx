import { Footer } from "../../Organism/FooterBar/FooterNav";
import { HeaderComponent } from "../../Organism/Header/Header";
import { styled } from "@mui/styles";

export interface BookDetailsProps {
  header: React.ReactNode;
  footer?: React.ReactNode;
  body?: React.ReactNode;
}

const BodyComponent = styled("div")({
  position: "relative",
  left: 510,
});

const FooterComponent = styled("div")({
    position: 'relative',
    top: 177
})

export const BookDetails = (props: BookDetailsProps) => {
  let { body } = props;
  return (
    <>
      <HeaderComponent/>
      <BodyComponent>{body}</BodyComponent>
      <Footer/>
    </>
  );
};