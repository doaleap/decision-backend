🍜 玄学吃饭决策机
“今天吃什么？”—— 一个困扰无数人的终极问题。

简介
这是一个趣味决策工具。选择你的家乡、学校、体重状态、减肥意愿和星座运势，系统基于一套“完全不讲道理”的玄学规则，推荐今日美食。

在线体验：https://strong-brioche-052b32.netlify.app

核心功能
多人属性输入（9个地区、5个QS区间、12个星座）

玄学推荐算法（湖北人→热干面、清北→海底捞、摆烂→鸡公煲）

每次决策自动记录到云端数据库

支持历史记录查看和CSV导出

技术栈
模块	技术
前端	HTML/CSS/JS
部署	Netlify
后端	Node.js + Express   后端	Node.js   Express
数据库	Airtable
AI辅助	Cursor
数据收集
每次决策自动记录（推荐美食、用户属性、时间戳），目前已积累 XX 条记录。可用于分析地区偏好、星座与美食选择的相关性等。

快速体验
bash
git clone https://github.com/doaleap/decision-food.gitGit克隆https://github.com/doaleap/decision-food.git
cd decision-food
python -m http.server 8000Python -m http。server 8000
# 访问 http://localhost:8000
更新日志
2026.04.11：初始版本上线

2026.04.19：新增家乡美食池（湖北+热干面、糊汤粉）

2026.04.23：新增历史记录功能

License   许可证
MIT   用
