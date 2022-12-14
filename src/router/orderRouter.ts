import { Router } from "express"
import { OrderBusiness } from "../business/OrderBusiness"
import { OrderController } from "../controller/OrderControler"
import { OrderDatabase } from "../data/OrderDatabase"
import { IdGenerator } from "../services/IdGenerator"

export const orderRouter = Router()

const orderController = new OrderController(
    new OrderBusiness(
        new OrderDatabase(),
        new IdGenerator()
    )
)

orderRouter.post("/", orderController.createOrder)
orderRouter.get("/", orderController.getOrders)