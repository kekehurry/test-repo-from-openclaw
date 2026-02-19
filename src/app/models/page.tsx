import GenericPage from '@/components/GenericPage';

export default function ModelsPage() {
  const contentSections = [
    {
      title: "模型概览",
      content: (
        <div>
          <p className="mb-4">
            OpenClaw 支持多种大语言模型，包括 OpenAI、Anthropic、Google、以及本地模型。
          </p>
          <p className="mb-4">
            您可以根据自己的需求选择合适的模型服务，每种模型都有其独特的特性和优势。
          </p>
        </div>
      )
    },
    {
      title: "支持的模型类型",
      content: (
        <div>
          <h3 className="text-xl font-semibold mt-6 mb-3">云端模型</h3>
          <ul className="list-disc pl-5 mb-4">
            <li><strong>OpenAI</strong>: GPT-4, GPT-4 Turbo, GPT-3.5 等</li>
            <li><strong>Anthropic</strong>: Claude 3 Opus, Claude 3 Sonnet, Claude 3 Haiku 等</li>
            <li><strong>Google</strong>: Gemini Pro, Gemini Ultra 等</li>
            <li><strong>Mistral</strong>: Mistral Large, Mistral Medium 等</li>
            <li><strong>Amazon Bedrock</strong>: 各种基础模型</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">本地模型</h3>
          <ul className="list-disc pl-5 mb-4">
            <li><strong>Ollama</strong>: 支持各种 Llama 模型和其他开源模型</li>
            <li><strong>LocalAI</strong>: 自托管的模型接口</li>
            <li><strong>vLLM</strong>: 高性能模型推理引擎</li>
          </ul>
        </div>
      )
    },
    {
      title: "模型配置",
      content: (
        <div>
          <p className="mb-4">
            您可以在配置文件中指定主要模型和备用模型，系统会根据可用性自动切换。
          </p>
          <pre className="bg-code-bg p-4 rounded-lg mb-4 overflow-x-auto">
            <code>{`{
  "primaryModel": "gpt-4-turbo",
  "fallbackModels": ["claude-3-sonnet", "gpt-3.5-turbo"],
  "temperature": 0.7,
  "maxTokens": 2048
}`}</code>
          </pre>
          <p>
            根据您的使用场景调整模型参数，以获得最佳效果。
          </p>
        </div>
      )
    },
    {
      title: "模型选择建议",
      content: (
        <div>
          <h3 className="text-xl font-semibold mt-6 mb-3">高性能场景</h3>
          <p className="mb-4">
            对于复杂任务和高精度需求，推荐使用 GPT-4 Turbo 或 Claude 3 Opus。
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">成本效益场景</h3>
          <p className="mb-4">
            对于简单查询和日常任务，GPT-3.5 Turbo 或 Claude 3 Haiku 是理想选择。
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">离线/隐私场景</h3>
          <p>
            使用本地模型如 Ollama 或 LocalAI 可以确保数据不离开您的环境。
          </p>
        </div>
      )
    }
  ];

  const quickLinks = [
    { text: "🚀 快速开始", href: "/getting-started" },
    { text: "⚙️ Gateway 配置", href: "/gateway" },
    { text: "🔧 配置文件详解", href: "/config" },
    { text: "💡 提示工程", href: "/skills" }
  ];

  return (
    <GenericPage
      title="模型配置"
      subtitle="选择适合您需求的大语言模型"
      contentSections={contentSections}
      quickLinks={quickLinks}
    />
  );
}