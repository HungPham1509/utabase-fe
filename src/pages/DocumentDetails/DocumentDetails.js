import { Box, Container, Grid, Typography } from '@mui/material';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import { Pagination, PaginationItem } from '@mui/lab';
import { ArrowBackIosNewRounded, ArrowForwardIosRounded } from '@mui/icons-material';
import PageWrapper from '../../components/PageWrapper';
import DOCUMENTS from '../../_mocks_/document';
import './DocumentDetails.css';
import LinkTest from '../../components/LinkTest';
import Keyword from '../../components/Keyword';
import Stopwatch from "../../components/Stopwatch";

export default function DocumentDetails() {
  const params = useParams();
  const documentId = parseInt(params.documentId, 10);
  const document = DOCUMENTS.find((doc) => doc.id === documentId);
  const [numPages, setNumPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  function onDocumentLoadSuccess({ numPages: nextNumPage }) {
    setNumPages(nextNumPage);
  }

  function onDocumentLoadFailed(error) {
    console.log(error);
  }

  const onPageChangeHandle = (event, value) => {
    setCurrentPage(value);
  };

  const options = {
    cMapUrl: 'cmaps/',
    cMapPacked: true
  };
  console.log(document);

  return (
    <PageWrapper title="Dashboard: Documents | Minimal-UI">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">{document.title}</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4} md={2}>
            <LinkTest url={document.testUrl} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Keyword description={document.description} />
          </Grid>
          <Stopwatch />
          <Grid item xs={12} md={12} lg={12}>
            <Document
              file={document.documentUrl}
              onLoadSuccess={(value) => onDocumentLoadSuccess(value)}
              onLoadError={() => onDocumentLoadFailed()}
              renderMode="svg"
              options={options}
            >
              <Page pageNumber={currentPage} />
              <Pagination
                count={numPages}
                color="primary"
                variant="outlined"
                shape="rounded"
                sx={{
                  position: 'absolute',
                  top: 15,
                  left: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
                renderItem={(item) => (
                  <PaginationItem
                    components={{ previous: ArrowBackIosNewRounded, next: ArrowForwardIosRounded }}
                    {...item}
                  />
                )}
                onChange={onPageChangeHandle}
              />
            </Document>
          </Grid>
        </Grid>
      </Container>
    </PageWrapper>
  );
}
