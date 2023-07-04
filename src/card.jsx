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
import axios from "axios";
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';



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

    const baseURL = "https://fakestoreapi.com/products/";

    const [post, setPost] = React.useState();


    console.log(post, 'post')

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {

            console.log(response.data, 'response.data')
            setPost(response?.data);
        });
    }, []);


    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <>

            {/* {
            post?.map( (item,index) =>{
             <h1 key={index}> {item.title}</h1>
            })
        }
         */}


            {post?.map((item, index) => {
                return (
                    <div key={index} >
                        <Card sx={{
                            maxWidth: 400,
                            margin: ' 0 auto;',
                            float: 'none;',
                            marginBottom: '10px;'
                        }}>


                            {/* <CardHeader
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
                            /> */}
                            <CardMedia
                                component="img"
                                height="194"
                                image={item.image}
                                alt="Paella dish"
                            />
                            <CardContent>

                                <Typography gutterBottom variant="h5" component="div">
                                    {item.title}
                                </Typography>
                                <Box
                                    sx={{
                                        '& > legend': { mt: 2 },
                                    }}
                                >

{/* 
                                    <Typography component="legend">Rating</Typography> */}
                                    <Rating name="read-only" value={item.rating.rate} readOnly />
                                </Box>
                                <Typography variant="body2" color="text.secondary">
                                    <Divider orientation="vertical" variant="middle" flexItem />
   
                                    Description :<br />
                                    {item.description}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>

                                <RWebShare
                                    data={{
                                        text: item.description,
                                        url: item.image,
                                        title: item.title,
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
                    </div>
                )
            })}


        </>
    )
}

