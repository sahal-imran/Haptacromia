import CustomLayoutLeftNavigation from "../Views/Layout/CustomLayoutLeftNavigation";
import { createTheme, ThemeProvider } from "@mui/system";

export default function Layout({ children }) {
  return (
    <>
      <CustomLayoutLeftNavigation>{children}</CustomLayoutLeftNavigation>
    </>
  );
}
