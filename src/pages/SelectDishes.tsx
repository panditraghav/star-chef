import Container from '@/components/Container'
import { DishCard } from '@/components/DishCard'
import { Button } from '@/components/ui/Button'
import { Dish } from '@/utils/types'
import { useQuery } from '@tanstack/react-query'

async function fetchDishes() {
    const res = await fetch(
        'https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/'
    )
    const resJson = (await res.json()) as {
        dishes: Dish[]
        popularDishes: Dish[]
    }
    return resJson
}

export default function SelectDishesPage() {
    const query = useQuery({ queryKey: ['dishes'], queryFn: fetchDishes })

    return (
        <>
            <Container>
                <h2>Popular Dishes</h2>
            </Container>
            <Container>
                <div className="mb-3 flex justify-between">
                    <h2 className="text-lg font-bold">Recommended</h2>
                    <Button variant="secondary">Menu</Button>
                </div>
                <div className="flex flex-col divide-y">
                    {query.data?.dishes.map((dish) => {
                        return (
                            <DishCard
                                key={dish.id}
                                dish={dish}
                                className="pb-6 pt-6"
                            />
                        )
                    })}
                    {query.data?.dishes.map((dish) => {
                        return (
                            <DishCard
                                key={dish.id}
                                dish={dish}
                                className="pb-6 pt-6"
                            />
                        )
                    })}
                    {query.data?.dishes.map((dish) => {
                        return (
                            <DishCard
                                key={dish.id}
                                dish={dish}
                                className="pb-6 pt-6"
                            />
                        )
                    })}
                    {query.data?.dishes.map((dish) => {
                        return (
                            <DishCard
                                key={dish.id}
                                dish={dish}
                                className="pb-6 pt-6"
                            />
                        )
                    })}
                    {query.isLoading && <div>Loading...</div>}
                </div>
            </Container>
        </>
    )
}
