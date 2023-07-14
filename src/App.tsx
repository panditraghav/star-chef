import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SelectDishesPage from './pages/SelectDishes'
import IngredientsPage from './pages/Ingredients'

const queryClient = new QueryClient()

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route path="" element={<SelectDishesPage />} />
                        <Route
                            path="ingredients/:dishId"
                            element={<IngredientsPage />}
                        />
                    </Route>
                    <Route path="*" element={<div>Not found</div>} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    )
}
