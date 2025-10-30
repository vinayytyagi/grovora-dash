"use client"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js'
import { Line, Bar } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

const responsiveOptions = (maintainAspect = true, legendDisplay = false) => ({
  responsive: true,
  maintainAspectRatio: maintainAspect,
  plugins: {
    legend: {
      display: legendDisplay,
      position: 'bottom',
      labels: {
        usePointStyle: true,
        pointStyle: 'circle',
        boxWidth: 8,
        padding: 20,
        color: '#4B5563',
        font: {
          size: 12,
        }
      }
    },
    tooltip: {
      mode: 'index',
      intersect: false,
      backgroundColor: '#fff',
      titleColor: '#333',
      bodyColor: '#666',
      borderColor: '#ddd',
      borderWidth: 1,
      padding: 10,
      cornerRadius: 8,
    },
  },
  interaction: {
    mode: 'nearest',
    axis: 'x',
    intersect: false,
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: { color: '#7a869a', font: { size: 12 } },
      border: { display: false },
    },
    y: {
      grid: { color: '#eef2f6' },
      ticks: { color: '#7a869a', font: { size: 12 } },
      border: { display: false },
    },
  },
})

const LegendItem = ({ color, label }) => (
    <div className="flex items-center gap-2">
        <div className={`w-3 h-3 rounded-full ${color}`}></div>
        <span className="text-xs text-gray-600">{label}</span>
    </div>
);


export function VisitorLine() {
  const labels = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const data = {
    labels,
    datasets: [
      {
        label: 'Loyal Customers',
        data: [150, 220, 180, 250, 230, 300, 280, 350, 320, 380, 340, 400],
        borderColor: '#8B5CF6',
        fill: false,
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 2,
      },
      {
        label: 'New Customers',
        data: [180, 160, 200, 190, 240, 210, 270, 250, 300, 280, 330, 310],
        borderColor: '#EF4444',
        fill: false,
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 2,
      },
      {
        label: 'Unique Customers',
        data: [120, 140, 160, 130, 170, 150, 190, 210, 180, 220, 200, 240],
        borderColor: '#22C55E',
        fill: false,
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 2,
      },
    ],
  }
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm h-full flex flex-col">
      <h3 className="text-lg font-semibold text-slate-800 mb-2">Visitor Insights</h3>
      <div className="flex-grow w-full h-56">
        <Line data={data} options={responsiveOptions(false, false)} />
      </div>
       <div className="flex justify-center gap-4 mt-2">
            <LegendItem color="bg-purple-500" label="Loyal Customers" />
            <LegendItem color="bg-red-500" label="New Customers" />
            <LegendItem color="bg-green-500" label="Unique Customers" />
        </div>
    </div>
  )
}

export function RevenueBar() {
  const labels = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  const data = {
    labels,
    datasets: [
      {
        label: 'Online Sales',
        data: [12000, 19000, 14000, 17000, 21000, 18000, 23000],
        backgroundColor: '#3B82F6',
        borderRadius: 6,
        barPercentage: 0.6,
        categoryPercentage: 0.7,
      },
      {
        label: 'Offline Sales',
        data: [8000, 11000, 9000, 12000, 15000, 10000, 16000],
        backgroundColor: '#A78BFA',
        borderRadius: 6,
        barPercentage: 0.6,
        categoryPercentage: 0.7,
      },
    ],
  }
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm h-full">
      <h3 className="text-lg font-semibold text-slate-800 mb-3">Total Revenue</h3>
      <div className="w-full h-52">
        <Bar data={data} options={responsiveOptions(false, true)} />
      </div>
    </div>
  )
}

export function CustomerSatisfaction() {
  const labels = ['Week 1','Week 2','Week 3','Week 4','Week 5'];
  const data = {
    labels,
    datasets: [
      {
        label: 'Last Month',
        data: [3100, 2800, 3400, 3200, 3800],
        borderColor: '#38bdf8',
        backgroundColor: 'rgba(56,189,248,0.1)',
        fill: true,
        tension: 0.4,
        pointRadius: 2,
        pointBackgroundColor: '#38bdf8',
      },
      {
        label: 'This Month',
        data: [3500, 3200, 3800, 3600, 4504],
        borderColor: '#34d399',
        backgroundColor: 'rgba(52,211,153,0.1)',
        fill: true,
        tension: 0.4,
        pointRadius: 2,
        pointBackgroundColor: '#34d399',
      },
    ],
  }
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm h-full">
      <h3 className="text-lg font-semibold text-slate-800 mb-3">Customer Satisfaction</h3>
      <div className="w-full h-44">
        <Line data={data} options={responsiveOptions(false, false)} />
      </div>
      <div className="mt-3 flex justify-between">
        <div className="text-center">
            <div className="text-xs text-slate-500">Last Month</div>
            <div className="text-lg font-bold text-slate-800">$3,004</div>
        </div>
        <div className="text-center">
            <div className="text-xs text-slate-500">This Month</div>
            <div className="text-lg font-bold text-slate-800">$4,504</div>
        </div>
      </div>
    </div>
  )
}

export function TargetVsReality() {
  const labels = ['Feb','Mar','Apr','May','Jun','Jul'];
  const data = {
    labels,
    datasets: [
      {
        label: 'Reality Sales',
        data: [7500, 8200, 9500, 11000, 10500, 13000],
        backgroundColor: '#60A5FA',
        borderRadius: 4,
        barPercentage: 0.5,
        categoryPercentage: 0.6,
      },
      {
        label: 'Target Sales',
        data: [8000, 10000, 9000, 10000, 12000, 12122],
        backgroundColor: '#EAB308',
        borderRadius: 4,
        barPercentage: 0.5,
        categoryPercentage: 0.6,
      },
    ],
  }
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm h-full">
      <h3 className="text-lg font-semibold text-slate-800 mb-3">Target vs Reality</h3>
      <div className="w-full h-44">
        <Bar data={data} options={responsiveOptions(false, false)} />
      </div>
       <div className="mt-3 flex justify-between items-center">
         <div className="flex items-center gap-2 text-sm">
            <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
            <div>
                <div className="text-xs text-gray-500">Reality Sales</div>
                <div className="font-bold">8,823</div>
            </div>
        </div>
        <div className="flex items-center gap-2 text-sm">
            <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
             <div>
                <div className="text-xs text-gray-500">Target Sales</div>
                <div className="font-bold">12,122</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export function VolumeServices() {
  const data = {
    labels: ['Volume', 'Services'],
    datasets: [
      {
        label: 'Count',
        data: [1135, 635],
        backgroundColor: ['#3B82F6', '#14B8A6'],
        borderRadius: 6,
        barPercentage: 0.4,
        categoryPercentage: 0.5,
      },
    ],
  }
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm h-full">
      <h3 className="text-lg font-semibold text-slate-800 mb-3">Volume vs Service Level</h3>
      <div className="w-full h-44">
        <Bar data={data} options={responsiveOptions(false, false)} />
      </div>
      <div className="mt-2 flex justify-center gap-6">
        <div className="text-center">
            <div className="text-xs text-slate-500">Volume</div>
            <div className="text-lg font-bold text-slate-800">1,135</div>
        </div>
        <div className="text-center">
            <div className="text-xs text-slate-500">Services</div>
            <div className="text-lg font-bold text-slate-800">635</div>
        </div>
      </div>
    </div>
  )
}