export type DemoIntegration = {
  name: string;
  category: "CRM" | "Communication" | "Voice" | "Helpdesk" | "Analytics";
  status: "Connected" | "Available";
};

const demoIntegrations: DemoIntegration[] = [
  {
    name: "Salesforce",
    category: "CRM",
    status: "Connected",
  },
  {
    name: "Slack",
    category: "Communication",
    status: "Connected",
  },
  {
    name: "Twilio",
    category: "Voice",
    status: "Available",
  },
  {
    name: "Zendesk",
    category: "Helpdesk",
    status: "Available",
  },
  {
    name: "HubSpot",
    category: "CRM",
    status: "Available",
  },
  {
    name: "Google Analytics",
    category: "Analytics",
    status: "Connected",
  },
];

/**
 * Mock API for integrations list.
 * Currently returns a static in-memory array, but is wrapped in a Promise
 * so it can be replaced with a real HTTP call later.
 */
export async function getIntegrations(): Promise<DemoIntegration[]> {
  return demoIntegrations;
}

