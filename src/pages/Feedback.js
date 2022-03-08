import {Box, Container, Grid, Typography} from '@mui/material';
import PageWrapper from '../components/PageWrapper';
import {useTheme} from "@mui/material/styles";
import {FeedbackForm} from "../sections/authentication/register";

export default function Feedback() {
    const theme = useTheme()
    return (
        <PageWrapper title="Feedback">
            <Container>
                <Typography variant="h3" gutterBottom sx={{color: theme.palette.error.dark}}>
                    Donate (寄付)
                </Typography>
                <Typography variant="h6" ml={2} gutterBottom>
                    ● 以下のトピックに関する資料がある場合は、Uta Baseをサポートしてください!!!
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
                            ● 日本文学
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            ● 歌詞
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <Typography variant="subtitle1" gutterBottom>
                            ● 研究論文
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            ● 日本ニュース
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <Typography variant="subtitle1" gutterBottom>
                            ● 随筆
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            ● 卒業論文
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <Typography variant="subtitle1" gutterBottom>
                            ● 絵本
                        </Typography>
                    </Grid>
                </Grid>
                <Typography variant="h6" ml={2} mb={4} gutterBottom>
                    🡺 メールですぐにご連絡ください：utabase.ulis@gmail.com
                </Typography>
                <Typography variant="h3" gutterBottom sx={{color: theme.palette.error.dark}}>
                    Feedback ( フィードバック)
                </Typography>
                <Typography variant="h6" ml={2} gutterBottom>
                    ● ご意見・ご質問・問い合わせがある方は、お気軽に以下のメールフォームよりご連絡ください。
                </Typography>
                <Box sx={{mt: 3, ml: 2}}>
                    <FeedbackForm />
                </Box>
            </Container>
        </PageWrapper>
    );
}
