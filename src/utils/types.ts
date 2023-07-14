export type Dish = {
    name: string
    image: string
    description: string
    equipments: string[]
    rating: number
    id: number
}

export type PopularDishType = {
    id: number
    name: string
    image: string
}

export type Ingredient = {
    name: string
    quantity: string
}

export type Appliance = {
    name: string
    image: string
}

export type Recipe = {
    name: string
    id: number
    timeToPrepare: string
    ingredients: {
        vegetables: Ingredient[]
        spices: Ingredient[]
        appliances: Appliance[]
    }
}
