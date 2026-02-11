import { useState, FormEvent } from 'react';
import { useAuth } from '../../hooks/useAuth';
import type { LoginDTO } from '../../types';

/**
 * Formulario de login
 */
export default function LoginForm() {
  const { login } = useAuth();
  const [email, setEmail] = useState('demo@example.com');
  const [password, setPassword] = useState('Demo123!');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const data: LoginDTO = { email, password };
    await login(data);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>

      <div className="mb-4">
        <label className="block mb-2 font-medium">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input"
          required
        />
      </div>

      <div className="mb-6">
        <label className="block mb-2 font-medium">Contraseña</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input"
          required
        />
      </div>

      <button type="submit" disabled={loading} className="btn btn-primary w-full">
        {loading ? 'Iniciando sesión...' : 'Entrar'}
      </button>

      <p className="mt-4 text-center text-sm text-gray-500">
        Usuario demo precargado: demo@example.com / Demo123!
      </p>
    </form>
  );
}
