
class GroupData {

    towItems = (model) => {
        if (!model) return null
        let newDta = []
        try {
            if (model.length > 0) {
                let data = []
                let x = 0
                for (let i = 1; i <= parseInt(model.length / 2); i++) {
                    data = model.slice(x, x + 2)
                    newDta.push(data)
                    x = x + 2
                }
                if (model.length % 2 !== 0) {
                    const y = model.length % 2
                    data = model.slice(x, x + y)
                    newDta.push(data)
                }
            }
        } catch (err) {
            console.log(err)
        }
        return newDta

    }

    third = (model) => {
        let testData = []
        let fliterData = []

        if (model.length > 0) {
            testData = model[0].imageCatogeries.slice(0).reverse()
            testData.map(item =>
                item.imageData.length > 0 && fliterData.push(item))
        }
        let newDta = []
        try {
            if (!fliterData) return null
            let data = []
            let x = 0
            for (let i = 1; i <= parseInt(fliterData.length / 3); i++) {
                data = fliterData.slice(x, x + 3)
                newDta.push(data)
                x = x + 3
            }
            if (fliterData.length % 3 !== 0) {
                const y = fliterData.length % 3
                data = fliterData.slice(x, x + y)
                newDta.push(data)
            }
        } catch (err) {
            console.log(err)
        }
        return newDta
    }
}

export default new GroupData()