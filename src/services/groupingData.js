
class GroupData {

    third = (modal) => {
        let newDta = []
        try {
            if (!modal) return null
            let data = []
            let x = 0
            for (let i = 1; i <= parseInt(modal.length / 3); i++) {
                data = modal.slice(x, x + 3)
                newDta.push(data)
                x = x + 3
            }
            if (modal.length % 3 !== 0) {
                const y = modal.length % 3
                data = modal.slice(x, x + y)
                newDta.push(data)
            }
        } catch (err) {
            console.log(err)
        }
        return newDta
    }
}

export default new GroupData()