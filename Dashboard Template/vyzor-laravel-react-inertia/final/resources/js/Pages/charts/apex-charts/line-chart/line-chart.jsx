
import { Fragment } from "react";
import LineChart1 from '../../../../shared/data/charts/apexcharts/linechartsdata1';
import MainLayout from "@/Layouts/layout";


const LineChart = () => {

  return (
    <Fragment>

      <LineChart1 />

    </Fragment>
  );
};
// Assign layout
LineChart.layout = (page) => <MainLayout>{page}</MainLayout>;
export default LineChart;






