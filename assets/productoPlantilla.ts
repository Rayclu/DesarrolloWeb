export class ProductTemplate {
    public name: string;
    public rating: string | null;
    public category: string;
    private stock: number;
    public price: number;

    constructor(stock: number, price: number, name: string, category: string) {
        this.stock = stock;
        this.price = price;
        this.name = name;
        this.category = category;
        this.rating = null;
    }

    /**
     * decreaseStock
     */
    private decreaseStock(units = 1) {
        if (!(this.stock < units)) {
            this.stock -= units;
            return 0;
        }
        return -1;
    }

    /**
     * BuyProduct
    */
    public async BuyProduct(usr: {id:number, money:number /** Acá habría que implementar un usuario real */}, payingMethod: string, units: number) {
        const getFinalPrice = (units: number, discount = null) =>{
            if (!discount) return this.price * units;
            return (this.price * units) * discount;
        }
        if (payingMethod) {
            // Acá debería de haber una opción para calcular descuentos y/o hacer el pago como tal
            const res = await this.pay({
                money: usr.money,
                amount: getFinalPrice(units),
                method: payingMethod
            });
            if(res.success){
                return this.decreaseStock(units);
            }
        }
    }
    private async pay(
        { money, amount, method }: { money:number; amount: number; method: string }
    ){
        // Simulación de una transacción de pago con registro de transacción
        const transactionId = `TXN-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
        if (method === "Credito" || method === "Debito" || money >= amount) {
            // Simula éxito de pago y registra la transacción
            return {
                success: true,
                message: `Pago de $${amount} realizado con ${method}.`,
                transactionId
            };
        } else {
            return {
                success: false,
                message: "Método de pago no soportado."
            };
        }
    }
    /**
     * setRating
     */
    public setRating(stars:number) {
        /** 
         * Hacer un promedio para calcular la valoracion del producto
         */

    }


}