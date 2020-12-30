function secondProblem(input) {
    const nums = {};
    const names = {}
    const data = {}
    const ticketData = input[1].split(':')[1].split('\n')[1].split(',')
    input[0].split('\n').forEach((e,i) => names[i] = e.split(':')[0])
    input[0].split('\n').map(e => e.split(':')[1].split('or')).forEach((el,idx) => {
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
        ar.split(',').forEach((el,id) => {
            el = +el
            if(!data[id]) data[id] = [el]
            else data[id].push(el)
        })
    })

    ticketData.forEach((el,i) => {
        data[i].push(+el)
    })

    const answers = {}
    const numsArray = Object.values(nums)
    const dataArray = Object.values(data)
    const tickets =  input[1].split(':')[1].split('\n')[1].split(',')
    for(let i = 0; i < dataArray.length; i++) {
        for(let j = 0; j < numsArray.length; j++) {
            if (dataArray[i].filter(el => numsArray[j].includes(el)).length === dataArray[i].length) {
                answers[names[j]] = tickets[i]
            }
        }
    }

    return Object.entries(answers).filter(el => el[0].startsWith('departure')).reduce((a,b) => a * +b[1], 1)
}
