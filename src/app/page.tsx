import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Stats from "@/components/custom/sales/stats"
import ChartOne from "@/components/Charts/ChartOne";
import ChartTwo from "@/components/Charts/ChartTwo";
import InvoicesTrend from "@/components/custom/sales/InvoicesTrend";
import PeriodSwitcher from "@/components/custom/shared/PeriodSwitcher";

export const metadata: Metadata = {
  title:
    "Next.js E-commerce Dashboard | TailAdmin - Next.js Dashboard Template",
  description: "This is Next.js Home for TailAdmin Dashboard Template",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <PeriodSwitcher/>
        <div className="py-4"></div>
        <Stats/>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <InvoicesTrend/>
      </div>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartTwo />

      </div>
      </DefaultLayout>
    </>
  );
}
