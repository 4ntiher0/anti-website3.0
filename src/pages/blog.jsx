import React from "react";
import { motion } from "framer-motion";
import './blog.css';

export function Blog() {
  const posts = [
    {
      date: "June 16, 2023",
      text: "Life changing moment I lost/quit my long term 9.5-year job. The reasons are plenty and long winded but mostly bias since they are all in my viewpoint, none the less I am taking this as a positive omen to take some time to relax, study (it is crazy how much time advances when you become stagnate) and promote positive self-growth. I was literally dying from the stress of work and negative peer pressure. I feel better already and am ready to move forward with life!",
    },
    {
      date: "June 23, 2023",
      text: "Waves of Euphoria, distain and anxiety manifested and blinded the way I see; and yet still I am upset that I gave in too easily, gifted you my best as you said trust in me, and suddenly now your done what happen to we??? Is it weird that I miss you...",
    },
    {
      date: "June 30, 2023",
      text: "Just relax, sure yeah just relaxing....",
    },
    {
      date: "August 04, 2023",
      text: "July went well just spending time on myself. Picking back up on programming, its amazing how much has changed since (2010). I created a LLC to start a new business, and set a goal to have a website up a running. (Spoiler, goal accomplished)",
    },
    {
      date: "September 03, 2023",
      text: "August went well. I had a good lunch with a recent coworker of mine and a good phone conversation with another. Multiple past clients have been contacting me and I am feeling really good about my work ethics and how much of an impact my dedication truly produces.",
    },
    {
      date: "November 20, 2023",
      text: "Wow, hitting 39 feels like a milestone. It is a small victory, but will take it! The last few months have been incredibly productive. Ecstatic to share that the car is finally fully registered and back from the mechanic; what a huge relief! If curious, some photos have been uploaded; check them out. Lately, rediscovering oneself, finding that spark that makes life feel alive. Eager to reconnect with people and dive back into social interactions. There is a strong urge to visit and catch up with friends and family, looking forward to making those connections soon. Speaking of connections, planning a trip to visit my dad in SC. It has been a while, and what better time than Christmas and New Years to spend some quality moments together? Cannot wait to create new memories and simply enjoy each others company. As approaching the end of 2023, determined to finish the year on a high note. Gearing up to step into 2024 with a positive mindset and an open heart. Here is to embracing new adventures, welcoming fresh experiences, and making the most out of the upcoming year!",
    },
  ];

  return (
    <div className="section">
      <h2 className="blog-title">✨ Blog</h2>

      {posts.map((post, i) => (
        <motion.div
          key={i}
          className="post"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2, duration: 0.6 }}
          whileHover={{ scale: 1.02, boxShadow: "0px 4px 12px rgba(255,255,255,0.2)" }}
        >
          <p className="post-date">{post.date}</p>
          <p className="post-text">{post.text}</p>
        </motion.div>
      ))}
    </div>
  );
}

export default Blog;
