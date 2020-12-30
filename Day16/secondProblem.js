function secondProblem(input) {
    const nums = {};
    const names = {}
    const data = {}

    input[0].split('\n').forEach((e,i) => names[i] = e.split(':')[0])
    input[0].split('\n').map(e => e.split(':')[1].split('or')).forEach((el,idx) => {
        // console.log([el])
        el.forEach( e => {
            e = e.trim()
            const [f,l] = e.split('-').map(e => + e);
            for(let i = f; i <= l; i++) {
                if(!nums[idx]) nums[idx] = [i]
                else nums[idx].push(i)
            }
        })
    })
    input[2].split(':')[1].split('\n').slice(1).forEach((ar,i) => {
        ar.split(',').forEach(el => {
            el = +el
            if(!data[i]) data[i] = [el]
            else data[i].push(el)
        })
    })

    const answers = []

    for(let key in data) {
        let idx

        return Object.values(data).forEach(el => {
            console.log(el.every(e=> Object.values(nums)[0].incldues(e))
            // if(el.every(e => Object.values(nums).includes(e)){
            //     return el
            // }
        })
        for(let id in nums) {
            if(nums[id].filter(el => data[key].includes(el)).length === data[key].length){
                idx = id
                console.log(data[key])
                console.log(nums[id])
            }
        }
        const values =  input[1].split(':')[1].split('\n')[1].split(',')
        answers.push([names[idx],values[idx]])
        // return res
        // return nums[key].find(el => data[key].every(num => nums[key].includes(num))
    }

    return answers

    // return input[2].split(':')[1].split('\n').join(',').split(',').slice(1).filter(e => !nums.includes(+e)).reduce((a,b) => +a + +b)
}