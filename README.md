# Car Rental

A training car rental catalog built with **Next.js**, **TypeScript**, **React Query**, and **Zustand**.  
The app fetches data from a remote API and allows users to browse, filter, and view details of cars, as well as send a booking request.

---

## 🚀 Tech stack

- **Next.js** (App Router)
- **React** + **TypeScript**
- **@tanstack/react-query** – data fetching & caching
- **Axios** – HTTP client
- **Zustand** – global state (filters & favorites)
- **react-hot-toast** – notifications
- **ESLint** + **Prettier** – linting & formatting

---

## ✨ Features

### 📄 Catalog page

- Load cars from API with pagination (`Load more`)
- React Query caching of results
- Display list of cars with image, info, and prices
- Error & loading states

### 🎛 Filters

- Filter by **brand**
- Filter by **price / 1 hour**
- Filter by **mileage** (`From` / `To`)
- Car brands come from API (`/brands`)
- Clearing old results before applying filters
- Filter state stored in **Zustand**

### ⭐ Favorites

- Add/remove car from favorites
- Favorites stored in Zustand
- Favorites persisted in localStorage

### 🚗 Car Details Page

- Full detailed info about selected car
- Characteristics, description, accessories, etc.
- Big photo on top

### 📅 Booking form

- Fields: name, email, booking date, comment
- Validated inputs
- On success:
  - toast notification: **"Car successfully booked!"**
  - form is cleared

---

## 📦 Installation & setup

### 1. Clone repository

```bash
git clone <your-repo-url>
cd car-rental
```
