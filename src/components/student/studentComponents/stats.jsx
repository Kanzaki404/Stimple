import React from "react";

export default function Stats() {
  return (
    <div>
        <h1>Total Progress</h1>
      <div class="set-size charts-container">
        <div class="pie-wrapper progress-45 style-2">
          <span class="label">
            45<span class="smaller">%</span>
          </span>
          <div class="pie">
            <div class="left-side half-circle"></div>
            <div class="right-side half-circle"></div>
          </div>
          <div class="shadow"></div>
        </div>
      </div>
    </div>
  );
}
