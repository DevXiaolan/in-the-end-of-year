import { Button, Col, Form, Input, Row } from 'antd';
import { InputProps } from 'antd/lib/input';
import React, { useState } from 'react';
import { Typography } from 'antd';
import styles from './index.less';

const TwoV = [
  '复盘', '赋能', '沉淀', '倒逼', '落地',
  '串联', '协同', '反哺', '兼容', '包装',
  '重组', '履约', '响应', '量化', '发力',
  '布局', '联动', '细分', '梳理', '输出',
  '加速', '共建', '支撑', '融合', '聚合',
  '解藕', '集成', '对齐', '对标', '对焦',
  '抓手', '拆解', '拉通', '抽象', '摸索',
  '提炼', '打通', '打透', '吃透', '迁移',
  '分发', '分层', '分装', '穿梭', '辐射',
  '围绕', '复用', '渗透', '扩展', '开拓'
];

const TwoN = [
  '漏斗', '中台', '闭环', '打法',
  '拉通', '纽带', '矩阵', '刺激',
  '规模', '场景', '聚焦', '维度',
  '格局', '形态', '生态', '话术',
  '体系', '认知', '玩法', '体感',
  '感知', '调性', '心智', '战役',
  '合力', '心力', '赛道', '因子',
  '模型', '载体', '横向', '通道',
  '补位', '链路', '试点'
];

const ThreeN = [
  '颗粒度', '感知度',
  '方法论', '组合拳',
  '引爆点', '点线面',
  '精细化', '差异化',
  '平台化', '结构化',
  '影响力', '耦合性',
  '易用性', '一致性',
  '端到端', '短平快'
];

const FourN = [
  '生命周期', '价值转化',
  '强化认知', '资源倾斜',
  '完善逻辑', '抽离透传',
  '复用打法', '商业模式',
  '快速响应', '定性定量',
  '关键路径', '去中心化',
  '结果导向', '垂直领域',
  '如何收口', '归因分析',
  '体验度量', '信息屏障'
];

const Comments = [
  '收获了长足的进步',
  '起到了非常明显的收效',
  '期待在下个年度见证起效',
  '引起了行业的重点关注',
  '对整体的推动作用不是十分明显',
  '下个年度同期就能彻底完成',
  '和年初定立的目标基本相符',
  '已经产生了非常明显的收益',
  '还需要在一些方向上做细节调整',
  '提前实现了往年同期目标',
  '希望可以协调其他部门参与进来',
  '在海外市场反响热烈',
];

const { Paragraph } = Typography;

interface ISeasons {
  name: string;
  s1: string;
  s2: string;
  s3: string;
  s4: string;
}

const DEFAULT_EVENTS: ISeasons = {
  name: '小蓝',
  s1: '吃饭',
  s2: '睡觉',
  s3: '打豆豆',
  s4: '写代码',
};


const Layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const InputProp: InputProps = {
  maxLength: 8,
  size: 'large',
  style: {
    maxWidth: '200px',
  },
};

const gen = (sessons: ISeasons) => {
  const { name, s1, s2, s3, s4 } = sessons;
  const content: React.ReactNode[] = [];
  const twoV = [...TwoV];
  const twoN = [...TwoN];
  const threeN = [...ThreeN];
  const fourN = [...FourN];
  const comments = [...Comments];
  const random = (arr: any[]) => {
    return Math.floor(Math.random() * arr.length);
  }

  const renderOne = (word: string) => {
    return (
      <>
        <p>
          {twoV.splice(random(twoV), 1)}<strong>{word}</strong>{twoN.splice(random(twoN), 1)}{threeN.splice(random(threeN), 1)}，{comments[random(comments)]}。
          {twoV.splice(random(twoV), 1)}<strong>{word}</strong>{twoN.splice(random(twoN), 1)}{fourN.splice(random(fourN), 1)}，{comments.splice(random(comments), 1)}。
        </p>
        <p>
          {twoV.splice(random(twoV), 1)}<strong>{word}</strong>{twoN.splice(random(twoN), 1)}{threeN.splice(random(threeN), 1)}，{comments[random(comments)]}。
          {twoV.splice(random(twoV), 1)}<strong>{word}</strong>{twoN.splice(random(twoN), 1)}{fourN.splice(random(fourN), 1)}，{comments.splice(random(comments), 1)}。
        </p>
      </>
    );
  }

  content.push(renderOne(s1));
  content.push(renderOne(s2));
  content.push(renderOne(s3));
  content.push(renderOne(s4));

  return (
    <Paragraph>
      <h3>{name} 2020 年度总结</h3>
      {
        content.map((ct, i) => (
          <p key={`P_${i}`} className={styles.sess}>
            <strong className={styles.sTitle}>第{['一', '二', '三', '四'][i]}季度：</strong>
            {ct}
          </p>
        ))
      }
    </Paragraph >
  );
};

export default () => {
  const [result, setResult] = useState(gen(DEFAULT_EVENTS));

  return (
    <Row className={styles.mgRow}>
      <Col xs={24} sm={24} md={12} className={styles.mgCol}>
        <Form
          initialValues={DEFAULT_EVENTS}
          onFinish={(values: ISeasons) => {
            setResult(gen(values));
          }}
          onFinishFailed={err => {
            console.log(err);
          }}
        >
          <Form.Item
            {...Layout}
            label="名字"
            name="name"
            rules={[{ required: true, message: '必填啊' }]}
          >
            <Input {...InputProp} />
          </Form.Item>
          <Form.Item
            {...Layout}
            label="第一季度关键词"
            name="s1"
            rules={[{ required: true, message: '必填啊' }]}
          >
            <Input {...InputProp} />
          </Form.Item>
          <Form.Item
            {...Layout}
            label="第二季度关键词"
            name="s2"
            rules={[{ required: true, message: '必填啊' }]}
          >
            <Input {...InputProp} />
          </Form.Item>
          <Form.Item
            {...Layout}
            label="第三季度关键词"
            name="s3"
            rules={[{ required: true, message: '必填啊' }]}
          >
            <Input {...InputProp} />
          </Form.Item>
          <Form.Item
            {...Layout}
            label="第四季度关键词"
            name="s4"
            rules={[{ required: true, message: '必填啊' }]}
          >
            <Input {...InputProp} />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              生成
            </Button>
          </Form.Item>
        </Form>
      </Col>
      <Col id="ct" xs={24} sm={24} md={12} className={styles.mgCol}>
        {result}
      </Col>
    </Row>
  );
};