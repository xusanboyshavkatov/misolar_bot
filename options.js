module.exports = {
    inlinekeyboard: {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: "O'yin boshlash",
                        callback_data: "boshlash"
                    }
                ]
            ]
        }
    },
    amalar: {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: "+",
                        callback_data: "+"
                    },
                    {
                        text: "*",
                        callback_data: "+"
                    },
                    {
                        text: "-",
                        callback_data: "+"
                    },
                    {
                        text: "/",
                        callback_data: "+"
                    }
                ]
            ]
        }
    }
}