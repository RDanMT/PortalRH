import React from 'react';
import { Users, UserCheck, Palmtree, Building } from 'lucide-react';

const DashboardStats = ({ stats }) => {
    if (!stats) return <div className="animate-fade-in">Cargando métricas...</div>;

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px',
            marginBottom: '32px'
        }} className="animate-fade-in">

            <StatCard
                title="Total Empleados"
                value={stats.totalEmployees}
                icon={<Users size={24} color="#6366f1" />}
                trend="+12% mes"
            />
            <StatCard
                title="Empleados Activos"
                value={stats.activeEmployees}
                icon={<UserCheck size={24} color="#10b981" />}
                trend="+5% mes"
            />
            <StatCard
                title="De Vacaciones"
                value={stats.vacationEmployees}
                icon={<Palmtree size={24} color="#f59e0b" />}
                trend="-2% mes"
            />
            <StatCard
                title="Departamentos"
                value={stats.totalDepartments}
                icon={<Building size={24} color="#8b5cf6" />}
                trend="0% mes"
            />

        </div>
    );
};

const StatCard = ({ title, value, icon, trend }) => {
    return (
        <div className="glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', margin: 0, fontWeight: 500 }}>{title}</h3>
                <div style={{
                    width: '48px', height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(255,255,255,0.03)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                    {icon}
                </div>
            </div>
            <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'white', lineHeight: 1 }}>{value}</div>
                <div style={{ fontSize: '0.85rem', color: '#10b981', marginTop: '8px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                    {trend}
                </div>
            </div>
        </div>
    );
};

export default DashboardStats;
