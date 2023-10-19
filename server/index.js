const express = require("express"); //leva
const cors = require("cors"); //trata as informações
const { default: axios } = require("axios"); //principal p/ conexão

const app = express();
app.use(express.json()); //array com grupos de infos
app.use(cors({ origin: true })); //fazer conexão e comunicação

app.post("/auth", async (req, res) => {
  //temos q criar primeiro para depois alimentar ||  levar
  const { username } = req.body; //body é um corpo de arquivo

  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",  // documentação da api
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": "9551b748-8c22-46e3-93e7-82b46bfae25b" } }
    );
    return res.status(r.status).json(r.data); 
  } catch (e) { //capta o erro
    return res.status(e.response.status).json(e.response.data);
  }
});
app.listen(3001); //porta
