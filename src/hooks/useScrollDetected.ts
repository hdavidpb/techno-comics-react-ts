import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAllComicsListScrollTop } from "../redux/features/globals/globalsSlice";
import { RootState } from "../redux/store";

const useScrollDetected = () => {
  const dispatch = useDispatch();
  const { allComicsListScrollTop } = useSelector(
    (store: RootState) => store.globalSlice
  );

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    containerRef.current!.scrollTop = allComicsListScrollTop;
    containerRef.current?.scroll({
      behavior: "smooth",
      top: allComicsListScrollTop,
    });
  }, [allComicsListScrollTop, containerRef.current]);

  const handleChangeScrollTop = () => {
    if (containerRef.current?.scrollTop !== 0) {
      setTimeout(() => {
        if (containerRef.current) {
          dispatch(setAllComicsListScrollTop(containerRef.current.scrollTop));
        }
      }, 2000);
    }
  };

  return { containerRef, handleChangeScrollTop };
};

export default useScrollDetected;
