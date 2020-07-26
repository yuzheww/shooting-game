/**
 * 游戏相关配置
 * @type {Object}
 */
var CONFIG = {
  status: 'start', // 游戏开始默认为开始中
  level: 1, // 游戏默认等级
  totalLevel: 10, // 总共8关
  numPerLine: 6, // 游戏默认每行多少个怪兽
  canvasPadding: 30, // 默认画布的间隔
  bulletSize: 10, // 默认子弹长度
  bulletSpeed: 9, // 默认子弹的移动速度
  enemySpeed: 1.5, // 默认敌人移动距离
  enemySize: 45, // 默认敌人的尺寸
  enemyGap: 10, // 默认敌人之间的间距
  enemyIcon: './img/enemy.png', // 怪兽的图像
  enemyBoomIcon: './img/boom.png', // 怪兽死亡的图像
  enemyDirection: 'right', // 默认敌人一开始往右移动
  planeSpeed: 8, // 默认飞机每一步移动的距离
  planeSize: {
      width: 45,
      height: 75
  }, // 默认飞机的尺寸,
  planeIcon: './img/plane.png'
};