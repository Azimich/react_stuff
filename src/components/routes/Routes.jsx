import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { ROUTES } from '../../utils/routes'
import { Cart } from '../cart/Cart'
import { SinglCategory } from '../categories/SinglCategory'
import { Home } from '../home/Home'
import { SingleProduct } from '../products/SingleProduct'
import { Profile } from '../profile/Profile'


const AppRoutes = () => (
  <Routes>
    <Route index element={<Home />} />
    <Route path={ROUTES.PRODUCT} element={<SingleProduct />} />
    <Route path={ROUTES.PROFILE} element={<Profile />} />
    <Route path={ROUTES.CATEGORY} element={<SinglCategory />} />
    <Route path={ROUTES.CART} element={<Cart />} />
  </Routes>
)
export { AppRoutes }