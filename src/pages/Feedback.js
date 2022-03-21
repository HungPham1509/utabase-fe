import {Box, Container, Grid, Link, Typography} from '@mui/material';
import PageWrapper from '../components/PageWrapper'
import {useTheme} from "@mui/material/styles";
import {FeedbackForm} from "../sections/authentication/register";
import RecommendTable from "../components/RecommendTable";

export default function Feedback() {
    const theme = useTheme()
    return (
        <PageWrapper title="Feedback">
            <Container>
                <Typography variant="h3" gutterBottom sx={{color: theme.palette.error.dark}}>
                    Recommend (お勧め)
                </Typography>
                <Typography variant="h6" ml={2} mb={2} gutterBottom>
                    ● 読者が豊富な多読資料を持っているのを助けるために、Uta Baseウェブサイトに加えて、他のいくつかのウェブサイトを紹介したいと思います。
                </Typography>
                <RecommendTable />
                <Typography mt={5} variant="h3" gutterBottom sx={{color: theme.palette.error.dark}}>
                    Cooperation (協力)
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
                <Typography variant="h6" ml={2} mt={2} gutterBottom>
                    ●  私の卒業論文の実施と完成に役立つために、このウェブサイトを体験した後、以下の調査にご協力をよろしくお願いいたします。(Để giúp thực hiện và hoàn thiện khóa luận tốt nghiệp của mình, sau khi trải nghiệm website này, rất mong các bạn hợp tác làm khảo sát dưới đây!!!)
                </Typography>
                <Typography variant="subtitle1" ml={2} mt={2} gutterBottom>
                    リンク: <Link target="_blank" href="https://forms.gle/5NhFfL6wZ8bBE9L8A" underline="hover">https://forms.gle/5NhFfL6wZ8bBE9L8A</Link>
                </Typography>
                <Box sx={{mt: 3, ml: 2}}>
                    <FeedbackForm />
                </Box>
            </Container>
        </PageWrapper>
    );
}
