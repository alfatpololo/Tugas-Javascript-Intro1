let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address:
    {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    }

let data1 = {
    name: "Alfath",
    email: "alfat.pololo@gmail.com",
};
let data2 = {
    hobby: "Bermain Musik"
};

let data3 = { data1 };
console.log(data3);

data3 = {...data1, ...data2};
console.log(data3);

let { city, street } = data.address;
console.log(`${city} ${street}`);