import Container from '@/components/Container'
import { DishCard } from '@/components/DishCard'
import PopularDish from '@/components/PopularDish'
import TimePicker from '@/components/TimePicker'
import TransitionAnimation from '@/components/TransitionAnimation'
import { Button } from '@/components/ui/Button'
import { Tag } from '@/components/ui/Tag'
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
        <TransitionAnimation>
            <div className="sticky top-0 z-10 bg-background">
                <TimePicker />
                <Container>
                    <div className="my-6 flex space-x-2 overflow-y-scroll scrollbar scrollbar-none">
                        {new Array(5).fill(0).map((_, i) => {
                            return (
                                <Tag
                                    key={i * Math.random()}
                                    variant={i > 0 ? 'muted' : 'selected'}
                                >
                                    {i % 2 == 0 ? 'Indian' : 'Italian'}
                                </Tag>
                            )
                        })}
                    </div>
                    <h2 className="text-lg font-bold">Popular Dishes</h2>
                    <div className="flex gap-2 overflow-x-scroll p-2 scrollbar scrollbar-none">
                        {query.data?.popularDishes.map((dish, i) => {
                            return (
                                <PopularDish
                                    dish={dish}
                                    key={dish.id}
                                    variant={i > 0 ? 'ring' : 'default'}
                                />
                            )
                        })}
                    </div>
                </Container>
            </div>
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
        </TransitionAnimation>
    )
}
