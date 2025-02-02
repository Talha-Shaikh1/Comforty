

export interface Product {
  image?: {
    asset: {
      url: string;
    };
  };
  description: string;
  quantity: number;
  _id: string;
  title: string;
  imageUrl: string;
  price: number;
  priceWithoutDiscount?: string;
  badge?: string;
  inventory?: number;
  slug: {
    current: string;
  };

  categories?: {
    title: string;
  };
}

export interface Costumer{
  name: string,
  email: string,
  address: string,
  zip: string,
  phone: string,
  city: string,
  state: string,
}

export interface Category {
  _id: string;
  slug: {
    current: string;
  };
  title: string;
  imageUrl: string;
  productCount: number;
}

export interface CartItem {
  _id: string;
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface CartContextProps {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
}



export interface Session {
  metadata: {
    orderNumber: string;
    customerName: string;
    customerEmail: string;
    clerkUserId: string;
    address: string;
    phone: string;
  };
  line_items: {
    data: LineItem[];
  };
  amount_total: number;
}

export interface LineItem {
  price: {
    product: string;
  };
  quantity: number;
}

export interface OrderItem {
  _key: string;
  quantity: number;
  product: Product;
}

export interface Order {
  _id?: string;
  _type: string;
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  clerkUserId: string;
  address: string;
  phone: string;
  products: OrderItem[]
  totalPrice: number;
  status: string;
  orderDate: string;
 
}