const conexao = require('../db/conexao')
const { validarAmount } = require('../utils/amountUtils');
const { validarId } = require('../utils/idUtils');

class productController {

    async criar(request, response) {

        try {
            const dados = request.body

            const amountValidado = validarAmount(dados.amount)
            const idValidado = validarId(dados.category_id)

            if (!dados.name || !dados.category_id) {
                return response.status(400).json({ message: 'Name e Category ID sao obrigatorios!' })
            } else if (!amountValidado) {
                return response.status(400).json({ message: 'Amount invalido! (Apenas numeros)' })
            } else if (dados.voltage && dados.voltage !== '110' && dados.voltage !== '220') {
                return response.status(400).json({ message: 'Voltage invalido! (110 ou 220)' })
            } else if (!idValidado) {
                return response.status(400).json({ message: 'ID invalido! (Apenas numeros)' })
            }

            const product = await conexao.query(`
                INSERT INTO products (name, amount, color, voltage, description, category_id)
                VALUES ($1, $2, $3, $4, $5, $6) returning *   
            `, [dados.name, amountValidado, dados.color, dados.voltage, dados.description, dados.category_id])

            response.status(201).json(product.rows[0])
        } catch (error) {
            console.log(error)
            response.status(500).json({ message: "ERRO INTERNO NO SERVIDOR" })
        }

    }
}

module.exports = new productController()