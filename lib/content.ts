import {
  Activity,
  Award,
  BarChart2,
  Bell,
  FileText,
  FolderSync,
  Globe,
  Home,
  LayoutDashboard,
  MapPin,
  MessageCircle,
  Package,
  Truck,
  Upload,
  UserCircle,
  Users
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

export const navLinks = [
  { href: "/", label: "Overview" },
  { href: "/climaone-v1/", label: "ClimaOne® V1" },
  { href: "/climaone-v2/", label: "ClimaOne® V2" },
  { href: "/ocr-epr/", label: "OCR EPR" },
  { href: "/ocr-bizcard/", label: "OCR Biz Card" },
  { href: "/route-optimizer/", label: "Route Optimizer" },
  { href: "/chatbot/", label: "Chatbot" },
  { href: "/drive-automation/", label: "Drive Automation" },
  { href: "/contact/", label: "Help" }
] as const;

export type RoleItem = {
  icon: LucideIcon;
  name: string;
  description: string;
};

export type CapabilityItem = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type JourneyItem = {
  number: string;
  title: string;
  description: string;
  capturedItems: string[];
  icon: LucideIcon;
};

export type AutomationListItem = {
  number: string;
  title: string;
  description: string;
};

export type OutcomeItem = {
  title: string;
  description: string;
};

export type BaseToolPage = {
  name: string;
  href: string;
  productEyebrow: string;
  heroTitle: {
    before: string;
    highlight?: string;
    after?: string;
  };
  subheading: string;
  primaryAction: {
    label: string;
    href: string;
    tone: "primary" | "ghostPrimary";
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  statusBadge?: {
    label: string;
    tone: "live" | "comingSoon";
  };
  accessNote: string;
  rolesEyebrow: string;
  rolesTitle: string;
  roles: RoleItem[];
  helpTitle: string;
};

export const overviewTools = [
  {
    number: "01",
    name: "ClimaOne® V1",
    tagline:
      "Manage EPR compliance, track plastic credits, and stay CPCB-integrated in real time. One platform for brands, processors, and collectors.",
    status: "Live",
    statusTone: "live" as const,
    href: "/climaone-v1/",
    ctaLabel: "Open tool",
    mockup: "v1" as const,
    category: "EPR Compliance",
    icon: LayoutDashboard
  },
  {
    number: "02",
    name: "ClimaOne® V2",
    tagline:
      "Track recycled plastic bag-by-bag from collection to finished flakes, with live dashboards for collection partners, recycling plants, and buyers.",
    status: "Live",
    statusTone: "live" as const,
    href: "/climaone-v2/",
    ctaLabel: "Open tool",
    mockup: "v2" as const,
    category: "EPR Compliance",
    icon: Package
  },
  {
    number: "03",
    name: "OCR for EPR",
    tagline:
      "Purpose-built to digitize shipment paperwork by extracting critical data and feeding it directly into your MIS for faster EPR reporting and operational workflows.",
    status: "Live",
    statusTone: "live" as const,
    href: "/ocr-epr/",
    ctaLabel: "Open tool",
    mockup: "ocrEpr" as const,
    category: "Document OCR",
    icon: FileText
  },
  {
    number: "04",
    name: "OCR for Business Cards",
    tagline:
      "Digitise business cards into a searchable contact database, eliminating manual data entry and making follow-ups effortless.",
    status: "Live",
    statusTone: "live" as const,
    href: "/ocr-bizcard/",
    ctaLabel: "Open tool",
    mockup: "ocrBiz" as const,
    category: "Document OCR",
    icon: UserCircle
  },
  {
    number: "05",
    name: "Route Optimizer",
    tagline:
      "Plan faster, smarter collection routes that reduce travel time, fuel costs, and manual route planning.",
    status: "Live",
    statusTone: "live" as const,
    href: "/route-optimizer/",
    ctaLabel: "Open tool",
    mockup: "route" as const,
    category: "Logistics",
    icon: MapPin
  },
  {
    number: "06",
    name: "EPR Chatbot",
    tagline:
      "Get instant, reliable answers to EPR compliance questions, reducing research time and helping you make informed decisions faster.",
    status: "Live",
    statusTone: "live" as const,
    href: "/chatbot/",
    ctaLabel: "Open tool",
    mockup: "chat" as const,
    category: "AI Assistant",
    icon: MessageCircle
  },
  {
    number: "07",
    name: "Drive Automation",
    tagline:
      "Simplify Google Drive administration by auditing file access, transferring ownership, and managing shared permissions securely at scale.",
    status: "Live - HR team",
    statusTone: "live" as const,
    href: "/drive-automation/",
    ctaLabel: "Open tool",
    mockup: "drive" as const,
    category: "Automation",
    icon: FolderSync
  }
];

export type OverviewTool = (typeof overviewTools)[number];

// ── OCR for EPR ──────────────────────────────────────────────────────────────

const ocrEprRoles: RoleItem[] = [
  {
    icon: LayoutDashboard,
    name: "Compliance Manager",
    description: "Upload and validate EPR documents for CPCB filings and audit trails"
  },
  {
    icon: Activity,
    name: "Data Entry Operator",
    description: "Process incoming documents, correct OCR output, and export structured data"
  },
  {
    icon: Users,
    name: "Admin",
    description: "Configure document templates, manage team access, and review processing history"
  },
  {
    icon: Truck,
    name: "Operations",
    description: "Upload weightbridge slips, collection receipts, and manifests from the field"
  }
];

const ocrEprSteps: JourneyItem[] = [
  {
    number: "01",
    title: "Upload your document",
    description:
      "Drag and drop or photograph any EPR compliance document, waste manifests, CPCB forms, weightbridge slips, or collection receipts.",
    capturedItems: ["Accepted: JPG, PNG, PDF", "Batch upload supported"],
    icon: Upload
  },
  {
    number: "02",
    title: "OCR extracts the data",
    description:
      "The tool reads the document and pulls out all key fields, dates, quantities, vehicle numbers, partner names, instantly.",
    capturedItems: ["Quantity (kg / MT)", "Date, vehicle number, partner name"],
    icon: FileText
  },
  {
    number: "03",
    title: "Review and correct",
    description:
      "Check the extracted output side-by-side with the original. Fix any misread fields before saving, takes seconds, not minutes.",
    capturedItems: ["Highlighted low-confidence fields", "Original image alongside extracted data"],
    icon: Activity
  },
  {
    number: "04",
    title: "Export or save",
    description:
      "Download as CSV or Excel, or push the structured data directly to ClimaOne® for compliance reporting and record keeping.",
    capturedItems: ["Export to CSV / Excel", "Sync to ClimaOne®"],
    icon: Bell
  }
];

// ── OCR for Business Cards ────────────────────────────────────────────────────

const ocrBizcardRoles: RoleItem[] = [
  {
    icon: Users,
    name: "Account Manager",
    description: "Scan cards from brand partners and recyclers straight into your contact directory"
  },
  {
    icon: MapPin,
    name: "Field Staff",
    description: "Capture collector and aggregator contacts on-site without typing a single digit"
  },
  {
    icon: LayoutDashboard,
    name: "Admin",
    description: "Review, merge, and export the team's growing partner contact database"
  },
  {
    icon: Activity,
    name: "Sales Team",
    description:
      "Build your partner pipeline faster by digitising every card from events and site visits"
  }
];

const ocrBizcardSteps: JourneyItem[] = [
  {
    number: "01",
    title: "Photograph the card",
    description:
      "Use your phone camera or upload an existing photo of any business card, from partners, recyclers, collectors, or event contacts.",
    capturedItems: ["JPG or PNG", "Works with worn or hand-written cards"],
    icon: Upload
  },
  {
    number: "02",
    title: "Extract contact details",
    description:
      "The OCR engine reads the card and pulls out name, phone, email, company, job title, and address automatically.",
    capturedItems: ["Name, title, company", "Phone, email, address"],
    icon: FileText
  },
  {
    number: "03",
    title: "Review and edit",
    description:
      "Check the extracted fields against the original card. Edit anything that was misread before saving.",
    capturedItems: ["Side-by-side card view", "Quick inline edit"],
    icon: Activity
  },
  {
    number: "04",
    title: "Save to directory",
    description:
      "Save the contact to your team's shared directory. Export as CSV or VCard to import into your phone or CRM.",
    capturedItems: ["Export as CSV or VCard", "Shared team directory"],
    icon: Bell
  }
];

// ── Route Optimizer ───────────────────────────────────────────────────────────

const routeRoles: RoleItem[] = [
  {
    icon: LayoutDashboard,
    name: "Logistics Manager",
    description: "Plan optimised collection runs for the day and monitor route progress in real time"
  },
  {
    icon: Activity,
    name: "Field Supervisor",
    description: "Assign routes to drivers and track completion of each pickup point"
  },
  {
    icon: Truck,
    name: "Driver / Collector",
    description: "Follow a clear, turn-by-turn route with all pickup details and contact numbers"
  },
  {
    icon: Users,
    name: "Operations",
    description: "Review route efficiency, coverage gaps, and fuel usage across the network"
  }
];

const routeSteps: JourneyItem[] = [
  {
    number: "01",
    title: "Add collection points",
    description:
      "Enter or import the list of pickup locations for the day, addresses, contact names, and expected quantities.",
    capturedItems: ["Address or GPS coordinates", "Contact name and expected weight"],
    icon: Upload
  },
  {
    number: "02",
    title: "Set vehicle constraints",
    description:
      "Specify the vehicle capacity, available hours, and starting depot so the optimizer can generate a feasible route.",
    capturedItems: ["Vehicle capacity (kg / MT)", "Start location and time window"],
    icon: FileText
  },
  {
    number: "03",
    title: "Generate optimised route",
    description:
      "The optimizer calculates the most efficient sequence and path across all pickup points, minimising travel time and fuel.",
    capturedItems: ["Optimal pickup sequence", "Estimated distance and time"],
    icon: Activity
  },
  {
    number: "04",
    title: "Export and share",
    description:
      "Send the finalised route to the driver via SMS or WhatsApp, or export as a Google Maps link they can open instantly.",
    capturedItems: ["Google Maps link", "SMS / WhatsApp share"],
    icon: Bell
  }
];

// ── Chatbot ───────────────────────────────────────────────────────────────────

const chatbotRoles: RoleItem[] = [
  {
    icon: LayoutDashboard,
    name: "Compliance Manager",
    description:
      "Get instant answers on CPCB filing requirements, deadlines, and documentation without waiting for a call"
  },
  {
    icon: Users,
    name: "Brand / Producer Team",
    description:
      "Understand your EPR obligations and what actions are due without waiting for a colleague to reply"
  },
  {
    icon: Activity,
    name: "Operations",
    description: "Quick reference for process queries, material codes, and partner categorisation"
  },
  {
    icon: UserCircle,
    name: "New Joinee",
    description:
      "Learn how ReCircle's processes and tools work through guided, conversational answers"
  }
];

const chatbotSteps: JourneyItem[] = [
  {
    number: "01",
    title: "Ask your question",
    description:
      "Type any EPR compliance or internal process question in plain English. No special formatting or jargon needed.",
    capturedItems: ["Free-text question input", "Voice input supported on mobile"],
    icon: MessageCircle
  },
  {
    number: "02",
    title: "AI finds the answer",
    description:
      "The chatbot searches across India's EPR regulations, CPCB guidelines, and ReCircle's internal knowledge base to form a response.",
    capturedItems: ["Answer with source reference", "Confidence level shown"],
    icon: FileText
  },
  {
    number: "03",
    title: "Follow up or dig deeper",
    description:
      "Ask follow-up questions to refine the answer, explore related rules, or get step-by-step guidance on a specific process.",
    capturedItems: ["Context-aware follow-ups", "Related question suggestions"],
    icon: Activity
  },
  {
    number: "04",
    title: "Save or share",
    description:
      "Copy the answer, export the conversation as PDF, or share a summary with your team, directly from the chat window.",
    capturedItems: ["Copy to clipboard", "Export as PDF"],
    icon: Bell
  }
];

// ── Drive Automation ──────────────────────────────────────────────────────────

const driveRoles: RoleItem[] = [
  {
    icon: Users,
    name: "HR Manager",
    description:
      "Configure automation rules and monitor which files were processed, sorted, and shared"
  },
  {
    icon: Activity,
    name: "HR Admin",
    description: "Upload documents and let the tool handle renaming, sorting, and notification"
  },
  {
    icon: LayoutDashboard,
    name: "Team Lead",
    description: "Receive automated file notifications without chasing HR for every document"
  },
  {
    icon: UserCircle,
    name: "Employee",
    description:
      "Submit documents once and trust they land in the right place with the right person notified"
  }
];

const driveSteps: JourneyItem[] = [
  {
    number: "01",
    title: "Upload to the trigger folder",
    description:
      "Drop any HR document, offer letter, payslip, policy, or ID proof, into the designated Google Drive trigger folder.",
    capturedItems: ["Google Drive folder (set by admin)", "PDF, DOCX, or image formats"],
    icon: Upload
  },
  {
    number: "02",
    title: "System detects and classifies",
    description:
      "The automation detects the new file and classifies it by type, payslip, contract, ID, or policy, based on name or content.",
    capturedItems: ["File type detected automatically", "Employee name extracted from filename"],
    icon: FileText
  },
  {
    number: "03",
    title: "Rename, sort, and archive",
    description:
      "The file is automatically renamed to a standard format and moved to the correct subfolder, no manual action needed.",
    capturedItems: ["Renamed to standard convention", "Moved to correct subfolder"],
    icon: FolderSync
  },
  {
    number: "04",
    title: "Notify the right person",
    description:
      "An automatic email notification is sent to the relevant team member with a direct Drive link, and a timestamp is logged.",
    capturedItems: ["Email notification with Drive link", "Processing timestamp logged"],
    icon: Bell
  }
];

export const contactDetails = {
  name: "Vishal Singh",
  role: "Business Analyst Executive | ReCircle Tech",
  email: "vishal.singh@recircle.in",
  phone: "+91 878 992 0475"
};

export const climaOneV1Page: BaseToolPage & {
  capabilities: CapabilityItem[];
  problemTiles: OutcomeItem[];
  journeyIntro: string;
  journey: JourneyItem[];
  automation: AutomationListItem[];
  outcomes: OutcomeItem[];
  dashboardNote: string;
  learnMore: {
    eyebrow: string;
    title: string;
    highlight: string;
    body: string;
    ctaLabel: string;
    ctaHref: string;
  };
} = {
  name: "ClimaOne® V1",
  href: "/climaone-v1/",
  productEyebrow: "Supply Chain Optimizer · Circular Economy Enabler",
  heroTitle: {
    before: "Gain control over your ",
    highlight: "sustainability targets.",
    after: ""
  },
  subheading:
    "Say goodbye to guesswork and welcome data-driven decision-making. Manage EPR compliances, achieve Plastic Neutrality, and track ethically recycled plastic — all in one platform.",
  primaryAction: {
    label: "Open ClimaOne® V1",
    href: "https://admin.climaone.in/",
    tone: "primary"
  },
  secondaryAction: {
    label: "Learn more about ClimaOne®",
    href: "https://recircle.in/climaone/"
  },
  accessNote:
    "Available on desktop and mobile | Login with password or OTP | Contact tech team for access",
  rolesEyebrow: "Who is this for",
  rolesTitle: "Built for every role in your network",
  roles: [
    {
      icon: LayoutDashboard,
      name: "Brand / Producer",
      description: "Track EPR obligations, purchase orders, and compliance certificates"
    },
    {
      icon: Truck,
      name: "Collection Partner",
      description: "Manage assigned POs, vehicle dispatch, and material recovery tracking"
    },
    {
      icon: UserCircle,
      name: "Admin",
      description: "Oversee the entire network, partners, approvals, reports, and master data"
    },
    {
      icon: Activity,
      name: "Operations",
      description: "Monitor vehicle movement, dispatch status, and ground-level activity"
    },
    {
      icon: Home,
      name: "PWP / Processor",
      description: "Track credits issued, certificate status, and material received at facility"
    }
  ],
  problemTiles: [
    {
      title: "End-to-End Traceability",
      description:
        "Track every plastic credit from collection to compliance certification, with a verifiable audit trail at every step."
    },
    {
      title: "Live Data Tracking",
      description:
        "Real-time updates across your entire circular supply chain — vehicle movement, PO status, and partner activity, always current."
    },
    {
      title: "CPCB Portal Integration",
      description:
        "EPR plastic credits directly linked to the government compliance portal. File with confidence, backed by verified data."
    },
    {
      title: "Dashboard and Reporting",
      description:
        "Compliance progress and SDG delivery tracked in one view. Monthly reports generated automatically, no manual compilation."
    }
  ],
  journeyIntro:
    "Every purchase order in ClimaOne® V1 moves through a defined 5-step lifecycle — from creation and allocation to dispatch, weight capture, and certificate issuance — with every action logged and auditable.",
  journey: [
    {
      number: "01",
      title: "Create a purchase order",
      description:
        "Admin or compliance manager creates a PO, setting the target weight, material type, and partner allocation. The PO is immediately visible to the assigned collection partner.",
      capturedItems: ["Target weight (kg / MT)", "Material category", "Partner assignment", "PO creation timestamp"],
      icon: FileText
    },
    {
      number: "02",
      title: "Partner accepts and dispatches",
      description:
        "The collection partner accepts the PO, loads a vehicle, and dispatches it, uploading the e-way bill, driver details, and weightbridge slip directly in the portal.",
      capturedItems: ["Vehicle number and driver", "E-way bill and LR", "Dispatch weight", "Dispatch timestamp"],
      icon: Truck
    },
    {
      number: "03",
      title: "Vehicle arrival is recorded",
      description:
        "On arrival at the facility, the receiving team marks the vehicle as arrived and logs the received weight. Any discrepancy is flagged immediately for resolution.",
      capturedItems: ["Arrival timestamp", "Received weight", "Discrepancy flag if applicable"],
      icon: Activity
    },
    {
      number: "04",
      title: "PO is fulfilled and closed",
      description:
        "Once the target weight is met across one or more dispatches, the PO is marked as fulfilled. A complete audit trail, vehicles, weights, partners, is attached to the closed PO.",
      capturedItems: ["Fulfilment percentage", "Total received weight", "Dispatch history"],
      icon: Bell
    },
    {
      number: "05",
      title: "Certificate is issued",
      description:
        "With fulfilment confirmed, the compliance team issues an EPR certificate linked to the PO data. The certificate is downloadable and available to the producer for CPCB filing.",
      capturedItems: ["Certificate number", "Linked PO and weight data", "Downloadable PDF", "Issuer and timestamp"],
      icon: Upload
    }
  ],
  automation: [
    {
      number: "01",
      title: "PO status notifications",
      description:
        "When a PO is created, accepted, dispatched, or closed, all relevant parties receive an automatic SMS or email, no manual communication needed"
    },
    {
      number: "02",
      title: "Monthly compliance reports",
      description:
        "Material movement summaries are auto-generated each month, state-wise, partner-wise, and material-wise, and delivered directly to the compliance team"
    },
    {
      number: "03",
      title: "Certificate issuance triggers",
      description:
        "Once a PO reaches its fulfilment threshold, the system flags it for certificate issuance, removing the need to manually track which POs are ready"
    },
    {
      number: "04",
      title: "Dispatch sync to all stakeholders",
      description:
        "When a vehicle is dispatched, its details are automatically visible to the facility, admin, and the brand, no phone call or message required"
    },
    {
      number: "05",
      title: "Discrepancy alerts",
      description:
        "If a received weight differs significantly from the dispatched weight, an alert is raised automatically so it can be investigated before the record is closed"
    }
  ],
  outcomes: [
    {
      title: "Compliance managers stop chasing data",
      description:
        "PO status, vehicle movement, and certificate progress are all visible in one place, no more compiling status from calls and emails"
    },
    {
      title: "Collection partners have full visibility",
      description:
        "Partners can see their assigned POs, dispatch history, and fulfilment status without contacting the admin team"
    },
    {
      title: "EPR filings become routine",
      description:
        "All the data needed for CPCB filings, weights, partners, dates, certificates, is structured and ready to export at any time"
    },
    {
      title: "Certificates are auditable end to end",
      description:
        "Every certificate is linked to the POs, vehicle dispatches, and weight records that support it, one click to the full evidence trail"
    }
  ],
  dashboardNote:
    "The ClimaOne® V1 dashboard gives compliance managers a real-time view of purchase order fulfilment, active vehicle movement, and certificate status across the entire partner network.",
  capabilities: [
    {
      number: "01",
      title: "Role-based dashboard",
      description:
        "Log in and see exactly what matters to your role, PO status, certificate progress, vehicle movement, partner counts, and material recovery, all at a glance.",
      icon: LayoutDashboard
    },
    {
      number: "02",
      title: "Purchase order lifecycle",
      description:
        "Create, allocate, accept, and close purchase orders across your entire partner network. Every PO is tracked from creation to fulfilment with a full audit trail.",
      icon: FileText
    },
    {
      number: "03",
      title: "Vehicle & dispatch tracking",
      description:
        "Track every vehicle, driver details, e-way bills, dispatch and receipt dates, geo-tagged images, and weightbridge slips all tied to a single trip.",
      icon: Truck
    },
    {
      number: "04",
      title: "Certificates & compliance",
      description:
        "Issue, track, and query EPR certificates end to end. Raise queries, resolve disputes, and maintain a clean compliance record, all within the platform.",
      icon: Award
    },
    {
      number: "05",
      title: "Reports & data",
      description:
        "Generate monthly material movement reports, state-wise breakdowns, and PO dispatch summaries, automatically compiled and delivered to your inbox.",
      icon: BarChart2
    },
    {
      number: "06",
      title: "Notifications & alerts",
      description:
        "Never miss a critical update. ClimaOne® sends SMS, email, and push notifications for PO alerts, approvals, and status changes across all user types.",
      icon: Bell
    }
  ],
  learnMore: {
    eyebrow: "Explore more",
    title: "The full ClimaOne® product page — ",
    highlight: "everything in one place.",
    body:
      "Portal walkthroughs, onboarding guides, feature deep-dives, and more — all on the official ClimaOne® page.",
    ctaLabel: "Explore ClimaOne®",
    ctaHref: "https://recircle.in/climaone/"
  },
  helpTitle: "Can't access it? We're here."
};

export const climaOneV2Page: BaseToolPage & {
  problemTiles: OutcomeItem[];
  journeyIntro: string;
  journey: JourneyItem[];
  automation: AutomationListItem[];
  outcomes: OutcomeItem[];
  dashboardNote: string;
  learnMore: {
    eyebrow: string;
    title: string;
    highlight: string;
    body: string;
    ctaLabel: string;
    ctaHref: string;
  };
} = {
  name: "ClimaOne® V2",
  href: "/climaone-v2/",
  productEyebrow: "Product 02 | ClimaOne® V2",
  heroTitle: {
    before: "The Future of Recycling Is ",
    highlight: "Traceable."
  },
  subheading:
    "ClimaOne connects the entire recycling journey. By connecting every stage, the platform enables bag-level traceability for recycled plastic across the entire supply chain. Each step is recorded, so every bag can be traced back to its origin.",
  primaryAction: {
    label: "Open ClimaOne® V2",
    href: "https://v2.climaone.in/login",
    tone: "primary"
  },
  secondaryAction: {
    label: "Learn more about ClimaOne® V2",
    href: "https://climaonev2.recircle.in/"
  },
  accessNote: "Full deployment in progress | Contact the tech team to get early access",
  rolesEyebrow: "Who is this for",
  rolesTitle: "Built for Every Stakeholder in the Recycling Ecosystem",
  roles: [
    {
      icon: Truck,
      name: "Collection Partners",
      description: "Faster delivery confirmations, digital records for dispatches and QC reports, and improved transparency with operators and stakeholders."
    },
    {
      icon: Home,
      name: "Recycling Plants",
      description: "Reliable supply chain transparency, full traceability of recycled materials, and digital documentation for sustainability reporting."
    },
    {
      icon: Package,
      name: "Buyers",
      description: "Track incoming dispatches, access shipment and batch records, and confirm deliveries with full rPET traceability data."
    },
    {
      icon: LayoutDashboard,
      name: "Admin Teams",
      description: "Real-time view of operations across the ecosystem, centralised dashboards, and structured reports for compliance needs."
    }
  ],
  problemTiles: [
    {
      title: "Bag-Level Material Traceability",
      description:
        "Every stage from collection to flakes is recorded in a verified digital trail — traceable back to its origin."
    },
    {
      title: "Operational Inventory Insights",
      description: "Live view of raw material, batches in process, and finished goods so you always know what is in stock."
    },
    {
      title: "Integrated Quality Assurance",
      description:
        "Every production batch carries its own QC reports, accessible directly from the platform by any stakeholder."
    },
    {
      title: "Supply Chain Movement Tracking",
      description:
        "Track plastic from collection partners to the plant, and monitor rPET flakes as they move to downstream buyers."
    }
  ],
  journeyIntro:
    "Every unit of material that enters this platform is tracked across 8 physical touchpoints — with documents, GPS evidence, weights, and QC records attached at each one.",
  journey: [
    {
      number: "01",
      title: "Create a Purchase Order",
      description:
        "Before any material moves, a purchase order is raised in the system. The PO sets the target collection weight, assigns a collection partner, and creates the reference that every subsequent step — vehicle dispatch, GRN, production batch — is linked back to.",
      capturedItems: [
        "PO number",
        "Target weight",
        "Assigned collection partner",
        "PO date and validity"
      ],
      icon: FileText
    },
    {
      number: "02",
      title: "Collection partner loads a vehicle",
      description:
        "A collection partner receives a purchase order, accepts it, and creates a vehicle load - entering vehicle details, driver information, planned weight, and uploading all shipment documents.",
      capturedItems: [
        "Vehicle identity",
        "Driver details",
        "Planned and gross weight",
        "PO linkage",
        "Invoice / e-way bill / LR / baslip documents",
        "Dispatch timestamp"
      ],
      icon: Truck
    },
    {
      number: "03",
      title: "Vehicle is dispatched and synced",
      description:
        "Once dispatched, the vehicle load is automatically synced to the plant and admin services - no manual handoff, no phone calls. The plant knows it is coming before it arrives.",
      capturedItems: [
        "Dispatch status",
        "Auto-sync to plant and admin",
        "Real-time visibility for all parties"
      ],
      icon: Activity
    },
    {
      number: "04",
      title: "Vehicle arrives at the plant",
      description:
        "The plant operator marks the vehicle as arrived, uploads a GPS-tagged photo as proof of arrival, and validates all incoming documents. If any document fails validation, an admin flag is automatically created.",
      capturedItems: [
        "GPS arrival photo",
        "Document validation (invoice / e-way bill / LR / baslip)",
        "Arrival timestamp",
        "Auto-created admin flag on document failure"
      ],
      icon: Upload
    },
    {
      number: "05",
      title: "Goods received and quality checked",
      description:
        "The system auto-creates a GRN at plant arrival. The plant operator then runs quality control - logging QC parameters and results against the received material before it enters production.",
      capturedItems: [
        "Auto-generated GRN number",
        "Received weight",
        "QC parameters and result",
        "GRN-level source linkage"
      ],
      icon: FileText
    },
    {
      number: "06",
      title: "Material enters production",
      description:
        "Material from one or more GRNs is fed into a production batch. The platform tracks exactly which GRNs contributed to which batch - down to the timeslot level - so the source of every output is always known.",
      capturedItems: [
        "Batch number",
        "GRN-level consumption",
        "Timeslot-level feeding records",
        "Processing lag"
      ],
      icon: Activity
    },
    {
      number: "07",
      title: "Output is bagged and stored",
      description:
        "Processed output is bagged and assigned individual bag numbers. Each bag carries its weight, grade, storage location, and the exact source GRN composition - including which collection partners contributed to it.",
      capturedItems: [
        "Bag number",
        "Bag weight",
        "Grade",
        "Source GRN composition",
        "Contributing collection partners",
        "Storage location"
      ],
      icon: Package
    },
    {
      number: "08",
      title: "Converter receives and traces back",
      description:
        "The converter records receipt, accepted and rejected quantities, QC results, and receipt evidence. From this single screen, they can trace any dispatch all the way back - through bags, batches, GRNs, and original collection partners - with contribution percentages.",
      capturedItems: [
        "Receipt number",
        "Accepted / rejected quantity",
        "Converter QC result",
        "Full backward traceability to source CP",
        "Bag and batch composition"
      ],
      icon: Globe
    }
  ],
  automation: [
    {
      number: "01",
      title: "Vehicle sync",
      description:
        "When a CP dispatches a vehicle, it is automatically synced to plant and admin - no manual notification needed"
    },
    {
      number: "02",
      title: "Sales order sync",
      description:
        "When a plant creates a sales order, it is automatically synced to admin and converter services"
    },
    {
      number: "03",
      title: "GRN auto-creation",
      description:
        "When a vehicle arrives at the plant and passes document checks, a GRN is created automatically"
    },
    {
      number: "04",
      title: "Exception flagging",
      description:
        "When a document validation fails, an admin flag is created instantly - nothing slips through silently"
    },
    {
      number: "05",
      title: "Daily reminder emails",
      description:
        "The system sends scheduled daily action-reminder emails to plant teams - open items never go unnoticed"
    }
  ],
  outcomes: [
    {
      title: "CPs stop chasing status",
      description:
        "Collection partners no longer call the plant to check whether their vehicle was accepted. They see it live."
    },
    {
      title: "Plants stop building packets by hand",
      description:
        "GRNs, QC records, and production summaries are structured in the system - not assembled from WhatsApp and email"
    },
    {
      title: "Converters can validate provenance instantly",
      description:
        "Any dispatch can be traced back to its source in seconds - no back-and-forth, no spreadsheet reconciliation"
    },
    {
      title: "Admin can answer in minutes, not days",
      description:
        '"Where did this material come from, what happened to it, is the evidence complete?" - answered from one screen'
    }
  ],
  dashboardNote:
    "The producer compliance dashboard gives brands a clear view of verified material collected, processed, and available for compliance reporting.",
  learnMore: {
    eyebrow: "Witness ClimaOne® in Action",
    title: "The full ClimaOne® V2 product page is ",
    highlight: "live.",
    body: "See the platform in action, explore features, and get in touch with the team.",
    ctaLabel: "Book a Live Demo",
    ctaHref: "https://climaonev2.recircle.in/"
  },
  helpTitle: "Questions about ClimaOne® V2?"
};

export const placeholderToolPages = {
  "ocr-epr": {
    name: "OCR for EPR",
    href: "/ocr-epr/",
    productEyebrow: "Product 03 | OCR for EPR",
    heroTitle: {
      before: "EPR documents, processed in ",
      highlight: "seconds.",
      after: " Zero manual entry."
    },
    subheading:
      "Upload any compliance document, waste manifests, weightbridge slips, collection receipts, or CPCB forms, and get structured, exportable data instantly.",
    primaryAction: {
      label: "Open OCR for EPR",
      href: "#",
      tone: "primary" as const
    },
    secondaryAction: {
      label: "Learn more about EPR compliance",
      href: "https://recircle.in/epr/"
    },
    accessNote: "Available on desktop and mobile | Login with your ReCircle account | Contact tech team for access",
    rolesEyebrow: "Who is this for",
    rolesTitle: "Built for everyone who touches compliance documents",
    roles: ocrEprRoles,
    steps: ocrEprSteps,
    learnMore: {
      eyebrow: "Want to understand EPR better?",
      title: "Everything about India's EPR regulations is on ",
      highlight: "recircle.in.",
      body: "Guides, compliance timelines, CPCB filing steps, and more, all on the ReCircle EPR resource page.",
      ctaLabel: "Explore EPR resources",
      ctaHref: "https://recircle.in/epr/"
    },
    helpTitle: "Having trouble with a document?"
  },
  "ocr-bizcard": {
    name: "OCR for Business Cards",
    href: "/ocr-bizcard/",
    productEyebrow: "Product 04 | OCR for Business Cards",
    heroTitle: {
      before: "Photograph a card, ",
      highlight: "save the contact.",
      after: " That's it."
    },
    subheading:
      "Scan any business card from a recycler, collector, or partner and get a clean contact record in seconds, no typing required.",
    primaryAction: {
      label: "Open OCR for Business Cards",
      href: "#",
      tone: "primary" as const
    },
    accessNote: "Available on desktop and mobile | Works best with phone camera | Contact tech team for access",
    rolesEyebrow: "Who is this for",
    rolesTitle: "For anyone who collects contacts in the field",
    roles: ocrBizcardRoles,
    steps: ocrBizcardSteps,
    learnMore: {
      eyebrow: "Working with partners?",
      title: "ReCircle's network spans ",
      highlight: "400+ locations.",
      body: "Learn how ReCircle connects producers, collectors, and recyclers across India's reverse supply chain.",
      ctaLabel: "Explore our network",
      ctaHref: "https://recircle.in/"
    },
    helpTitle: "Card not scanning correctly?"
  },
  "route-optimizer": {
    name: "Route Optimizer",
    href: "/route-optimizer/",
    productEyebrow: "Product 05 | Route Optimizer",
    heroTitle: {
      before: "Smarter routes. ",
      highlight: "More pickups,",
      after: " less fuel."
    },
    subheading:
      "Plan and optimise waste collection routes across hundreds of pickup points in seconds. Less time on the road, more material recovered every day.",
    primaryAction: {
      label: "Open Route Optimizer",
      href: "#",
      tone: "primary" as const
    },
    accessNote: "Available on desktop and mobile | Login with your ReCircle account | Contact tech team for access",
    rolesEyebrow: "Who is this for",
    rolesTitle: "Built for the teams that move material every day",
    roles: routeRoles,
    steps: routeSteps,
    learnMore: {
      eyebrow: "How does collection work?",
      title: "ReCircle's reverse supply chain runs across ",
      highlight: "45+ processing partners.",
      body: "See how waste moves from collection points through aggregation to certified recycling facilities.",
      ctaLabel: "Explore our operations",
      ctaHref: "https://recircle.in/"
    },
    helpTitle: "Route not generating correctly?"
  },
  chatbot: {
    name: "EPR Chatbot",
    href: "/chatbot/",
    productEyebrow: "Product 06 | EPR Chatbot",
    heroTitle: {
      before: "Ask any EPR question. ",
      highlight: "Get an answer",
      after: " now."
    },
    subheading:
      "An AI assistant trained on India's EPR regulations and ReCircle's internal processes. Get instant, accurate answers to compliance questions, no waiting, no forwarding emails.",
    primaryAction: {
      label: "Open EPR Chatbot",
      href: "#",
      tone: "primary" as const
    },
    accessNote: "Available on desktop and mobile | Login with your ReCircle account | Contact tech team for access",
    rolesEyebrow: "Who is this for",
    rolesTitle: "For anyone with an EPR or process question",
    roles: chatbotRoles,
    steps: chatbotSteps,
    learnMore: {
      eyebrow: "Want deeper EPR knowledge?",
      title: "ReCircle's EPR guides cover ",
      highlight: "everything.",
      body: "From CPCB registration to plastic credit trading, all the compliance context you need, in one place.",
      ctaLabel: "Read EPR resources",
      ctaHref: "https://recircle.in/epr/"
    },
    helpTitle: "Getting unexpected answers?"
  },
  "drive-automation": {
    name: "Drive Automation",
    href: "/drive-automation/",
    productEyebrow: "Product 07 | Drive Automation",
    heroTitle: {
      before: "Files in, sorted and ",
      highlight: "shared automatically.",
      after: ""
    },
    subheading:
      "Drop files into the configured Google Drive folder and the tool handles the rest, renaming, sorting, and notifying the right people, without any manual handoff.",
    primaryAction: {
      label: "Open Drive Automation",
      href: "#",
      tone: "primary" as const
    },
    accessNote: "Available to HR team | Login with your ReCircle Google account | Contact tech team for access",
    rolesEyebrow: "Who is this for",
    rolesTitle: "Built for the HR team and everyone they support",
    roles: driveRoles,
    steps: driveSteps,
    learnMore: {
      eyebrow: "Part of the ReCircle team?",
      title: "Everything about working at ReCircle is on ",
      highlight: "recircle.in.",
      body: "Company overview, values, open roles, and the team behind India's leading EPR compliance platform.",
      ctaLabel: "Meet the team",
      ctaHref: "https://recircle.in/"
    },
    helpTitle: "Files not moving as expected?"
  }
} as const;

export const toolNames = [
  "ClimaOne® V1",
  "ClimaOne® V2",
  "OCR for EPR",
  "OCR for Business Card",
  "Route Optimizer",
  "Chatbot",
  "Drive Automation"
];

export const faqItems = [
  {
    question: "How do I get access to a tool?",
    answer:
      "Each tool page lists access requirements in the hero section. Most tools require a login, reach out to the ReCircle tech team via the contact page and they will set up your account or grant the necessary permissions."
  },
  {
    question: "I found a bug - who do I report it to?",
    answer:
      "Report bugs directly to the tech team using the contact details on this page. Include the tool name, what you were doing when the issue occurred, and a screenshot if possible. The team triages and fixes reported issues on an ongoing basis."
  },
  {
    question: "Can I request a new feature or improvement?",
    answer:
      "Yes. The tech team welcomes feature requests and improvement suggestions from the team. Reach out via the contact page with a description of what you need and why. Requests are reviewed and prioritised based on business impact."
  },
  {
    question: "Is my data secure when using these tools?",
    answer:
      "All tools are built and hosted by ReCircle's internal tech team. Data entered into these tools is stored securely and is accessible only to the ReCircle team. None of the tools share data with third parties outside of the services they integrate with (such as Google Drive or Google Maps)."
  },
  {
    question: "How do I get trained on a tool?",
    answer:
      "Each tool has a dedicated page on this hub with a full explanation of what it does, who it is for, and how to use it step by step. Start there. If you need a walkthrough or have questions after reading, contact the tech team, they can arrange a quick demo or a screen-share session."
  }
];
