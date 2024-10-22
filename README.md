# Target Management Dashboard

## Project Overview

- The **Target Management Dashboard** is a full-stack application built using **Next.js**, **TypeScript**, and **Tailwind CSS**. 
- It is designed to manage acquisition targets, providing a dashboard interface that includes a **bar chart** summarizing targets by pipeline status, and a **data table** for viewing and editing acquisition targets. 
- Users can filter targets by pipeline status, and the filtered data is reflected both in the chart and the table. The table also allows users to update the pipeline status of each target directly.

## Features

- **Responsive Dashboard**: Optimized for both desktop and mobile views.
- **Bar Chart**: Displays a summary of acquisition targets by pipeline status. 
- **Target Table**: Lists acquisition targets, grouped by pipeline status. 
- **Global Filter**: Filtering the pipeline status updates both the bar chart and the data table.
- **Dynamic Rendering**: The dashboard dynamically updates when the user applies filters or modifies the status of a target.

## Tech Stack

- **Next.js 14**
- **TypeScript**
- **Tailwind CSS**
- **recharts**
- **Mock Data**: Acquisition targets are stored in `data/targets.json`, which simulates a backend data source.

## Setup Instructions

### Prerequisites

Before setting up the project, ensure you have the following tools installed on your machine:

- **Node.js** (v14.x or higher)
- **npm** for package management

### Steps to Run the Project

1. **Clone the Repository**

   ```bash
   git clone https://github.com/krish4uu/target-management-dashboard.git
   cd target-management-dashboard
   ```

2. **Install Dependencies**

   Use `npm` to install the required dependencies:

   ```bash
   npm install

   ```

3. **Run the Development Server**

   Start the development server to view the dashboard in your browser:

   ```bash
   npm run dev

   ```

   The app will be available at [http://localhost:3000](http://localhost:3000).


### API Routes

- The data is fetched from the mock API route at `/api/targets`, which serves the acquisition target data from `data/targets.json`.

### Usage

- **Dashboard**: Navigate to the dashboard at [http://localhost:3000/dashboard](http://localhost:3000/dashboard) to view and manage acquisition targets.
- **Filtering**: Use the dropdown filter to filter the acquisition targets by pipeline status.
- **Edit Pipeline Status**: In the target table, select a new pipeline status from the dropdown to update a target, which updated the backend json data.

The UI needs further optimization to manage rerendering of updated data.

## Screen Shots

### Homepage
<img width="1440" alt="Homepage" src="https://github.com/user-attachments/assets/85bf4106-76b0-46b3-80a5-de7fa1535bea">


### Dashbaord
<img width="1440" alt="Dashboard" src="https://github.com/user-attachments/assets/4e5e7f6b-0aa0-456b-af13-ff41f310a2b8">

