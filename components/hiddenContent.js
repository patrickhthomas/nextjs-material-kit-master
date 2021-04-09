import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from "@material-ui/core/Grid";

export default function HiddenContent() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));

  return(
      <Grid>HELP!!!!!</Grid>
  )
}