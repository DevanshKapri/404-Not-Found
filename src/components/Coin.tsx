import React from 'react'
import { useEffect, useState } from "react";
import { ButtonBase, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, Typography, Avatar, Divider, IconButton } from '@mui/material'
import { Box } from "@mui/system";
import { makeStyles, createStyles } from '@mui/styles'
import { Theme, useTheme } from '@mui/material/styles'
import millify from 'millify';
import axios from 'axios';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardHeader: {
      justifyContent: 'space-around',
    },
    cardContent: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start'
    },
    root: {
      marginLeft: "240px",
      padding: theme.spacing(1),
      [theme.breakpoints.down('sm')]: {
        marginLeft: "0",
      },
    },
  })
)

const Coin = () => {
  const classes = useStyles()

  const [coins, setCoins] = React.useState<any[]>([]);
  const [data, setData] = React.useState<any[]>([]);
  const getData = async () => {
    try {
      const response = await axios.get('https://api.nomics.com/v1/currencies/ticker?key=5fd98a1af83069f6ec9f10b78ea63f6395de5cef&status=active&sort=rank&per-page=100&page=1')
      return response.data
    } catch (err) {
      console.log(err);
    }
  }



  const URL = 'https://coinranking1.p.rapidapi.com/coins';
  const options = {
    method: 'GET',
    url: URL,
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: '24h',
      tiers: '1',
      orderBy: 'marketCap',
      orderDirection: 'desc',
      limit: '50',
      offset: '0',
    },
    headers: {
      'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
      'x-rapidapi-key': '804c84f800mshcd7aca6f0451c67p193ac0jsnba35d9fb30a8',
    },
  };

  const CoinData = async (options: any) => {
    try {
      const resoponse = await axios.get(URL, options);
      console.log(resoponse.data.data.coins);
      return resoponse.data.data.coins;
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getData()
      .then((data) => { setData(data); });
    CoinData(options)
      .then((data) => {
        setCoins(data);
      })
  }, [])

  const watchlist: any[] = ["BTC"];

  const liveData: any[] = [];
  coins.map((coin) => {
    const d = data.find((dt) => dt.symbol === coin.symbol)
    if (d) {
      const wtc = watchlist.find((list) => list === coin.symbol)
      let check: boolean = true
      if (wtc) {
        liveData.push({ coin, d, check })
      }
      else {
        check = false;
        liveData.push({ coin, d, check })
      }
    }
  })
  console.log(liveData);
  return (
    <>
      <Grid container spacing={{ xs: 2, md: 3 }} justifyContent='space-around'>
        {
          liveData.map((live, i) => (
            <Grid item key={i}>
              <Card sx={{ maxWidth: 300, minWidth: 250, backgroundColor: live.coin.color, color: live.coin.color === null ? 'black' : 'white' }} elevation={6} >

                <CardHeader
                  title={live.coin.name}
                  avatar={<Avatar src={live.coin.iconUrl} alt="logo" sx={{ backgroundColor: 'white' }} />}
                  className={classes.cardHeader}
                />
                <Divider />
                <CardContent>
                  <Box className={classes.cardContent}>
                    <Typography> Price: {`$ ${millify(live.d.price)}`}</Typography>
                    <Typography> Market Cap: {millify(live.d.market_cap)}</Typography>
                    <Typography> Daily Price Change: {live.d['1d'].price_change_pct}%</Typography>
                    <Typography> Daily Volume Change: {live.d['1d'].volume_change_pct}%</Typography>
                  </Box>
                </CardContent>
                <CardActions>
                  <IconButton sx={{ color: live.coin.color === null ? 'black' : 'white' }}>
                    {live.check ? <PlaylistAddCheckIcon /> : <PlaylistAddIcon />}
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))
        }
      </Grid>
    </>
  )
}

export default Coin