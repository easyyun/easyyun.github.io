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
    title: 'Http api',
    Svg: require('@site/static/img/http.svg').default,
    description: (
      <>
        不限定开发语言，http api协议，Java、PHP、Golang、Python、Ruby、Node、C#通通可以用，开发者新手、高手都可以完成。
      </>
    ),
  },
  {
    title: '快速、稳定',
    Svg: require('@site/static/img/code.svg').default,
    description: (
      <>
        云端API处理，秒级响应，告别安装各种软件，不占计算机资源，已稳定提供2000+万次PDF API接口服务，已处理10+TB数据。
      </>
    ),
  },
  {
    title: '功能特性+',
    Svg: require('@site/static/img/stable.svg').default,
    description: (
      <>
        PDF转图片、图片转PDF、PDF提取图片、PDF合并、PDF压缩、PDF拆分、PDF修剪、PDF加密、PDF旋转、PDF修复、Office转PDF、PDF转Word、PDF转PPT、电子发票合并打印、九宫格PDF、图片旋转
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
