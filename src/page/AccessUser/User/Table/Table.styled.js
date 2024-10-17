import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

export const StyledTableCell = styled(TableCell)(({ theme, addBorder }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.color.primary,
    color: theme.color.whiteText,
		fontWeight: theme.fontWeights.l,
		fontSize: theme.fontSizes.s,
		lineHeight: theme.lineHeights.s,
		padding: 10,
  },
  [`&.${tableCellClasses.body}`]: {
		color: theme.color.main,
    fontWeight: theme.fontWeights.n,
		fontSize: theme.fontSizes.s,
		lineHeight: theme.lineHeights.s,
		padding: 10,
  },
	borderRight: addBorder ? `0.5px solid #C5C5C5` : 'none',
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: theme.color.tableRow,
  },
}));