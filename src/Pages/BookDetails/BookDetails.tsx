import  {BookDesc } from "../../components/Organism/BookDesc/BookDesc"
import { Footer } from "../../components/Organism/FooterBar/FooterNav"
import { HeaderComponent } from "../../components/Organism/Header/Header"
import { BookDetails } from "../../components/templates/BookDetails/BookDetails"

const BookDetailsPage = () => {
    return (
        <>
        <BookDetails 
        header={<HeaderComponent />}
        body={<BookDesc />}
        footer={<Footer />} />
        </>
    )
}

export default BookDetailsPage