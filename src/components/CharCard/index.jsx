import { BsGenderMale, BsGenderFemale } from "react-icons/bs";
import { TbGenderGenderless } from "react-icons/tb";
import { Li, DivImg, DivCard, DivInfo, DivSpecie, DivGender } from "./styles";

const ChardCard = ({ character }) => {
  return (
    <Li
      style={{
        border:
          character.status === "Alive"
            ? "solid 4px #8fc748"
            : "solid 4px #1894aa",
      }}
    >
      <DivImg>
        <img
          src={character.image}
          alt=""
          style={{
            boxShadow:
              character.status === "Alive"
                ? "#64bb46 0em 0em 0.8em 0.2em"
                : "#1894aa 0em 0em 0.8em 0.2em",
          }}
        />
      </DivImg>
      <DivCard>
        {character.name.length > 15 ? (
          <h3>{character.name.split("").join("").slice(0, 15) + "..."}</h3>
        ) : (
          <h3>{character.name}</h3>
        )}
        <DivInfo>
          <DivSpecie>
            <span>Specie: {character.species}</span>
            <span>Status: {character.status}</span>
          </DivSpecie>
          <DivGender>
            {character.gender === "Female" ? (
              <span>
                <BsGenderFemale />
              </span>
            ) : character.gender === "Male" ? (
              <span>
                <BsGenderMale />
              </span>
            ) : (
              <span>
                <TbGenderGenderless />
              </span>
            )}
          </DivGender>
        </DivInfo>
      </DivCard>
    </Li>
  );
};

export default ChardCard;
