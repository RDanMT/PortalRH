import React from 'react';
import { Building, MoreHorizontal, Plus } from 'lucide-react';

const DepartmentTable = ({ departments }) => {
    return (
        <div className="glass-panel animate-fade-in" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h2 style={{ margin: 0, fontSize: '1.25rem', color: 'white' }}>Departamentos</h2>
                    <p style={{ margin: '4px 0 0 0', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                        Estructura organizativa y jefaturas.
                    </p>
                </div>
                <button className="btn btn-primary">
                    <Plus size={18} />
                    <span>Nuevo Departamento</span>
                </button>
            </div>

            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre del Departamento</th>
                            <th>Jefatura / Responsable</th>
                            <th style={{ textAlign: 'center' }}>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(!departments || departments.length === 0) ? (
                            <tr>
                                <td colSpan="4" style={{ textAlign: 'center', padding: '40px', color: 'var(--text-secondary)' }}>
                                    No hay departamentos registrados.
                                </td>
                            </tr>
                        ) : (
                            departments.map(dept => (
                                <tr key={dept.id} className="animate-fade-in">
                                    <td>
                                        <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>#{dept.id}</span>
                                    </td>
                                    <td>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                            <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(139, 92, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <Building size={18} color="#8b5cf6" />
                                            </div>
                                            <span style={{ fontWeight: 500, color: 'white' }}>{dept.name}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div style={{ color: 'var(--text-primary)' }}>{dept.head}</div>
                                    </td>
                                    <td style={{ textAlign: 'center' }}>
                                        <button style={{
                                            background: 'transparent', border: 'none', color: 'var(--text-secondary)',
                                            cursor: 'pointer', padding: '8px', borderRadius: '4px'
                                        }}
                                            onMouseEnter={e => e.currentTarget.style.color = 'white'}
                                            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                                        >
                                            <MoreHorizontal size={20} />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default DepartmentTable;
