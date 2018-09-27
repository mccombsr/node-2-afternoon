module.exports = {
    create: (req, res)=>{
            const {name, description, price, image_url} = req.body;
            const dbInstance = req.app.get('db')
            dbInstance.create_product([name, description, price, image_url])
            .then((response)=>{
                res.sendStatus(200)
            })
            .catch((err)=>{
                res.status(500).send({errorMessage: 'Oops! That sucks!'})
                console.log(err)
            })
        },

    getOne: (req, res)=>{
            const dbInstance = req.app.get('db')
            const {id} = req.params;
            dbInstance.read_product(id)
            .then((response)=>{
                res.status(200)
                .send(response)
            })
            .catch((err)=>{
                res.status(500).send({errorMessage: 'Oops! That Sucks!'})
                console.log(err)
            })
        },

    getAll: (req, res)=>{
            const dbInstance = req.app.get('db')
            dbInstance.read_products()
            .then((response)=>{
                res.status(200)
                .send(response)
            })
            .catch((err)=>{
                res.status(500).send({errorMessage: 'Oops! That Sucks!'})
                console.log(err)
            })
        },

    update: (req, res)=> {
            const {id} = req.params;
            const {desc} = req.query;
            const dbInstance = req.app.get('db');
            dbInstance.update_product([id, desc])
            .then((response)=>{
                res.sendStatus(200)
            })
            .catch((err)=>{
                res.status(500).send({errorMessage: 'Oops! That sucks!'})
                console.log(err);
            })
        },

    delete: (req, res)=>{
            const dbInstance = req.app.get('db');
            const {id} = req.params;
            dbInstance.delete_product(id)
            .then((response)=>{
                res.sendStatus(200)
                .catch((err)=>{
                    res.status(500).send({errorMessage: 'Oops! That sucks!'})
                    console.log(err);
                })
            })
        }
    }