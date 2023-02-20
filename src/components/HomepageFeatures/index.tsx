import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Http协议',
    Svg: require('@site/static/img/http.svg').default,
    description: (
      <>
        不限定开发语言，Java、PHP、Golang、Python、Ruby、Node、C#通通可以用。
      </>
    ),
  },
  {
    title: '简单快速',
    Svg: require('@site/static/img/code.svg').default,
    description: (
      <>
        云端API处理，告别安装各种软件，不占计算机资源，开发者新手、高手都可以完成。
      </>
    ),
  },
  {
    title: '稳定',
    Svg: require('@site/static/img/stable.svg').default,
    description: (
      <>
        已稳定提供2000+万次PDF API接口服务，已处理10+TB数据。
      </>
    ),
  },
];


function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (

    <section className={styles.features}>
      <div className="container">
        <h2 className="text--center">企业级PDF API</h2>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>

  );
}
