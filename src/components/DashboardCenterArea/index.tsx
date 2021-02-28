import { Box, Container, Grid, Paper } from "@material-ui/core";
import { Copyright, useStylesDashboard } from "../styles";
import clsx from 'clsx';


export default function DashboardCenterArea() {
    const classes = useStylesDashboard();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={3}>
                    {/* Chart */}
                    <Grid item xs={12} md={8} lg={9}>
                        <Paper className={fixedHeightPaper}>
                            Chart
                    </Paper>
                    </Grid>
                    {/* Recent Deposits */}
                    <Grid item xs={12} md={4} lg={3}>
                        <Paper className={fixedHeightPaper}>
                            Deposits
                    </Paper>
                    </Grid>
                    {/* Recent Orders */}
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            Orders
                    </Paper>
                    </Grid>
                </Grid>
                <Box pt={4}>
                    <Copyright />
                </Box>
            </Container>
        </main>
    )
}