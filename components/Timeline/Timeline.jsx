import styles from "./Timeline.module.scss";
import TimelineItem from "../TimelineItem/TimelineItem";

export default function Timeline() {
  return (
    <section className={styles.timeline}>
      <TimelineItem
        endYear={false}
        startYear={2017}
        intro="I am Head of Product at Politech"
        companyName="Politech"
      />
      <TimelineItem
        endYear={2017}
        startYear={2014}
        intro="I was a UX Designer and Frontend Developer at"
        companyName="MortarStone"
      >
        <p>
          <a href="https://mortarstone.com">MortarStone</a> is a donation
          analytics platform for nonprofit organizations and churches
        </p>
        <div className={styles.timeline__links}>
          <a
            href="https://medium.com/nick-ocampo/mortarstone-teams-redesign-689d3d06d017"
            tooltip="Case study"
            target="_blank"
            alt="Teams view redesign"
          >
            Teams view redesign
          </a>
          <a
            href="https://medium.com/nick-ocampo/data-visualization-with-d3-js-1dbce9f94b31"
            tooltip="Case study"
            target="_blank"
            alt="Data viz with D3.js"
          >
            Data viz with D3.js
          </a>
          <a
            href="https://docs.google.com/document/d/1CEGVMYzGAh57SMIr0YvFx-2H3XjHjOkEBC0MjCgtB7c"
            tooltip="Sample"
            target="_blank"
            alt="Design style guide"
          >
            Design style guide
          </a>
        </div>
      </TimelineItem>
      <TimelineItem
        endYear={2017}
        startYear={2014}
        intro="I ran my own freelance design and development business"
        companyName="Design Freelance Work"
      >
        <p>
          I designed, prototyped and created dynamic reports built in AngularJS
          for enterprises like Cisco and HPE
        </p>
        <div className={styles.timeline__links}>
          <a
            href="https://mainstayadvisor.com/go/cisco/tetration/"
            tooltip="Production app"
            target="_blank"
            alt="Cisco Tetration ROI Tool"
          >
            Cisco Tetration ROI Tool
          </a>
          <a
            href="https://mainstayadvisor.com/go/hpe/hpe-security/"
            tooltip="Production app"
            target="_blank"
            alt="HPE Security Assessment"
          >
            HPE Security Assessment
          </a>
        </div>
        <p>I started a product called BetaFish</p>
        <p>
          BetaFish is a feedback gathering application that allows product
          designers to collect feedback on their products
        </p>
        <div className={styles.timeline__links}>
          <a
            href="https://medium.com/nick-ocampo/designing-a-feedback-widget-499ad09a28a1"
            tooltip="Case study"
            target="_blank"
            alt="BetaFish widget design"
          >
            BetaFish widget design
          </a>
          <a
            href="http://betafish.io"
            tooltip="Marketing website"
            target="_blank"
            alt="BetaFish marketing website"
          >
            BetaFish marketing website
          </a>
        </div>
        <div className={styles.timeline__links}>
          <p>
            I made custom web development and branding for several smaller
            freelance clients
          </p>
          <a
            href="https://medium.com/nick-ocampo/sotelo-for-reno-brand-development-8c044cf9b548"
            tooltip="Case study"
            target="_blank"
            alt="Henry Sotelo Campaign brand development"
          >
            Henry Sotelo Campaign brand development
          </a>
          <a
            href="https://thewolfdesign.smugmug.com/Logo-Design"
            tooltip="Logo gallery"
            target="_blank"
            alt="Logo design for various clients"
          >
            Logo design for various clients
          </a>
          <a
            href="https://medium.com/nick-ocampo/top-speed-development-with-es6-angularjs-and-nodejs-ad059a81f60b"
            tooltip="Case Study"
            target="_blank"
            alt="Need 2 Speed Registration App"
          >
            Need 2 Speed Registration App
          </a>
        </div>
      </TimelineItem>
      <TimelineItem
        endYear={2014}
        startYear={2013}
        companyName="KPS3"
        intro="I was a product manager at a digital services agency"
      >
        <p>
          KPS3 is a digital marketing agency where I primarily focused on
          product strategy, analytics, SEO and project management
        </p>
        <div className={styles.timeline__links}>
          <a
            href="https://kps3.com"
            tooltip="Website"
            target="_blank"
            alt="KPS3"
          >
            KPS3
          </a>
        </div>
      </TimelineItem>
      <TimelineItem
        endYear={2013}
        startYear={2011}
        companyName="University of Nevada"
        intro="I was a webmaster"
      >
        <p>Managed website and built an employee database system</p>
      </TimelineItem>
    </section>
  );
}
