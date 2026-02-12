import { useState } from 'react'

const AdminPanel = ({ isOpen, onClose }) => {
    const [activeTab, setActiveTab] = useState('profile')

    const tabs = [
        { id: 'profile', label: '👤 Profile', icon: '👤' },
        { id: 'projects', label: '📁 Projects', icon: '📁' },
        { id: 'experience', label: '💼 Experience', icon: '💼' },
        { id: 'settings', label: '⚙️ Settings', icon: '⚙️' },
    ]

    return (
        <div className={`admin-panel ${isOpen ? 'open' : ''}`}>
            <div className="admin-header">
                <h2 className="admin-title">🔐 Admin Panel</h2>
                <button className="admin-close" onClick={onClose}>×</button>
            </div>

            <div style={{ marginBottom: '24px' }}>
                <div style={{
                    display: 'flex',
                    gap: '8px',
                    background: 'var(--bg-tertiary)',
                    padding: '4px',
                    borderRadius: '12px'
                }}>
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            style={{
                                flex: 1,
                                padding: '10px',
                                background: activeTab === tab.id ? 'var(--gradient-neon)' : 'transparent',
                                color: activeTab === tab.id ? 'var(--bg-primary)' : 'var(--text-secondary)',
                                border: 'none',
                                borderRadius: '10px',
                                cursor: 'pointer',
                                fontSize: '0.85rem',
                                fontWeight: '500',
                                transition: 'all 0.2s ease'
                            }}
                        >
                            {tab.icon}
                        </button>
                    ))}
                </div>
            </div>

            <div style={{ color: 'var(--text-secondary)' }}>
                {activeTab === 'profile' && (
                    <div>
                        <h3 style={{ marginBottom: '16px', color: 'var(--text-primary)' }}>Edit Profile</h3>
                        <div className="form-group">
                            <label className="form-label">Profile Photo</label>
                            <div style={{
                                width: '100px',
                                height: '100px',
                                borderRadius: '50%',
                                background: 'var(--gradient-neon)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '2rem',
                                marginBottom: '8px'
                            }}>
                                📷
                            </div>
                            <button className="btn btn-secondary" style={{ fontSize: '0.85rem', padding: '8px 16px' }}>
                                Upload New Photo
                            </button>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Display Name</label>
                            <input type="text" className="form-input" defaultValue="Hamid Ali" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Job Title</label>
                            <input type="text" className="form-input" defaultValue="Java Backend Developer" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Bio</label>
                            <textarea className="form-textarea" defaultValue="Crafting robust, scalable backend systems..." style={{ minHeight: '100px' }} />
                        </div>
                        <button className="btn btn-primary" style={{ width: '100%' }}>
                            Save Changes
                        </button>
                    </div>
                )}

                {activeTab === 'projects' && (
                    <div>
                        <h3 style={{ marginBottom: '16px', color: 'var(--text-primary)' }}>Manage Projects</h3>
                        <button className="btn btn-primary" style={{ width: '100%', marginBottom: '16px' }}>
                            + Add New Project
                        </button>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {['E-Commerce Platform', 'Chat Application', 'Payment Gateway', 'Task Manager'].map((project, i) => (
                                <div key={i} style={{
                                    padding: '16px',
                                    background: 'var(--bg-tertiary)',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                    <span>{project}</span>
                                    <div style={{ display: 'flex', gap: '8px' }}>
                                        <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem' }}>✏️</button>
                                        <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem' }}>🗑️</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'experience' && (
                    <div>
                        <h3 style={{ marginBottom: '16px', color: 'var(--text-primary)' }}>Manage Experience</h3>
                        <button className="btn btn-primary" style={{ width: '100%', marginBottom: '16px' }}>
                            + Add Experience
                        </button>
                        <p>Edit your work history and achievements here.</p>
                    </div>
                )}

                {activeTab === 'settings' && (
                    <div>
                        <h3 style={{ marginBottom: '16px', color: 'var(--text-primary)' }}>Settings</h3>
                        <div className="form-group">
                            <label className="form-label">Theme</label>
                            <select className="form-input" style={{ cursor: 'pointer' }}>
                                <option>Dark (Default)</option>
                                <option>Light</option>
                                <option>System</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Animation Speed</label>
                            <select className="form-input" style={{ cursor: 'pointer' }}>
                                <option>Normal</option>
                                <option>Fast</option>
                                <option>Slow</option>
                                <option>Disabled</option>
                            </select>
                        </div>
                        <div style={{
                            padding: '16px',
                            background: 'rgba(234, 179, 8, 0.1)',
                            border: '1px solid rgba(234, 179, 8, 0.3)',
                            borderRadius: '12px',
                            marginTop: '24px'
                        }}>
                            <p style={{ color: '#eab308', fontSize: '0.9rem' }}>
                                ⚠️ This is a concept admin panel. In production, this would require secure authentication.
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default AdminPanel
