const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// --- Mock Data ---

let departments = [
  { id: 1, name: 'Recursos Humanos', head: 'María L' },
  { id: 2, name: 'Ingeniería', head: 'Carlos M' },
  { id: 3, name: 'Ventas', head: 'Sofía R' },
];

let employees = [
  { id: 1, name: 'Juan Pérez', role: 'Desarrollador Frontend', departmentId: 2, status: 'Activo', email: 'juan@portalrh.com', avatar: 'https://i.pravatar.cc/150?u=1' },
  { id: 2, name: 'Ana Gómez', role: 'Gerente de Ventas', departmentId: 3, status: 'Activo', email: 'ana@portalrh.com', avatar: 'https://i.pravatar.cc/150?u=2' },
  { id: 3, name: 'Luis Silva', role: 'Especialista en RRHH', departmentId: 1, status: 'Vacaciones', email: 'luis@portalrh.com', avatar: 'https://i.pravatar.cc/150?u=3' },
  { id: 4, name: 'Elena Rojas', role: 'Ingeniera DevOps', departmentId: 2, status: 'Inactivo', email: 'elena@portalrh.com', avatar: 'https://i.pravatar.cc/150?u=4' },
  { id: 5, name: 'Pedro Díaz', role: 'Desarrollador Backend', departmentId: 2, status: 'Activo', email: 'pedro@portalrh.com', avatar: 'https://i.pravatar.cc/150?u=5' },
];

// --- API Routes ---

app.get('/api/stats', (req, res) => {
  const totalEmployees = employees.length;
  const activeEmployees = employees.filter(e => e.status === 'Activo').length;
  const totalDepartments = departments.length;
  res.json({
    totalEmployees,
    activeEmployees,
    totalDepartments,
    vacationEmployees: employees.filter(e => e.status === 'Vacaciones').length
  });
});

app.get('/api/employees', (req, res) => {
  res.json(employees);
});

app.post('/api/employees', (req, res) => {
  const newEmployee = {
    id: employees.length > 0 ? Math.max(...employees.map(e => e.id)) + 1 : 1,
    ...req.body
  };
  employees.push(newEmployee);
  res.status(201).json(newEmployee);
});

app.put('/api/employees/:id', (req, res) => {
  const { id } = req.params;
  const index = employees.findIndex(e => e.id === parseInt(id));
  if (index !== -1) {
    employees[index] = { ...employees[index], ...req.body };
    res.json(employees[index]);
  } else {
    res.status(404).json({ message: 'Empleado no encontrado' });
  }
});

app.delete('/api/employees/:id', (req, res) => {
  const { id } = req.params;
  employees = employees.filter(e => e.id !== parseInt(id));
  res.json({ message: 'Empleado eliminado' });
});

app.get('/api/departments', (req, res) => {
  res.json(departments);
});

// --- Server Start ---

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
