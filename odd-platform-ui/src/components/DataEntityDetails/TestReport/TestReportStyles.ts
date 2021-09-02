import { Theme, createStyles, WithStyles } from '@material-ui/core';

export const styles = (theme: Theme) =>
  createStyles({
    container: {},
    testReportContainer: {
      margin: theme.spacing(0.25, 0, 4, 0),
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'nowrap',
    },
    testReport: {
      flexWrap: 'nowrap',
      '& > *': {
        marginRight: theme.spacing(5),
      },
    },
    testCount: {
      marginRight: theme.spacing(1),
      justifyContent: 'flex-end',
    },
    testReportItemContainer: {
      padding: 0,
      '& + $testReportItemContainer': { marginTop: theme.spacing(2) },
      '& > *': {
        padding: theme.spacing(0.75, 1),
      },
      '& > * + *': {
        borderTop: '1px solid',
        borderTopColor: '#EBECF0',
      },
    },
    testStatusItem: {
      marginLeft: theme.spacing(0.5),
    },
  });

export type StylesType = WithStyles<typeof styles>;