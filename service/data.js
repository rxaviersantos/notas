export const  removeDatasRepetidas = () => {
    const datasUnicas = []
    datasUnicas.forEach((data => {
        if(datasUnicas.indexOf(dataFormatada) === -1) {
            datasUnicas.push(data.dataFormatada)
        }
    })) 
    return datasUnicas
}