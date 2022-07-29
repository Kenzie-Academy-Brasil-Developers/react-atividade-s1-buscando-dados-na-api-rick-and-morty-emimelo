import { useState } from "react";
import { useEffect } from "react";
import "./style/reset.js";
import Characters from "./components/Characters";
import GlobalStyle from "./style/reset.js";

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [page, setPage] = useState(1);
  const [, setInfo] = useState({});
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [isPreviousDisabled, setIsPreviousDisabled] = useState(true);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((response) => response.json())
      .then((response) => {
        const { info, results } = response;
        setCharacterList(results);
        setInfo(info);
        setIsNextDisabled(!info.next);
        setIsPreviousDisabled(!info.prev);
      });
  }, [page]);

  return (
    <>
      <GlobalStyle />
      <Characters
        characterList={characterList}
        page={page}
        setPage={setPage}
        isNextDisabled={isNextDisabled}
        isPreviousDisabled={isPreviousDisabled}
      />
    </>
  );
}

export default App;
