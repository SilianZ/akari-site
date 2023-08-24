import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate, {translate} from '@docusaurus/Translate';
const FeatureList = [
  {
    title: translate({message:'快速上手', id: 'homepage.feature.title.1'}),
    description: (
      <Translate id='homepage.feature.desc.1'>
        为了更好地部署机器人，我们提供了 Docker 镜像和 Poetry 包管理器。
      </Translate>
    ),
  },
  {
    title: translate({message:'多平台消息支持', id: 'homepage.feature.title.2'}),
    description: (
      <Translate id='homepage.feature.desc.2'>
        通过开发人员的共同努力，我们现在已经支持高达5个平台的消息类型。
      </Translate>
    ),
  },
  {
    title: translate({message:'模块拓展支持', id: 'homepage.feature.title.3'}),
    description: (
      <Translate id='homepage.feature.desc.3'>
        通过我们的教程文档，您可以在短时间内编写出一个属于您自己的模块！
      </Translate>
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
