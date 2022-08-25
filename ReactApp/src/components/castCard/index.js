import React, { useContext  } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import CalendarIcon from "@material-ui/icons/CalendarTodayTwoTone";
import StarRateIcon from "@material-ui/icons/StarRate";
// import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import img from '../../images/film-poster-placeholder.png';
// import { Link } from "react-router-dom";
// import Avatar from "@material-ui/core/Avatar";
import { CastContext } from "../../contexts/castContext";

const useStyles = makeStyles({
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
});

export default function CastCard({ cast, action}) {
  const classes = useStyles();
  const { favorites, addToFavorites } = useContext(CastContext);
  const { playlist, addToPlaylist } = useContext(CastContext);

  if (favorites.find((id) => id === cast.id)) {
    cast.favorite = true;
  } else {
    cast.favorite = false
  }

  if (playlist.find((id) => id === cast.id)) {
    cast.playlist = true;
  } else {
    cast.playlist = false
  }

  const handleAddToFavorite = (e) => {
    e.preventDefault();
    addToFavorites(cast);

  const handleAddToPlaylist = (e) => {
    e.preventDefault();
    addToPlaylist(cast);
  };

}



  return (
    <Card className={classes.card}>
      <CardHeader
      className={classes.header}
      title={
        <Typography variant="h5" component="p">
          {cast.name}{" "}
        </Typography>
      }
    />
      <CardMedia
        className={classes.media}
        image={
          cast.profile_path
            ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
           <Typography variant="h6" component="p">
             Biography
           </Typography>
           <Typography variant="h6" component="p">
             {cast.biography} 
           </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {cast.birthday} 
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {cast.popularity}{" "}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              {cast.place_of_birth} 
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              {cast.known_for_department} 
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        {action(cast)}
      </CardActions>
    </Card>
  );
}

