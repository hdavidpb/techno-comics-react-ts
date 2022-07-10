import * as MUI from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import { Box } from "@mui/system";
import { pages, settings } from "../../utils/utils";
import useAppMenu from "../../hooks/useAppMenu";
import SearchBar from "../Searchbar/SearchBar";

const AppMenu = () => {
  const {
    anchorElNav,
    anchorElUser,
    handleCloseNavMenu,
    handleCloseUserMenu,
    handleOpenNavMenu,
    handleOpenUserMenu,
  } = useAppMenu();

  return (
    <MUI.AppBar position="static">
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
            LOGO
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
              {pages.map((page) => (
                <MUI.MenuItem key={page} onClick={handleCloseNavMenu}>
                  <MUI.Typography textAlign="center">{page}</MUI.Typography>
                </MUI.MenuItem>
              ))}
            </MUI.Menu>
          </Box>

          <MUI.Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
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
            {pages.map((page) => (
              <MUI.Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </MUI.Button>
            ))}
            {/* <MUI.MenuItem>
              <MUI.TextField type="text" placeholder="Buscar..." />
            </MUI.MenuItem> */}
            <SearchBar margin="auto" width="70%" />
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <MUI.Tooltip title="Open settings">
              <MUI.IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <MUI.Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/2.jpg"
                />
              </MUI.IconButton>
            </MUI.Tooltip>
            <MUI.Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MUI.MenuItem
                  key={setting}
                  onClick={() => handleCloseUserMenu(setting)}
                >
                  <MUI.Typography textAlign="center">{setting}</MUI.Typography>
                </MUI.MenuItem>
              ))}
            </MUI.Menu>
          </Box>
        </MUI.Toolbar>
      </MUI.Container>
    </MUI.AppBar>
  );
};

export default AppMenu;
