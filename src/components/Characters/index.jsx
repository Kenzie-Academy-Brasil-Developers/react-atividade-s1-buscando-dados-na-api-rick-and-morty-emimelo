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
    name === "next" ? setPage(() => page++) : setPage(() => page--);
  }
  return (
    <>
      <Header>
        <div>
          <img src={logo} alt="" />
          <img src={img} alt="" />
        </div>
      </Header>
      <Main
        isPreviousDisabled={isPreviousDisabled}
        isNextDisabled={isNextDisabled}
      >
        <section>
          <ul>
            {characterList.map((character) => {
              return (
                <ChardCard
                  name={character.name}
                  image={character.image}
                  species={character.species}
                  status={character.status}
                  gender={character.gender}
                  id={character.id}
                />
              );
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
