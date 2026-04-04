import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api/axios';
import { Loader2, Users, FileText, X, MapPin, Search, ChevronLeft, ChevronRight, Phone, Mail, GraduationCap, Briefcase, Clock, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AllCandidates = () => {
    const navigate = useNavigate();
    const [candidates, setCandidates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalCandidates, setTotalCandidates] = useState(0);
    const limit = 10;

    const [selectedUser, setSelectedUser] = useState(null);
    const [showProfileModal, setShowProfileModal] = useState(false);

    const fetchCandidates = async (pageNumber = 1) => {
        setLoading(true);
        try {
            const { data } = await api.get(`/applications/admin/candidates?page=${pageNumber}&limit=${limit}`);
            if (data.success) {
                setCandidates(data.data);
                setTotalPages(data.pages);
                setPage(data.page);
                setTotalCandidates(data.total);
            }
        } catch (err) {
            console.error('Failed to fetch candidates', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCandidates(page);
    }, [page]);

    const updateStatus = async (appId, newStatus) => {
        try {
            await api.put(`/applications/${appId}/status`, { status: newStatus });
            setCandidates(prev => prev.map(app =>
                app._id === appId ? { ...app, status: newStatus } : app
            ));
        } catch (err) {
            alert('Failed to update status');
        }
    };

    const deleteApplication = async (appId) => {
        if (!window.confirm('Are you sure you want to permanently delete this application?')) return;
        try {
            await api.delete(`/applications/${appId}`);
            fetchCandidates(page); // Refresh list
        } catch (err) {
            alert('Failed to delete application');
        }
    };

    const handlePrevPage = () => {
        if (page > 1) setPage(page - 1);
    };

    const handleNextPage = () => {
        if (page < totalPages) setPage(page + 1);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                <div>
                    <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">All Candidates</h1>
                    <p className="text-lg text-slate-500 mt-2">Manage all applicants across your active job postings</p>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
                    <div className="bg-primary-50 p-3 rounded-xl text-primary-600">
                        <Users className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Total Active Candidates</p>
                        <p className="text-2xl font-black text-slate-900">{totalCandidates}</p>
                    </div>
                </div>
            </div>

            {/* Candidate Table */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden flex flex-col min-h-[500px]">
                <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center">
                    <h2 className="text-xl font-bold text-slate-900">Candidate Directory</h2>
                </div>
                
                {loading ? (
                    <div className="flex flex-col items-center justify-center py-20 flex-1">
                        <Loader2 className="w-10 h-10 text-primary-600 animate-spin mb-4" />
                        <p className="text-slate-500 font-medium">Loading candidate data...</p>
                    </div>
                ) : (
                    <>
                        <div className="overflow-x-auto text-left flex-1">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-slate-50 border-b border-slate-100">
                                        <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Candidate</th>
                                        <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Applied Job</th>
                                        <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Experience / Degree</th>
                                        <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Document</th>
                                        <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Status / Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50">
                                    {candidates.map((app) => (
                                        <tr key={app._id} className="hover:bg-slate-50/50 transition-colors">
                                            <td className="px-6 py-5">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 font-bold flex-shrink-0">
                                                        {app.user_id?.first_name?.[0]}{app.user_id?.last_name?.[0]}
                                                    </div>
                                                    <div>
                                                        <h3 className="font-bold text-slate-900 uppercase tracking-tight">{app.user_id?.first_name} {app.user_id?.last_name}</h3>
                                                        <div className="flex flex-col text-xs text-slate-500 mt-0.5">
                                                            <span className="flex items-center gap-1"><Mail className="w-3 h-3"/> {app.user_id?.email}</span>
                                                            <span className="flex items-center gap-1"><Phone className="w-3 h-3"/> {app.user_id?.phone}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-5">
                                                <p className="font-bold text-slate-900 text-sm">{app.job_id?.title}</p>
                                                <p className="text-xs text-slate-400">{app.job_id?.job_id} • {app.job_id?.role}</p>
                                            </td>
                                            <td className="px-6 py-5">
                                                <p className="text-sm font-medium">{app.experience_years || app.user_id?.experience_years} years</p>
                                                <p className="text-xs text-slate-400">{app.degree || app.user_id?.degree}</p>
                                            </td>
                                            <td className="px-6 py-5">
                                                {app.resume_url ? (
                                                    <a
                                                        href={app.resume_url}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="text-primary-600 text-sm font-bold hover:underline flex items-center gap-1"
                                                    >
                                                        <FileText className="w-4 h-4" /> CV / Resume
                                                    </a>
                                                ) : (
                                                    <span className="text-sm text-slate-400 italic">No Document</span>
                                                )}
                                            </td>
                                            <td className="px-6 py-5">
                                                <div className="flex flex-col gap-2">
                                                    <div className="flex gap-2 items-center">
                                                        <select
                                                            value={app.status}
                                                            onChange={(e) => updateStatus(app._id, e.target.value)}
                                                            className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border-none cursor-pointer focus:ring-2 focus:ring-primary-100 ${app.status === 'hired' ? 'bg-green-100 text-green-600' :
                                                                app.status === 'rejected' ? 'bg-red-100 text-red-600' :
                                                                    'bg-blue-100 text-blue-600'
                                                                }`}
                                                        >
                                                            <option value="applied">Applied</option>
                                                            <option value="shortlisted">Shortlisted</option>
                                                            <option value="interview">Interview</option>
                                                            <option value="hired">Hired</option>
                                                            <option value="rejected">Rejected</option>
                                                        </select>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <button
                                                            onClick={() => {
                                                                setSelectedUser(app.user_id);
                                                                setShowProfileModal(true);
                                                            }}
                                                            className="text-[10px] font-bold text-primary-600 hover:underline"
                                                        >
                                                            View Profile
                                                        </button>
                                                        <span className="text-slate-300">|</span>
                                                        <button
                                                            onClick={() => deleteApplication(app._id)}
                                                            className="text-[10px] font-bold text-red-500 hover:underline"
                                                        >
                                                            Delete
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                    {candidates.length === 0 && (
                                        <tr>
                                            <td colSpan="5" className="px-6 py-20 text-center text-slate-400">No candidates found for your postings.</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination */}
                        {totalPages > 0 && (
                            <div className="px-8 py-6 border-t border-slate-100 flex items-center justify-between bg-slate-50/50">
                                <p className="text-sm text-slate-500 font-medium">
                                    Showing <span className="font-bold text-slate-900">{((page - 1) * limit) + 1}</span> to <span className="font-bold text-slate-900">{Math.min(page * limit, totalCandidates)}</span> of <span className="font-bold text-slate-900">{totalCandidates}</span> candidates
                                </p>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={handlePrevPage}
                                        disabled={page === 1}
                                        className="p-2 rounded-lg border border-slate-200 text-slate-500 hover:bg-white hover:text-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors bg-transparent"
                                    >
                                        <ChevronLeft className="w-5 h-5" />
                                    </button>
                                    <span className="text-sm font-bold text-slate-900 px-4 py-2 border border-slate-200 rounded-lg bg-white">
                                        Page {page} of {totalPages}
                                    </span>
                                    <button
                                        onClick={handleNextPage}
                                        disabled={page === totalPages}
                                        className="p-2 rounded-lg border border-slate-200 text-slate-500 hover:bg-white hover:text-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors bg-transparent"
                                    >
                                        <ChevronRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>

            {/* Detailed User Profile Modal (Similar to AdminDashboard) */}
            <AnimatePresence>
                {showProfileModal && selectedUser && (
                    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden text-left"
                        >
                            <div className="bg-primary-600 p-8 text-white relative">
                                <button
                                    onClick={() => setShowProfileModal(false)}
                                    className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                                <div className="flex items-center gap-6">
                                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center border-2 border-white/30 text-3xl font-bold">
                                        {selectedUser.first_name?.[0]}{selectedUser.last_name?.[0]}
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold">{selectedUser.first_name} {selectedUser.last_name}</h2>
                                        <div className="flex flex-col gap-1 mt-1">
                                            <p className="text-primary-100 flex items-center gap-2">
                                                <Mail className="w-4 h-4" /> {selectedUser.email}
                                            </p>
                                            <p className="text-primary-100 flex items-center gap-2">
                                                <Phone className="w-4 h-4" /> {selectedUser.phone}
                                            </p>
                                        </div>
                                        <p className="text-sm mt-2 opacity-80 flex items-center gap-1">
                                            <MapPin className="w-4 h-4" /> {selectedUser.location_city}{selectedUser.location_state ? `, ${selectedUser.location_state}` : ''}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 space-y-8 max-h-[70vh] overflow-y-auto">
                                <section>
                                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <GraduationCap className="w-4 h-4 text-primary-600" />
                                        Education
                                    </h3>
                                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                                        <p className="font-bold text-slate-900">{selectedUser.degree || 'No Degree Listed'}</p>
                                        <p className="text-sm text-slate-600">{selectedUser.university}</p>
                                    </div>
                                </section>

                                <section>
                                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <Briefcase className="w-4 h-4 text-primary-600" />
                                        Experience Details
                                    </h3>
                                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                                        <p className="font-bold text-slate-900">{selectedUser.experience_years} Years</p>
                                    </div>
                                </section>

                                <section>
                                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-primary-600" />
                                        Technical Skills
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        <p className="text-sm text-slate-400 italic">Please visit full candidate profile for detailed skills and CTC data.</p>
                                    </div>
                                </section>
                                
                                <div className="pt-4 border-t border-slate-100">
                                    <Link
                                        to={`/admin/user/${selectedUser._id || selectedUser}`}
                                        className="w-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-all font-bold py-3 flex items-center justify-center gap-2 rounded-xl text-sm"
                                    >
                                        <Globe className="w-4 h-4" /> View Full App Profile Deep Dive
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AllCandidates;
