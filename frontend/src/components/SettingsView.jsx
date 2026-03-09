import React from 'react';
import { Settings, Shield, Bell, Database } from 'lucide-react';

const SettingsView = () => {
    return (
        <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

            <div className="glass-panel" style={{ padding: '24px' }}>
                <h2 style={{ margin: '0 0 16px 0', fontSize: '1.25rem', color: 'white' }}>Configuración del Sistema</h2>
                <p style={{ color: 'var(--text-secondary)', margin: '0 0 24px 0' }}>Administra las preferencias generales del portal.</p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                    <SettingsCard
                        icon={<Shield size={24} color="#6366f1" />}
                        title="Seguridad y Roles"
                        description="Gestiona los permisos y roles de los usuarios del sistema."
                    />
                    <SettingsCard
                        icon={<Bell size={24} color="#10b981" />}
                        title="Notificaciones"
                        description="Configura las alertas de correo y notificaciones push."
                    />
                    <SettingsCard
                        icon={<Database size={24} color="#8b5cf6" />}
                        title="Base de Datos"
                        description="Actualmente usando datos simulados. (MongoDB pendiente)."
                    />
                    <SettingsCard
                        icon={<Settings size={24} color="#f59e0b" />}
                        title="Preferencias UI"
                        description="Temas, colores y ajustes de visualización."
                    />
                </div>
            </div>

        </div>
    );
};

const SettingsCard = ({ icon, title, description }) => {
    return (
        <div style={{
            padding: '20px',
            border: '1px solid var(--border-light)',
            borderRadius: '12px',
            background: 'rgba(255,255,255,0.02)',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
        }}
            onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.borderColor = 'var(--accent-primary)';
            }}
            onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                e.currentTarget.style.borderColor = 'var(--border-light)';
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
                <div style={{ background: 'var(--bg-secondary)', padding: '10px', borderRadius: '10px' }}>
                    {icon}
                </div>
                <h3 style={{ margin: 0, fontSize: '1.05rem', color: 'white' }}>{title}</h3>
            </div>
            <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                {description}
            </p>
        </div>
    );
};

export default SettingsView;
