import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import React from "react";
import CountUp from "react-countup";
import { useSelector } from "react-redux";
import { selectData } from "../covidSlice";
import styles from "./Cards.module.css";
import { MdLocalHospital } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { GiHastyGrave } from "react-icons/gi";

const Cards: React.FC = () => {
  const data = useSelector(selectData);

  return (
    <div className={styles.container}>
      <Grid container spacing={1} justifyContent="center">
        <Grid item xs={12} md={3} component={Card} className={styles.infected}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              <MdLocalHospital />
              Infected persons
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={data.confirmed.value}
                duration={1.5}
                separator=","
              />
            </Typography>
          </CardContent>
        </Grid>

        <Grid item xs={12} md={3} component={Card} className={styles.recovered}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              <AiFillLike />
              Recovered persons
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={data.recovered.value}
                duration={1.5}
                separator=","
              />
            </Typography>
          </CardContent>
        </Grid>

        <Grid item xs={12} md={3} component={Card} className={styles.deaths}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              <GiHastyGrave />
              Dead persons
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={data.deaths.value}
                duration={1.5}
                separator=","
              />
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
