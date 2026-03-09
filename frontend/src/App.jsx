import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './components/Sidebar';
import DashboardStats from './components/DashboardStats';
import EmployeeTable from './components/EmployeeTable';
import DepartmentTable from './components/DepartmentTable';
import SettingsView from './components/SettingsView';
import { Bell, Search, User } from 'lucide-react';
import './index.css';

function App() {
  const [employees, setEmployees] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentView, setCurrentView] = useState('dashboard');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Using localhost:5000 as configured in our Express backend
        const [empRes, statsRes, deptRes] = await Promise.all([
          axios.get('http://localhost:5000/api/employees'),
          axios.get('http://localhost:5000/api/stats'),
          axios.get('http://localhost:5000/api/departments')
        ]);
        setEmployees(empRes.data);
        setStats(statsRes.data);
        setDepartments(deptRes.data);
        setError(null);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Error al conectar con el servidor. Asegúrate de que el backend esté corriendo.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="app-container">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />

      <main className="main-content">
        <header className="top-navbar animate-fade-in">
          <div style={{ position: 'relative', width: '300px' }}>
            <Search style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} size={18} />
            <input
              type="text"
              placeholder="Buscar empleados..."
              style={{
                width: '100%',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-light)',
                borderRadius: '8px',
                padding: '10px 12px 10px 40px',
                color: 'white',
                outline: 'none',
                fontFamily: 'Inter',
              }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <button style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', position: 'relative' }}>
              <Bell size={20} />
              <span style={{ position: 'absolute', top: 0, right: 0, width: '8px', height: '8px', background: '#ef4444', borderRadius: '50%' }}></span>
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
              <div style={{ textAlign: 'right' }}>
                <div style={{ color: 'white', fontWeight: 500, fontSize: '0.875rem' }}>Admin Principal</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.75rem' }}>Recursos Humanos</div>
              </div>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid var(--accent-primary)' }}>
                <User size={20} color="var(--accent-primary)" />
              </div>
            </div>
          </div>
        </header>

        <div className="page-content">
          <div style={{ marginBottom: '32px' }}>
            <h1 style={{ color: 'white', fontSize: '2rem', margin: '0 0 8px 0', textTransform: 'capitalize' }}>
              {currentView === 'dashboard' ? 'Dashboard RH' :
                currentView === 'employees' ? 'Empleados' :
                  currentView === 'departments' ? 'Departamentos' : 'Configuración'}
            </h1>
            <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
              {currentView === 'dashboard' ? 'Bienvenido al portal de administración de recursos humanos.' :
                currentView === 'employees' ? 'Gestiona tu equipo de trabajo y visualiza el estado actual.' :
                  currentView === 'departments' ? 'Estructura organizativa y jefaturas.' : 'Administra las preferencias generales del portal.'}
            </p>
          </div>

          {error && (
            <div style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', padding: '16px', borderRadius: '8px', marginBottom: '24px', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
              {error}
            </div>
          )}

          {loading ? (
            <div style={{ color: 'white', textAlign: 'center', padding: '40px' }}>Cargando portal...</div>
          ) : (
            <>
              {currentView === 'dashboard' && (
                <>
                  <DashboardStats stats={stats} />
                  <EmployeeTable employees={employees} />
                </>
              )}
              {currentView === 'employees' && <EmployeeTable employees={employees} />}
              {currentView === 'departments' && <DepartmentTable departments={departments} />}
              {currentView === 'settings' && <SettingsView />}
            </>
          )}

        </div>
      </main>
    </div>
  );
}

export default App;
