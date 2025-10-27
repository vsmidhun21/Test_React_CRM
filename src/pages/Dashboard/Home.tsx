// import EcommerceMetrics from "../../components/ecommerce/EcommerceMetrics";
// import MonthlySalesChart from "../../components/ecommerce/MonthlySalesChart";
// import StatisticsChart from "../../components/ecommerce/StatisticsChart";
// import MonthlyTarget from "../../components/ecommerce/MonthlyTarget";
// import RecentOrders from "../../components/ecommerce/RecentOrders";
// import DemographicCard from "../../components/ecommerce/DemographicCard";
import PageMeta from "../../components/common/PageMeta";
import ProfileCard from "../../components/dashboard/ProfileCard";
import Counts from "../../components/dashboard/ProjectCounts";
import SkillSetCharts from "../../components/dashboard/SkillSetChart";
import Targets from "../../components/dashboard/Targets";

export default function Home() {
  return (
    <>
      <PageMeta
        title="Midhun’s Developer CRM"
        description="This is Midhun’s Developer CRM"
      />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6 xl:col-span-8">
          <ProfileCard />
        </div>

        <div className="col-span-12 space-y-6 xl:col-span-4">
          <Counts />
        </div>

        <div className="col-span-12 space-y-6 xl:col-span-12">
          <SkillSetCharts />
        </div>


        <div className="col-span-12 xl:col-span-5">
          <Targets />
        </div>

        {/* <div className="col-span-12">
          <StatisticsChart />
        </div> */}

        {/* <div className="col-span-12 xl:col-span-5">
          <DemographicCard />
        </div> */}

        {/* <div className="col-span-12 xl:col-span-7">
          <RecentOrders />
        </div> */}
      </div>
    </>
  );
}
