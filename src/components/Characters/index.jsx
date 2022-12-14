import ChardCard from "../CharCard";
import { Header, Main } from "./styles";
import logo from "../../assets/logo.png";
import img from "../../assets/img.png";

const Characters = ({
  characterList,
  page,
  setPage,
  isNextDisabled,
  isPreviousDisabled,
}) => {
  function changePage(name) {
    name === "next" ? setPage(() => page + 1) : setPage(() => page - 1);
  }
  return (
    <>
      <Header>
        <div>
          <img src={logo} alt="Logotipo da série Rick and Morty" />
          <img src={img} alt="Imagem ilustrativa do Rick e Morty" />
        </div>
      </Header>
      <Main
        isPreviousDisabled={isPreviousDisabled}
        isNextDisabled={isNextDisabled}
      >
        <section>
          <ul>
            {characterList.map((character, index) => {
              return <ChardCard key={index} character={character} />;
            })}
          </ul>
        </section>
        <section>
          <div>
            <button
              onClick={() => changePage("previous")}
              disabled={isPreviousDisabled}
            >
              Previous
            </button>
            <button
              onClick={() => changePage("next")}
              disabled={isNextDisabled}
            >
              Next
            </button>
          </div>
        </section>
      </Main>
    </>
  );
};

export default Characters;
