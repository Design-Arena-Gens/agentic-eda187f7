'use client';

import { useState } from 'react';
import { Sparkles, TrendingUp, Instagram, DollarSign, Shield, Zap } from 'lucide-react';

type RequestType = 'hook' | 'reel' | 'ad' | 'gumroad' | 'trend';

interface ContentOutput {
  goal: string;
  research: string;
  content: string;
  cta: string;
}

export default function Home() {
  const [requestType, setRequestType] = useState<RequestType>('hook');
  const [customPrompt, setCustomPrompt] = useState('');
  const [output, setOutput] = useState<ContentOutput | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ requestType, customPrompt }),
      });
      const data = await response.json();
      setOutput(data);
    } catch (error) {
      console.error('Error:', error);
    }
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 pt-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-10 h-10 text-purple-400" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">NextGen Templates</h1>
          </div>
          <p className="text-xl text-purple-200">AI Content Strategist for Aura Smart Link Pro</p>
          <p className="text-sm text-purple-300 mt-2">Professional • Futuristic • High-Energy</p>
        </div>

        {/* Product Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-purple-400/30">
            <Shield className="w-8 h-8 text-green-400 mb-2" />
            <h3 className="text-white font-semibold mb-1">Secure & Smart</h3>
            <p className="text-purple-200 text-sm">AI-driven link-in-bio template</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-purple-400/30">
            <TrendingUp className="w-8 h-8 text-blue-400 mb-2" />
            <h3 className="text-white font-semibold mb-1">Target Audience</h3>
            <p className="text-purple-200 text-sm">Creators, entrepreneurs, influencers</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-purple-400/30">
            <Zap className="w-8 h-8 text-yellow-400 mb-2" />
            <h3 className="text-white font-semibold mb-1">Premium Quality</h3>
            <p className="text-purple-200 text-sm">High-conversion content strategies</p>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-purple-400/30">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Sparkles className="w-6 h-6" />
              Content Request
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-purple-200 mb-3 font-semibold">Select Task Type:</label>
                <div className="grid grid-cols-1 gap-3">
                  <button
                    onClick={() => setRequestType('hook')}
                    className={`flex items-center gap-3 p-4 rounded-lg border-2 transition-all ${
                      requestType === 'hook'
                        ? 'border-purple-400 bg-purple-500/30'
                        : 'border-purple-400/30 bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    <TrendingUp className="w-5 h-5" />
                    <span className="text-white font-medium">Research Hook</span>
                  </button>
                  <button
                    onClick={() => setRequestType('reel')}
                    className={`flex items-center gap-3 p-4 rounded-lg border-2 transition-all ${
                      requestType === 'reel'
                        ? 'border-purple-400 bg-purple-500/30'
                        : 'border-purple-400/30 bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    <Instagram className="w-5 h-5" />
                    <span className="text-white font-medium">Instagram Reel Script</span>
                  </button>
                  <button
                    onClick={() => setRequestType('ad')}
                    className={`flex items-center gap-3 p-4 rounded-lg border-2 transition-all ${
                      requestType === 'ad'
                        ? 'border-purple-400 bg-purple-500/30'
                        : 'border-purple-400/30 bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    <Instagram className="w-5 h-5" />
                    <span className="text-white font-medium">Instagram Ad Copy</span>
                  </button>
                  <button
                    onClick={() => setRequestType('gumroad')}
                    className={`flex items-center gap-3 p-4 rounded-lg border-2 transition-all ${
                      requestType === 'gumroad'
                        ? 'border-purple-400 bg-purple-500/30'
                        : 'border-purple-400/30 bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    <DollarSign className="w-5 h-5" />
                    <span className="text-white font-medium">Gumroad Optimization</span>
                  </button>
                  <button
                    onClick={() => setRequestType('trend')}
                    className={`flex items-center gap-3 p-4 rounded-lg border-2 transition-all ${
                      requestType === 'trend'
                        ? 'border-purple-400 bg-purple-500/30'
                        : 'border-purple-400/30 bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    <Sparkles className="w-5 h-5" />
                    <span className="text-white font-medium">Trend Research</span>
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-purple-200 mb-2 font-semibold">
                  Custom Details (Optional):
                </label>
                <textarea
                  value={customPrompt}
                  onChange={(e) => setCustomPrompt(e.target.value)}
                  placeholder="Add specific requirements, themes, or focus areas..."
                  className="w-full p-4 rounded-lg bg-white/5 border border-purple-400/30 text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-400 min-h-[120px]"
                />
              </div>

              <button
                onClick={handleGenerate}
                disabled={loading}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-6 rounded-lg transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    Generate Content Strategy
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Output Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-purple-400/30">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Zap className="w-6 h-6" />
              Strategy Output
            </h2>

            {output ? (
              <div className="space-y-6">
                <div className="bg-green-500/20 border border-green-400/40 rounded-lg p-4">
                  <h3 className="text-green-300 font-bold mb-2 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    The Goal
                  </h3>
                  <p className="text-white text-sm leading-relaxed">{output.goal}</p>
                </div>

                <div className="bg-blue-500/20 border border-blue-400/40 rounded-lg p-4">
                  <h3 className="text-blue-300 font-bold mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    The Research
                  </h3>
                  <p className="text-white text-sm leading-relaxed whitespace-pre-line">{output.research}</p>
                </div>

                <div className="bg-purple-500/20 border border-purple-400/40 rounded-lg p-4">
                  <h3 className="text-purple-300 font-bold mb-2 flex items-center gap-2">
                    <Instagram className="w-4 h-4" />
                    The Content
                  </h3>
                  <div className="text-white text-sm leading-relaxed whitespace-pre-line">{output.content}</div>
                </div>

                <div className="bg-pink-500/20 border border-pink-400/40 rounded-lg p-4">
                  <h3 className="text-pink-300 font-bold mb-2 flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    The CTA
                  </h3>
                  <p className="text-white text-sm leading-relaxed font-semibold">{output.cta}</p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-[400px] text-purple-300">
                <Sparkles className="w-16 h-16 mb-4 opacity-50" />
                <p className="text-lg">Select a task and generate your content strategy</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-purple-300 text-sm">
          <p className="mb-2">🔒 Safety First: Manual upload strategies only • No automated bots</p>
          <p>Powered by AI • Built for NextGen Templates • Aura Smart Link Pro</p>
        </div>
      </div>
    </main>
  );
}
