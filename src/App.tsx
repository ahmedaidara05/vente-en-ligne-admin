import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import Login from './pages/Login'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Products from './pages/Products'
import ProductForm from './pages/ProductForm'
import Orders from './pages/Orders'
import OrderDetail from './pages/OrderDetail'
import Shops from './pages/Shops'
import ShopForm from './pages/ShopForm'

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading, canManage } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <div className="w-10 h-10 border-4 border-rose-600 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (!user || !canManage) {
    return <Navigate to="/login" replace />
  }

  return <>{children}</>
}

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="products" element={<Products />} />
        <Route path="products/new" element={<ProductForm />} />
        <Route path="products/:id" element={<ProductForm />} />
        <Route path="orders" element={<Orders />} />
        <Route path="orders/:id" element={<OrderDetail />} />
        <Route path="shops" element={<Shops />} />
        <Route path="shops/new" element={<ShopForm />} />
        <Route path="shops/:id" element={<ShopForm />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
