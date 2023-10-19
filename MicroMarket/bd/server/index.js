import express from 'express'
import Stripe from 'stripe';

const app = express()
const porta = 3000
const PUBLISHABLE_KEY = "pk_test_51O2jUCAJXIuRfKFnepaYXce78eg6jVY001MN2jaTTem1dlGS2hF2Gr60oeuYH20lZ1dFnPcijS5sbt0L7U4Sw7Ww00MDJ0zSCN";
const SECRET_KEY = "sk_test_51O2jUCAJXIuRfKFnUhwxrDp3RqsryQzqBE0HaRfn0pKP9eh7qaFYG5ALRVaBq3gCB7JpdhJQERbzNEpDGVKdaq97000RrrJY8t";

const stripe = Stripe(SECRET_KEY, { apiVersion: "2023-10-16" })

app.listen(porta, '192.168.1.3', () => {
    console.log(`listening at https://192.168.1.3:${porta}`)
})