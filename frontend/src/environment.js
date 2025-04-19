let IS_PROD = true;
const server = IS_PROD ?
    "https://vediocall-s6tv.onrender.com" :

    "http://localhost:8000"


export default server;