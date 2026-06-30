import {
  Building2,
  Calendar,
  FileCheck,
  FileText,
  HelpCircle,
  Package,
  Scale
} from "lucide-react";

import { AccentBar } from "@/components/AccentBar/AccentBar";
import { BackLink } from "@/components/BackLink/BackLink";
import { ExploreMore } from "@/components/ExploreMore/ExploreMore";
import { FooterStrip } from "@/components/FooterStrip/FooterStrip";
import { RoleCard } from "@/components/RoleCard/RoleCard";

import styles from "./page.module.css";

const roles = [
  {
    icon: Building2,
    name: "Producers & brand owners",
    description:
      "Get instant answers on EPR registration, obligations, and filing deadlines"
  },
  {
    icon: Package,
    name: "Importers & brand managers",
    description:
      "Understand your plastic compliance requirements without calling or emailing"
  },
  {
    icon: FileCheck,
    name: "Internal EPR team",
    description:
      "Quickly look up regulation details, categories, and compliance steps"
  },
  {
    icon: HelpCircle,
    name: "Anyone new to EPR",
    description:
      "Start from the basics - what EPR is, who it applies to, and what you need to do"
  }
] as const;

const knowledgeTiles = [
  {
    icon: Scale,
    title: "EPR regulations",
    description: "Core EPR rules, obligations, and compliance requirements"
  },
  {
    icon: FileText,
    title: "Filing & registration FAQs",
    description: "Common questions on how to register, file, and meet deadlines"
  },
  {
    icon: Building2,
    title: "ReCircle knowledge",
    description: "Information specific to ReCircle's services, programmes, and processes"
  },
  {
    icon: Calendar,
    title: "Deadline & timeline queries",
    description:
      "Special handling for time-sensitive questions - filing dates, validity periods, renewal windows"
  }
] as const;

const steps = [
  {
    number: "01",
    title: "Go to https://recircle.in/epr/",
    description:
      "Open the chatbot in your browser. It is also embeddable as a widget on any internal page - contact the tech team if you want it added somewhere. No login is required."
  },
  {
    number: "02",
    title: "Fill in your contact details",
    description:
      "Before your first message, enter your name, email, phone number, and organisation. This is required to begin the conversation. Your details are stored securely and help the team follow up if needed."
  },
  {
    number: "03",
    title: "Type your question in plain English",
    description:
      "Ask anything related to EPR - as naturally as you would ask a colleague. For example: 'What is the EPR filing deadline for Q3?' or 'How do I register as a producer?' or 'What plastic categories fall under EPR?' The chatbot retrieves the most relevant answer from its knowledge base."
  },
  {
    number: "04",
    title: "Ask follow-up questions",
    description:
      "The chatbot remembers the context of your conversation. You can ask follow-up questions without repeating yourself. Suggested follow-up questions also appear below each answer to help guide the conversation."
  },
  {
    number: "05",
    title: "Connect with ReCircle or save the transcript",
    description:
      "At any point you can click Connect me to ReCircle to get in touch with the team directly. You can also download your conversation transcript as a PDF for your records."
  }
] as const;

const notes = [
  {
    title: "Contact details required",
    description:
      "You must submit your name, email, phone, and organisation before asking your first question. This is mandatory and cannot be skipped."
  },
  {
    title: "Always verify important answers",
    description:
      "The chatbot may occasionally make mistakes. For critical compliance decisions, always verify against the official CPCB portal or consult the ReCircle EPR team directly."
  },
  {
    title: "English only",
    description:
      "The chatbot currently supports English only. Hindi and other language inputs may produce unreliable results."
  },
  {
    title: "Context is preserved",
    description:
      "Your conversation context is maintained throughout the session. You can ask follow-up questions naturally without repeating background information."
  }
] as const;

const exploreItems = [
  {
    href: "/climaone-v1/",
    category: "EPR Compliance",
    name: "ClimaOne V1",
    description: "Manage your full EPR compliance cycle.",
  },
  {
    href: "/climaone-v2/",
    category: "EPR Compliance",
    name: "ClimaOne V2",
    description: "Full material traceability from collection to converter.",
  },
];

export default function ChatbotPage() {
  return (
    <main>
      <AccentBar />
      <BackLink />

      <section className={styles.heroSection}>
        <div className={styles.heroText}>
          <p className={styles.eyebrow}>AI Assistant</p>
          <h1 className={styles.title}>
            Ask any EPR question. <span>Get a clear answer in seconds.</span>
          </h1>
          <p>
            The chatbot is trained on EPR regulations, compliance FAQs, and ReCircle&apos;s own
            knowledge base. Ask about registration steps, filing deadlines, plastic categories, or
            compliance basics. Follow-up questions supported.
          </p>
          <a className={styles.primaryButton} href="https://recircle.in/epr/" target="_blank" rel="noreferrer">
            Open EPR Chatbot
          </a>
          <p className={styles.accessNote}>
            Available at recircle.in/epr | No login required | English only
          </p>
        </div>

        <div className={styles.browserFrame}>
          <div className={styles.browserTop}>
            <span className={`${styles.dot} ${styles.red}`} />
            <span className={`${styles.dot} ${styles.yellow}`} />
            <span className={`${styles.dot} ${styles.green}`} />
          </div>
          <div className={styles.browserBody}>
            <div className={styles.leadForm}>
              {[0, 1, 2, 3].map((item) => (
                <span key={item} className={styles.inputRow} />
              ))}
            </div>
            <div className={styles.chatArea}>
              <div className={`${styles.bubble} ${styles.botBubble}`}>
                <span className={styles.bubbleLine} />
                <span className={styles.bubbleLineShort} />
              </div>
              <div className={`${styles.bubble} ${styles.userBubble}`}>
                <span className={styles.bubbleLine} />
                <span className={styles.bubbleLineShort} />
              </div>
              <div className={styles.chips}>
                <span className={styles.chip}>Filing deadline</span>
                <span className={styles.chip}>Producer registration</span>
                <span className={styles.chip}>Plastic category</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.rolesSection}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionEyebrow}>Who is this for</p>
          <h2>For anyone with an EPR question</h2>
        </div>
        <div className={styles.rolesGrid}>
          {roles.map((role) => (
            <RoleCard key={role.name} {...role} />
          ))}
        </div>
      </section>

      <section className={styles.knowledgeSection}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionEyebrow}>Knowledge base</p>
          <h2>Built on EPR regulations and ReCircle&apos;s expertise</h2>
          <p className={styles.subtext}>
            The chatbot retrieves answers from multiple knowledge sources - not just a single
            document. It combines EPR regulation content, compliance FAQs, and ReCircle-specific
            information to give you the most relevant answer.
          </p>
        </div>
        <div className={styles.knowledgeGrid}>
          {knowledgeTiles.map((tile) => {
            const Icon = tile.icon;
            return (
              <article key={tile.title} className={styles.knowledgeTile}>
                <div className={styles.knowledgeHead}>
                  <Icon size={18} />
                  <h3 className={styles.knowledgeTitle}>{tile.title}</h3>
                </div>
                <p className={styles.knowledgeDescription}>{tile.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className={styles.stepsSection}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionEyebrow}>How to use it</p>
          <h2>Step by step</h2>
        </div>
        <div className={styles.stepsList}>
          {steps.map((step, index) => (
            <article
              key={step.number}
              className={`${styles.step} ${index % 2 === 1 ? styles.reversed : ""}`}
            >
              <div className={styles.stepText}>
                <div className={styles.stepNumber}>{step.number}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
              <div className={styles.stepVisual}>
                <img
                  src={`/screenshots/chatbot/step-${step.number}.png`}
                  alt={step.title}
                  className={styles.stepImage}
                />
              </div>
            </article>
          ))}
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

      <ExploreMore items={exploreItems} />

      <FooterStrip />
    </main>
  );
}
