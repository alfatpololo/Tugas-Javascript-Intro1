let data = {
    id: 1,
    name : "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3974"
    },
    phone: "1-700-736-8031x56442",
    website: "hildegard.org"
}

data = {
    ...data,
    name: "Brandon Wijaya",
    email: "brndnwjy8@gmail.com",
    hobby: ["music", "sport", "game", "art"]
}

console.log(data)

const {address : {street, city}} = data

console.log(`${street} St., ${city}`)
