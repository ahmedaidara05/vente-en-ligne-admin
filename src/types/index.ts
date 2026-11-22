export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  phone?: string;
  photoURL?: string;
  role: 'customer' | 'admin' | 'seller';
  createdAt: number;
}

export interface Shop {
  id: string;
  name: string;
  description: string;
  logo?: string;
  banner?: string;
  ownerId: string;
  ownerName: string;
  rating: number;
  productCount: number;
  isActive: boolean;
  createdAt: number;
}

export interface Product {
  id: string;
  shopId: string;
  shopName: string;
  name: string;
  description: string;
  price: number;
  groupPrice?: number;
  groupMin?: number;
  images: string[];
  category: string;
  stock: number;
  sold: number;
  rating: number;
  reviewCount: number;
  tags?: string[];
  isActive: boolean;
  createdAt: number;
  updatedAt: number;
}

export type OrderStatus = 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled' | 'refunded';

export interface OrderItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  shopId: string;
  shopName: string;
}

export interface Address {
  id: string;
  fullName: string;
  phone: string;
  street: string;
  city: string;
  region?: string;
}

export interface Order {
  id: string;
  userId: string;
  userEmail: string;
  userName: string;
  items: OrderItem[];
  total: number;
  status: OrderStatus;
  shippingAddress: Address;
  paymentMethod: 'cod' | 'mobile_money' | 'card';
  notes?: string;
  isGroupBuy?: boolean;
  createdAt: number;
  updatedAt: number;
  statusHistory?: { status: OrderStatus; at: number; by?: string }[];
}
