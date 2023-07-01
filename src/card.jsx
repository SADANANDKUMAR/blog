import React from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { RWebShare } from "react-web-share";
import Divider from '@mui/material/Divider';



const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function CardBlog() {

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <>
            <Card sx={{
                maxWidth: 400,
                margin: ' 0 auto;',
                float: 'none;', 
                marginBottom: '10px;'
            }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2023"
                />
                <CardMedia
                    component="img"
                    height="194"
                    image="./animals.png"
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        ANIMALS          <Divider orientation="vertical" variant="middle" flexItem />
                        NEWS
                        Like humans, flamingos make friends for life
                        The birds seek out buddies they get along with and avoid animals they dislike—a strategy that may boost their survival, a new study says.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>

                    <RWebShare
                        data={{
                            text: "Like humans, flamingos make friends for life",
                            url: "https://on.natgeo.com/2zHaNup",
                            title: "Animals",
                        }}
                        onClick={() => console.log("shared successfully!")}
                    >
                        {/* <button>Share 🔗</button> */}
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                    </RWebShare>


                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>Method:</Typography>
                        <Typography paragraph>
                            The enduring partnerships among flamingos include mated couples that build nests together and raise chicks every year, as well as same-sex friends and groups of three to six close buddies.

                        </Typography>
                        <Typography paragraph>
                            Flamingos are known for their long legs, long necks, and party-pink feathers. Now scientists have discovered, for the first time, that the birds form long-lasting and loyal friendships—and that physical traits may play a role in those bonds.

                            The enduring partnerships among flamingos include mated couples that build nests together and raise chicks every year, as well as same-sex friends and groups of three to six close buddies.

                            Six species of flamingo inhabit large saline or alkaline lakes, mudflats, or shallow lagoons around the world, including the Americas, Africa, Europe, and Asia. The highly gregarious birds’ flocks typically number in the
                        </Typography>
                        <Typography paragraph>
                            Flamingos are known for their long legs, long necks, and party-pink feathers. Now scientists have discovered, for the first time, that the birds form long-lasting and loyal friendships—and that physical traits may play a role in those bonds.

                            The enduring partnerships among flamingos include mated couples that build nests together and raise chicks every year, as well as same-sex friends and groups of three to six close buddies.

                            Six species of flamingo inhabit large saline or alkaline lakes, mudflats, or shallow lagoons around the world, including the Americas, Africa, Europe, and Asia. The highly gregarious birds’ flocks typically number in the
                            minutes more. (Discard any mussels that don&apos;t open.)
                        </Typography>
                        <Typography>
                            Set aside off of the heat to let rest for 10 minutes, and then serve.
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </>
    )
}

