import React from 'react';
import { LayoutDashboard, Users, Building2, Settings, LogOut } from 'lucide-react';

const Sidebar = ({ currentView, setCurrentView }) => {
    return (
        <div className="sidebar">
            <div style={{ padding: '32px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                    width: '40px', height: '40px',
                    borderRadius: '12px',
                    background: 'var(--accent-gradient)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'white', fontWeight: 'bold', fontSize: '1.2rem'
                }}>
                    RH
                </div>
                <h2 style={{ color: 'white', margin: 0, fontSize: '1.5rem' }}>Portal<span className="text-gradient">HR</span></h2>
            </div>

            <nav style={{ flex: 1, padding: '0 16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <SidebarItem icon={<LayoutDashboard size={20} />} label="Dashboard" active={currentView === 'dashboard'} onClick={() => setCurrentView('dashboard')} />
                <SidebarItem icon={<Users size={20} />} label="Empleados" active={currentView === 'employees'} onClick={() => setCurrentView('employees')} />
                <SidebarItem icon={<Building2 size={20} />} label="Departamentos" active={currentView === 'departments'} onClick={() => setCurrentView('departments')} />
                <SidebarItem icon={<Settings size={20} />} label="Configuración" active={currentView === 'settings'} onClick={() => setCurrentView('settings')} />
            </nav>

            <div style={{ padding: '24px 16px', borderTop: '1px solid var(--border-light)' }}>
                <SidebarItem icon={<LogOut size={20} />} label="Cerrar Sesión" active={false} onClick={() => { }} />
            </div>
        </div>
    );
};

const SidebarItem = ({ icon, label, active, onClick }) => {
    return (
        <div style={{
            display: 'flex', alignItems: 'center', gap: '12px',
            padding: '12px 16px',
            borderRadius: '8px',
            cursor: 'pointer',
            color: active ? 'white' : 'var(--text-secondary)',
            background: active ? 'rgba(99, 102, 241, 0.1)' : 'transparent',
            borderLeft: active ? '3px solid var(--accent-primary)' : '3px solid transparent',
            transition: 'all 0.2s ease',
            fontWeight: '500'
        }}
            onClick={onClick}
            onMouseEnter={(e) => {
                if (!active) e.currentTarget.style.color = 'white';
                if (!active) e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
            }}
            onMouseLeave={(e) => {
                if (!active) e.currentTarget.style.color = 'var(--text-secondary)';
                if (!active) e.currentTarget.style.background = 'transparent';
            }}
        >
            {icon}
            <span>{label}</span>
        </div>
    );
};

export default Sidebar;
