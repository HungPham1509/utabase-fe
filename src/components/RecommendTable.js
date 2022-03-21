import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Link, useTheme} from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.info.main,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(siteName, url) {
    return { siteName, url };
}

const rows = [
    createData('NPO 多言語多読', "https://tadoku.org"),
    createData('たどくのひろば', "http://tadoku.info"),
    createData('ツナグモノガタリー', "https://monogatary.com"),
    createData('青空文庫', "https://www.aozora.gr.jp"),
    createData('ベトナムニュース総合情報サイトVIETJO [ベトジョー]', "https://www.viet-jo.com"),
    createData('世界と日本の童話・昔話集 - 福娘童話集', "http://hukumusume.com/douwa"),
    createData('News in Slow Japanese', "https://newsinslowjapanese.com"),
    createData('あかね的日本語教室 – 日本語や日本文化について書きます', "https://akanesenseijp.com")
];

export default function RecommendTable() {
    const theme = useTheme()
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>サイト名</StyledTableCell>
                        <StyledTableCell>リンク</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.siteName}
                            </StyledTableCell>
                            <StyledTableCell>
                                <Link target="_blank" href={row.url} underline="hover" sx={{color: theme.palette.info.main, cursor: "pointer"}}>
                                    {row.url}
                                </Link>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
