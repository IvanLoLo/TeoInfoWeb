const dbConnection = require('./config/dbConnection');
const app = require('./config/server');

const sql = dbConnection();

app.post('/search', (req, res)=>{
    const { id } = req.body;
    let data = [];
    const query =  `SELECT *
                    FROM ??
                    WHERE ?? = ?`;
    const values = ['logs', 'ID', id];

    sql.query(query, values, (err, result) => {
        if(err){
            console.log(err);
            return res.status(500).send({message: "ERROR"});
        }
        //for(let i=0; i<result.length; i++) data.push(JSON.parse(JSON.stringify(result[i])));
        res.render('index', {
            data: result
        });
        //res.sendFile(path.join(__dirname+"/views/view.html"));
        //res.send({ message: "Hello", data});
    });
});

app.get('/', (req, res)=>{
    res.render('index', {
        data: []
    });
});

app.listen(app.get('port'), ()=>{
    console.log('Server on port:', app.get('port'));
});