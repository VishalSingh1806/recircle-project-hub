import {
  BarChart2,
  Calendar,
  Clock,
  Github,
  Map,
  MapPin,
  Navigation,
  Share2,
  TrendingDown,
  Upload,
  Users
} from "lucide-react";

import { AccentBar } from "@/components/AccentBar/AccentBar";
import { BackLink } from "@/components/BackLink/BackLink";
import { CapabilityBlock } from "@/components/CapabilityBlock/CapabilityBlock";
import { FooterStrip } from "@/components/FooterStrip/FooterStrip";
import { RoleCard } from "@/components/RoleCard/RoleCard";

import styles from "./page.module.css";

const roles = [
  {
    icon: MapPin,
    name: "Collections / Operations",
    description:
      "Plan daily pickup routes without manually ordering stops or estimating travel time"
  },
  {
    icon: Map,
    name: "Field supervisors",
    description:
      "Get a clear area-by-area breakdown of stops, durations, and the best day to run each route"
  },
  {
    icon: BarChart2,
    name: "Operations managers",
    description:
      "Review route summaries - customer count, distance, time savings - before dispatching the team"
  }
] as const;

const capabilities = [
  {
    number: "01",
    title: "Upload your pickup list",
    description: "Import stops as a CSV with S.No, Customer, and Address columns. Optionally include Email, Phone, Pincode, and City for better geocoding accuracy.",
    icon: Upload
  },
  {
    number: "02",
    title: "Auto-geocode all addresses",
    description: "The system converts every address into a precise map location automatically. Addresses with pincodes and city names get the most accurate results.",
    icon: MapPin
  },
  {
    number: "03",
    title: "Cluster stops by area",
    description: "Nearby stops are grouped into geographic clusters so each route covers a single area, reducing unnecessary cross-city travel.",
    icon: Map
  },
  {
    number: "04",
    title: "Optimise stop order within clusters",
    description: "Within each area cluster, stops are ordered for the shortest path. Each optimised route handles up to 23 stops.",
    icon: Navigation
  },
  {
    number: "05",
    title: "Find the best day per route",
    description: "Traffic patterns are analysed across weekdays so each area route is assigned the day with the lightest expected traffic.",
    icon: Calendar
  },
  {
    number: "06",
    title: "Send a ready-to-use driver link",
    description: "Each optimised route generates a Google Maps link with the full stop order. Share directly with your driver via WhatsApp or any messaging app.",
    icon: Share2
  }
];

const metrics = [
  {
    icon: Users,
    title: "Customer count",
    description: "Number of stops in this area cluster"
  },
  {
    icon: Clock,
    title: "Route duration",
    description: "Estimated time to complete the full route including travel"
  },
  {
    icon: Navigation,
    title: "Total distance",
    description: "Total kilometres for the optimised stop order"
  },
  {
    icon: TrendingDown,
    title: "Time savings",
    description: "Estimated time saved versus an unoptimised route"
  },
  {
    icon: Calendar,
    title: "Best day",
    description: "The weekday with the lightest traffic for this area based on Google Maps estimates"
  }
] as const;

const notes = [
  {
    title: "23 stops per route maximum",
    description:
      "Each optimised route supports up to 23 stops due to Google Maps limits. If your area has more, split it into two uploads or sub-areas."
  },
  {
    title: "Each upload replaces the last",
    description:
      "Uploading a new CSV clears your previous pickup list and plans. Make sure your file is complete and correct before uploading."
  },
  {
    title: "Complete addresses get better results",
    description:
      "The system geocodes addresses automatically. Incomplete or vague addresses may fail and get skipped. Always include pincode and city where possible."
  },
  {
    title: "Routes are currently India-focused",
    description:
      "The geocoding is optimised for India and Mumbai. If you are planning routes in a new city or region, contact the tech team to check if any configuration is needed."
  }
] as const;

export default function RouteOptimizerPage() {
  return (
    <main>
      <AccentBar />
      <BackLink />

      <section className={styles.heroSection}>
        <div className={styles.heroText}>
          <p className={styles.eyebrow}>Product 05 | Route Optimizer</p>
          <h1 className={styles.title}>
            Smarter collection routes. <span>Less time on the road.</span>
          </h1>
          <p>
            Upload your pickup list as a CSV, and the Route Optimizer clusters your stops by area,
            orders them efficiently, and tells you the best day to run each route - based on real
            traffic estimates. No manual planning. No guesswork.
          </p>
          <a className={styles.githubButton} href="https://github.com/VishalSingh1806/best-route" target="_blank" rel="noreferrer">
            <Github size={18} />
            View on GitHub
          </a>
          <p className={styles.accessNote}>
            Available at route.recircle.in | Desktop | Upload a CSV to get started
          </p>
        </div>
      </section>

      <section className={styles.rolesSection}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionEyebrow}>Who is this for</p>
          <h2>Built for the collections team</h2>
        </div>
        <div className={styles.rolesGrid}>
          {roles.map((role) => (
            <RoleCard key={role.name} {...role} />
          ))}
        </div>
      </section>

      <section className={styles.capabilitiesSection}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionEyebrow}>Capabilities</p>
          <h2>What you can do with Route Optimizer</h2>
        </div>
        <div className={styles.capabilitiesGrid}>
          {capabilities.map((cap) => (
            <div key={cap.number} className={styles.capabilityCell}>
              <CapabilityBlock {...cap} />
            </div>
          ))}
        </div>
      </section>

      <section className={styles.outputSection}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionEyebrow}>What you get</p>
          <h2>Everything you need to dispatch with confidence</h2>
        </div>
        <div className={styles.metricsGrid}>
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <article key={metric.title} className={styles.metricInfoTile}>
                <div className={styles.metricHead}>
                  <Icon size={18} />
                  <h3 className={styles.metricTitle}>{metric.title}</h3>
                </div>
                <p className={styles.metricDescription}>{metric.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className={styles.notesSection}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionEyebrow}>Good to know</p>
          <h2>A few things before you start</h2>
        </div>
        <div className={styles.notesGrid}>
          {notes.map((note) => (
            <article key={note.title} className={styles.noteTile}>
              <h3>{note.title}</h3>
              <p>{note.description}</p>
            </article>
          ))}
        </div>
      </section>

      <FooterStrip />
    </main>
  );
}
