import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import PageWrapper from '../components/PageWrapper';

export default function Feedback() {
  return (
    <PageWrapper title="Dashboard: Document | Minimal-UI">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            フィードバック
          </Typography>
        </Stack>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} lg={12}>
            <Typography variant="h6" gutterBottom>
              ● 以下のトピックに関する資料がある場合は、Uta Baseをサポートしてください!!!
            </Typography>
          </Grid>
          <Grid item xs={6} md={6} lg={6}>
            <Box
              sx={{
                bgcolor: '#2196F3',
                color: '#fff',
                borderRadius: 2,
                height: 150,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Typography variant="subtitle1" gutterBottom>
                ● 日本文学
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                ● 歌詞
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={6} lg={6}>
            <Box
              sx={{
                bgcolor: '#00C853',
                color: '#fff',
                borderRadius: 2,
                height: 150,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Typography variant="subtitle1" gutterBottom>
                ● 研究論文
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                ● 日本ニュース
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={6} lg={6}>
            <Box
              sx={{
                bgcolor: '#D84315',
                color: '#fff',
                borderRadius: 2,
                height: 150,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Typography variant="subtitle1" gutterBottom>
                ● 随筆
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                ● 卒業論文
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={6} lg={6}>
            <Box
              sx={{
                bgcolor: '#FFC107',
                color: '#fff',
                borderRadius: 2,
                height: 150,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Typography variant="subtitle1" gutterBottom>
                ● 絵本
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Typography variant="h6" gutterBottom>
              🡺 メールですぐにご連絡ください：utabase.ulis@gmail.com
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Typography variant="h6" gutterBottom>
              ● このサイトに満足していますか？評価をお願いします。
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Typography variant="h6" gutterBottom>
              ● ご意見・ご質問・問い合わせがある方は、お気軽にご連絡ください。
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Typography variant="h6" gutterBottom>
              - ハノイ国家大学・外国語大学・日本言語文化学部
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Typography variant="h5" gutterBottom>
              - utabase.ulis@gmail.com
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </PageWrapper>
  );
}
