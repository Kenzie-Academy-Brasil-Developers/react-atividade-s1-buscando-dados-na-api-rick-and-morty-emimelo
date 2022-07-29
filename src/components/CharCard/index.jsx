import { BsGenderMale, BsGenderFemale } from "react-icons/bs";
import { TbGenderGenderless } from "react-icons/tb";
import { Li, DivImg, DivCard, DivInfo, DivSpecie, DivGender } from "./styles";

const ChardCard = ({ name, image, species, status, gender, id }) => {
  return (
    <Li
      key={id}
      style={{
        border: status === "Alive" ? "solid 4px #8fc748" : "solid 4px #1894aa",
      }}
    >
      <DivImg>
        <img
          src={image}
          alt=""
          style={{
            boxShadow:
              status === "Alive"
                ? "#64bb46 0em 0em 0.8em 0.2em"
                : "#1894aa 0em 0em 0.8em 0.2em",
          }}
        />
      </DivImg>
      <DivCard>
        {name.length > 15 ? (
          <h3>{name.split("").join("").slice(0, 15) + "..."}</h3>
        ) : (
          <h3>{name}</h3>
        )}
        <DivInfo>
          <DivSpecie>
            <span>Specie: {species}</span>
            <span>Status: {status}</span>
          </DivSpecie>
          <DivGender>
            {gender === "Female" ? (
              <span>
                <BsGenderFemale />
              </span>
            ) : gender === "Male" ? (
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
