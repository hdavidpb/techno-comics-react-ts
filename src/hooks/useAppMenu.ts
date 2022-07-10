import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOutUser } from "../redux/features/users/services";
import { AppDispatch } from "../redux/store";

const useAppMenu = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (item: string) => {
    if (item === "Cerrar Sesión") {
      dispatch(signOutUser());
    }

    setAnchorElUser(null);
  };

  return {
    handleOpenNavMenu,
    handleOpenUserMenu,
    handleCloseNavMenu,
    handleCloseUserMenu,
    anchorElNav,
    anchorElUser,
  };
};

export default useAppMenu;
