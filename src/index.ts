import { app } from "./app";
import { orderRouter } from "./router/orderRouter";
import { pizzaRouter } from "./router/pizzaRouter";

app.use("/api/pizzas", pizzaRouter)
app.use("/api/orders", orderRouter)