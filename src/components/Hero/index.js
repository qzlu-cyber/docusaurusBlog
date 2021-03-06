import React from "react";

import { Player } from "@lottiefiles/react-lottie-player";
import { useTrail, animated } from "react-spring";
import Translate, { translate } from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Link from "@docusaurus/Link";

import Button from "../Button";

import HeroMain from "./img/hero_main.svg";
import BilibiliIcon from "@site/static/icons/bilibili.svg";
import CSDNIcon from "@site/static/icons/csdn.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faWeixin,
} from "@fortawesome/free-brands-svg-icons";
import useBaseUrl from "@docusaurus/useBaseUrl";

import useFollowers from "./useFollowers";

import styles from "./styles.module.css";

function Hero() {
  const {
    // 当前语言
    i18n: { currentLocale },
  } = useDocusaurusContext();

  // Get followers
  const followers = useFollowers();

  // animation
  const animatedTexts = useTrail(5, {
    from: { opacity: 0, transform: "translateY(3em)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: {
      mass: 3,
      friction: 45,
      tension: 460,
    },
  });

  return (
    <animated.div className={styles.hero}>
      <div className={styles.bloghome__intro}>
        <animated.div style={animatedTexts[0]} className={styles.hero_text}>
          <Translate description='hero greet'>Hello! </Translate>
        </animated.div>
        <animated.p style={animatedTexts[1]}>
          <Translate
            id='homepage.hero.text'
            description='hero text'
            values={{
              blogs: (
                <Link to='#homepage_blogs'>
                  <Translate
                    id='hompage.hero.text.blog'
                    description='Blog link label'
                  >
                    技术、
                  </Translate>
                </Link>
              ),
              football: (
                <Link to='/football'>
                  <Translate
                    id='hompage.hero.text.football'
                    description='football'
                  >
                    足球、
                  </Translate>
                </Link>
              ),
              ideas: (
                <Link to='/lifestyle'>
                  <Translate
                    id='hompage.hero.text.idea'
                    description='Idea link label'
                  >
                    人生
                  </Translate>
                </Link>
              ),
            }}
          >
            {`{blogs}{football}{ideas}`}
          </Translate>
        </animated.p>
        {/* {currentLocale === "zh-CN" && (
          <animated.p style={animatedTexts[3]}>
            <Translate id="homepage.qqgroup1" description="qq group1">
              QQ 1 群：644722908
            </Translate>
            <br />
            <Translate id="homepage.qqgroup2" description="qq group2">
              QQ 2 群：1004912565
            </Translate>
          </animated.p>
        )} */}
        <SocialLinks animatedProps={animatedTexts[4]} />
        <animated.div style={animatedTexts[2]}>
          {/* <Button
            isLink
            href={translate({
              id: "homepage.follow.link.href",
              message:
                "https://space.bilibili.com/302954484?from=search&seid=1788147379248960737",
              description: "social link bilibili or twitter",
            })}
          >
            <Translate description='follow me btn text'>去B站关注</Translate>
            <Translate
              id='homepage.followers'
              description='followers'
              values={{ count: (Math.round(followers) / 10000).toFixed(1) }}
            >
              {" {count} 万"}
            </Translate>
          </Button> */}
        </animated.div>
      </div>

      <HeroMainImage />
      {/* <animated.div
      className="bloghome__scroll-down"
      style={animatedBackground}
    >
      <button>
        <ArrowDown />
      </button>
    </animated.div> */}
    </animated.div>
  );
}

function SocialLinks({ animatedProps, ...props }) {
  // const { isDarkTheme } = useThemeContext();
  return (
    <animated.div className={styles.social__links} style={animatedProps}>
      {/* <a href='https://space.bilibili.com/302954484'>
        <BilibiliIcon />
      </a> */}
      {/* <a href='https://www.linkedin.com/in/zxuqian/'>
        <FontAwesomeIcon icon={faLinkedin} size='lg' />
      </a> */}
      <a href='https://github.com/qzlu-cyber'>
        <FontAwesomeIcon icon={faGithub} size='lg' />
      </a>
      {/* <a href='https://blog.csdn.net/fengqiuzhihua'>
        <CSDNIcon />
      </a> */}
      {/* <div className={`dropdown ${styles.dropdown} dropdown--hoverable`}>
        <FontAwesomeIcon icon={faWeixin} size='lg' />
        <img
          width='50%'
          className={`dropdown__menu ${styles.dropdown__menu}`}
          src={useBaseUrl("/img/publicQR.webp")}
        />
      </div> */}
    </animated.div>
  );
}

function HeroMainImage() {
  return (
    <div className={styles.bloghome__image}>
      {/* <HeroMain /> */}
      <Player
        autoplay
        loop
        src={require("./lf30_editor_qjn01291.json")}
        style={{ height: "80%", width: "80%" }}
      />
      <Player
        autoplay
        loop
        src={require("./lf30_editor_svapzdhj.json")}
        style={{
          height: "10%",
          width: "10%",
          position: "absolute",
          right: "20%",
          top: "90%",
        }}
      />
    </div>
  );
}

export default Hero;
