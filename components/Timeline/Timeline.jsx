import styles from "./Timeline.module.scss";

export default function Home() {
  return (
    <div className={styles.timeline__section}>
      <div className={styles.timeline__item}>
        <p className={styles.section__header}>— Presently</p>
        <p className={styles.timeline__intro}>
          I am a UX Designer and Frontend Developer at
        </p>
        <h3 className={styles.timeline__header}>Politech</h3>
      </div>
      <div className={styles.timeline__item}>
        <p className={styles.section__header}>— In 2017</p>
        <p className={styles.timeline__intro}>
          I was a UX Designer and Frontend Developer at
        </p>
        <h3 className={styles.timeline__header}>MortarStone (since 2014)</h3>
        <p>
          <a href="https://mortarstone.com">MortarStone</a> is a donation
          analytics platform for nonprofit organizations and churches
        </p>
        <div class="timeline__links">
          <a
            href="https://medium.com/nick-ocampo/mortarstone-teams-redesign-689d3d06d017"
            tooltip="Case Study"
            target="_blank"
          >
            Teams view redesign
          </a>
          <a
            href="https://medium.com/nick-ocampo/data-visualization-with-d3-js-1dbce9f94b31"
            tooltip="Case Study"
            target="_blank"
          >
            Data viz with D3.js
          </a>
          <a
            href="https://docs.google.com/document/d/1CEGVMYzGAh57SMIr0YvFx-2H3XjHjOkEBC0MjCgtB7c"
            tooltip="Sample"
            target="_blank"
          >
            Design style guide
          </a>
        </div>
      </div>
    </div>
  );
}

// <p className={styles.timeline__intro}>I did some side freelance work for some large enterprises like</p>
//           <h3 className={styles.timeline__header}>
//             HPE and Cisco
//           </h3>
//           <p>I designed, prototyped and created dynamic reports built in AngularJS</p>
//           <div class="timeline__links">
//             <link-button wd-href="https://mainstayadvisor.com/go/cisco/tetration/" tooltip="Production app" flex="33" class="ng-isolate-scope flex-33">
//       <!-- ngIf: $ctrl.wdHref --><a class="link-button md-raised md-button ng-scope md-ink-ripple layout-row" ng-transclude="" ng-if="$ctrl.wdHref" layout="row" md-ink-ripple="#FFF000" href="https://mainstayadvisor.com/go/cisco/tetration/" target="_blank" aria-label="Production app" md-labeled-by-tooltip="md-tooltip-3">
//         <span class="link-button__label ng-scope flex-90" flex="90">
//           <ng-transclude>
//               Cisco Tetration ROI Tool
//             </ng-transclude>
//         </span>
//         <span class="link-button__icon ng-scope flex-10" flex="10">
//           <i class="fa fa-external-link"></i>
//         </span>
//
//       </a><!-- end ngIf: $ctrl.wdHref -->
//     </link-button>
//             <link-button wd-href="https://mainstayadvisor.com/go/hpe/hpe-security/" tooltip="Production app" flex="33" class="ng-isolate-scope flex-33">
//       <!-- ngIf: $ctrl.wdHref --><a class="link-button md-raised md-button ng-scope md-ink-ripple layout-row" ng-transclude="" ng-if="$ctrl.wdHref" layout="row" md-ink-ripple="#FFF000" href="https://mainstayadvisor.com/go/hpe/hpe-security/" target="_blank" aria-label="Production app" md-labeled-by-tooltip="md-tooltip-4">
//         <span class="link-button__label ng-scope flex-90" flex="90">
//           <ng-transclude>
//               HPE Security Assessment
//             </ng-transclude>
//         </span>
//         <span class="link-button__icon ng-scope flex-10" flex="10">
//           <i class="fa fa-external-link"></i>
//         </span>
//
//       </a><!-- end ngIf: $ctrl.wdHref -->
//     </link-button>
//           </div>
//         </div>
//         <div className={styles.timeline__item}>
//           <p className={styles.section__header}>
//             — In 2016
//           </p>
//           <p className={styles.timeline__intro}>I started a project called</p>
//           <h3 className={styles.timeline__header}>
//             BetaFish
//           </h3>
//           <p>BetaFish is a feedback gathering application that allows product designers to collect feedback on their products</p>
//           <div class="timeline__links">
//             <link-button wd-href="https://medium.com/nick-ocampo/designing-a-feedback-widget-499ad09a28a1" tooltip="Case Study" flex="33" class="ng-isolate-scope flex-33">
//       <!-- ngIf: $ctrl.wdHref --><a class="link-button md-raised md-button ng-scope md-ink-ripple layout-row" ng-transclude="" ng-if="$ctrl.wdHref" layout="row" md-ink-ripple="#FFF000" href="https://medium.com/nick-ocampo/designing-a-feedback-widget-499ad09a28a1" target="_blank" aria-label="Case Study" md-labeled-by-tooltip="md-tooltip-5">
//         <span class="link-button__label ng-scope flex-90" flex="90">
//           <ng-transclude>
//               BetaFish widget design
//             </ng-transclude>
//         </span>
//         <span class="link-button__icon ng-scope flex-10" flex="10">
//           <i class="fa fa-external-link"></i>
//         </span>
//
//       </a><!-- end ngIf: $ctrl.wdHref -->
//     </link-button>
//             <link-button wd-href="http://betafish.io" tooltip="Production website" flex="33" class="ng-isolate-scope flex-33">
//       <!-- ngIf: $ctrl.wdHref --><a class="link-button md-raised md-button ng-scope md-ink-ripple layout-row" ng-transclude="" ng-if="$ctrl.wdHref" layout="row" md-ink-ripple="#FFF000" href="http://betafish.io" target="_blank" aria-label="Production website" md-labeled-by-tooltip="md-tooltip-6">
//         <span class="link-button__label ng-scope flex-90" flex="90">
//           <ng-transclude>
//               BetaFish marketing website
//             </ng-transclude>
//         </span>
//         <span class="link-button__icon ng-scope flex-10" flex="10">
//           <i class="fa fa-external-link"></i>
//         </span>
//
//       </a><!-- end ngIf: $ctrl.wdHref -->
//     </link-button>
//             <!-- <link-button wd-href="https://www.wehatenick.com/" tooltip="Case Study" flex="33">
//               BetaFish product research
//             </link-button> -->
//           </div>
//         </div>
//         <div className={styles.timeline__item}>
//           <p className={styles.section__header}>
//             — In 2015
//           </p>
//           <p className={styles.timeline__intro}>I did some freelance design and development</p>
//           <h3 className={styles.timeline__header}>
//             Freelance work
//           </h3>
//           <div class="timeline__links layout-gt-sm-row layout-column" layout="column" layout-gt-sm="row">
//             <link-button wd-href="https://medium.com/nick-ocampo/sotelo-for-reno-brand-development-8c044cf9b548" tooltip="Case Study" flex="33" class="ng-isolate-scope flex-33">
//       <!-- ngIf: $ctrl.wdHref --><a class="link-button md-raised md-button ng-scope md-ink-ripple layout-row" ng-transclude="" ng-if="$ctrl.wdHref" layout="row" md-ink-ripple="#FFF000" href="https://medium.com/nick-ocampo/sotelo-for-reno-brand-development-8c044cf9b548" target="_blank" aria-label="Case Study" md-labeled-by-tooltip="md-tooltip-7">
//         <span class="link-button__label ng-scope flex-90" flex="90">
//           <ng-transclude>
//               Henry Sotelo brand development
//             </ng-transclude>
//         </span>
//         <span class="link-button__icon ng-scope flex-10" flex="10">
//           <i class="fa fa-external-link"></i>
//         </span>
//
//       </a><!-- end ngIf: $ctrl.wdHref -->
//     </link-button>
//             <link-button wd-href="https://thewolfdesign.smugmug.com/Logo-Design" tooltip="Gallery" flex="33" class="ng-isolate-scope flex-33">
//       <!-- ngIf: $ctrl.wdHref --><a class="link-button md-raised md-button ng-scope md-ink-ripple layout-row" ng-transclude="" ng-if="$ctrl.wdHref" layout="row" md-ink-ripple="#FFF000" href="https://thewolfdesign.smugmug.com/Logo-Design" target="_blank" aria-label="Gallery" md-labeled-by-tooltip="md-tooltip-8">
//         <span class="link-button__label ng-scope flex-90" flex="90">
//           <ng-transclude>
//               Logo designs for various clients
//             </ng-transclude>
//         </span>
//         <span class="link-button__icon ng-scope flex-10" flex="10">
//           <i class="fa fa-external-link"></i>
//         </span>
//
//       </a><!-- end ngIf: $ctrl.wdHref -->
//     </link-button>
//             <link-button wd-href="https://medium.com/nick-ocampo/top-speed-development-with-es6-angularjs-and-nodejs-ad059a81f60b" tooltip="Case Study" flex="33" class="ng-isolate-scope flex-33">
//       <!-- ngIf: $ctrl.wdHref --><a class="link-button md-raised md-button ng-scope md-ink-ripple layout-row" ng-transclude="" ng-if="$ctrl.wdHref" layout="row" md-ink-ripple="#FFF000" href="https://medium.com/nick-ocampo/top-speed-development-with-es6-angularjs-and-nodejs-ad059a81f60b" target="_blank" aria-label="Case Study" md-labeled-by-tooltip="md-tooltip-9">
//         <span class="link-button__label ng-scope flex-90" flex="90">
//           <ng-transclude>
//               Need 2 Speed Registration App
//             </ng-transclude>
//         </span>
//         <span class="link-button__icon ng-scope flex-10" flex="10">
//           <i class="fa fa-external-link"></i>
//         </span>
//
//       </a><!-- end ngIf: $ctrl.wdHref -->
//     </link-button>
//           </div>
//         </div>
//         <div className={styles.timeline__item}>
//           <p className={styles.section__header}>
//             — In 2014
//           </p>
//           <p className={styles.timeline__intro}>I was a product manager at an agency</p>
//           <h3 className={styles.timeline__header}>
//             KPS3 (since 2013)
//           </h3>
//           <p>KPS3 is a digital marketing agency where I primarily focused on product strategy, analytics, SEO and project management</p>
//           <div class="timeline__links">
//             <link-button wd-href="http://kps3.com/" tooltip="Company website" flex="33" class="ng-isolate-scope flex-33">
//       <!-- ngIf: $ctrl.wdHref --><a class="link-button md-raised md-button ng-scope md-ink-ripple layout-row" ng-transclude="" ng-if="$ctrl.wdHref" layout="row" md-ink-ripple="#FFF000" href="http://kps3.com/" target="_blank" aria-label="Company website" md-labeled-by-tooltip="md-tooltip-10">
//         <span class="link-button__label ng-scope flex-90" flex="90">
//           <ng-transclude>
//               KPS3.com
//             </ng-transclude>
//         </span>
//         <span class="link-button__icon ng-scope flex-10" flex="10">
//           <i class="fa fa-external-link"></i>
//         </span>
//
//       </a><!-- end ngIf: $ctrl.wdHref -->
//     </link-button>
//           </div>
//         </div>
//         <div className={styles.timeline__item}>
//           <p className={styles.section__header}>
//             — In 2013
//           </p>
//           <p className={styles.timeline__intro}>I was a webmaster</p>
//           <h3 className={styles.timeline__header}>
//             University of Nevada (since 2012)
//           </h3>
//           <p>Managed website and built an employee database system</p>
//         </div>
//         <div className={styles.timeline__item}>
//           <p className={styles.section__header}>
//             — In 2012
//           </p>
//           <p className={styles.timeline__intro}>I was a database administator</p>
//           <h3 className={styles.timeline__header}>
//             University of Nevada (since 2011)
//           </h3>
//           <p>Developed and managed a student-advisor database system</p>
//         </div>
//       </div>
