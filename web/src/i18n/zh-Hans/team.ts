const translation = {
  addteam: {
    createteam: "创建应用",
    editteam: "编辑应用",
    apptype: "想要哪种应用类型？",
    nameandicon: "图标 & 名称",
    placeholderapp: "给你的应用取个名字",
    placeholderdescription: "输入应用的描述",
    description: "描述",
  },
  teamcard: {
    chatbot: {
      title: "聊天机器人",
      description: "基本的聊天机器人应用，单Agent，可以使用工具",
    },
    ragbot: {
      title: "知识库问答",
      description: "RAG应用，每次对话时可以从知识库中检索信息",
    },
    workflow: {
      title: "工作流应用",
      description: "以工作流的形式编排生成型应用，提供更多的自定义能力",
    },
    hagent: {
      title: "Hierarchical Muti-Agent",
      description:
        "Hierarchical类型的Muti-Agent，通常用于复杂任务分解和并行处理的场景",
    },
    sagent: {
      title: "Sequential Muti-Agent",
      description:
        "Sequential类型的Muti-Agent，通常用于任务分解和逐步执行的场景",
    },
  },
  teamsetting: {
    debugoverview: "调试预览",
    savedeploy: "发布",
    name: "名字",
    description: "描述",
    type: "类型",
    role: "角色",
    backstory: "背景故事",
    model: "模型",
    tools: "工具",
    knowledge: "知识库",
    chathistory: "聊天记录",
  },
  workflow: {
    nodes: {
      start: {
        title: "开始节点",
        initialInput: "初始输入",
        placeholder: "请输入初始值"
      },
      end: {
        title: "结束节点"
      },
      llm: {
        title: "语言模型",
        model: "模型",
        temperature: "温度",
        systemPrompt: "系统提示词",
        placeholder: "请输入系统提示词"
      },
      tool: {
        title: "工具",
        addTool: "添加工具",
        searchTools: "搜索工具...",
        noTools: "未选择工具",
        added: "已添加"
      },
      retrieval: {
        title: "知识检索",
        query: "查询",
        ragMethod: "RAG方法",
        database: "知识库",
        placeholder: "请输入查询内容",
        selectDatabase: "选择知识库",
        loading: "正在加载知识库...",
        error: "加载知识库失败",
        addKB: "添加知识库",
        removeKB: "移除知识库",
        noKB: "未选择知识库",
        searchKB: "搜索知识库...",
        added: "已添加",
        noDescription: "暂无描述",
        noResults: "未找到知识库"
      },
      classifier: {
        title: "意图识别",
        model: "模型",
        categories: "分类",
        category: "类别",
        addCategory: "添加类别",
        placeholder: "请输入类别名称"
      },
      crewai: {
        model:"模型",
        title: "多智能体",
        agents: "智能体",
        tasks: "任务",
        processType: "处理类型",
        sequential: "顺序执行",
        hierarchical: "层级执行",
        manager: "管理者配置",
        defaultManager: "默认管理者",
        customManager: "自定义管理者",
        addTaskDisabledMessage: "请先添加智能体并配置管理者（对于层级执行）",
        addTaskMessage: "添加新任务",
        agentModal: {
          title: "配置智能体",
          name: "智能体名称",
          role: "角色",
          goal: "目标",
          backstory: "背景故事",
          allowDelegation: "允许委派",
          tools: "工具",
          addTool: "添加工具",
          namePlaceholder: "输入唯一的智能体名称",
          rolePlaceholder: "例如：研究专家",
          goalPlaceholder: "智能体的主要目标",
          backstoryPlaceholder: "智能体的背景和专长",
          uniqueNameError: "智能体名称必须唯一"
        },
        taskModal: {
          title: "任务配置",
          name: "任务名称",
          description: "描述",
          assignAgent: "分配智能体",
          expectedOutput: "预期输出",
          namePlaceholder: "输入唯一的任务名称",
          descriptionPlaceholder: "任务描述",
          expectedOutputPlaceholder: "预期输出格式或描述",
          selectAgent: "选择智能体",
          uniqueNameError: "任务名称必须唯一"
        }
      }
    },
    common: {
      add: "添加",
      edit: "编辑",
      delete: "删除",
      save: "保存",
      cancel: "取消",
      search: "搜索",
      noResults: "未找到结果"
    },
    flowVisualizer: {
      shortcuts: {
        title: "快捷键",
        edgeType: "更改边类型",
        delete: "删除",
        info: {
          title: "信息",
          solidLine: "实线: 普通连接",
          dashedLine: "虚线: 条件连接"
        }
      },
      zoom: "缩放",
      debug: {
        title: "调试",
        loading: "加载中...",
        error: "错误",
        preview: "调试预览"
      },
      actions: {
        debug: "调试",
        deploy: "部署",
        apiKey: "API密钥",
        save: "保存",
        saving: "保存中..."
      },
      contextMenu: {
        delete: "删节点",
        error: {
          title: "无法删除节点",
          description: "无法删除{type}节点。"
        }
      }
    },
    nodeMenu: {
      title: "节点",
      plugins: "插件",
      loading: "加载工具中...",
      error: "加载工具失败"
    },
    variableSelector: {
      availableVariables: "可用变量",
      noVariables: "没有可用变量",
      placeholder: "在此处编写。使用 '/' 插入变量。"
    }
  }
};

export default translation;
