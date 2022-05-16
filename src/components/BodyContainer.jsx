import React from "react";
import putton from "../assets/putton.png";
import Star from "../assets/Star.png";
import downArrow from "../assets/downArrow.png";
import email from "../assets/email.png";

import Water from "../assets/Water.png";

import "../styles/puton.css";

export const BodyContainer = () => {
  return (
    <div className="main-BodyContainer-div">
      <div className="Container1-div">
        <div className="cont-text-1">
          <p className="container-text1">Weekly TSIT Distribution</p>
          <p className="cotainer-text2">1,890,344 TSIT</p>
        </div>
        <div className="Display-card">
          <div className="card">
            <img src={putton} alt="" className="puton_img" />
            <div className="cont-text-1">
              <p>Scam Report Reward</p>
              <p>New Scams reported last week</p>
            </div>
          </div>
          <div className="cont3">
            <p>12,586 TSIT</p>
          </div>
        </div>
        <div className="Display-card">
          <div className="card">
            <img src={Star} alt="" className="puton_img" />
            <div className="cont-text-1">
              <p>Mining Reward</p>
              <p>Reward for mining Scam</p>
            </div>
          </div>
          <div className="cont3">
            <p>859,888 TSIT</p>
          </div>
        </div>
        <div className="Display-card">
          <div className="card">
            <img src={Water} alt="" className="puton_img" />
            <div className="cont-text-1">
              <p>Mining Fees</p>
              <p>Fees for mining Scams</p>
            </div>
          </div>
          <div className="cont3">
            <p>89,596 TSIT</p>
          </div>
        </div>
      </div>
      <div className="container2-div">
        <div className="cont2_header_div">
          <div className="cont-text-1">
            <p className="container-text1">Top Scams</p>
            <p className="cotainer-text2">
              Here you can see top scamsof all time
            </p>
          </div>

          <button className="report_btn">New Report</button>
        </div>

        <table>
          <thead>
            <th>
              <div className="con1st-row"></div>
            </th>
            <th>
              <p>Scammer Name</p>
            </th>
            <th>
              <p>Scammer Email</p>
            </th>
            <th>
              <div className="table-div">
                <img src={downArrow} alt="" className="down-div" />
                <p>Date</p>
              </div>
            </th>
            <th>
              <p>Wallet Address</p>
            </th>
            <th>
              <p>Description</p>
            </th>
            <th>
              <p>Action</p>
            </th>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="con1st-row"></div>
              </td>
              <td><p className="cont-row4">adf</p></td>
              <td>
                <div className="table_row2">
                  <p className="mono">BmL0Asiz@asf.dfgd</p>
                  <p>(1696687387)</p>
                </div>
              </td>
              <td>
                <div className="table_row3">
                  <p>31/7/2021 15:11</p>
                  <p>Report Date</p>
                </div>
              </td>
              <td><p className="mono2">BWYO88O4NT</p></td>
              <td><p className="mono3">6ccmin31gu</p>
              </td>
              <td><img src={email} alt="" className="mono_img" /></td>
            </tr>
            <tr>
              <td>
                <div className="con1st-row"></div>
              </td>
              <td><p className="cont-row4">asdkfj akdfo d</p></td>
              <td>
                <div className="table_row2">
                  <p className="mono">BmL0Asiz@asf.dfgd</p>
                  <p>(2968435041)</p>
                </div>
              </td>
              <td>
                <div className="table_row3">
                  <p>31/7/2021 15:8</p>
                  <p>Report Date</p>
                </div>
              </td>
              <td><p className="mono2">BWYO88O4NT</p></td>
              <td><p className="mono3">xSqffFIUHj</p>
              </td>
              <td><img src={email} alt="" className="mono_img" /></td>
            </tr>
            <tr>
              <td>
                <div className="con1st-row"></div>
              </td>
              <td><p className="cont-row4">adf</p></td>
              <td>
                <div className="table_row2">
                  <p className="mono">BmL0Asiz@asf.dfgd</p>
                  <p>(5980902284)</p>
                </div>
              </td>
              <td>
                <div className="table_row3">
                  <p>31/7/2021 15:7</p>
                  <p>Report Date</p>
                </div>
              </td>
              <td><p className="mono2">BWYO88O4NT</p></td>
              <td><p className="mono3">6ccmin31gu</p>
              </td>
              <td><img src={email} alt="" className="mono_img" /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
