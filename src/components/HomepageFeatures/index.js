import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '快速上手',
    description: (
      <>
        为了更好地部署机器人，我们提供了 Docker 镜像和 Poetry 包管理器。
      </>
    ),
  },
  {
    title: '多平台消息支持',
    description: (
      <>
        通过开发人员的共同努力，我们现在已经支持高达5个平台的消息类型。
      </>
    ),
  },
  {
    title: '模块拓展支持',
    description: (
      <>
        通过我们的教程文档，您可以在短时间内编写出一个属于您自己的模块！
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      </div>
      <div className="text--center padding-horiz--md">
        <h3 className='text--center'>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
