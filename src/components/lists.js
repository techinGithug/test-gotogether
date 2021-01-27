import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';
import {
  Box,
  Container,
  Grid,
}from '@material-ui/core';
import { 
  grey
 } from '@material-ui/core/colors';


const boxStyle = makeStyles({
  rootBox: {
    width: '100%',
    marginLeft: 10,
    marginRight: 10,
  }
});

const textStyle = makeStyles({
  textCenter: {
    textAlign: 'center',
  }
});

const Variants = () => {
  const [round, setRound] = useState(3);
  const cssBox = boxStyle();
  const cssText = textStyle();

  const BOX_HEIGHT = 100;

  return (
    <div>
      <Container>
        <Box className={cssText.textCenter} my={2}>Placeholder</Box>
        <Box>
          <Box display="flex" justifyContent="center" mx={1}>
            <Skeleton variant="rect" animation="wave" className={cssBox.rootBox} height={BOX_HEIGHT} />
            <Skeleton variant="rect" animation="wave" className={cssBox.rootBox} height={BOX_HEIGHT} />
            <Skeleton variant="rect" animation="wave" className={cssBox.rootBox} height={BOX_HEIGHT} />
            <Skeleton variant="rect" animation="wave" className={cssBox.rootBox} height={BOX_HEIGHT} />
            <Skeleton variant="rect" animation="wave" className={cssBox.rootBox} height={BOX_HEIGHT} />
            <Skeleton variant="rect" animation="wave" className={cssBox.rootBox} height={BOX_HEIGHT} />
          </Box>
          <Box display="flex" justifyContent="center" mx={1}>
            <Skeleton variant="text" animation="wave" className={cssBox.rootBox} />
            <Skeleton variant="text" animation="wave" className={cssBox.rootBox} />
            <Skeleton variant="text" animation="wave" className={cssBox.rootBox} />
            <Skeleton variant="text" animation="wave" className={cssBox.rootBox} />
            <Skeleton variant="text" animation="wave" className={cssBox.rootBox} />
            <Skeleton variant="text" animation="wave" className={cssBox.rootBox} />
          </Box>
        </Box>
        <Box  my={4}>
          <Box display="flex" justifyContent="center" mx={1}>
            <Skeleton variant="rect" animation="wave" className={cssBox.rootBox} height={BOX_HEIGHT} />
            <Skeleton variant="rect" animation="wave" className={cssBox.rootBox} height={BOX_HEIGHT} />
            <Skeleton variant="rect" animation="wave" className={cssBox.rootBox} height={BOX_HEIGHT} />
            <Skeleton variant="rect" animation="wave" className={cssBox.rootBox} height={BOX_HEIGHT} />
            <Skeleton variant="rect" animation="wave" className={cssBox.rootBox} height={BOX_HEIGHT} />
            <Skeleton variant="rect" animation="wave" className={cssBox.rootBox} height={BOX_HEIGHT} />
          </Box>
          <Box display="flex" justifyContent="center" mx={1}>
            <Skeleton variant="text" animation="wave" className={cssBox.rootBox} />
            <Skeleton variant="text" animation="wave" className={cssBox.rootBox} />
            <Skeleton variant="text" animation="wave" className={cssBox.rootBox} />
            <Skeleton variant="text" animation="wave" className={cssBox.rootBox} />
            <Skeleton variant="text" animation="wave" className={cssBox.rootBox} />
            <Skeleton variant="text" animation="wave" className={cssBox.rootBox} />
          </Box>
        </Box>
        <Box  my={4}>
          <Box display="flex" justifyContent="center" mx={1}>
            <Skeleton variant="rect" animation="wave" className={cssBox.rootBox} height={BOX_HEIGHT} />
            <Skeleton variant="rect" animation="wave" className={cssBox.rootBox} height={BOX_HEIGHT} />
            <Skeleton variant="rect" animation="wave" className={cssBox.rootBox} height={BOX_HEIGHT} />
            <Skeleton variant="rect" animation="wave" className={cssBox.rootBox} height={BOX_HEIGHT} />
            <Skeleton variant="rect" animation="wave" className={cssBox.rootBox} height={BOX_HEIGHT} />
            <Skeleton variant="rect" animation="wave" className={cssBox.rootBox} height={BOX_HEIGHT} />
          </Box>
          <Box display="flex" justifyContent="center" mx={1}>
            <Skeleton variant="text" animation="wave" className={cssBox.rootBox} />
            <Skeleton variant="text" animation="wave" className={cssBox.rootBox} />
            <Skeleton variant="text" animation="wave" className={cssBox.rootBox} />
            <Skeleton variant="text" animation="wave" className={cssBox.rootBox} />
            <Skeleton variant="text" animation="wave" className={cssBox.rootBox} />
            <Skeleton variant="text" animation="wave" className={cssBox.rootBox} />
          </Box>
        </Box>
        <Box  my={4}>
          <Box display="flex" justifyContent="center" mx={1}>
            <Skeleton variant="rect" animation="wave" className={cssBox.rootBox} height={BOX_HEIGHT} />
            <Skeleton variant="rect" animation="wave" className={cssBox.rootBox} height={BOX_HEIGHT} />
            <Skeleton variant="rect" animation="wave" className={cssBox.rootBox} height={BOX_HEIGHT} />
            <Skeleton variant="rect" animation="wave" className={cssBox.rootBox} height={BOX_HEIGHT} />
            <Skeleton variant="rect" animation="wave" className={cssBox.rootBox} height={BOX_HEIGHT} />
            <Skeleton variant="rect" animation="wave" className={cssBox.rootBox} height={BOX_HEIGHT} />
          </Box>
          <Box display="flex" justifyContent="center" mx={1}>
            <Skeleton variant="text" animation="wave" className={cssBox.rootBox} />
            <Skeleton variant="text" animation="wave" className={cssBox.rootBox} />
            <Skeleton variant="text" animation="wave" className={cssBox.rootBox} />
            <Skeleton variant="text" animation="wave" className={cssBox.rootBox} />
            <Skeleton variant="text" animation="wave" className={cssBox.rootBox} />
            <Skeleton variant="text" animation="wave" className={cssBox.rootBox} />
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default Variants;