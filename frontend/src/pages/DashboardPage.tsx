import React from "react";
import { FiUsers, FiCheckSquare, FiDollarSign } from "react-icons/fi";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer } from
"recharts";
import Card from "../components/Card";

const metricsData = [
{
  title: "Total de Usuários",
  value: "1,234",
  icon: FiUsers,
  color: "text-blue-600 dark:text-blue-400"
},
{
  title: "Pedidos Pendentes",
  value: "56",
  icon: FiCheckSquare,
  color: "text-yellow-600 dark:text-yellow-400"
},
{
  title: "Receita Mensal",
  value: "R$ 15.000,00",
  icon: FiDollarSign,
  color: "text-green-600 dark:text-green-400"
}];


const chartData = [
{ month: "Jan", vendas: 4000 },
{ month: "Fev", vendas: 3000 },
{ month: "Mar", vendas: 5000 },
{ month: "Abr", vendas: 4500 },
{ month: "Mai", vendas: 6000 },
{ month: "Jun", vendas: 5500 }];


export default function DashboardPage() {
  return (
    <div className="space-y-8" data-oid="852nrr.">
      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-oid="w13vkd7">
        {metricsData.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <Card key={index} className="p-6" data-oid="9-z8-xr">
              <div
                className="flex items-center justify-between"
                data-oid=".m30t0o">

                <div data-oid="rbn:jkg">
                  <p
                    className="text-sm font-medium text-gray-600 dark:text-gray-400"
                    data-oid="f.1ry.x">

                    {metric.title}
                  </p>
                  <p
                    className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-2"
                    data-oid="ebz5d8_">

                    {metric.value}
                  </p>
                </div>
                <div
                  className={`p-3 rounded-full bg-gray-100 dark:bg-gray-700 ${metric.color}`}
                  data-oid="y5xk_7r">

                  <Icon size={24} data-oid="ms16ntk" />
                </div>
              </div>
            </Card>);

        })}
      </div>

      {/* Chart */}
      <Card title="Vendas dos Últimos 6 Meses" data-oid="lt:hj08">
        <div className="h-80" data-oid="185-754">
          <ResponsiveContainer width="100%" height="100%" data-oid="9tmv_rg">
            <BarChart data={chartData} data-oid="pltmke8">
              <CartesianGrid
                strokeDasharray="3 3"
                className="opacity-30"
                data-oid="8y0mhdj" />

              <XAxis
                dataKey="month"
                className="text-gray-600 dark:text-gray-400"
                data-oid="f7dgt2f" />


              <YAxis
                className="text-gray-600 dark:text-gray-400"
                data-oid="1mh9_0k" />

              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--background)",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  color: "var(--foreground)"
                }}
                data-oid="p1t3xzi" />


              <Bar
                dataKey="vendas"
                fill="#3B82F6"
                radius={[4, 4, 0, 0]}
                data-oid="e4z6xhl" />

            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>);

}