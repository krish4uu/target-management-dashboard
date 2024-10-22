export interface Target {
    id: number;
    name: string;
    description: string;
    pipelineStatus: 'Passed' | 'Cold' | 'Active' | 'Hot' | 'Closed' | null;
    markets: string[];
    lastUpdated: string;
  }

  export interface TargetTableProps {
    filter: string;
  }

  export interface BarChartData {
    status: string;
    count: number;
  }
  
  export interface BarChartProps {
    filter: string;
  }
  