import React from "react";
import CustomNavbar from "../components/CustomNavbar";

export default function AboutPage() {
  return (
    <div className="reactWrapper">
      <CustomNavbar />
      <div className="content">
        <span>
          It's commonly said that explaining something helps you learn it, so
          you could say I'm selfishly using the this blog and its reader(s) for
          my own benefit. However, I prefer to think of it as an interested
          observer's perspective on how things work. I'll most likely focus my
          writing on the below topics.
        </span>

        <ul>
          <li>
            Economics & Finance - Mainly factor investing, statistical risk
            premia, systematic trading and behavioural economics
          </li>

          <li>
            Computer Science - Machine learning, website design, algorithm
            design and general programming problems
          </li>

          <li>
            Psychology - Behavioural biases and how both actions and habits
            affect our brain
          </li>

          <li>Chess</li>
          <li>Poker</li>
        </ul>

        <span>
          Since starting work my little projects have taken a backseat, but the
          main ones that I've worked on are:
        </span>
        <h3>Libry</h3>
        <span>
          This is a website I am working on with a friend of mine. The goal is
          to make a <i>good</i> online reading tracker and review tool. Sites
          like goodreads are ancient in their architecture and must be improved
          upon, thats what we are trying to do. You can follow the development
          on the{" "}
          <a
            href="https://github.com/barney-n/libry-frontend"
            target="_blank"
            className="link"
          >
            github page
          </a>
          .
        </span>
        <h3>Nanovert</h3>
        <span>
          I helped some friends create a company called{" "}
          <a
            href="https://www.nanovert.co.uk/"
            target="_blank"
            className="link"
          >
            nanovert
          </a>{" "}
          that allows 'nano-influencers' to get discount on things by posting
          social media stories of what they bought. I built the first iteration
          of the web app that companies used to log the visits of influencers.
          I'm not involved anymore.
        </span>
        <h3>This website</h3>
        <span>
          Beyond those above, I spend time writing essays, tweaking code and
          improving designs on my website.
        </span>
      </div>
    </div>
  );
}
