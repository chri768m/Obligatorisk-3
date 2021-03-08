Vue.createApp({
    data() {
        return {
            Word: null,
            WordArray:[],
            Message: null
        }
    },
    methods: 
        {
        Gem(Word) 
        {
            var Normal = Word
            var LowerCase = Word.toLowerCase()
            var UpperCase = Word.toUpperCase()
            this.WordArray.push(Normal)
            this.WordArray.push(LowerCase)
            this.WordArray.push(UpperCase)

        },
        Show()
        {
            this.Message=this.WordArray

        },
        Clear()
        {
            this.WordArray = []
        },
    }


}).mount("#app")