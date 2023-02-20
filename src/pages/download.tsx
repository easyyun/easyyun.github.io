import React from 'react';
import Layout from '@theme/Layout';

import styles from './index.module.css';

export default function Download() {
  return (
    <Layout title="客户端下载" description="PDF云转换客户端下载，支持Mac、Windows、微信小程序">
      <main className="heroBanner_src-pages-index-module">
        <section className="section--odd" id="download">
          <div className="container text--center container-fluid">
            <h2 className="text--center">PDF云转换客户端下载</h2>
            <img src="/img/client.png" width="800" />
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
      </main>
    </Layout>
  );
}