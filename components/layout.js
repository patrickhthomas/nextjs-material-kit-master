import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { styled } from '@material-ui/core/styles';


const MyContainer = styled(Container)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  maxWidth: '100%',
  margin: 'auto'
});



export default function Layout({children}) {
  return (


      <MyContainer>
        {children}
      </MyContainer>

  );
}