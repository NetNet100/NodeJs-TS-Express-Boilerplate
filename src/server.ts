import app from './app';

const port = process.env.PORT || 3333;

try {
    app.listen(port);
    console.log(`server is listening on ${port}`);
}catch(err){
    console.log(`Something went wrong with err ${err}`);
}