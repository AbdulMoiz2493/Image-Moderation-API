// components/Layout/Header.jsx
import React, { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';

const Header = () => {
    const { isAuthenticated, isAdmin, logout } = useAuth();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                isScrolled 
                    ? 'bg-white/80 backdrop-blur-xl shadow-2xl border-b border-slate-200/50' 
                    : 'bg-gradient-to-r from-white/95 via-slate-50/95 to-indigo-50/95 backdrop-blur-lg shadow-lg'
            }`}>
                <div className="container mx-auto px-4 lg:px-6">
                    <div className="flex justify-between items-center h-16 lg:h-20">
                        {/* Logo/Brand - Enhanced with animations */}
                        <div className="flex items-center space-x-3 lg:space-x-4 group">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-2xl blur-sm opacity-70 group-hover:opacity-100 group-hover:blur-md transition-all duration-300 animate-pulse"></div>
                                <div className="relative w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <div className="absolute -top-1 -right-1 w-3 h-3 lg:w-4 lg:h-4 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full border-2 border-white shadow-lg">
                                    <div className="w-full h-full bg-gradient-to-br from-emerald-400 to-green-500 rounded-full animate-ping opacity-75"></div>
                                </div>
                            </div>
                            <div className="hidden sm:block">
                                <h1 className="text-lg lg:text-2xl font-bold bg-gradient-to-r from-slate-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent">
                                    ModerateAI
                                </h1>
                                <p className="text-xs lg:text-sm text-slate-600 font-medium flex items-center space-x-1 opacity-80">
                                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse"></div>
                                    <span>Smart Content Moderation</span>
                                </p>
                            </div>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-6">
                            {isAuthenticated ? (
                                <>
                                    {/* Status Indicators */}
                                    <div className="flex items-center space-x-3">
                                        <div className="relative group">
                                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                                            <div className="relative flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl border border-emerald-200/60 shadow-sm group-hover:shadow-md transition-all duration-300">
                                                <div className="relative">
                                                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                                    <div className="absolute inset-0 w-2 h-2 bg-emerald-400 rounded-full animate-ping opacity-75"></div>
                                                </div>
                                                <span className="text-sm font-semibold text-emerald-800">Active</span>
                                            </div>
                                        </div>
                                        
                                        {isAdmin && (
                                            <div className="relative group">
                                                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                                                <div className="relative flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl border border-violet-200/60 shadow-sm group-hover:shadow-md transition-all duration-300">
                                                    <svg className="w-4 h-4 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                                    </svg>
                                                    <span className="text-sm font-semibold text-violet-800">Admin</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex items-center space-x-3">
                                        <button className="relative group">
                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                                            <div className="relative flex items-center space-x-2 px-4 py-2 text-slate-700 hover:text-blue-700 bg-white/70 hover:bg-white/90 rounded-xl border border-slate-200/60 hover:border-blue-200 text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-lg transform hover:-translate-y-0.5 backdrop-blur-sm">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                                </svg>
                                                <span>Analytics</span>
                                            </div>
                                        </button>

                                        <button
                                            onClick={logout}
                                            className="relative group"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-rose-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                                            <div className="relative flex items-center space-x-2 px-4 py-2 text-slate-700 hover:text-red-700 bg-white/70 hover:bg-white/90 rounded-xl border border-slate-200/60 hover:border-red-200 text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-lg transform hover:-translate-y-0.5 backdrop-blur-sm">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                                </svg>
                                                <span>Logout</span>
                                            </div>
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                                    <div className="relative flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200/60 shadow-sm group-hover:shadow-md transition-all duration-300">
                                        <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                        <span className="text-sm font-semibold text-amber-800">Authentication Required</span>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden relative group p-2 rounded-xl bg-white/70 border border-slate-200/60 shadow-sm"
                        >
                            <div className="w-5 h-5 flex flex-col justify-center space-y-1">
                                <div className={`w-full h-0.5 bg-slate-600 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                                <div className={`w-full h-0.5 bg-slate-600 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
                                <div className={`w-full h-0.5 bg-slate-600 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
                            </div>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}>
                <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
                <div className={`absolute top-16 left-4 right-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200/60 transition-all duration-300 ${
                    isMobileMenuOpen ? 'translate-y-0 scale-100' : '-translate-y-8 scale-95'
                }`}>
                    <div className="p-6 space-y-4">
                        {isAuthenticated ? (
                            <>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl border border-emerald-200/60">
                                        <span className="text-sm font-medium text-emerald-800">Status: Active</span>
                                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                                    </div>
                                    {isAdmin && (
                                        <div className="flex items-center justify-between p-3 bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl border border-violet-200/60">
                                            <span className="text-sm font-medium text-violet-800">Admin Access</span>
                                            <svg className="w-4 h-4 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                            </svg>
                                        </div>
                                    )}
                                </div>

                                <div className="border-t border-slate-200 pt-4 space-y-2">
                                    <button className="w-full flex items-center space-x-3 p-3 text-slate-700 hover:bg-slate-50 rounded-xl transition-colors duration-200">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                        <span className="font-medium">Analytics</span>
                                    </button>
                                    <button 
                                        onClick={logout}
                                        className="w-full flex items-center space-x-3 p-3 text-red-700 hover:bg-red-50 rounded-xl transition-colors duration-200"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                        </svg>
                                        <span className="font-medium">Logout</span>
                                    </button>
                                </div>
                            </>
                        ) : (
                            <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200/60 text-center">
                                <svg className="w-8 h-8 text-amber-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                                <p className="text-sm font-semibold text-amber-800">Authentication Required</p>
                                <p className="text-xs text-amber-700 mt-1">Please login to access features</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Spacer for fixed header */}
            <div className="h-16 lg:h-20"></div>
        </>
    );
};

export default Header;