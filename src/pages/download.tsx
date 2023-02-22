import React from 'react';
import Layout from '@theme/Layout';

import styles from './index.module.css';

export default function Download() {
  return (
    <Layout title="PDF云转换客户端下载" description="PDF云转换客户端下载，支持Mac、Windows、微信小程序">
      <main className="heroBanner_src-pages-index-module">
        <section className="section--odd" className="download-section">
          <div className="container text--center container-fluid">
            <h2 className="text--center">PDF云转换客户端下载</h2>
            <p>PDF云转换客户端，小程序、Mac和Windows全舞台，无广告，使用不限次数</p>
            <div className="row">
              <div className="col col--1"></div>
              <div className="col  col--5">
                <img src="/img/app.gif" title="App" />
              </div>
              <div className="col  col--4">
                <div className="down-list">
                  <a href="https://static.easyyun.com/r.html?r=mac" target="_blank" title="PDF云转换 Mac版本下载">
                    <img src="/img/mac.svg" width="60" />
                    <h3  className="appDownText">PDF云转换 Mac版本 <img src="/img/download.svg"  width="30" /></h3>
                  </a>
                </div>
                <div className="down-list">
                  <a href="https://static.easyyun.com/r.html?r=windows" target="_blank" title="PDF云转换 Windows版本下载">
                    <img src="/img/windows.svg" width="60" />
                    <h3  className="appDownText">PDF云转换 Windows版本 <img src="/img/download.svg" width="30" /></h3>
                  </a>  
                </div>
              </div>
              <div className="col col--2"></div>
            </div>
            
          </div>
        </section>
      </main>
    </Layout>
  );
}