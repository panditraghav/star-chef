import Container from '@/components/Container'
import { Recipe } from '@/utils/types'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import SpicesImage from '@/assets/spices.png'
import VegetableImage from '@/assets/vegetables.png'
import ClockImg from '@/assets/clock.svg'
import RefrigeratorImage from '@/assets/Refrigerator.png'
import TransitionAnimation from '@/components/TransitionAnimation'

function getFetcher(dishId: number) {
    return async () => {
        const res = await fetch(
            `https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/${dishId}`
        )
        return (await res.json()) as Recipe
    }
}

export default function IngredientsPage() {
    const { dishId } = useParams()
    const query = useQuery({
        queryKey: [`dish:${dishId}`],
        queryFn: getFetcher(typeof dishId === 'string' ? parseInt(dishId) : 1),
    })

    return (
        <TransitionAnimation>
            <Container>
                {query.isLoading && <div>Loading..</div>}
                {query.data && (
                    <>
                        <div className="relative h-[30vh]">
                            <div className="w-2/3">
                                <h1 className="pt-20 text-2xl font-bold">
                                    {query.data?.name}
                                </h1>
                                <p className="my-2 text-xs text-muted-foreground">
                                    Mughlai Masala is a style of cookery
                                    developed in the Indian Subcontinent by the
                                    imperial kitchens of the Mughal Empire.
                                </p>
                                <div className="my-2 flex gap-1">
                                    <img src={ClockImg} alt={'clock'} />
                                    <span className="text-[10px]">
                                        {query.data?.timeToPrepare}
                                    </span>
                                </div>
                            </div>
                            <div className="absolute -right-20 bottom-4 -z-10 h-[200px] w-[200px] rounded-full bg-orange-50"></div>
                            <img
                                src={SpicesImage}
                                alt="Spices"
                                className="absolute -right-28 bottom-0 -z-10 h-auto w-[215px]"
                            />
                            <img
                                src={VegetableImage}
                                alt="Vegetable"
                                className="absolute -right-44 bottom-6 -z-10"
                            />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold">Ingredients</h2>
                            <span className="block text-[8px] text-muted-foreground">
                                For 2 people
                            </span>
                            <div className="my-4 space-y-4">
                                <div>
                                    <h3 className="mb-2 text-[12px] font-bold">
                                        Vegetables
                                    </h3>
                                    {query.data.ingredients['vegetables'].map(
                                        (vegetable) => {
                                            return (
                                                <div
                                                    key={vegetable.name}
                                                    className="flex justify-between space-y-1 text-[10px]"
                                                >
                                                    <div>{vegetable.name}</div>
                                                    <div>
                                                        {vegetable.quantity}
                                                    </div>
                                                </div>
                                            )
                                        }
                                    )}
                                </div>
                                <div>
                                    <h3 className="mb-2 text-[12px] font-bold">
                                        Spices
                                    </h3>
                                    {query.data.ingredients['spices'].map(
                                        (spice) => {
                                            return (
                                                <div
                                                    key={spice.name}
                                                    className="flex justify-between space-y-1 text-[10px]"
                                                >
                                                    <div>{spice.name}</div>
                                                    <div>{spice.quantity}</div>
                                                </div>
                                            )
                                        }
                                    )}
                                </div>
                                <div>
                                    <h3 className="mb-2 text-[12px] font-bold">
                                        Appliances
                                    </h3>
                                    <div className="flex gap-4">
                                        {query.data.ingredients[
                                            'appliances'
                                        ].map((spice) => {
                                            return (
                                                <div
                                                    key={spice.name}
                                                    className="flex h-[95px] w-[72px] flex-col items-center space-y-1 bg-[#F5F5F5] p-2 text-center text-[10px]"
                                                >
                                                    <img
                                                        src={RefrigeratorImage}
                                                        alt={'Refrigerator'}
                                                        className="h-[55px] w-[30px]"
                                                    />
                                                    <div>{spice.name}</div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </Container>
        </TransitionAnimation>
    )
}
