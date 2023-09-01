import Stripe from 'stripe';

export default class PaymentsService {
    constructor() {
        this.stripe = new Stripe('sk_test_51NlJdjDnwdKggjv0taknj1WgQ7o9yMc29zlb6DglcOZnkU7ApQBjubFWpRmB9r3jSplNrzurIUbmGan20FAVmSsP00JEhinV0u');
    }

    createPaymentIntent = async (data) => {
        const paymentIntent = this.stripe.paymentIntents.create(data);
        return paymentIntent;
    }
}