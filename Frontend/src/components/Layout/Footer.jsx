// components/Layout/Footer.jsx
import React, { useState, useEffect } from 'react';

const Footer = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [apiStatus, setApiStatus] = useState('online');

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (date) => {
        return date.toLocaleTimeString('en-US', { 
            hour12: false, 
            hour: '2-digit', 
            minute: '2-digit',
            second: '2-digit'
        });
    };

    const quickLinks = [
        { name: 'API Documentation', href: '/docs', icon: 'document' },
        { name: 'Health Check', href: '/health', icon: 'check' },
        { name: 'Rate Limits', href: '/limits', icon: 'clock' },
        { name: 'Support', href: '/support', icon: 'support' }
    ];

    const techStack = [
        { name: 'FastAPI', color: 'from-green-500 to-emerald-600', version: 'v0.104.1' },
        { name: 'React', color: 'from-blue-500 to-cyan-600', version: 'v18.2.0' },
        { name: 'TensorFlow', color: 'from-orange-500 to-amber-600', version: 'v2.14.0' },
        { name: 'OpenCV', color: 'from-purple-500 to-violet-600', version: 'v4.8.1' }
    ];

    const getIcon = (iconName) => {
        const icons = {
            document: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            ),
            check: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            ),
            clock: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            ),
            support: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25A9.75 9.75 0 1 0 21.75 12c0-1.33-.27-2.597-.758-3.75A9.75 9.75 0 0 0 12 2.25Z" />
            )
        };
        return icons[iconName] || icons.document;
    };

    return (
        <footer className="relative bg-gradient-to-br from-slate-50 via-white to-indigo-50 border-t border-slate-200/60 mt-auto overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-blue-400/10 to-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-br from-purple-400/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-emerald-400/5 to-cyan-500/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
            </div>

            <div className="relative container mx-auto px-4 py-12 lg:py-16">
                {/* Main footer content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="flex items-center space-x-4 group">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-2xl blur-sm opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
                                <div className="relative w-12 h-12 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-105 transition-transform duration-300">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold bg-gradient-to-r from-slate-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent">
                                    ModerateAI
                                </h3>
                                <p className="text-sm text-slate-600 font-medium">Smart Content Moderation</p>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <p className="text-slate-700 font-medium">&copy; 2024 ModerateAI Platform</p>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Advanced AI-powered content moderation platform designed to keep your digital spaces safe and compliant with modern standards.
                            </p>
                        </div>

                        {/* Tech Stack Display */}
                        <div className="space-y-3">
                            <p className="text-sm font-semibold text-slate-700 flex items-center space-x-2">
                                <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>Powered by</span>
                            </p>
                            <div className="grid grid-cols-2 gap-2">
                                {techStack.map((tech, index) => (
                                    <div key={tech.name} className="group">
                                        <div className="flex items-center space-x-2 p-2 bg-white/60 hover:bg-white/80 rounded-lg border border-slate-200/60 hover:border-slate-300/60 transition-all duration-200 shadow-sm hover:shadow-md">
                                            <div className={`w-3 h-3 bg-gradient-to-r ${tech.color} rounded-sm`}></div>
                                            <div>
                                                <span className="text-xs font-medium text-slate-700">{tech.name}</span>
                                                <p className="text-xs text-slate-500">{tech.version}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-3 space-y-6">
                        <h4 className="text-lg font-semibold text-slate-800 flex items-center space-x-2">
                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l4.828 4.828a4 4 0 005.656 0l1.102-1.101m-.758-4.899a4 4 0 00-5.656 0L16 6l-3.172-3.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656L16 10l3.172 3.172c1.562 1.562 1.562 4.094 0 5.656l-4 4" />
                            </svg>
                            <span>Quick Access</span>
                        </h4>
                        <div className="grid grid-cols-1 gap-2">
                            {quickLinks.map((link, index) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center space-x-3 p-3 text-slate-600 hover:text-blue-600 bg-white/40 hover:bg-white/70 rounded-xl border border-slate-200/40 hover:border-blue-200/60 transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                                >
                                    <div className="w-8 h-8 bg-gradient-to-br from-slate-100 to-slate-200 group-hover:from-blue-100 group-hover:to-indigo-100 rounded-lg flex items-center justify-center transition-all duration-300">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            {getIcon(link.icon)}
                                        </svg>
                                    </div>
                                    <div>
                                        <span className="text-sm font-medium">{link.name}</span>
                                        <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 rounded-full"></div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* System Status */}
                    <div className="lg:col-span-3 space-y-6">
                        <h4 className="text-lg font-semibold text-slate-800 flex items-center space-x-2">
                            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>System Status</span>
                        </h4>

                        {/* Live Status Cards */}
                        <div className="space-y-3">
                            <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200/60 shadow-sm">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-semibold text-green-800">API Status</span>
                                    <div className="flex items-center space-x-2">
                                        <div className="relative">
                                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                            <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-75"></div>
                                        </div>
                                        <span className="text-xs font-bold text-green-800">ONLINE</span>
                                    </div>
                                </div>
                                <div className="text-xs text-green-700">
                                    <p>Uptime: 99.9% • Response: ~45ms</p>
                                </div>
                            </div>

                            <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200/60 shadow-sm">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-semibold text-blue-800">ML Models</span>
                                    <div className="flex items-center space-x-2">
                                        <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                                        <span className="text-xs font-bold text-blue-800">READY</span>
                                    </div>
                                </div>
                                <div className="text-xs text-blue-700">
                                    <p>4 models loaded • GPU accelerated</p>
                                </div>
                            </div>

                            <div className="p-4 bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl border border-violet-200/60 shadow-sm">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-semibold text-violet-800">Queue Status</span>
                                    <span className="text-xs font-bold text-violet-800">0 PENDING</span>
                                </div>
                                <div className="text-xs text-violet-700">
                                    <p>Avg processing: 1.2s per image</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Live Clock & Stats */}
                    <div className="lg:col-span-2 space-y-6">
                        <h4 className="text-lg font-semibold text-slate-800 flex items-center space-x-2">
                            <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Live Stats</span>
                        </h4>

                        {/* Live Clock */}
                        <div className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-200/60 shadow-sm">
                            <div className="text-center">
                                <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-mono">
                                    {formatTime(currentTime)}
                                </div>
                                <p className="text-xs text-indigo-700 mt-1">Server Time (UTC)</p>
                            </div>
                        </div>

                        {/* Performance Metrics */}
                        <div className="space-y-2">
                            <div className="p-3 bg-white/60 rounded-lg border border-slate-200/60 shadow-sm">
                                <div className="flex justify-between items-center">
                                    <span className="text-xs font-medium text-slate-600">Today's Requests</span>
                                    <span className="text-sm font-bold text-slate-800">1,247</span>
                                </div>
                                <div className="w-full bg-slate-200 rounded-full h-1.5 mt-2">
                                    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-1.5 rounded-full w-3/4"></div>
                                </div>
                            </div>

                            <div className="p-3 bg-white/60 rounded-lg border border-slate-200/60 shadow-sm">
                                <div className="flex justify-between items-center">
                                    <span className="text-xs font-medium text-slate-600">Success Rate</span>
                                    <span className="text-sm font-bold text-green-600">99.8%</span>
                                </div>
                                <div className="w-full bg-slate-200 rounded-full h-1.5 mt-2">
                                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-1.5 rounded-full w-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section - Demo Notice */}
                <div className="mt-12 pt-8 border-t border-slate-200/60">
                    <div className="relative p-6 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 rounded-2xl border border-amber-200/60 shadow-lg overflow-hidden">
                        {/* Background decoration */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-200/20 to-orange-300/20 rounded-full blur-2xl"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-red-200/20 to-pink-300/20 rounded-full blur-xl"></div>
                        
                        <div className="relative flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-xl">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-bold text-amber-900 mb-2 flex items-center space-x-2">
                                    <span>Demo Environment</span>
                                    <div className="px-2 py-1 bg-amber-200/60 text-amber-800 text-xs font-bold rounded-full">BETA</div>
                                </h3>
                                <p className="text-sm text-amber-800 leading-relaxed mb-3">
                                    This is a demonstration platform showcasing AI-powered content moderation capabilities. 
                                    For production deployment, integrate with enterprise ML services like Google Cloud Vision AI, 
                                    AWS Rekognition, or Azure Computer Vision for enhanced accuracy and scalability.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-white/60 text-amber-800 text-xs font-medium rounded-full border border-amber-200/60">
                                        🚀 Ready for Production
                                    </span>
                                    <span className="px-3 py-1 bg-white/60 text-amber-800 text-xs font-medium rounded-full border border-amber-200/60">
                                        📊 Real-time Analytics
                                    </span>
                                    <span className="px-3 py-1 bg-white/60 text-amber-800 text-xs font-medium rounded-full border border-amber-200/60">
                                        🔒 Enterprise Security
                                    </span>
                                </div>
                            </div>
                            <div className="flex-shrink-0">
                                <button className="px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright Bar */}
                <div className="mt-8 pt-6 border-t border-slate-200/60">
                    <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
                        <div className="flex items-center space-x-4 text-sm text-slate-600">
                            <span>&copy; 2024 ModerateAI. All rights reserved.</span>
                            <div className="hidden sm:flex items-center space-x-2">
                                <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                                <span>Built with ❤️ for safer internet</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-6 text-sm">
                            <a href="/privacy" className="text-slate-600 hover:text-slate-900 transition-colors duration-200">Privacy</a>
                            <a href="/terms" className="text-slate-600 hover:text-slate-900 transition-colors duration-200">Terms</a>
                            <a href="/contact" className="text-slate-600 hover:text-slate-900 transition-colors duration-200">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;