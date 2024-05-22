import { FC, useContext } from "react";
import { useCharacterSimpson } from "./hooks/useCharacterSimpson";
import { FrikiWorldContext } from "../../../../context/FrikiWorldContext";
import { SpinnerLoading } from "../../../../components";
import { CardCharacterSimpson } from "./components/CardCharacterSimpson";

export const CharactersSimpson: FC = () => {
  const {
    simpsonCharacter,
    configCharacterSpinner,
    configInput,
    searchSimpson,
    searchInputCharacter,
  } = useCharacterSimpson();
  const { loadingView } = useContext(FrikiWorldContext);
  console.log(simpsonCharacter);

  return (
    <>
      {loadingView ? (
        <SpinnerLoading {...configCharacterSpinner} />
      ) : (
        <CardCharacterSimpson
          simpsonCharacter={simpsonCharacter}
          configInput={configInput}
          searchSimpson={searchSimpson}
          searchInputCharacter={searchInputCharacter}
        />
      )}
    </>
  );
};
