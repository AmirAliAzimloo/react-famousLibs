import React from "react";

import "./App.css";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function App() {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const barData = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
    },
  ];

  return (
    <div className="u-row u-row-md">
      <aside className="aside-right">
        <span className="menu-aside">
          <i className="fa-solid fa-bars"></i>
        </span>

        <div className="aside-right-wrapper">
          <nav className="navbar-logo">
            <a href="#" className="navbar-link">
              <img src="images/myirancell.png" alt="site logo" />
              <p className="navbar-name">ایرانسل من</p>
            </a>
          </nav>

          <div className="search-box">
            <input type="text" name="" id="" placeholder="جستجو کنید ..." />
            <span>
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
          </div>

          <div className="wrapper-list">
            <ul className="list">
              <li className="list-item active">
                <span>
                  <i className="fa-solid fa-house"></i>
                </span>
                <a href="index.html" className="">
                  {" "}
                  صفحه اصلی{" "}
                </a>
              </li>
            </ul>

            <ul className="list">
              <p className="list-titel">سرویس ها</p>
              <li className="list-item">
                <span>
                  <i className="fa-solid fa-chart-pie"></i>
                </span>
                <a href="" className="">
                  {" "}
                  خرید های من{" "}
                </a>
              </li>
              <li className="list-item">
                <span>
                  <i className="fa-solid fa-chart-column"></i>
                </span>

                <a href="" className="">
                  {" "}
                  کارکرد و فروش{" "}
                </a>
              </li>
              <li className="list-item">
                <span>
                  <i className="fa-solid fa-bell-concierge"></i>
                </span>
                <a href="" className="">
                  {" "}
                  خدمات{" "}
                </a>
              </li>
            </ul>

            <ul className="list">
              <p className="list-titel">مدیریت</p>
              <li className="list-item">
                <span>
                  <i className="fa-solid fa-list-check"></i>
                </span>
                <a href="" className="">
                  {" "}
                  مدیریت خدمات{" "}
                </a>
              </li>
              <li className="list-item">
                <span>
                  <i className="fa-solid fa-sim-card"></i>
                </span>
                <a href="" className="">
                  {" "}
                  مدیریت سیمکارت{" "}
                </a>
              </li>
            </ul>

            <ul className="list">
              <p className="">مدیریت</p>
              <li className="list-item">
                <span>
                  <i className="fa-solid fa-circle-question"></i>
                </span>
                <a href="" className="">
                  {" "}
                  سوالات متداول{" "}
                </a>
              </li>
              <li className="list-item">
                <span>
                  <i className="fa-solid fa-location-dot"></i>
                </span>
                <a href="" className="">
                  {" "}
                  ارتباط با ما{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </aside>

      <main className="main">
        <div className="main-center">
          <p className="titel-chart">نمودار میزان مصرف کل</p>
          <div className="chart-wrappers">
            <div className="line-chart-wrapper">
              <AreaChart
                width={730}
                height={250}
                data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#fdc816" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#fdc816" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" dy={6} />
                <YAxis dx={-40} />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="pv"
                  stroke="#fdc816"
                  fillOpacity={1}
                  fill="#faf1c8"
                />
              </AreaChart>
            </div>
            <div className="bar-pie-chart-wrapper">
              <div>
                <BarChart width={730} height={250} data={barData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" dy={10} />
                  <YAxis dx={-40} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="pv" fill="#fdc816" />
                  <Bar dataKey="uv" fill="#faf1c8" />
                </BarChart>
              </div>
            </div>
          </div>
        </div>
      </main>

      <aside className="aside-left">
        <div className="user-info">
          <div className="">
            <img src="images/profile.jpg" alt="user img" />
          </div>
          <p className="user-name">
            <span>سلام !</span>
            <span>مهدی ایلخانی نسب</span>
            <span className="">09901394741</span>
          </p>
        </div>

        <div className="user-sim">
          <h2 className="">شارژ باقی مانده سیمکارت</h2>
          <div className="progress-wrapper">
            <div className="radialProgressBar progress-10">
              <div className="overlay">۳۰۰۰ تومان</div>
            </div>
          </div>
          <button className="btn btn-yellow">سیم کارتت رو شارژ کن</button>
          <div className="">
            <p className="">خدمات فعال</p>

            <ul className="service-active">
              <li>
                <span>
                  <i className="icon fa-regular fa-envelope"></i>
                </span>
                <h3 className="">
                  <span>بسته پیامک هفتگی</span>
                  <span>تا تاریخ 31 مهر 1401</span>
                </h3>
              </li>

              <li>
                <span>
                  <i className="icon fa-solid fa-wifi"></i>
                </span>
                <h3 className="">
                  <span>بسته پیامک هفتگی</span>
                  <span>تا تاریخ 31 مهر 1401</span>
                </h3>
              </li>
            </ul>
          </div>
        </div>

        <div className="download-app">
          <h3 className="">اپلیکیشن مارو دانلود کن!</h3>
          <img src="images/myirancell.png" alt="logo site" />
        </div>
      </aside>
    </div>
  );
}

export default App;
