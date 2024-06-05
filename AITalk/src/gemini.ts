import { GoogleGenerativeAI } from '@google/generative-ai';

// 環境変数の読み込み
const API_KEY = 'APIキー';

// インスタンスの作成
const genAI = new GoogleGenerativeAI(API_KEY);

// Geminiモデルを使用してテキストを生成するための関数
async function startGemini(prompt: string) {
  // gemini-pro モデルを使用
  const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

  // プロンプトに基づいてテキストを生成
  const result = await model.generateContent(prompt);

  // 生成されたテキストを取得
  const response = await result.response;

  // テキストを抽出
  const text = response.text();

  return text;
}

export default startGemini;
