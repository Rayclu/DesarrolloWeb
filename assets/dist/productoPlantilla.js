var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class ProductTemplate {
    constructor(stock, price, name, category) {
        this.stock = stock;
        this.price = price;
        this.name = name;
        this.category = category;
        this.rating = null;
    }
    /**
     * decreaseStock
     */
    decreaseStock(units = 1) {
        if (!(this.stock < units)) {
            this.stock -= units;
            return 0;
        }
        return -1;
    }
    /**
     * BuyProduct
    */
    BuyProduct(usr, payingMethod, units) {
        return __awaiter(this, void 0, void 0, function* () {
            const getFinalPrice = (units, discount = null) => {
                if (!discount)
                    return this.price * units;
                return (this.price * units) * discount;
            };
            if (payingMethod) {
                // Acá debería de haber una opción para calcular descuentos y/o hacer el pago como tal
                const res = yield this.pay({
                    money: usr.money,
                    amount: getFinalPrice(units),
                    method: payingMethod
                });
                if (res.success) {
                    return this.decreaseStock(units);
                }
            }
        });
    }
    pay(_a) {
        return __awaiter(this, arguments, void 0, function* ({ money, amount, method }) {
            // Simulación de una transacción de pago con registro de transacción
            const transactionId = `TXN-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
            if (method === "Credito" || method === "Debito" || money >= amount) {
                // Simula éxito de pago y registra la transacción
                return {
                    success: true,
                    message: `Pago de $${amount} realizado con ${method}.`,
                    transactionId
                };
            }
            else {
                return {
                    success: false,
                    message: "Método de pago no soportado."
                };
            }
        });
    }
    /**
     * setRating
     */
    setRating(stars) {
        /**
         * Hacer un promedio para calcular la valoracion del producto
         */
    }
}
