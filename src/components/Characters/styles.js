import styled from "styled-components";

const Header = styled.header`
  div {
    display: flex;
    justify-content: center;
  }

  div > img {
    min-width: 33vw;
    display: flex;
  }

  div > img + img {
    display: none;
    position: initial;
  }

  @media screen and (min-width: 426px) {
    div > img {
      width: 26.6rem;
      position: absolute;
    }
    div > img + img {
      display: block;
      position: initial;
    }
  }
`;

const Main = styled.main`
  margin: 0 auto;
  width: 80%;
  margin-top: 3.125rem;

  section > div > span {
    margin-left: 10px;
  }

  section > ul {
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    gap: 1.875rem;
    height: 25.563rem;
    overflow-y: scroll;
  }

  @media screen and (min-width: 1024px) {
    section > ul {
      height: auto;
      overflow-y: auto;
    }
  }

  section + section > div {
    display: flex;
    justify-content: space-between;
    margin: 2.5rem 0 2.5rem 0;
    flex-direction: initial;
  }

  section + section > div > button {
    height: 2.875rem;
    width: 6.25rem;
    border-radius: 4px;
    font-size: 2rem;
    font-weight: bolder;
    box-shadow: ${({ isPreviousDisabled }) =>
      isPreviousDisabled ? "none" : "#1894aa 0em 0em 0.4em 0.1em;"};
    &:hover {
      box-shadow: ${({ isPreviousDisabled }) =>
        isPreviousDisabled ? "none" : "#64bb46 0em 0em 0.4em 0.1em"};
    }
  }

  section + section > div > button + button {
    box-shadow: ${({ isNextDisabled }) =>
      isNextDisabled ? "none" : "#1894aa 0em 0em 0.4em 0.1em;"};
    &:hover {
      box-shadow: ${({ isNextDisabled }) =>
        isNextDisabled ? "none" : "#64bb46 0em 0em 0.4em 0.1em"};
    }
  }
`;

export { Header, Main };
