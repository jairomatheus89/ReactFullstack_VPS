const mongoose = require('mongoose');

const connectMongoDb = async () => {
    try {
        await mongoose.connect(
            'mongodb+srv://jairomatheus89:gNRgunsnroseS89@freecluster.wby27.mongodb.net/dblogins?retryWrites=true&w=majority&appName=FreeCluster',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
        console.log("Conectado caralhow, é noiz cachorro!");
    } catch (error) {
        console.error("Erro ao conectar no mongo:", error.message);
        process.exit(1);
    }
};

module.exports = connectMongoDb;