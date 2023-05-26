export default defineEventHandler(async (event) => {
    // const { name } = getQuery(event)
    // const { age } = await readBody(event)

    const { data } = await $fetch(
        'https://api.currencyapi.com/v3/latest?apikey=cur_live_5ArjtucVpXolJuT0K0Gqa6Lfi9LIYo1V1zQzQjVg'
    )
    return {data}
})