export type Ticket = {
  id: string;
  status: "open" | "closed";
  title: string;
  generatedAt?: string;
};

/**
 * Mock API for persona-based support tickets shown in the Customer Info card.
 */
export async function getTicketsForPersona(
  personaLabel?: string
): Promise<Ticket[]> {
  switch (personaLabel) {
    case "Angry customer":
      return [
        {
          id: "TKT-4521",
          status: "open",
          title: "Billing dispute for recent invoice",
          generatedAt: "Mar 10, 2025",
        },
        {
          id: "TKT-4309",
          status: "closed",
          title: "Equipment breakdown during rental",
          generatedAt: "Mar 3, 2025",
        },
        {
          id: "TKT-4610",
          status: "open",
          title: "Escalated call with branch manager",
          generatedAt: "Mar 11, 2025",
        },
        {
          id: "TKT-4588",
          status: "closed",
          title: "Delivery delay complaint",
          generatedAt: "Feb 24, 2025",
        },
      ];
    case "Confused customer":
      return [
        {
          id: "TKT-3891",
          status: "open",
          title: "Clarification on rental coverage",
          generatedAt: "Mar 5, 2025",
        },
        {
          id: "TKT-3920",
          status: "closed",
          title: "Onboarding walkthrough for Total Control",
          generatedAt: "Mar 11, 2025",
        },
        {
          id: "TKT-3955",
          status: "closed",
          title: "Equipment reservation steps",
          generatedAt: "Feb 27, 2025",
        },
        {
          id: "TKT-3980",
          status: "closed",
          title: "Invoice breakdown request",
          generatedAt: "Feb 20, 2025",
        },
      ];
    case "Neutral customer":
      return [
        {
          id: "TKT-4105",
          status: "closed",
          title: "Standard reservation created for upcoming project",
          generatedAt: "Mar 12, 2025",
        },
        {
          id: "TKT-4122",
          status: "open",
          title: "Pending quote approval from estimator",
          generatedAt: "Mar 6, 2025",
        },
        {
          id: "TKT-4140",
          status: "closed",
          title: "Contract renewal inquiry",
          generatedAt: "Feb 28, 2025",
        },
        {
          id: "TKT-4165",
          status: "closed",
          title: "Delivery window change",
          generatedAt: "Feb 21, 2025",
        },
      ];
    case "Happy customer":
      return [
        {
          id: "TKT-5102",
          status: "closed",
          title: "Recent successful project support",
          generatedAt: "Mar 7, 2025",
        },
        {
          id: "TKT-5120",
          status: "closed",
          title: "Referral discount applied to new contract",
          generatedAt: "Mar 13, 2025",
        },
        {
          id: "TKT-5145",
          status: "closed",
          title: "Additional equipment quote",
          generatedAt: "Mar 1, 2025",
        },
        {
          id: "TKT-5170",
          status: "closed",
          title: "Total Control training follow-up",
          generatedAt: "Feb 22, 2025",
        },
      ];
    default:
      return [
        {
          id: "TKT-3001",
          status: "closed",
          title: "Onboarding call completed",
          generatedAt: "Mar 1, 2025",
        },
        {
          id: "TKT-3002",
          status: "closed",
          title: "Account support",
          generatedAt: "Feb 15, 2025",
        },
      ];
  }
}

