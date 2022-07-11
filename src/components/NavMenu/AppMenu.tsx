import { Box } from "@mui/system";
import { pages, settings } from "../../utils/utils";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import LogoutIcon from "@mui/icons-material/Logout";
import useAppMenu from "../../hooks/useAppMenu";
import SearchBar from "../Searchbar/SearchBar";
import * as MUI from "@mui/material";
import { signOutUser } from "../../redux/features/users/services";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";

const AppMenu = () => {
  const dispatch = useDispatch<AppDispatch>();
  const pathName = window.location.pathname;
  const {
    anchorElNav,

    handleCloseNavMenu,

    handleOpenNavMenu,
  } = useAppMenu();

  return (
    <MUI.AppBar
      position="static"
      sx={{
        backgroundImage:
          "linear-gradient(140deg, #8159e1 0%, #0112fb 50%, #e21212 75%)",
      }}
    >
      <MUI.Container maxWidth="xl">
        <MUI.Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />

          <MUI.Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            MARVEL
          </MUI.Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <MUI.IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </MUI.IconButton>
            <MUI.Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pathName !== "/" && (
                <MUI.MenuItem onClick={() => handleCloseNavMenu("Comics")}>
                  <MUI.Typography textAlign="center">{"Comics"}</MUI.Typography>
                </MUI.MenuItem>
              )}

              {pathName !== "/favorites" && (
                <MUI.MenuItem onClick={() => handleCloseNavMenu("Favoritos")}>
                  <MUI.Typography textAlign="center">
                    {"Favoritos"}
                  </MUI.Typography>
                </MUI.MenuItem>
              )}
            </MUI.Menu>
          </Box>

          <MUI.Typography
            variant="h5"
            noWrap
            component="div"
            sx={{
              width: "100%",
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <SearchBar margin={"0"} width="100%" />
          </MUI.Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pathName !== "/favorites" && (
              <MUI.Button
                onClick={() => handleCloseNavMenu("Favoritos")}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {"Favoritos"}
              </MUI.Button>
            )}
            {pathName !== "/" && (
              <MUI.Button
                onClick={() => handleCloseNavMenu("Comics")}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {"Comics"}
              </MUI.Button>
            )}

            <SearchBar margin="auto" width="70%" />
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <MUI.Tooltip title="Logout">
              <MUI.IconButton
                onClick={() => dispatch(signOutUser())}
                sx={{ p: 0, color: "#FFFFFF" }}
              >
                <LogoutIcon sx={{ fontSize: 32 }} />
              </MUI.IconButton>
            </MUI.Tooltip>
          </Box>
        </MUI.Toolbar>
      </MUI.Container>
    </MUI.AppBar>
  );
};

export default AppMenu;
