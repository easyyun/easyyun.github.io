import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            快速开始
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}，${siteConfig.tagline}`}
      description={`${siteConfig.tagline}`}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <div className="container">
          <h2>技术栈</h2>
          <div className="row">
            <div className="col">
              <img src="img/tech/mysql.svg" />
            </div>
            <div className="col">
              <img src="img/tech/ubuntu.svg" />
            </div>
            <div className="col">
              <img src="img/tech/kubernetes.svg" />
            </div>
            <div className="col">
              <img src="img/tech/istioio.svg" />
            </div>
            <div className="col">
              <img src="img/tech/redis.svg" />
            </div>
            <div className="col">
              <img src="img/tech/docker.svg" />
            </div>
            <div className="col">
              <img src="img/tech/golang.svg" />
            </div>
            <div className="col">
              <img src="img/tech/nginx.svg" />
            </div>
            <div className="col">
              <img src="img/tech/vuejs.svg" />
            </div>
            <div className="col">
              <img src="img/tech/electronjs.svg" />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
