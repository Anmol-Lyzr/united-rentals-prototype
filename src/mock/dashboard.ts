export type DashboardAgentSnapshot = {
  name: string;
  label: string;
  value: number;
};

/**
 * Mock API for the Dashboard \"ISR Co-Pilot snapshot\" agents.
 */
export async function getDashboardAgents(): Promise<DashboardAgentSnapshot[]> {
  return [
    {
      name: "ISR Voice Support Co-Pilot",
      label: "Primary call handling",
      value: 94,
    },
    {
      name: "Billing Assist Co-Pilot",
      label: "Invoices & disputes",
      value: 89,
    },
    {
      name: "Troubleshooting Co-Pilot",
      label: "Equipment issues",
      value: 92,
    },
  ];
}

