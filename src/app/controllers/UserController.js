import Queue from "../lib/Queue";

export default {
  async store(req, res) {
    const { name, email, password } = req.body;

    const user = {
      name,
      email,
      password,
    };

    // Adicionar job registrationMail na fila
    await Queue.add({ user });

    //Enviar um e-mail

    return res.json(user);
  },
};
