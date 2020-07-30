import { createMuiTheme } from "@material-ui/core/styles"
import { blue, deepPurple } from "@material-ui/core/colors"

const palette = {
  primary: { main: blue[500], contrastText: "#ffffff" },
  secondary: { main: deepPurple[500], contrastText: "#FAFAFA" },
}
const themeName = "Chantilly Cinnabar Alpaca"

export default createMuiTheme({ palette, themeName })
