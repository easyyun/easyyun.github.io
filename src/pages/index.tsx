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
        <div className="row">
          <div className="col  col--1">
          </div>
          <div className="col  col--2">
            <img src="/static/xcx/gongzhonghao.jpg" title="PDF云转换公众号"/>
            <p>扫一扫关注我们</p>
          </div>
          <div className="col  col--8 text--left">
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">企业级PDF API，基于K8S，坚如磬石
              <br /> PDF云转换客户端，小程序、Mac和Windows全舞台，无广告，使用不限次数</p>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/guide/getting-started">
                快速开始
              </Link>
            </div>
          </div>
          <div className="col  col--1">
          </div>
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
        <section>
          <div className="container text--center container-fluid">
            <h2 className="text--center">PDF云转换客户端下载</h2>
            <div className="row features_src-components-HomepageFeatures-styles-module">
              <div className="col col--4">
                <img src="img/xcx-m.svg" width="200"/>
                <h3>PDF云转换小程序</h3>
              </div>
              <div className="col col--4">
                <a href="https://www.easyyun.com/r.html?r=mac" target="_blank" title="PDF云转换 Mac版本下载">
                <img src="img/mac.svg" />
                <h3  className="appDownText">PDF云转换 Mac版本 <img src="img/download.svg"  width="30" /></h3>
                </a>
              </div>
              <div className="col col--4">
                <a href="https://www.easyyun.com/r.html?r=windows" target="_blank" title="PDF云转换 Windows版本下载">
                <img src="img/windows.svg" />
                <h3  className="appDownText">PDF云转换 Windows版本 <img src="img/download.svg" width="30" /></h3>
                </a>
              </div>

            </div>
          </div>
        </section>
        <section>
          <div className="container tech-container">
            <h2 className="text--center">技术栈</h2>
            <div className="row features_src-components-HomepageFeatures-styles-module">

              <div className="col">
                <img src="img/tech/mysql.svg" title="mysql" />
              </div>
              <div className="col">
                <img src="img/tech/ubuntu.svg" title="ubuntu"  />
              </div>
              <div className="col">
                <img src="img/tech/kubernetes.svg" title="kubernetes"  />
              </div>
              <div className="col">
                <img src="img/tech/istioio.svg" title="istioio" />
              </div>
              <div className="col">
                <img src="img/tech/redis.svg" title="redis" />
              </div>
              <div className="col">
                <img src="img/tech/docker.svg" title="docker" />
              </div>
              <div className="col">
                <img src="img/tech/golang.svg" title="golang" />
              </div>
              <div className="col">
                <img src="img/tech/nginx.svg" title="nginx" />
              </div>
              <div className="col">
                <img src="img/tech/reactjs.svg" title="reactjs" />
              </div>
              <div className="col">
                <img src="img/tech/vuejs.svg" title="vuejs" />
              </div>              
              <div className="col">
                <img src="img/tech/electronjs.svg" title="electronjs" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
