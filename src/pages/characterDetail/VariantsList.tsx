import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import ReactTooltip from "react-tooltip";
import { Fragment } from "react";
import Loader from "../../components/Fallback/Loader";
import {
  getCharacterById,
  getCharactersVariants,
} from "../../redux/features/characters/services";

const VariantsList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { variantsData, loadingVariants } = useSelector(
    (store: RootState) => store.charactersSlice
  );

  const handleChangeVariantCharacter = (id: number, name: string) => {
    dispatch(getCharacterById(id));
    dispatch(getCharactersVariants({ nameStartsWith: name.split(" ")[0] }));
  };

  return (
    <div className="variants__container">
      <h3>Variantes</h3>
      {variantsData?.results.length === 1 ? (
        <span>This Character not have any variants</span>
      ) : (
        <div className="variants__list__container">
          {!loadingVariants ? (
            variantsData?.results.map((variant) => (
              <Fragment key={variant.id}>
                <img
                  data-tip={variant.name}
                  src={`${variant.thumbnail.path}.${variant.thumbnail.extension}`}
                  alt={variant.name}
                  onClick={() =>
                    handleChangeVariantCharacter(variant.id, variant.name)
                  }
                />
                <ReactTooltip />
              </Fragment>
            ))
          ) : (
            <Loader
              widthImage="250px"
              heightImage="60px"
              backgroundColor="#ffffff"
              heightContainer="100%"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default VariantsList;
