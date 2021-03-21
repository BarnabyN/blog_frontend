import React from "react";
import CustomNavbar from "../components/CustomNavbar";

export default function AboutPage() {
  return (
    <div className="reactWrapper">
      <CustomNavbar />
      <div className="content">
        <span>
          I studied Economics at Bath Uni and am now working as a portfolio
          trader at Morgan Stanley. Beyond that, I like to read about and work
          on things that interest me. The main ones are:
        </span>

        <ul>
          <li>Economics & Finance</li>
          <ul>
            <li>Factor investing and statistical risk premia</li>
            <li>Algorithmic trading</li>
            <li>Game theory</li>
            <li>Behavioural economics</li>
          </ul>
          <li>Computer Science</li>
          <ul>
            <li>Machine learning</li>
            <li>Website design</li>
            <li>Algorithms and their efficiency</li>
          </ul>
          <li>Psychology</li>
          <ul>
            <li>Behavioural biases</li>
            <li>How actions and habits affect our brain</li>
          </ul>
          <li>Chess</li>
          <li>Poker</li>
        </ul>

        <span>
          Since starting work my little projects have taken a backseat, but the
          main ones that I've worked on are:
        </span>
        <h3>Lectio</h3>
        <span>
          This is a website I am working on with a friend of mine. The goal is
          to make a <i>good</i> online reading tracker and review tool. Sites
          like goodreads are ancient in their architecture and must be improved
          upon, thats what we are trying to do.
        </span>
        <h3>Nanovert</h3>
        <span>
          I helped some friends create a company called{" "}
          <a
            href="https://nano-vert.co.uk/promotions"
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
          Beyond those above, I spent time tweaking this website to look
          different, or simply adding something to the front page.
        </span>
      </div>
    </div>
  );
}
