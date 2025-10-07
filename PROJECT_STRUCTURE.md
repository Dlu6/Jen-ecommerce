# JEN E-commerce Platform - Project Structure

## 📁 Project Overview

This is a comprehensive multi-vendor e-commerce platform built with React (frontend) and Node.js (backend). The platform includes vendor management, product catalog, mobile apps, real-time notifications, and payment processing. It features separate interfaces for super admins, vendors, and customers with full CRUD operations and inventory management.

## 🏗️ Directory Structure

```
Jen/
├── 📁 frontend/                      # React Frontend Application
│   ├── 📁 public/                    # Public static assets
│   │   ├── _redirects                # Netlify SPA routing
│   │   └── index.html                # HTML template
│   ├── 📁 src/                       # Source code
│   │   ├── 📁 components/            # Reusable components
│   │   │   ├── 📁 admin/             # Super admin components
│   │   │   ├── 📁 vendor/            # Vendor dashboard components
│   │   │   ├── 📁 customer/          # Customer interface components
│   │   │   └── 📁 shared/            # Shared components
│   │   ├── 📁 pages/                 # Page components
│   │   │   ├── 📁 admin/             # Admin pages
│   │   │   ├── 📁 vendor/            # Vendor pages
│   │   │   ├── 📁 customer/          # Customer pages
│   │   │   └── 📁 auth/              # Authentication pages
│   │   ├── 📁 services/              # API services
│   │   ├── 📁 utils/                 # Utility functions
│   │   ├── 📁 hooks/                 # Custom React hooks
│   │   ├── 📁 context/               # React context providers
│   │   ├── App.js                    # Main App component
│   │   ├── index.js                  # Entry point
│   │   └── index.css                 # Global styles
│   ├── 📁 build/                     # Production build
│   ├── package.json                  # Frontend dependencies
│   └── tailwind.config.js            # Tailwind configuration
│
├── 📁 backend/                       # Node.js Backend API
│   ├── 📁 src/                       # Source code
│   │   ├── 📁 controllers/           # Route controllers
│   │   │   ├── adminController.js    # Super admin operations
│   │   │   ├── vendorController.js   # Vendor management
│   │   │   ├── productController.js  # Product management
│   │   │   ├── orderController.js    # Order processing
│   │   │   ├── userController.js     # User management
│   │   │   └── paymentController.js  # Payment processing
│   │   ├── 📁 models/                # MongoDB models
│   │   │   ├── User.js               # User schema
│   │   │   ├── Vendor.js             # Vendor schema
│   │   │   ├── Product.js            # Product schema
│   │   │   ├── Order.js              # Order schema
│   │   │   ├── Category.js           # Category schema
│   │   │   └── Notification.js       # Notification schema
│   │   ├── 📁 routes/                # API routes
│   │   │   ├── admin.js              # Admin routes
│   │   │   ├── vendor.js             # Vendor routes
│   │   │   ├── product.js            # Product routes
│   │   │   ├── order.js              # Order routes
│   │   │   ├── user.js               # User routes
│   │   │   └── payment.js            # Payment routes
│   │   ├── 📁 middleware/            # Custom middleware
│   │   │   ├── auth.js               # Authentication middleware
│   │   │   ├── upload.js             # File upload middleware
│   │   │   ├── validation.js         # Input validation
│   │   │   └── errorHandler.js       # Error handling
│   │   ├── 📁 services/              # Business logic services
│   │   │   ├── emailService.js       # Email notifications
│   │   │   ├── s3Service.js          # AWS S3 integration
│   │   │   ├── paymentService.js     # Payment processing
│   │   │   └── notificationService.js # Real-time notifications
│   │   ├── 📁 utils/                 # Utility functions
│   │   ├── 📁 config/                # Configuration files
│   │   │   ├── database.js           # MongoDB connection
│   │   │   ├── aws.js                # AWS configuration
│   │   │   └── socket.js             # Socket.io setup
│   │   ├── 📁 uploads/               # File uploads (temp)
│   │   ├── server.js                 # Main server file
│   │   └── app.js                    # Express app setup
│   ├── package.json                  # Backend dependencies
│   └── .env.example                  # Environment variables template
│
├── 📁 mobile/                        # React Native Mobile Apps
│   ├── 📁 ios/                       # iOS specific files
│   ├── 📁 android/                   # Android specific files
│   ├── 📁 src/                       # Shared mobile code
│   │   ├── 📁 screens/               # Mobile screens
│   │   ├── 📁 components/            # Mobile components
│   │   ├── 📁 services/              # Mobile API services
│   │   ├── 📁 navigation/            # Navigation setup
│   │   └── App.js                    # Mobile app entry point
│   └── package.json                  # Mobile dependencies
│
├── 📁 docs/                          # Documentation
│   ├── PROJECT_STRUCTURE.md          # This file
│   ├── DEVELOPMENT_ROADMAP.md        # Development roadmap
│   ├── API_DOCUMENTATION.md          # API documentation
│   └── DEPLOYMENT_GUIDE.md           # Deployment guide
│
├── 📁 scripts/                       # Deployment and utility scripts
├── 📄 .gitignore                     # Git ignore rules
├── 📄 docker-compose.yml             # Docker configuration
├── 📄 README.md                      # Main project documentation
└── 📄 package.json                   # Root package.json
```

## 🎯 Platform Architecture

### User Roles & Access Levels

#### 🔑 Super Admin
- **Full Platform Access**: Complete control over all vendors and products
- **Vendor Onboarding**: Approve/reject vendor applications
- **Product Approval**: Review and approve all product submissions
- **Analytics Dashboard**: Platform-wide analytics and reporting
- **User Management**: Manage all user accounts and permissions
- **Category Management**: Create and manage product categories
- **Payment Monitoring**: Track all transactions and payouts

#### 🏪 Vendor (Restaurant & General Merchandise)
- **Shop Setup**: Complete vendor profile and shop details
- **Product Management**: Upload, edit, and manage products
- **Inventory Control**: Real-time stock management
- **Order Management**: Process and track orders
- **Analytics**: Shop performance metrics
- **Settings**: Shop configuration and preferences

#### 👤 Customer
- **Product Browsing**: Search and filter products by category
- **Shopping Cart**: Add/remove items and manage quantities
- **Order Placement**: Checkout and payment processing
- **Order Tracking**: Real-time order status updates
- **Profile Management**: Account settings and order history

### Frontend Applications

#### 🌐 Web Application (React)
- **Landing Page**: Marketing and vendor showcase
- **Customer Portal**: Shopping interface and account management
- **Vendor Dashboard**: Shop management and analytics
- **Admin Panel**: Platform administration and oversight

#### 📱 Mobile Applications (React Native)
- **iOS App**: Native iOS shopping experience
- **Android App**: Native Android shopping experience
- **Push Notifications**: Real-time order and inventory alerts
- **Offline Support**: Basic functionality without internet

### Backend Services (Node.js + MongoDB)

#### 🗄️ Database Models
- **User**: Customer accounts and authentication
- **Vendor**: Shop profiles and vendor information
- **Product**: Product catalog with images and inventory
- **Order**: Order processing and tracking
- **Category**: Product categorization (Restaurants, Electronics, Healthcare, etc.)
- **Notification**: Real-time alerts and messages
- **Payment**: Transaction records and payment processing

#### 🔌 API Endpoints
- **Authentication**: Login, registration, password reset
- **Vendor Management**: CRUD operations for vendors
- **Product Management**: CRUD operations for products
- **Order Processing**: Order creation, tracking, and fulfillment
- **Payment Integration**: Multiple payment gateway support
- **File Upload**: AWS S3 integration for images
- **Real-time**: Socket.io for live notifications

### Key Features

#### 🛒 E-commerce Core
- **Multi-vendor Support**: Separate restaurant and general merchandise vendors
- **Product Catalog**: Categorized product browsing and search
- **Shopping Cart**: Persistent cart with real-time updates
- **Order Management**: Complete order lifecycle tracking
- **Inventory Management**: Automatic stock tracking and alerts

#### 💳 Payment & Transactions
- **Multiple Payment Gateways**: Stripe, PayPal, Mobile Money
- **Secure Processing**: PCI-compliant payment handling
- **Payout Management**: Automated vendor payments
- **Transaction History**: Complete payment records

#### 📸 Media Management
- **AWS S3 Integration**: Scalable image storage
- **Image Optimization**: Automatic resizing and compression
- **Multiple Formats**: Support for various image types
- **CDN Delivery**: Fast image loading worldwide

#### 🔔 Real-time Features
- **Order Notifications**: Instant vendor alerts for new orders
- **Stock Alerts**: Automatic out-of-stock notifications
- **Order Tracking**: Real-time delivery updates
- **Chat Support**: Customer-vendor communication

#### 🔐 Security & Authentication
- **JWT Authentication**: Secure token-based auth
- **Role-based Access**: Granular permission system
- **Data Validation**: Input sanitization and validation
- **API Rate Limiting**: Protection against abuse

## 🎨 Styling & Design

### Tailwind CSS Configuration

- **Brand Colors**: Primary (#acb625), Dark (#0f172a), Light (#f8fafc)
- **Custom Components**: Phone frames, glass cards, mobile UI elements
- **Responsive Design**: Mobile-first approach with desktop enhancements

### Design System

- **Typography**: Clean, modern font hierarchy
- **Colors**: Dark theme with shadows, no gradients (as per user preference)
- **Spacing**: Consistent padding and margins throughout
- **Shadows**: Subtle depth and elevation effects

## 🚀 Deployment

### Netlify Configuration

- **Build Command**: `npm run build`
- **Publish Directory**: `build`
- **Node Version**: 18
- **SPA Routing**: Configured with `_redirects` file

### Continuous Deployment

- **GitHub Integration**: Automatic builds on push to main branch
- **Live URL**: https://starlit-faun-ed1065.netlify.app
- **Custom Domain**: Available for configuration

## 📱 Mobile App Features

### Home Screen

- Status bar with time and battery
- JEN branding and navigation
- Location-based delivery info
- Category browsing (Food, Grocery, Drinks, Deals)
- Popular restaurants and products

### Vendor Screen

- Restaurant hero section with cover image
- Rating and delivery information
- Menu categories and items
- Quantity controls and add to cart
- Bottom cart summary

### Search Screen

- Search input with filters
- Popular search suggestions
- Mixed results (restaurants and products)
- Clean, scannable layout

### Checkout Screen

- Cart items with quantities
- Order summary with fees
- Payment method selection
- Total calculation

## 🔧 Technical Stack

### Frontend Technologies
- **React 18**: Modern UI library with hooks and functional components
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **React Router**: Client-side routing and navigation
- **Axios**: HTTP client for API communication
- **Socket.io Client**: Real-time communication
- **React Query**: Data fetching and caching
- **Formik**: Form handling and validation
- **React Native**: Cross-platform mobile development

### Backend Technologies
- **Node.js**: JavaScript runtime environment
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database for flexible data storage
- **Mongoose**: MongoDB object modeling
- **JWT**: JSON Web Tokens for authentication
- **Socket.io**: Real-time bidirectional communication
- **Multer**: File upload handling
- **AWS SDK**: S3 integration for file storage
- **Stripe/PayPal**: Payment processing
- **Nodemailer**: Email notifications

### Database Schema

#### User Model
```javascript
{
  _id: ObjectId,
  email: String,
  password: String (hashed),
  role: String, // 'admin', 'vendor', 'customer'
  profile: {
    firstName: String,
    lastName: String,
    phone: String,
    avatar: String
  },
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

#### Vendor Model
```javascript
{
  _id: ObjectId,
  userId: ObjectId (ref: User),
  businessName: String,
  businessType: String, // 'restaurant', 'general'
  description: String,
  address: {
    street: String,
    city: String,
    coordinates: [Number, Number]
  },
  contactInfo: {
    phone: String,
    email: String,
    website: String
  },
  status: String, // 'pending', 'approved', 'rejected'
  categories: [String],
  rating: Number,
  totalOrders: Number,
  createdAt: Date,
  updatedAt: Date
}
```

#### Product Model
```javascript
{
  _id: ObjectId,
  vendorId: ObjectId (ref: Vendor),
  name: String,
  description: String,
  price: Number,
  category: String,
  subcategory: String,
  images: [String], // S3 URLs
  inventory: {
    quantity: Number,
    lowStockThreshold: Number,
    isInStock: Boolean
  },
  specifications: Object,
  status: String, // 'pending', 'approved', 'rejected'
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

#### Order Model
```javascript
{
  _id: ObjectId,
  customerId: ObjectId (ref: User),
  vendorId: ObjectId (ref: Vendor),
  items: [{
    productId: ObjectId (ref: Product),
    quantity: Number,
    price: Number
  }],
  totalAmount: Number,
  status: String, // 'pending', 'confirmed', 'preparing', 'ready', 'delivered', 'cancelled'
  paymentStatus: String, // 'pending', 'paid', 'failed', 'refunded'
  deliveryAddress: Object,
  paymentMethod: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Development Scripts

#### Frontend
- `npm start`: Development server
- `npm run build`: Production build
- `npm test`: Run tests
- `npm run lint`: ESLint code checking

#### Backend
- `npm run dev`: Development server with nodemon
- `npm start`: Production server
- `npm run test`: Run API tests
- `npm run seed`: Seed database with sample data

#### Mobile
- `npm run ios`: Run iOS simulator
- `npm run android`: Run Android emulator
- `npm run build:ios`: Build iOS app
- `npm run build:android`: Build Android app

### Development Workflow

1. **Setup**: Clone repository and install dependencies
2. **Database**: Configure MongoDB connection
3. **Environment**: Set up environment variables
4. **Development**: Run frontend and backend concurrently
5. **Testing**: Run test suites for all components
6. **Deployment**: Deploy to staging and production environments

## 📋 Features

### Landing Page

- ✅ Responsive design
- ✅ Mobile app mockups
- ✅ App store links
- ✅ Beta tester signup
- ✅ WhatsApp contact integration
- ✅ Modern UI/UX

### Mobile Mockups

- ✅ Realistic phone frames
- ✅ Interactive UI elements
- ✅ Proper spacing and typography
- ✅ Dark theme with shadows
- ✅ Mobile-optimized layouts

## 🎯 Next Steps

### Development Branch

- Feature development
- UI/UX improvements
- Component optimization
- Performance enhancements

### Future Enhancements

- Backend integration
- Real data implementation
- Advanced animations
- A/B testing capabilities
- Analytics integration

## 📞 Contact & Support

- **WhatsApp**: +256 700 771 301
- **Beta Signup**: Google Form integration
- **Repository**: GitHub with automatic deployment
- **Live Site**: Netlify hosting

---

_Last updated: $(date)_
_Branch: development_
