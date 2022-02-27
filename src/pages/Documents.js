// material
import { Grid, Button, Container, Stack, Typography, Box } from '@mui/material';
// components
import { useEffect, useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import { BlogPostsSort, BlogPostsSearch } from '../sections/@dashboard/blog';
//
import DOCUMENTS from '../_mocks_/document';
import DocumentCard from '../sections/@dashboard/blog/DocumentCard';

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'latest', label: '最新' },
  { value: 'popular', label: '人気' },
  { value: 'oldest', label: '最古' }
];

// ----------------------------------------------------------------------

export default function Documents() {
  const [filterDocuments, setFilterDocument] = useState(DOCUMENTS);
  const [type, setType] = useState(0);
  const [sortValue, setSortValue] = useState('latest');

  function handleFilterClick(type) {
    const tmp = DOCUMENTS.slice();
    if (type === 0) setFilterDocument(tmp.sort((doc1, doc2) => sortByValue(doc1, doc2)));
    else
      setFilterDocument(
        tmp.filter((doc) => doc.type === type).sort((doc1, doc2) => sortByValue(doc1, doc2))
      );
    setType(type);
  }

  function handleOnSort(event) {
    event.preventDefault();
    filterByValue(event.target.value);
    setSortValue(event.target.value);
  }

  function sortByValue(doc1, doc2) {
    if (sortValue === 'latest') return doc2.createdAt - doc1.createdAt;
    if (sortValue === 'oldest') return doc1.createdAt - doc2.createdAt;
    if (sortValue === 'popular') return doc2.view - doc1.view;
    return doc2.createdAt - doc1.createdAt;
  }

  function filterByValue(value) {
    const tmp = filterDocuments.slice();
    if (value === 'latest')
      setFilterDocument(tmp.sort((doc1, doc2) => doc2.createdAt - doc1.createdAt));
    else if (value === 'oldest')
      setFilterDocument(tmp.sort((doc1, doc2) => doc1.createdAt - doc2.createdAt));
    else if (value === 'popular')
      setFilterDocument(tmp.sort((doc1, doc2) => doc2.view - doc1.view));
  }

  useEffect(() => {
    console.log(sortValue);
    setFilterDocument(DOCUMENTS);
  }, []);

  return (
    <PageWrapper title="Dashboard: Document | Minimal-UI">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            書類
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
          <Stack direction="row" alignItems="center" spacing={2} flexGrow={1} width="70%">
            <Button
              onClick={() => handleFilterClick(0)}
              variant={type === 0 ? 'contained' : 'outlined'}
            >
              全て
            </Button>
            <Button
              fullWidth="100%"
              onClick={() => handleFilterClick(1)}
              variant={type === 1 ? 'contained' : 'outlined'}
            >
              新聞で学ぶ日本語
            </Button>
            <Button
              fullWidth="100%"
              onClick={() => handleFilterClick(2)}
              variant={type === 2 ? 'contained' : 'outlined'}
            >
              Short stories Vol 3
            </Button>
            <Button
              fullWidth="100%"
              onClick={() => handleFilterClick(3)}
              variant={type === 3 ? 'contained' : 'outlined'}
            >
              The Great Japanese (中上級)
            </Button>
          </Stack>
          <BlogPostsSort
            options={SORT_OPTIONS}
            currentValue={sortValue}
            onSort={(event) => handleOnSort(event)}
          />
        </Stack>

        <Grid container spacing={3}>
          {filterDocuments.map((document, index) => (
            <DocumentCard key={document.id} document={document} index={index} />
          ))}
        </Grid>
      </Container>
    </PageWrapper>
  );
}
