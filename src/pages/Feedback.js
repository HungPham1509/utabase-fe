import {Box, Container, Grid, Link, Typography} from '@mui/material';
import PageWrapper from '../components/PageWrapper'
import {useTheme} from "@mui/material/styles";
import {FeedbackForm} from "../sections/authentication/register";
import RecommendTable from "../components/RecommendTable";
import {withNamespaces} from "react-i18next";

function Feedback({t}) {
    const theme = useTheme()
    return (
        <PageWrapper title="Feedback">
            <Container>
                <Typography variant="h3" gutterBottom sx={{color: theme.palette.error.dark}}>
                    Recommend (お勧め)
                </Typography>
                <Typography variant="h6" ml={2} mb={2} gutterBottom>
                    {t('recommend')}
                </Typography>
                <RecommendTable />
                <Typography mt={5} variant="h3" gutterBottom sx={{color: theme.palette.error.dark}}>
                    Cooperation (協力)
                </Typography>
                <Typography variant="h6" ml={2} gutterBottom>
                    {t('recommend_2')}
                </Typography>
                <Grid container width='90%' spacing={3} sx={{
                    bgcolor: theme.palette.success.lighter,
                    color: theme.palette.success.darker,
                    borderRadius: 3,
                    margin: theme.spacing(2, 0, 3, 3),
                    padding: theme.spacing(1, 0, 2, 0)
                }}>
                    <Grid item xs={12} md={6} lg={6}>
                        <Typography variant="subtitle1" gutterBottom>
                            ● {t('jp_literature')}
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            ● {t('lyrics')}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <Typography variant="subtitle1" gutterBottom>
                            ● {t('assignment')}
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            ● {t('jp_news')}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <Typography variant="subtitle1" gutterBottom>
                            ● {t('free_style')}
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            ● {t('final_assignment')}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <Typography variant="subtitle1" gutterBottom>
                            ● {t('comic')}
                        </Typography>
                    </Grid>
                </Grid>
                <Typography variant="h6" ml={2} mb={4} gutterBottom>
                    🡺 {t('contact')}：utabase.ulis@gmail.com
                </Typography>
                <Typography variant="h3" gutterBottom sx={{color: theme.palette.error.dark}}>
                    Feedback ( フィードバック)
                </Typography>
                <Typography variant="h6" ml={2} mt={2} gutterBottom>
                    ●  {t('feedback_2')}
                </Typography>
                <Typography variant="subtitle1" ml={2} mt={2} gutterBottom>
                    リンク: <Link target="_blank" href="https://forms.gle/tXZwrmy9GTcuYvRXA" underline="hover">https://forms.gle/5NhFfL6wZ8bBE9L8A</Link>
                </Typography>
                <Typography variant="h6" ml={2} gutterBottom>
                    ● {t('feedback')}
                </Typography>
                <Box sx={{mt: 3, ml: 2}}>
                    <FeedbackForm />
                </Box>
            </Container>
        </PageWrapper>
    );
}

export default withNamespaces()(Feedback)