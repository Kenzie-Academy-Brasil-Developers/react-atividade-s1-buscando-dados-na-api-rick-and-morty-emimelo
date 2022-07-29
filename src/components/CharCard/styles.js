import styled from "styled-components";

const Li = styled.li`
  background-color: #000000;
  border: solid 4px #8fc748;
  border-radius: 8px;
`;

const DivImg = styled.div`
  width: 12.5rem;
  padding: 1.25rem;

  img {
    width: 100%;
    border-radius: 50%;
  }
`;

const DivCard = styled.div`
  display: flex;
  gap: 1.875rem;
  flex-direction: column;
  h3 {
    color: #ffffff;
    font-size: 1.8rem;
    font-weight: 700;
    text-shadow: #f9ef1e 0.1em 0.1em 0.2em;
    margin-top: 0.938rem;
    text-align: center;
  }
`;

const DivInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 20px 20px 20px;

  span {
    color: #ffffff;
    text-shadow: #f9ef1e 0.1em 0.1em 0.2em;
  }
`;

const DivSpecie = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 1.25rem;
  font-weight: 600;
`;

const DivGender = styled.div`
  display: flex;
  justify-content: center;

  span {
    align-self: center;
  }

  span > svg {
    width: 20px;
    height: 30px;
  }
`;

export { Li, DivImg, DivCard, DivInfo, DivSpecie, DivGender };
