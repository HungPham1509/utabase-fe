// material
import { Grid, Button, Container, Stack, Typography, Box } from '@mui/material';
// components
import { useEffect, useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import { BlogPostsSort, BlogPostsSearch } from '../sections/@dashboard/blog';
//
import DOCUMENTS from '../_mocks_/document';
import DocumentCard from '../sections/@dashboard/blog/DocumentCard';
import * as constant from "../_mocks_/constant"
// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'latest', label: '最新' },
  { value: 'popular', label: '視聴回数' },
  { value: 'rating', label: '人気' }
];

// ----------------------------------------------------------------------

export default function Documents() {
  const [filterDocuments, setFilterDocument] = useState(DOCUMENTS);
  const [type, setType] = useState(0);
  const [sortValue, setSortValue] = useState('latest');
  const [bookInfo, setBookInfo] = useState({})

  function handleFilterClick(type) {
    const tmp = DOCUMENTS.slice();
    if (type === 0) {
      setFilterDocument(tmp.sort((doc1, doc2) => sortByValue(doc1, doc2)));
      setBookInfo({})
    }
    else {
      setFilterDocument(
          tmp.filter((doc) => doc.type === type).sort((doc1, doc2) => sortByValue(doc1, doc2))
      );
      setBookInfo(constant.BOOK_INFO[type - 1])
    }

    setType(type);
  }

  function handleOnSort(event) {
    event.preventDefault();
    filterByValue(event.target.value);
    setSortValue(event.target.value);
  }

  function sortByValue(doc1, doc2) {
    if (sortValue === 'latest') return doc2.createdAt - doc1.createdAt;
    if (sortValue === 'rating') return doc2.rating - doc1.rating;
    if (sortValue === 'popular') return doc2.view - doc1.view;
    return doc2.createdAt - doc1.createdAt;
  }

  function filterByValue(value) {
    const tmp = filterDocuments.slice();
    if (value === 'latest')
      setFilterDocument(tmp.sort((doc1, doc2) => doc2.createdAt - doc1.createdAt));
    else if (value === 'rating')
      setFilterDocument(tmp.sort((doc1, doc2) => doc2.rating - doc1.rating));
    else if (value === 'popular')
      setFilterDocument(tmp.sort((doc1, doc2) => doc2.view - doc1.view));
  }

  useEffect(() => {
    setFilterDocument(DOCUMENTS);
  }, []);

  return (
    <PageWrapper title="Document">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            種類
          </Typography>
        </Stack>

        <Stack
          mb={5}
          direction={{ xs: 'column', sm: 'row', md: 'row', lg: 'row', xl: 'row' }}
          alignItems="center"
          justifyContent="space-between"
          spacing={2}
        >
          <BlogPostsSearch posts={DOCUMENTS} />
          <Stack direction={{xs: 'column', sm: 'row', md: 'row', lg: 'row', xl: 'row'}} alignItems="center" spacing={2} flexGrow={1} width="70%">
            <Button sx={{fontSize: "10px"}}
              onClick={() => handleFilterClick(0)}
              variant={type === 0 ? 'contained' : 'outlined'}
            >
              全て
            </Button>
            <Button
              sx={{fontSize: "12px"}}
              fullWidth="100%"
              onClick={() => handleFilterClick(1)}
              variant={type === 1 ? 'contained' : 'outlined'}
            >
              {constant.NEWS}
            </Button>
            <Button
              sx={{fontSize: "12px"}}
              fullWidth="100%"
              onClick={() => handleFilterClick(2)}
              variant={type === 2 ? 'contained' : 'outlined'}
            >
              {constant.SHORT_STORY_VOL_3}
            </Button>
            <Button
              sx={{fontSize: "12px"}}
              fullWidth="100%"
              onClick={() => handleFilterClick(3)}
              variant={type === 3 ? 'contained' : 'outlined'}
            >
              {constant.THE_GREATEST_JAPANESE}
            </Button>
            <Button
                sx={{fontSize: "12px"}}
                fullWidth="100%"
                onClick={() => handleFilterClick(4)}
                variant={type === 4 ? 'contained' : 'outlined'}
            >
              {constant.DOKOEMON}
            </Button>
          </Stack>
          <BlogPostsSort
            options={SORT_OPTIONS}
            currentValue={sortValue}
            onSort={(event) => handleOnSort(event)}
          />
        </Stack>
        {Object.keys(bookInfo).map(key =>
            <Typography key={key} variant="subtitle2" color="red" m={2}>
                {bookInfo[key]}
            </Typography>
        )}

        <Grid container spacing={3}>
          {filterDocuments.map((document, index) => (
            <DocumentCard key={document.id} document={document} index={index} />
          ))}
        </Grid>
      </Container>
    </PageWrapper>
  );
}
