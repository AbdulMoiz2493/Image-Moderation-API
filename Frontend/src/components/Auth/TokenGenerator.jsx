// components/Auth/TokenGenerator.jsx
import React, { useState, useEffect } from 'react';
import { authAPI } from '../../services/api';

const TokenGenerator = () => {
    const [tokens, setTokens] = useState([]);
    const [usageStats, setUsageStats] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        loadTokens();
        loadUsageStats();
    }, []);

    const loadTokens = async () => {
        try {
            const tokenList = await authAPI.getTokens();
            setTokens(tokenList);
        } catch (err) {
            setError('Failed to load tokens: ' + (err.response?.data?.detail || err.message));
        }
    };

    const loadUsageStats = async () => {
        try {
            const stats = await authAPI.getUsageStats();
            setUsageStats(stats);
        } catch (err) {
            console.error('Failed to load usage stats:', err);
        }
    };

    const createToken = async (isAdmin) => {
        setIsLoading(true);
        setError('');
        setSuccess('');

        try {
            const newToken = await authAPI.createToken(isAdmin);
            setSuccess(`Token created successfully: ${newToken.token}`);
            await loadTokens();
            await loadUsageStats();
        } catch (err) {
            setError('Failed to create token: ' + (err.response?.data?.detail || err.message));
        } finally {
            setIsLoading(false);
        }
    };

    const deleteToken = async (token) => {
        if (!confirm('Are you sure you want to delete this token?')) return;

        try {
            await authAPI.deleteToken(token);
            setSuccess('Token deleted successfully');
            await loadTokens();
            await loadUsageStats();
        } catch (err) {
            setError('Failed to delete token: ' + (err.response?.data?.detail || err.message));
        }
    };

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        setSuccess('Token copied to clipboard!');
        setTimeout(() => setSuccess(''), 3000);
    };

    return (
        <div className="space-y-6 lg:space-y-8 p-4 sm:p-6 lg:p-8">
            {/* Main Admin Panel */}
            <div className="bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30 rounded-3xl shadow-2xl border border-slate-200/60 p-6 sm:p-8 lg:p-10 backdrop-blur-lg relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600"></div>
                </div>
                
                <div className="relative z-10">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8 lg:mb-10">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-indigo-500 via-purple-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl ring-4 ring-white/20">
                            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent mb-2">
                                Admin Control Panel
                            </h2>
                            <p className="text-slate-600 text-base sm:text-lg">Manage API tokens and monitor system usage with advanced analytics</p>
                        </div>
                    </div>

                    {/* Token Creation Section */}
                    <div className="mb-8 lg:mb-10 p-6 sm:p-8 bg-white/80 rounded-2xl border border-slate-200/50 backdrop-blur-sm shadow-lg">
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6 flex items-center">
                            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mr-3">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                            </div>
                            Create New Token
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                            <button
                                onClick={() => createToken(false)}
                                disabled={isLoading}
                                className="group relative overflow-hidden bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-600 text-white px-6 py-4 sm:py-5 rounded-xl hover:from-blue-600 hover:via-blue-700 hover:to-cyan-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center space-x-3"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                                <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                <span className="relative z-10 text-sm sm:text-base">Create User Token</span>
                            </button>
                            <button
                                onClick={() => createToken(true)}
                                disabled={isLoading}
                                className="group relative overflow-hidden bg-gradient-to-r from-red-500 via-red-600 to-pink-600 text-white px-6 py-4 sm:py-5 rounded-xl hover:from-red-600 hover:via-red-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center space-x-3"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                                <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                <span className="relative z-10 text-sm sm:text-base">Create Admin Token</span>
                            </button>
                        </div>
                    </div>

                    {/* Messages */}
                    {error && (
                        <div className="mb-6 text-red-800 text-sm sm:text-base bg-gradient-to-r from-red-50 via-red-100 to-red-50 p-4 sm:p-6 rounded-xl border border-red-200 shadow-lg animate-pulse">
                            <div className="flex items-start space-x-3">
                                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <p className="font-semibold mb-1">Error</p>
                                    <p>{error}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {success && (
                        <div className="mb-6 text-green-800 text-sm sm:text-base bg-gradient-to-r from-green-50 via-emerald-100 to-green-50 p-4 sm:p-6 rounded-xl border border-green-200 shadow-lg animate-pulse">
                            <div className="flex items-start space-x-3">
                                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <p className="font-semibold mb-1">Success</p>
                                    <p className="break-all">{success}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Usage Statistics */}
                    {usageStats && (
                        <div className="mb-8 lg:mb-10 p-6 sm:p-8 bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/30 rounded-2xl border border-slate-200/60 shadow-lg backdrop-blur-sm">
                            <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6 lg:mb-8 flex items-center">
                                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center mr-3">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                Usage Analytics
                            </h3>
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                                <div className="text-center p-4 sm:p-6 bg-white/80 rounded-xl shadow-lg border border-slate-200/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                                        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">{usageStats.total_calls}</p>
                                    <p className="text-xs sm:text-sm text-slate-600 font-semibold">Total API Calls</p>
                                </div>
                                <div className="text-center p-4 sm:p-6 bg-white/80 rounded-xl shadow-lg border border-slate-200/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                                        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                                        </svg>
                                    </div>
                                    <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-600 mb-1 sm:mb-2">{usageStats.unique_tokens}</p>
                                    <p className="text-xs sm:text-sm text-slate-600 font-semibold">Active Tokens</p>
                                </div>
                                <div className="text-center p-4 sm:p-6 bg-white/80 rounded-xl shadow-lg border border-slate-200/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                                        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-600 mb-1 sm:mb-2">
                                        {usageStats.calls_by_endpoint['/moderate/analyze'] || 0}
                                    </p>
                                    <p className="text-xs sm:text-sm text-slate-600 font-semibold">Images Analyzed</p>
                                </div>
                                <div className="text-center p-4 sm:p-6 bg-white/80 rounded-xl shadow-lg border border-slate-200/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                                        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                        </svg>
                                    </div>
                                    <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-600 mb-1 sm:mb-2">
                                        {Object.keys(usageStats.calls_by_endpoint).length}
                                    </p>
                                    <p className="text-xs sm:text-sm text-slate-600 font-semibold">Endpoints Used</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Token List */}
                    <div className="p-6 sm:p-8 bg-white/80 rounded-2xl border border-slate-200/50 backdrop-blur-sm shadow-lg">
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6 flex items-center justify-between flex-wrap gap-4">
                            <div className="flex items-center">
                                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                Active Tokens
                            </div>
                            <span className="px-4 py-2 bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 rounded-full text-sm font-bold shadow-sm">
                                {tokens.length} total
                            </span>
                        </h3>
                        <div className="space-y-4 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                            {tokens.map((token, index) => (
                                <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-6 bg-white rounded-xl border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300 group space-y-4 sm:space-y-0">
                                    <div className="flex-1 min-w-0">
                                        <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-3">
                                            <code className="text-sm font-mono bg-slate-100 px-4 py-3 rounded-lg border border-slate-200 group-hover:bg-slate-50 transition-colors break-all">
                                                {token.token.substring(0, 20)}...
                                            </code>
                                            <span className={`inline-flex px-4 py-2 text-xs font-bold rounded-full ${token.isAdmin
                                                ? 'bg-gradient-to-r from-red-100 to-red-200 text-red-800 border border-red-200'
                                                : 'bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 border border-blue-200'
                                                }`}>
                                                {token.isAdmin ? '👑 Admin Access' : '👤 User Access'}
                                            </span>
                                        </div>
                                        <p className="text-xs text-slate-500 font-medium">
                                            Created: {new Date(token.createdAt).toLocaleString()}
                                        </p>
                                    </div>
                                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                                        <button
                                            onClick={() => copyToClipboard(token.token)}
                                            className="px-4 py-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center justify-center space-x-2 border border-blue-200 hover:border-blue-300 shadow-sm hover:shadow-md"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                            </svg>
                                            <span>Copy Token</span>
                                        </button>
                                        <button
                                            onClick={() => deleteToken(token.token)}
                                            className="px-4 py-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center justify-center space-x-2 border border-red-200 hover:border-red-300 shadow-sm hover:shadow-md"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                            <span>Delete</span>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 8px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #f1f5f9;
                    border-radius: 8px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: linear-gradient(to bottom, #cbd5e1, #94a3b8);
                    border-radius: 8px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: linear-gradient(to bottom, #94a3b8, #64748b);
                }
            `}</style>
        </div>
    );
};

export default TokenGenerator;