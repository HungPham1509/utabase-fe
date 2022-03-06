import PropTypes from 'prop-types';
import {useEffect, useState} from 'react';

// material-ui
import {useTheme} from '@mui/material/styles';
import {Avatar, Button, CardActions, CardContent, Divider, Grid, Menu, MenuItem, Typography} from '@mui/material';

// project imports
import MainCard from "./MainCard";
import SkeletonPopularCard from './charts/PopularCard';
import Document from "../_mocks_/document";

// assets
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import DOCUMENTS from "../_mocks_/document";
import Iconify from "./Iconify";
import {fShortenNumber} from "../utils/formatNumber";
import {useNavigate} from "react-router-dom";

// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //
const gridSpacing = 3
const PopularCard = ({isLoading}) => {
    const theme = useTheme();
    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState(null);
    const [documents, setDocument] = useState([])

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        let ratingDocuments = DOCUMENTS.sort((doc1, doc2) => doc2.rating - doc1.rating).slice(0, 5)
        setDocument(ratingDocuments);
    }, []);

    return (
        <>
            {isLoading ? (
                <SkeletonPopularCard/>
            ) : (
                <MainCard content={false}>
                    <CardContent>
                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={12}>
                                <Grid container alignContent="center" justifyContent="space-between">
                                    <Grid item>
                                        <Typography variant="h4"
                                                    sx={{color: theme.palette.error.main}}>人気多読ランキング</Typography>
                                    </Grid>
                                    <Grid item>
                                        <MoreHorizOutlinedIcon
                                            fontSize="small"
                                            sx={{
                                                color: theme.palette.primary[200],
                                                cursor: 'pointer'
                                            }}
                                            aria-controls="menu-popular-card"
                                            aria-haspopup="true"
                                            onClick={handleClick}
                                        />
                                        <Menu
                                            id="menu-popular-card"
                                            anchorEl={anchorEl}
                                            keepMounted
                                            open={Boolean(anchorEl)}
                                            onClose={handleClose}
                                            variant="selectedMenu"
                                            anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'right'
                                            }}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right'
                                            }}
                                        >
                                            <MenuItem onClick={handleClose}> Today</MenuItem>
                                            <MenuItem onClick={handleClose}> This Month</MenuItem>
                                            <MenuItem onClick={handleClose}> This Year </MenuItem>
                                        </Menu>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                {documents.map((item, index) => {
                                    let genre
                                    if (item.type === 1) genre = "新聞で学ぶ日本語"
                                    if (item.type === 2) genre = "Short stories Vol 3"
                                    if (item.type === 3) genre = "The Great Japanese (中上級)"
                                    if (item.type === 4) genre = "ドラえもんのどこでも日本語"

                                    let divider = (index === documents.length - 1) ? null : <Divider sx={{my: 1.5}}/>
                                    let ranking = (index % 2 === 0) ?
                                        <KeyboardArrowUpOutlinedIcon fontSize="small" color="inherit"/> :
                                        <KeyboardArrowDownOutlinedIcon fontSize="small" color="inherit"/>
                                    return (
                                        <Grid container direction="column">
                                            <Grid item>
                                                <Grid container alignItems="center" justifyContent="space-between">
                                                    <Grid item>
                                                        <Typography onClick={() => {
                                                            navigate('/dashboard/document/' + item.id)
                                                        }} variant="subtitle2" color="inherit"
                                                                    sx={{
                                                                        cursor: 'pointer',
                                                                        ':hover': {
                                                                            textDecoration: 'underline',
                                                                            color: theme.palette.error.dark
                                                                        },
                                                                    }
                                                                    }>
                                                            {item.title}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Grid container alignItems="center"
                                                              justifyContent="space-between">
                                                            <Grid item sx={{display: 'flex', alignItems: 'center'}}>
                                                                <Iconify icon="emojione:glowing-star"
                                                                         sx={{width: 16, height: 16, mr: 0.5}}/>
                                                                <Typography
                                                                    variant="caption">{fShortenNumber(item.rating)}</Typography>
                                                            </Grid>
                                                            <Grid item>
                                                                <Avatar
                                                                    variant="rounded"
                                                                    sx={{
                                                                        width: 16,
                                                                        height: 16,
                                                                        borderRadius: '5px',
                                                                        backgroundColor: (index % 2 === 0) ? theme.palette.success.dark : theme.palette.error.dark,
                                                                        color: theme.palette.grey[100],
                                                                        ml: 2
                                                                    }}
                                                                >
                                                                    {ranking}
                                                                </Avatar>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="subtitle2" sx={{color: 'success.dark'}}>
                                                    {genre}
                                                </Typography>
                                            </Grid>
                                            {divider}
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions sx={{p: 1.25, pt: 0, justifyContent: 'center'}}>
                        <Button size="small" disableElevation sx={{color: theme.palette.info.dark}} onClick={() => navigate('/dashboard/document')}>
                            View All
                            <ChevronRightOutlinedIcon/>
                        </Button>
                    </CardActions>
                </MainCard>
            )}
        </>
    );
};

PopularCard.propTypes = {
    isLoading: PropTypes.bool
};

export default PopularCard;
