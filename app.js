const roles = [
  {
    id: "gm",
    name: "总经理",
    agent: "总经理 Agent",
    focus: "目标、资源、范围、延期和最终验收决策。",
    effect: "只处理重大取舍，避免项目在争议中空转。"
  },
  {
    id: "pm",
    name: "项目经理",
    agent: "项目经理 Agent",
    focus: "计划拆解、邮件识别、准入判断、问题跟踪和升级。",
    effect: "把零散交付件变成可推进、可复检、可汇报的闭环。"
  },
  {
    id: "product",
    name: "产品经理",
    agent: "产品经理 Agent",
    focus: "需求、范围、流程、原型、验收标准和整改说明。",
    effect: "保证开发和测试拿到的是可实现、可验证的需求。"
  },
  {
    id: "dev",
    name: "开发经理",
    agent: "开发经理 Agent",
    focus: "技术方案、接口、数据库、代码封版、自测和门禁。",
    effect: "把需求落成可交付的软件，并提前暴露技术风险。"
  },
  {
    id: "test",
    name: "测试经理",
    agent: "测试经理 Agent",
    focus: "测试计划、测试用例、缺陷、回归和发布质量建议。",
    effect: "用证据说明是否可验收、可发布、可关闭。"
  }
];

const milestones = [
  { id: "M00", date: "2026-09-01", title: "项目启动会", owner: "pm", kind: "review", output: "启动会议纪要" },
  { id: "M01", date: "2026-09-03", title: "范围确认", owner: "product", kind: "task", output: "患者管理范围说明" },
  { id: "M02", date: "2026-09-06", title: "业务流程梳理", owner: "product", kind: "task", output: "业务流程图" },
  { id: "M03", date: "2026-09-09", title: "字段和主数据", owner: "product", kind: "task", output: "字段清单" },
  { id: "M04", date: "2026-09-13", title: "原型 V0.5", owner: "product", kind: "task", output: "原型 V0.5" },
  { id: "M05", date: "2026-09-14", title: "原型中期 Review", owner: "pm", kind: "review", output: "评审纪要" },
  { id: "M06", date: "2026-09-17", title: "原型整改 V0.8", owner: "product", kind: "risk", output: "整改后原型" },
  { id: "M07", date: "2026-09-21", title: "UI 设计", owner: "product", kind: "task", output: "UI 设计图" },
  { id: "M08", date: "2026-09-22", title: "设计终审", owner: "gm", kind: "review", output: "设计终审纪要" },
  { id: "M09", date: "2026-09-25", title: "详细设计初稿", owner: "product", kind: "task", output: "详细设计 V0.5" },
  { id: "M10", date: "2026-09-30", title: "研发阶段计划", owner: "dev", kind: "task", output: "研发阶段计划" },
  { id: "M11", date: "2026-10-03", title: "数据库设计", owner: "dev", kind: "task", output: "数据库设计文档" },
  { id: "M12", date: "2026-10-06", title: "接口设计", owner: "dev", kind: "task", output: "接口文档 V0.5" },
  { id: "M13", date: "2026-10-07", title: "技术设计 Review", owner: "pm", kind: "review", output: "研发设计评审纪要" },
  { id: "M14", date: "2026-10-14", title: "基础功能开发", owner: "dev", kind: "task", output: "新增、查询、编辑功能" },
  { id: "M15", date: "2026-10-15", title: "开发 Review 1", owner: "pm", kind: "review", output: "演示记录 1" },
  { id: "M16", date: "2026-10-21", title: "关键业务开发", owner: "dev", kind: "task", output: "合并、标签、状态、历史记录" },
  { id: "M17", date: "2026-10-22", title: "开发 Review 2", owner: "pm", kind: "review", output: "演示记录 2" },
  { id: "M18", date: "2026-10-27", title: "接口联调", owner: "dev", kind: "task", output: "接口联调记录" },
  { id: "M19", date: "2026-10-30", title: "自测和缺陷修复", owner: "dev", kind: "risk", output: "开发自测记录" },
  { id: "M20", date: "2026-10-31", title: "提测评审", owner: "pm", kind: "review", output: "提测评审纪要" },
  { id: "M21", date: "2026-11-03", title: "测试计划", owner: "test", kind: "task", output: "测试计划" },
  { id: "M22", date: "2026-11-07", title: "测试用例", owner: "test", kind: "task", output: "测试用例" },
  { id: "M23", date: "2026-11-08", title: "用例 Review", owner: "pm", kind: "review", output: "用例评审纪要" },
  { id: "M24", date: "2026-11-17", title: "功能测试", owner: "test", kind: "risk", output: "缺陷清单" },
  { id: "M25", date: "2026-11-18", title: "测试中期 Review", owner: "pm", kind: "review", output: "测试中期报告" },
  { id: "M26", date: "2026-11-22", title: "回归测试", owner: "test", kind: "task", output: "回归测试记录" },
  { id: "M27", date: "2026-11-23", title: "产品验收", owner: "product", kind: "review", output: "产品验收清单" },
  { id: "M28", date: "2026-11-24", title: "代码封版", owner: "dev", kind: "review", output: "代码封版记录" },
  { id: "M29", date: "2026-11-25", title: "文档封版", owner: "product", kind: "review", output: "设计、接口、数据库文档" },
  { id: "M30", date: "2026-11-27", title: "测试报告", owner: "test", kind: "review", output: "测试报告" },
  { id: "M31", date: "2026-11-28", title: "模块验收会", owner: "gm", kind: "review", output: "验收会议纪要" },
  { id: "M32", date: "2026-11-30", title: "复盘和移交", owner: "pm", kind: "task", output: "复盘纪要、移交清单" }
];

const stages = [
  {
    milestone: "M04",
    name: "产品原型提交审核",
    mailType: "提交邮件",
    owner: "product",
    publisher: "产品经理",
    route: "产品经理 → 项目经理 → 产品经理 Agent",
    state: "已接收 → 待需求检查 → 待准入判断",
    action: "检查原型是否覆盖范围、业务流程、字段、异常场景和验收标准。",
    output: "原型预检报告、缺口清单、是否召开 M05 Review 的建议。",
    summary: "第一封关键邮件证明产品交付件已经形成，系统根据 M04 和原型关键词触发需求检查。",
    skills: ["using-agent-skills", "spec-driven-development", "code-review-and-quality", "documentation-and-adrs"],
    gates: ["原型是否对应 M01-M03 的范围、流程和字段", "验收标准是否能被测试经理直接转成用例", "是否存在必须整改后才能开 Review 的问题"]
  },
  {
    milestone: "M05",
    name: "原型中期 Review 纪要审核",
    mailType: "会议纪要",
    owner: "pm",
    publisher: "项目经理",
    route: "项目经理 → 项目经理 Agent → 产品/开发/测试",
    state: "待准入判断 → 待整改",
    action: "检查 Review 纪要有没有结论、责任人、截止时间和复检触发条件。",
    output: "准入结论、整改项、责任人和 M06 复检要求。",
    summary: "现场会议结束后仍然要发邮件，纪要邮件才是后续自动跟踪的依据。",
    skills: ["using-agent-skills", "documentation-and-adrs", "planning-and-task-breakdown"],
    gates: ["每个问题是否有负责人", "是否写明整改截止时间", "是否说明整改后由谁复检"]
  },
  {
    milestone: "M06",
    name: "产品整改复检",
    mailType: "整改邮件",
    owner: "product",
    publisher: "产品经理",
    route: "产品经理 → 项目经理 → 产品经理 Agent",
    state: "待整改 → 待复检 → 已关闭",
    action: "对照 M05 整改项逐条复检，判断是否允许进入 UI 和详细设计。",
    output: "整改验收报告、关闭问题、未关闭问题和条件准入说明。",
    summary: "整改不是口头说完成，而是通过复检邮件证明问题已经被关闭。",
    skills: ["using-agent-skills", "spec-driven-development", "code-review-and-quality", "documentation-and-adrs"],
    gates: ["整改项是否逐条回应", "新增风险是否影响后续设计", "是否允许进入下一阶段"]
  },
  {
    milestone: "M12",
    name: "开发接口文档审核",
    mailType: "提交邮件",
    owner: "dev",
    publisher: "开发经理",
    route: "开发经理 → 项目经理 → 开发经理 Agent",
    state: "已接收 → 待技术检查 → 待准入判断",
    action: "检查接口、数据结构、错误码、权限、日志和异常处理是否完整。",
    output: "接口设计检查报告、技术风险、补齐项和技术设计 Review 建议。",
    summary: "10 月的重点从需求转向技术可实现性，接口文档是开发协作和测试准备的核心输入。",
    skills: ["using-agent-skills", "api-and-interface-design", "code-review-and-quality", "security-and-hardening"],
    gates: ["接口契约是否完整", "患者数据权限和日志是否覆盖", "异常和边界情况是否明确"]
  },
  {
    milestone: "M13",
    name: "技术设计 Review 结果审核",
    mailType: "评审结果",
    owner: "pm",
    publisher: "项目经理",
    route: "项目经理 → 项目经理 Agent → 开发经理",
    state: "待准入判断 → 条件准入",
    action: "把技术评审结论转化为可跟踪的任务、风险和截止时间。",
    output: "技术设计准入结论、风险清单和开发阶段行动项。",
    summary: "项目经理把评审会议结果结构化，避免技术问题在开发中失控。",
    skills: ["using-agent-skills", "documentation-and-adrs", "planning-and-task-breakdown"],
    gates: ["是否形成明确准入结论", "技术风险是否分级", "影响排期的事项是否升级"]
  },
  {
    milestone: "M20",
    name: "代码封版审核",
    mailType: "提交邮件",
    owner: "dev",
    publisher: "开发经理",
    route: "开发经理 → 项目经理 → 开发经理 Agent",
    state: "待技术检查 → 待准入判断 → 待测试检查",
    action: "检查代码封版说明、自测证据、构建结果和自动化门禁是否满足提测条件。",
    output: "提测准入报告、未关闭技术问题、是否进入测试阶段的建议。",
    summary: "这里是开发到测试的关口，没有自测和门禁证据就不能把风险转嫁给测试。",
    skills: ["using-agent-skills", "test-driven-development", "ci-cd-and-automation", "code-review-and-quality"],
    gates: ["自测证据是否充分", "构建和自动化门禁是否通过", "高风险缺陷是否关闭或明确接受"]
  },
  {
    milestone: "M22",
    name: "测试用例审核",
    mailType: "提交邮件",
    owner: "test",
    publisher: "测试经理",
    route: "测试经理 → 项目经理 → 测试经理 Agent",
    state: "已接收 → 待测试检查 → 待准入判断",
    action: "检查测试用例是否覆盖主流程、异常流、权限、数据边界和验收标准。",
    output: "用例检查报告、缺失场景和是否召开 M23 Review 的建议。",
    summary: "测试经理通过邮件提交用例，系统判断测试是否已经具备执行条件。",
    skills: ["using-agent-skills", "test-driven-development", "code-review-and-quality", "debugging-and-error-recovery"],
    gates: ["用例是否能追溯到需求和接口", "异常场景是否覆盖", "是否具备可执行数据和预期结果"]
  },
  {
    milestone: "M24",
    name: "缺陷报告审核",
    mailType: "提交邮件",
    owner: "test",
    publisher: "测试经理",
    route: "测试经理 → 项目经理 → 测试经理 Agent",
    state: "待测试检查 → 待整改",
    action: "判断缺陷等级、影响范围、复现条件、修复责任人和回归要求。",
    output: "缺陷质量报告、阻塞项、修复责任人和回归入口。",
    summary: "缺陷邮件不是简单报问题，而是触发开发修复、项目跟踪和总经理升级的依据。",
    skills: ["using-agent-skills", "test-driven-development", "code-review-and-quality", "debugging-and-error-recovery"],
    gates: ["缺陷是否可复现", "是否影响关键路径或验收", "是否有明确修复人和复检方式"]
  },
  {
    milestone: "M25",
    name: "阻塞问题修复复检",
    mailType: "整改邮件",
    owner: "pm",
    publisher: "开发经理 / 测试经理",
    route: "执行体 → 项目经理 → 项目经理 Agent",
    state: "待整改 → 待复检 → 待准入判断",
    action: "核对阻塞项是否修复、测试是否回归、是否仍影响 11 月验收。",
    output: "复检结论、关闭问题、未关闭风险和是否升级总经理。",
    summary: "这是质量和进度最容易失控的节点，复检邮件决定问题能否真正关闭。",
    skills: ["using-agent-skills", "debugging-and-error-recovery", "planning-and-task-breakdown", "test-driven-development"],
    gates: ["修复证据是否可靠", "回归结果是否覆盖原缺陷", "是否已经影响验收时间"]
  },
  {
    milestone: "M31",
    name: "总经理验收决策审核",
    mailType: "决策邮件",
    owner: "gm",
    publisher: "总经理",
    route: "总经理 → 项目经理 → 总经理 Agent",
    state: "待重大决策 → 已关闭",
    action: "根据测试报告、遗留风险、交付清单和业务目标做最终验收决策。",
    output: "验收结论、风险接受说明、移交要求和复盘任务。",
    summary: "最终决策必须通过邮件固化，否则无法形成项目关闭和后续追责依据。",
    skills: ["doubt-driven-development", "planning-and-task-breakdown", "shipping-and-launch", "documentation-and-adrs"],
    gates: ["是否满足成功标准", "遗留风险是否可接受", "是否允许关闭项目并进入移交"]
  },
  {
    milestone: "M32",
    name: "未归类邮件处理",
    mailType: "异常邮件",
    owner: "pm",
    publisher: "任意成员",
    route: "任意成员 → 项目经理 → 项目经理 Agent",
    state: "已接收 → 待准入判断",
    action: "识别缺失任务编号、缺失交付件或无法路由的邮件，并退回补充。",
    output: "邮件退回说明、补充格式要求和重新提交入口。",
    summary: "异常邮件也要被管理，防止信息散落在流程之外。",
    skills: ["using-agent-skills", "planning-and-task-breakdown"],
    gates: ["是否有任务编号", "是否有交付件名称", "是否能识别责任人和下一步动作"]
  }
];

const stateFlow = [
  { name: "已接收", desc: "系统读取邮件，识别任务编号、交付件和附件。" },
  { name: "角色检查", desc: "按交付件类型路由到产品、开发或测试 Agent。" },
  { name: "准入判断", desc: "项目经理 Agent 汇总结论，判断能否进下一节点。" },
  { name: "整改", desc: "不通过或条件通过时，责任人补齐材料或修复问题。" },
  { name: "复检", desc: "按原检查逻辑验证整改是否真正关闭。" },
  { name: "升级决策", desc: "范围、资源、延期、发布风险交给总经理。" },
  { name: "结果发布", desc: "通过邮件发出结论，状态更新并进入下一阶段。" }
];

let currentIndex = 0;
let timer = null;
let speed = 1;

const startDate = new Date("2026-09-01T00:00:00");
const endDate = new Date("2026-11-30T00:00:00");
const totalMs = endDate - startDate;

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function positionFor(dateString) {
  const date = new Date(`${dateString}T00:00:00`);
  return clamp(((date - startDate) / totalMs) * 100, 0, 100);
}

function getStageMilestoneIds(upToIndex) {
  return new Set(stages.slice(0, upToIndex + 1).map((stage) => stage.milestone));
}

function activeStage() {
  return stages[currentIndex];
}

function milestoneById(id) {
  return milestones.find((item) => item.id === id);
}

function renderSwimlanes() {
  const root = document.getElementById("swimlanes");
  root.innerHTML = "";

  roles.forEach((role) => {
    const lane = document.createElement("div");
    lane.className = "lane";

    const label = document.createElement("div");
    label.className = "lane-label";
    label.innerHTML = `<strong>${role.name}</strong><span>${role.focus}</span>`;

    const track = document.createElement("div");
    track.className = "lane-track";

    const laneItems = milestones.filter((item) => item.owner === role.id);
    const lastPositionBySlot = [-100, -100, -100];

    laneItems.forEach((item) => {
        const node = document.createElement("button");
        const left = positionFor(item.date);
        const slot = lastPositionBySlot.findIndex((position) => left - position > 6);
        const safeSlot = slot >= 0 ? slot : laneItems.indexOf(item) % 3;
        const topBySlot = [26, 50, 74];
        lastPositionBySlot[safeSlot] = left;
        node.type = "button";
        node.className = "node";
        node.dataset.id = item.id;
        node.dataset.kind = item.kind;
        node.style.left = `${left}%`;
        node.style.top = `${topBySlot[safeSlot]}%`;
        node.title = `${item.id} ${item.title}：${item.output}`;
        node.innerHTML = `<strong>${item.id}</strong><span>${item.title}</span>`;
        const stageIndex = stages.findIndex((stage) => stage.milestone === item.id);
        if (stageIndex >= 0) {
          node.addEventListener("click", () => {
            currentIndex = stageIndex;
            stopPlayback();
            render();
          });
        }
        track.appendChild(node);
      });

    lane.append(label, track);
    root.appendChild(lane);
  });
}

function renderRoleCards() {
  const root = document.getElementById("roleCards");
  root.innerHTML = "";
  const currentOwner = activeStage().owner;

  roles.forEach((role) => {
    const card = document.createElement("article");
    card.className = `role-card ${role.id === currentOwner ? "active" : ""}`;
    card.innerHTML = `
      <h3>${role.name}</h3>
      <p>${role.focus}</p>
      <small>${role.effect}</small>
    `;
    root.appendChild(card);
  });
}

function renderStageList() {
  const root = document.getElementById("stageList");
  root.innerHTML = "";

  stages.forEach((stage, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `stage-item ${index === currentIndex ? "active" : ""} ${index < currentIndex ? "done" : ""}`;
    button.innerHTML = `<span>${String(index + 1).padStart(2, "0")} / ${stage.milestone}</span><strong>${stage.name}</strong><span>${stage.mailType}</span>`;
    button.addEventListener("click", () => {
      currentIndex = index;
      stopPlayback();
      render();
    });
    root.appendChild(button);
  });
}

function renderFrequency() {
  const root = document.getElementById("frequencyBars");
  const data = [
    { month: "9月", count: 11, label: "需求/原型/设计节点" },
    { month: "10月", count: 10, label: "技术/开发/提测节点" },
    { month: "11月", count: 12, label: "测试/验收/移交节点" }
  ];
  const max = Math.max(...data.map((item) => item.count));
  root.innerHTML = "";

  data.forEach((item) => {
    const completed = milestones.filter((milestone) => {
      const month = new Date(`${milestone.date}T00:00:00`).getMonth() + 1;
      const stageMilestones = getStageMilestoneIds(currentIndex);
      return `${month}月` === item.month && stageMilestones.has(milestone.id);
    }).length;
    const row = document.createElement("div");
    row.className = "frequency-item";
    row.innerHTML = `
      <strong>${item.month}</strong>
      <div class="bar-track"><span style="width:${(item.count / max) * 100}%"></span></div>
      <span>${item.count} 节点</span>
      <small></small>
    `;
    row.querySelector("small").textContent = `${item.label}，演练已触发 ${completed} 个`;
    root.appendChild(row);
  });
}

function renderStateMachine() {
  const root = document.getElementById("stateMachine");
  root.innerHTML = "";
  const stage = activeStage();
  const activeStateIndex = stateFlow.findIndex((state) => stage.state.includes(state.name));

  stateFlow.forEach((state, index) => {
    const item = document.createElement("div");
    item.className = `state-step ${index === activeStateIndex ? "active" : ""}`;
    item.innerHTML = `<strong>${index + 1}</strong><div>${state.name}<span>${state.desc}</span></div>`;
    root.appendChild(item);
  });
}

function renderDetails() {
  const stage = activeStage();
  const milestone = milestoneById(stage.milestone);
  const role = roles.find((item) => item.id === stage.owner);

  document.getElementById("stageBadge").textContent = `阶段 ${String(currentIndex + 1).padStart(2, "0")} / ${stage.milestone}`;
  document.getElementById("mailTypeBadge").textContent = stage.mailType;
  document.getElementById("stageTitle").textContent = stage.name;
  document.getElementById("stageSummary").textContent = stage.summary;
  document.getElementById("stageOwner").textContent = `${role.name}，${role.agent}`;
  document.getElementById("stageAction").textContent = stage.action;
  document.getElementById("stageOutput").textContent = stage.output;
  document.getElementById("stageState").textContent = stage.state;
  document.getElementById("mailRoute").textContent = `${stage.route}，对应节点 ${milestone.id} ${milestone.title}`;

  const chips = document.getElementById("skillChips");
  chips.innerHTML = "";
  stage.skills.forEach((skill) => {
    const chip = document.createElement("span");
    chip.textContent = skill;
    chips.appendChild(chip);
  });

  const gates = document.getElementById("gateList");
  gates.innerHTML = "";
  stage.gates.forEach((gate) => {
    const item = document.createElement("li");
    item.textContent = gate;
    gates.appendChild(item);
  });
}

function renderNodes() {
  const completed = getStageMilestoneIds(currentIndex - 1);
  const active = activeStage().milestone;
  document.querySelectorAll(".node").forEach((node) => {
    node.classList.toggle("completed", completed.has(node.dataset.id));
    node.classList.toggle("active", node.dataset.id === active);
  });
}

function renderProgress() {
  const progress = ((currentIndex + 1) / stages.length) * 100;
  document.getElementById("progressLabel").textContent = `第 ${currentIndex + 1} / ${stages.length} 阶段`;
  document.getElementById("meterFill").style.width = `${progress}%`;
}

function render() {
  renderNodes();
  renderDetails();
  renderRoleCards();
  renderStageList();
  renderFrequency();
  renderStateMachine();
  renderProgress();
}

function stopPlayback() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
  document.getElementById("playBtn").textContent = "播放流程";
}

function startPlayback() {
  stopPlayback();
  document.getElementById("playBtn").textContent = "暂停";
  timer = setInterval(() => {
    if (currentIndex >= stages.length - 1) {
      stopPlayback();
      return;
    }
    currentIndex += 1;
    render();
  }, 1700 / speed);
}

function bindControls() {
  document.getElementById("playBtn").addEventListener("click", () => {
    if (timer) {
      stopPlayback();
    } else {
      startPlayback();
    }
  });

  document.getElementById("prevBtn").addEventListener("click", () => {
    currentIndex = clamp(currentIndex - 1, 0, stages.length - 1);
    stopPlayback();
    render();
  });

  document.getElementById("nextBtn").addEventListener("click", () => {
    currentIndex = clamp(currentIndex + 1, 0, stages.length - 1);
    stopPlayback();
    render();
  });

  document.getElementById("resetBtn").addEventListener("click", () => {
    currentIndex = 0;
    stopPlayback();
    render();
  });

  document.getElementById("speedRange").addEventListener("input", (event) => {
    speed = Number(event.target.value);
    document.getElementById("speedLabel").textContent = `${speed}x`;
    if (timer) {
      startPlayback();
    }
  });
}

renderSwimlanes();
bindControls();
render();
