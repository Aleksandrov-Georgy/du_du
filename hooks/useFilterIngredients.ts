import React from "react"
import { Ingredient } from "@prisma/client"
import { API } from "@/services/api-client"

interface ReturnProps {
  ingredients: Ingredient[]
  loading: boolean
}

export const useFilterIngredients = ():ReturnProps  => {
  const [ingredients , setIngredients] = React.useState<Ingredient[]>([])
  const [loading , setLoading] = React.useState(true)

  React.useEffect(() => {
    async function fetchIngredients() {
      try {
        setLoading(true)
        const ingredients = await API.ingredients.getAll()
        setIngredients(ingredients)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    fetchIngredients()
  }, [])

  return { ingredients, loading }
}