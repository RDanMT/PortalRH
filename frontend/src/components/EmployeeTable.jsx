import React from 'react';
import { MoreHorizontal, Plus } from 'lucide-react';

const EmployeeTable = ({ employees }) => {
    return (
        <div className="glass-panel animate-fade-in" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h2 style={{ margin: 0, fontSize: '1.25rem', color: 'white' }}>Directorio de Empleados</h2>
                    <p style={{ margin: '4px 0 0 0', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                        Gestiona tu equipo de trabajo y visualiza el estado actual.
                    </p>
                </div>
                <button className="btn btn-primary">
                    <Plus size={18} />
                    <span>Nuevo Empleado</span>
                </button>
            </div>

            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Rol / Puesto</th>
                            <th>Estado</th>
                            <th>Correo</th>
                            <th style={{ textAlign: 'center' }}>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.length === 0 ? (
                            <tr>
                                <td colSpan="5" style={{ textAlign: 'center', padding: '40px', color: 'var(--text-secondary)' }}>
                                    No hay empleados registrados.
                                </td>
                            </tr>
                        ) : (
                            employees.map(emp => (
                                <tr key={emp.id} className="animate-fade-in">
                                    <td>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                            <img
                                                src={emp.avatar}
                                                alt={emp.name}
                                                style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--border-light)' }}
                                            />
                                            <span style={{ fontWeight: 500, color: 'white' }}>{emp.name}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div style={{ color: 'var(--text-primary)' }}>{emp.role}</div>
                                        <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '4px' }}>Dpto. ID: {emp.departmentId}</div>
                                    </td>
                                    <td>
                                        <span className={`badge ${emp.status === 'Activo' ? 'badge-active'
                                                : emp.status === 'Inactivo' ? 'badge-inactive'
                                                    : 'badge-vacation'
                                            }`}>
                                            {emp.status}
                                        </span>
                                    </td>
                                    <td style={{ color: 'var(--text-secondary)' }}>{emp.email}</td>
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

export default EmployeeTable;
