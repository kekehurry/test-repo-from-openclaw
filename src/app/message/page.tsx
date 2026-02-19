import GenericPage from '@/components/GenericPage';

export default function MessagePage() {
  const contentSections = [
    {
      title: "消息系统概览",
      content: (
        <div>
          <p className="mb-4">
            OpenClaw 的消息系统负责处理所有传入和传出的消息，支持多通道、多格式的消息处理。
          </p>
          <p>
            消息系统是 OpenClaw 的核心组件之一，它接收来自各个通道的消息并将其传递给适当的处理器。
          </p>
        </div>
      )
    },
    {
      title: "消息处理流程",
      content: (
        <div>
          <h3 className="text-xl font-semibold mt-6 mb-3">接收消息</h3>
          <p className="mb-4">
            消息通过不同通道（如微信、Telegram、邮件等）进入系统，每个通道有独立的消息解析器。
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">消息路由</h3>
          <p className="mb-4">
            系统根据消息内容、发送者身份和上下文决定如何处理该消息。
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">AI 处理</h3>
          <p className="mb-4">
            将消息内容传递给 AI 模型进行分析和响应生成。
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">响应发送</h3>
          <p>
            将 AI 生成的响应发送回原始通道。
          </p>
        </div>
      )
    },
    {
      title: "消息格式",
      content: (
        <div>
          <p className="mb-4">
            OpenClaw 使用统一的消息格式来处理来自不同通道的消息：
          </p>
          <pre className="bg-code-bg p-4 rounded-lg mb-4 overflow-x-auto">
            <code>{`{
  "id": "msg-unique-id",
  "channel": "telegram|wechat|email|discord",
  "senderId": "user-identifier",
  "senderName": "用户名",
  "timestamp": "2023-12-01T10:00:00Z",
  "content": "消息内容",
  "contentType": "text|image|file|voice",
  "context": {
    "conversationId": "对话ID",
    "parentId": "父消息ID（如果有）"
  },
  "rawData": "原始通道数据"
}`}</code>
          </pre>
        </div>
      )
    },
    {
      title: "消息中间件",
      content: (
        <div>
          <h3 className="text-xl font-semibold mt-6 mb-3">过滤器</h3>
          <p className="mb-4">
            可以配置消息过滤器来阻止特定内容或用户的消息。
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">预处理器</h3>
          <p className="mb-4">
            在消息到达 AI 之前对消息进行预处理，例如语言检测或内容清理。
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">后处理器</h3>
          <p>
            在 AI 响应生成后，对响应进行后期处理，例如格式化或添加品牌信息。
          </p>
        </div>
      )
    }
  ];

  const quickLinks = [
    { text: "🚀 快速开始", href: "/getting-started" },
    { text: "💬 频道设置", href: "/channels" },
    { text: "🧠 模型配置", href: "/models" },
    { text: "💡 技能(Skills)", href: "/skills" }
  ];

  return (
    <GenericPage
      title="消息系统"
      subtitle="处理和管理系统消息"
      contentSections={contentSections}
      quickLinks={quickLinks}
    />
  );
}