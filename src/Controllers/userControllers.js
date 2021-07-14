const { User, Order } = require('../../models');


/* This is a controller which will get the user from User table and 
and  there is a one condition for the order table ,
 the condition will get the all orders from the Order table,
  which contains the id:(it is a userId) ,which is define in where conditon*/
const getUser = async (req, res) => {
    try {
        const findAllUsers = await User.findAll({

            include: [{
                model: Order,
                attributes: ['items']
            }],
            where: { id: 14 }
        });

        if (findAllUsers) {
            res.status(200).send({
                status: 200,
                message: "User retrived successfully !",
                data: findAllUsers,
            })
        }
    } catch (error) {
        res.status(400).send({
            status: 400,
            message: error.message,
            data: null,
        })
    }
}

module.exports = { getUser }