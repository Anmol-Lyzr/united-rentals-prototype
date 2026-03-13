export type Ticket = {
  id: string;
  status: "open" | "closed";
  title: string;
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
        },
        {
          id: "TKT-4309",
          status: "closed",
          title: "Equipment breakdown during rental",
        },
      ];
    case "Confused customer":
      return [
        {
          id: "TKT-3891",
          status: "open",
          title: "Clarification on rental coverage",
        },
      ];
    case "Happy customer":
      return [
        {
          id: "TKT-5102",
          status: "closed",
          title: "Recent successful project support",
        },
      ];
    default:
      return [
        {
          id: "TKT-3001",
          status: "closed",
          title: "Onboarding call completed",
        },
      ];
  }
}

