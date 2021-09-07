import "./App.css";
import { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import Characters from "./components/Characters";
import Navigation from "./components/Navigation";

const App = () => {
  const [characterList, setCharacterList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(0);

  const handleNextPage = () => {
    if (currentPage < numberOfPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((response) => {
        setCharacterList(response.results);
        setNumberOfPages(response.info.pages);
      })
      .catch((error) => console.log(`Error: ${error}`));
  }, []);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
      .then((response) => response.json())
      .then((response) => {
        setCharacterList(response.results);
      })
      .catch((error) => console.log(`Error: ${error}`));
  }, [currentPage]);

  return (
    <Container maxWidth="xl">
      <Navigation
        currentPage={currentPage}
        numberOfPages={numberOfPages}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
      />

      <Characters characterList={characterList} numberOfPages={numberOfPages} />
    </Container>
  );
};

export default App;
