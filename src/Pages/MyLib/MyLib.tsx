
import { Tabs } from "../../components/Organism/Tabs/Tabs";
import { MyLibrary } from "../../components/templates/MyLib/MyLib";

const LibraryPage = () => {
    return (
        <>
            <MyLibrary body={<Tabs />} />
        </>
    )
}

export default LibraryPage